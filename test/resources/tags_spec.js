/* jshint mocha:true */
var assert = require('assert');
var sinon = require('sinon');
var Tags = require('../../lib/resources/tags');

describe('Tags', function() {
  describe('#new', function() {
    it('should add the dispatcher to itself', function() {
      var dispatcher = sinon.stub();
      var tags = new Tags(dispatcher);
      assert.equal(tags.dispatcher, dispatcher);
    });
  });

  describe('#create', function() {
    it('should handle the creation', function() {
      var dispatcher = {};
      var tags = new Tags(dispatcher);
      tags.dispatchPost = sinon.stub();
      var data = {
        name: 'Test'
      };
      tags.create(data);
      assert(tags.dispatchPost.calledWith('/tags', data));
    });
  });

  describe('#createInWorkspace', function() {
    it('should handle the creation', function() {
      var dispatcher = {};
      var tags = new Tags(dispatcher);
      tags.dispatchPost = sinon.stub();
      var id = 1;
      var data = {
        name: 'Test'
      };
      tags.createInWorkspace(id, data);
      assert(tags.dispatchPost.calledWith('/workspaces/1/tags', data));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var tags = new Tags(dispatcher);
      tags.dispatchPost = sinon.stub();
      var id = '1';
      var data = {
        name: 'Test'
      };
      tags.createInWorkspace(id, data);
      assert(tags.dispatchPost.calledWith('/workspaces/1/tags', data));
    });

    it('should handle real strings', function() {
      var dispatcher = {};
      var tags = new Tags(dispatcher);
      tags.dispatchPost = sinon.stub();
      var id = 'foobar';
      var data = {
        name: 'Test'
      };
      tags.createInWorkspace(id, data);
      assert(tags.dispatchPost.calledWith('/workspaces/foobar/tags', data));
    });
  });

  describe('#findAll', function() {
    it('should handle without params', function() {
      var dispatcher = {};
      var tags = new Tags(dispatcher);
      tags.dispatchGetCollection = sinon.stub();
      tags.findAll();
      assert(tags.dispatchGetCollection.calledWith('/tags', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {};
      var tags = new Tags(dispatcher);
      tags.dispatchGetCollection = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      tags.findAll(params);
      assert(tags.dispatchGetCollection.calledWith('/tags', params));
    });
  });

  describe('#findById', function() {
    it('should handle without params', function() {
      var dispatcher = {};
      var tags = new Tags(dispatcher);
      tags.dispatchGet = sinon.stub();
      var id = 1;
      tags.findById(id);
      assert(tags.dispatchGet.calledWith('/tags/1', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {};
      var tags = new Tags(dispatcher);
      tags.dispatchGet = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 1;
      tags.findById(id, params);
      assert(tags.dispatchGet.calledWith('/tags/1', params));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var tags = new Tags(dispatcher);
      tags.dispatchGet = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = '1';
      tags.findById(id, params);
      assert(tags.dispatchGet.calledWith('/tags/1', params));
    });

    it('should handle real strings', function() {
      var dispatcher = {};
      var tags = new Tags(dispatcher);
      tags.dispatchGet = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 'foobar';
      tags.findById(id, params);
      assert(tags.dispatchGet.calledWith('/tags/foobar', params));
    });
  });

  describe('#findByWorkspace', function() {
    it('should handle without params', function() {
      var dispatcher = {};
      var tags = new Tags(dispatcher);
      tags.dispatchGetCollection = sinon.stub();
      var id = 1;
      tags.findByWorkspace(id);
      assert(
          tags.dispatchGetCollection.calledWith(
              '/workspaces/1/tags', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {};
      var tags = new Tags(dispatcher);
      tags.dispatchGetCollection = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 1;
      tags.findByWorkspace(id, params);
      assert(
          tags.dispatchGetCollection.calledWith(
              '/workspaces/1/tags', params));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var tags = new Tags(dispatcher);
      tags.dispatchGetCollection = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = '1';
      tags.findByWorkspace(id, params);
      assert(
          tags.dispatchGetCollection.calledWith(
              '/workspaces/1/tags', params));
    });

    it('should handle real strings', function() {
      var dispatcher = {};
      var tags = new Tags(dispatcher);
      tags.dispatchGetCollection = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 'foobar';
      tags.findByWorkspace(id, params);
      assert(
          tags.dispatchGetCollection.calledWith(
              '/workspaces/foobar/tags', params));
    });
  });

  describe('#update', function() {
    it('should handle the update', function() {
      var dispatcher = {};
      var tags = new Tags(dispatcher);
      tags.dispatchPut = sinon.stub();
      var id = 1;
      var data = {
        name: 'Test'
      };
      tags.update(id, data);
      assert(tags.dispatchPut.calledWith('/tags/1', data));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var tags = new Tags(dispatcher);
      tags.dispatchPut = sinon.stub();
      var id = '1';
      var data = {
        name: 'Test'
      };
      tags.update(id, data);
      assert(tags.dispatchPut.calledWith('/tags/1', data));
    });

    it('should handle real strings', function() {
      var dispatcher = {};
      var tags = new Tags(dispatcher);
      tags.dispatchPut = sinon.stub();
      var id = 'foobar';
      var data = {
        name: 'Test'
      };
      tags.update(id, data);
      assert(tags.dispatchPut.calledWith('/tags/foobar', data));
    });
  });
});