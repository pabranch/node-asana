
var util = require('util');
var _ = require('lodash');

module.exports = function(SuperType) {

  /**
   * A _tag_ is a label that can be attached to any task in Asana. It exists in a
   * single workspace or organization.
   * 
   * Tags have some metadata associated with them, but it is possible that we will
   * simplify them in the future so it is not encouraged to rely too heavily on it.
   * Unlike tags, tags do not provide any ordering on the tasks they
   * are associated with.
   * @class
   * @param {Dispatcher} dispatcher The API dispatcher
   */
  function Tags(dispatcher) {
    SuperType.call(this, dispatcher);
  }
  util.inherits(Tags, SuperType);

  
  /**
   * Creates a new tag in a workspace or organization.
   * 
   * Every tag is required to be created in a specific workspace or
   * organization, and this cannot be changed once set. Note that you can use
   * the `workspace` parameter regardless of whether or not it is an
   * organization.
   * 
   * Returns the full record of the newly created tag.
   * @param {Object} [data] Data for the request
   * @option {Number} workspace The workspace or organization to create the tag in.
   * @return {Promise} The response from the API
   */
  Tags.prototype.create = function(
      data
  ) {
    var path = util.format('/tags');
    
    return this.dispatchPost(path, data);
  };

  /**
   * Creates a new tag in a workspace or organization.
   * 
   * Every tag is required to be created in a specific workspace or
   * organization, and this cannot be changed once set. Note that you can use
   * the `workspace` parameter regardless of whether or not it is an
   * organization.
   * 
   * Returns the full record of the newly created tag.
   * @param {Number} workspace The workspace or organization to create the tag in.
   * @param {Object} [data] Data for the request
   * @return {Promise} The response from the API
   */
  Tags.prototype.createInWorkspace = function(
      workspace,
      data
  ) {
    var path = util.format('/workspaces/%d/tags', workspace);
    
    return this.dispatchPost(path, data);
  };

  /**
   * Returns the complete task record for a single task.
   * @param {Number} task The task to get.
   * @param {Object} [params] Parameters for the request
   * @return {Promise} The requested resource
   */
  Tags.prototype.findById = function(
      task,
      params
  ) {
    var path = util.format('/tags/%d', task);
    
    return this.dispatchGet(path, params);
  };

  /**
   * Updates the properties of a tag. Only the fields provided in the `data`
   * block will be updated; any unspecified fields will remain unchanged.
   * 
   * When using this method, it is best to specify only those fields you wish
   * to change, or else you may overwrite changes made by another user since
   * you last retrieved the task.
   * 
   * Returns the complete updated tag record.
   * @param {Number} tag The tag to update.
   * @param {Object} [data] Data for the request
   * @return {Promise} The response from the API
   */
  Tags.prototype.update = function(
      tag,
      data
  ) {
    var path = util.format('/tags/%d', tag);
    
    return this.dispatchPut(path, data);
  };

  /**
   * A specific, existing tag can be deleted by making a DELETE request
   * on the URL for that tag.
   * 
   * Returns an empty data record.
   * @param {Number} tag The tag to delete.
   * @return {Promise} The response from the API
   */
  Tags.prototype.delete = function(
      tag
  ) {
    var path = util.format('/tags/%d', tag);
    
    return this.dispatchDelete(path);
  };

  /**
   * Returns the compact tag records for some filtered set of tags.
   * Use one or more of the parameters provided to filter the tags returned.
   * @param {Object} [params] Parameters for the request
   * @option {Number} [workspace] The workspace or organization to filter tags on.
   * @option {Number} [team] The team to filter tags on.
   * @option {Boolean} [archived] Only return tags whose `archived` field takes on the value of
   * this parameter.
   * @return {Promise} The response from the API
   */
  Tags.prototype.findAll = function(
      params
  ) {
    var path = util.format('/tags');
    
    return this.dispatchGetCollection(path, params);
  };

  /**
   * Returns the compact tag records for all tags in the workspace.
   * @param {Number} workspace The workspace or organization to find tags in.
   * @param {Object} [params] Parameters for the request
   * @return {Promise} The response from the API
   */
  Tags.prototype.findByWorkspace = function(
      workspace,
      params
  ) {
    var path = util.format('/workspaces/%d/tags', workspace);
    
    return this.dispatchGetCollection(path, params);
  };


  return Tags;
};