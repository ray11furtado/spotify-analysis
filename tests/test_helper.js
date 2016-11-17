/* eslint-disable */

import jsdom from 'jsdom';
import _$ from 'jquery';
import TestUtils from 'react-addons-test-utils';
import React from 'react';
import ReactDOM from 'react';
import chai, { expect } from 'chai';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../browser/reducers';
import chaiJquery from 'chai-jquery';

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
const $ = _$(global.window);

function renderComponent(ComponentClass, props, state){
  const componentInstance = TestUtils.renderIntoDocument(
		<Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
    ); 
  return $(ReactDOM.findDOMNode(componentInstance)); // produces HTML;
}

$.fn.simulate = function (eventName, value) {
	if (value) {
		this.val(value);
	}
	TestUtils.Simulate[eventName](this[0]);
};

chaiJquery(chai, chai.util, $);

export { renderComponent, expect };
