
/**
 * Module dependencies.
 */

var Me = require('./lib/me');
var Site = require('./lib/site');
var request = require('wpcom-xhr-request');
var debug = require('debug')('wpcom');

/**
 * Module exports.
 */

module.exports = WPCOM;

/**
 * WordPress.com REST API class.
 *
 * @api public
 */

function WPCOM(token){
  if (!(this instanceof WPCOM)) return new WPCOM(token);
  if (null != token) this.token(token);
}

/**
 * Set token.
 *
 * @param {String} optional token
 * @return {WPCOM|String} self when setting, or token
 * @api public
 */

WPCOM.prototype.token = function(v){
  if (arguments.length) {
    this._token = v;
    return this;
  } else {
    return this._token;
  }
};

/**
 * Get `Me` object instance
 *
 * @api public
 */

WPCOM.prototype.me = function(){
  return new Me(this);
};

/**
 * Get `Site` object instance
 *
 * @param {String} id
 * @api public
 */

WPCOM.prototype.site = function(id){
  return new Site(id, this);
};

/**
 * List Freshly Pressed Posts
 *
 * @param {Object} [query]
 * @param {Function} fn callback function
 * @api public
 */

WPCOM.prototype.freshlyPressed = function(query, fn){
  this.request('/freshly-pressed', query, null, fn);
};

/**
 * Sends an API request.
 *
 * @api public
 */

WPCOM.prototype.request = function(params, query, body, fn){
  if ('string' == typeof params) params = { path: params };

  // token
  var token = params.token || this._token;
  if (token) params.authToken = token;

  debug('request "%s"', params.path);

  // set `method` request param
  params.method = (params.method || 'get').toUpperCase();

  // `query` is optional
  if ('function' == typeof query) {
    fn = query;
    query = null;
  }

  // `body` is optional
  if ('function' == typeof body) {
    fn = body;
    body = null;
  }

  // pass `query` and/or `body` to request params
  if (query) params.query = query;
  if (body) params.body = body;

  // callback `fn` function is optional
  if (!fn) fn = function(err){ if (err) throw err; };

  // send request
  request(params, fn);
};
