
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
    var site = wp.site(data.site);

    site.get(function(err, data){
      if (err) {
        return console.log(err);
      }

    });
  }
});
