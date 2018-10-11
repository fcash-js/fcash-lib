"use strict";

var should = require("chai").should();
var fcashBase = require("../");

describe('#versionGuard', function() {
  it('global._fcashBase should be defined', function() {
    should.equal(global._fcashBase, fcashBase.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      fcashBase.versionGuard('version');
    }).should.throw('More than one instance of fcashBase');
  });
});
