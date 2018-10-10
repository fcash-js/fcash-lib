"use strict";

var should = require("chai").should();
var fcore = require("../");

describe('#versionGuard', function() {
  it('global._fcore should be defined', function() {
    should.equal(global._fcore, fcore.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      fcore.versionGuard('version');
    }).should.throw('More than one instance of fcore');
  });
});
