/**
 *  Documents an api namespace 
 *  @module lib/api
 */

'use strict';

exports.name = 'api';
exports.options = {
  mustHaveValue: true,
  mustNotHaveDescription: true,
  canHaveType: false,
  canHaveName: false,
  isNamespace: true,
  onTagged: function(doclet, tag) {
    doclet.api = tag.value;
    doclet.description = `<h2>${doclet.api}</h2>
                          ${doclet.description}`
  },
}
exports.newDocletHandler = function(e) { /* Do Nothing */ }
