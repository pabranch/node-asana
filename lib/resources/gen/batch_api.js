/**
 * This file is auto-generated by our openapi spec.
 * We try to keep the generated code pretty clean but there will be lint
 * errors that are just not worth fixing (like unused requires).
 * TODO: maybe we can just disable those specifically and keep this code
 * pretty lint-free too!
 */
/* jshint ignore:start */
var Resource = require('../resource');
var util = require('util');
var _ = require('lodash');

function BatchAPI(dispatcher) {
    Resource.call(this, dispatcher);
}
util.inherits(BatchAPI, Resource);


/**
 * Submit parallel requests
 * @param {Object} data: Data for the request
 * @param {Object} [dispatchOptions]: Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
BatchAPI.prototype.createBatchRequest = function(
    data,
    dispatchOptions
) {
    var path = "/batch";

    return this.dispatchPost(path, data, dispatchOptions)
};

module.exports = BatchAPI;
/* jshint ignore:end */