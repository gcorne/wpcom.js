
/**
 * Alias
 */

var WPCONN = window.wpapi;
var req = WPCONN.util.request;

var wp;

req
.get('/data')
.end(function(res){
  if (res.ok) {
    var data = res.body;

    // create WPCONN instance
    wp = WPCONN(data.token);

    // set site id
    wp.site.id(data.site);

    wp.site.info({}, function(err, info){
      if (err) {
        return console.log(err);
      }
      console.log('-> info -> ', info);
    });
  }
});
