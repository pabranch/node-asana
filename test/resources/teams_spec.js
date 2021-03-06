/* jshint mocha:true */
var assert = require('assert');
var sinon = require('sinon');
var Teams = require('../../lib/resources/teams');

describe('Teams', function() {
  describe('#new', function() {
    it('should add the dispatcher to itself', function() {
      var dispatcher = sinon.stub();
      var teams = new Teams(dispatcher);
      assert.equal(teams.dispatcher, dispatcher);
    });
  });

  describe('#findByOrganization', function() {
    it('should handle without params', function() {
      var dispatcher = {};
      var teams = new Teams(dispatcher);
      teams.dispatchGetCollection = sinon.stub();
      var id = 1;
      teams.findByOrganization(id);
      assert(
        teams.dispatchGetCollection.calledWith(
            '/organizations/1/teams', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {};
      var teams = new Teams(dispatcher);
      teams.dispatchGetCollection = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 1;
      teams.findByOrganization(id, params);
      assert(
        teams.dispatchGetCollection.calledWith(
            '/organizations/1/teams', params));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var teams = new Teams(dispatcher);
      teams.dispatchGetCollection = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = '1';
      teams.findByOrganization(id, params);
      assert(
        teams.dispatchGetCollection.calledWith(
            '/organizations/1/teams', params));
    });

    it('should handle real strings', function() {
      var dispatcher = {};
      var teams = new Teams(dispatcher);
      teams.dispatchGetCollection = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 'foobar';
      teams.findByOrganization(id, params);
      assert(
        teams.dispatchGetCollection.calledWith(
            '/organizations/foobar/teams', params));
    });
  });
});