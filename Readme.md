
# wpcom.js

[WordPress.com][] JavaScript API client. Node.JS and browser compatible.

## How to use

### Node.JS

Introduce the `wpcom` dependency in your `package.json`, and
then initialize it with your API Token.

```js
var wpcom = require('wpcom')('<your-token>');
var blog = wpcom.site('your-blog.wordpress.com');
blog.posts({ number: 8 }, function(err, list){});
```

### Browser

Include `dist/wpcom.js` in a `<script>` tag:

```html
<script src="wpcom.js"></script>
<script>
  var wpcom = WPCOM('<your-token>');
  var blog = wpcom.site('your-blog.wordpress.com');
  blog.posts({ number: 8 }, function(err, list){});
</script>
```

## API

* [WPCOM](./docs/wpcom.md)
* [Me](./docs/me.md)
* [Site](./docs/site.md)
* [Post](./docs/post.md)
* [Media](./docs/media.md)

## Examples

[Examples](./examples/Readme.md) doc page

## Tests

Our tests are designed to run on all the environments we support:
- Node.JS: executed with the [mocha](https://github.com/visionmedia/mocha) CLI
- Browsers: transported by [zuul](https://github.com/defunctzombie/zuul) and
run on Sauce Labs.

To run them, first clone the repository:

```bash
$ git clone https://github.com/Automattic/wpcom.js.git
```

Make sure you have your `~/.zuulrc` credentials
[configured](https://github.com/defunctzombie/zuul/wiki/Cloud-testing#2-educate-zuul)
and then run:

```bash
$ make test
```

## License

MIT – Copyright 2014 Automattic

[Node.js]: http://nodejs.org
[REST API]: http://developer.wordpress.com/docs/api
[WordPress.com]: http://www.wordpress.com
[node-wpcom-oauth]: https://github.com/Automattic/node-wpcom-oauth

