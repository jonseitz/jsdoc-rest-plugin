/**
 * Defines custom JSDOC tags for documenting Express routes.
 * @module jsdoc-express
 */

'use strict';

const authTag = require('./lib/auth');
const endpointTag = require('./lib/endpoint');
const bodyTag = require('./lib/body');
const headerTag = require('./lib/header');
const queryTag = require('./lib/query');
const pathTag = require('./lib/path');

exports.defineTags = function(dictionary) {
  dictionary.defineTag(authTag.name, authTag.options).synonym('authentication');
  dictionary.defineTag(endpointTag.name, endpointTag.options).synonym('route');
  dictionary.defineTag(bodyTag.name, bodyTag.options).synonym('bodyparam');
  dictionary.defineTag(headerTag.name, headerTag.options).synonym('headerparam');
  dictionary.defineTag(queryTag.name, queryTag.options).synonym('queryparam');
  dictionary.defineTag(pathTag.name, pathTag.options).synonym('pathparam').synonym('routeparam');
};

exports.handlers = {
  newDoclet: function(e) {
    authTag.newDocletHandler(e);
    bodyTag.newDocletHandler(e);
    headerTag.newDocletHandler(e);
    queryTag.newDocletHandler(e);
    pathTag.newDocletHandler(e);
    endpointTag.newDocletHandler(e);
  }
}
