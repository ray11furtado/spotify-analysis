import session from 'express-session';
import passport from 'passport';
import googleAuth from './google';
import spotifyAuth from './spotify';

const SequelizeStore = require('connect-session-sequelize')(session.Store);


module.exports = (app, db) => {
    const dbStore = new SequelizeStore({ db });

    const User = db.model('user');

    dbStore.sync();

    // First, our session middleware will set/read sessions from the request.
    // Our sessions will get stored in Mongo using the same connection from
    // mongoose. Check out the sessions collection in your MongoCLI.
    app.use(session({
        secret: app.getValue('env').SESSION_SECRET,
        store: dbStore,
        resave: false,
        saveUninitialized: false,
    }));

    // Initialize passport and also allow it to read
    // the request session information.
    app.use(passport.initialize());
    app.use(passport.session());

    // When we give a cookie to the browser, it is just the userId (encrypted with our secret).
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    // When we receive a cookie from the browser, we use that id to set our req.user
    // to a user found in the database.
    passport.deserializeUser((id, done) => {
        User.findById(id)
            .then((user) => {
                done(null, user);
            })
            .catch(done);
    });

    // We provide a simple GET /session in order to get session information directly.
    // This is used by the browser application (Angular) to determine if a user is
    // logged in already.
    app.get('/session', (req, res) => {
        if (req.user) {
            res.send({ user: req.user.sanitize() });
        } else {
            res.status(401).send('No authenticated user.');
        }
    });

    // Simple /logout route.
    app.get('/logout', (req, res) => {
        req.logout();
        res.status(200).end();
    });

    // Each strategy enabled gets registered.
    googleAuth(app, db);
    spotifyAuth(app, db);
};
