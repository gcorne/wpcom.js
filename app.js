
/**
 * Module dependencies.
 */

var domready = require('domready');
var WPCOM = require('wpcom');
var debug = require('debug')('wpcom.js');

// start app
domready(function(){
  // create a client WPCOM instance
  var wpcom = WPCOM();

  // retrieve a listing of the most recent
  // 5 posts on "en.blog.wordpress.com"
  wpcom
  .site('en.blog.wordpress.com')
  .postsList({ number: 5 }, function(err, data) {
    if (err) throw err;

    console.log('the newest 5 blog post titles are:\n');
    data.posts.forEach(function(post, i) {
      console.log('  %d: "%s"', i+1, post.title);
    });
  });
});