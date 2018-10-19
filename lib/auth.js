/**
 * This module defines a custom jsDoc tag.
 * It allows you to document the authentication of a route.
 * @module lib/authentication
 */

'use strict';

exports.name = 'auth';
exports.options = {
  mustHaveValue: true,
  mustNotHaveDescription: true,
  canHaveType: false,
  canHaveName: false,
  onTagged: function(doclet, tag) {
    doclet.auth = tag.value;
    doclet.description = `${doclet.description}
                          <h5>Authentication</h5>
                          <strong>${doclet.auth}</strong>`;
  },
}
exports.newDocletHandler = function(e) { /* Do Nothing */ }
