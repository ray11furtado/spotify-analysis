import express from 'express';

const router = express.Router();

export default router.use((req, res) => {
	res.status(404).end();
});

