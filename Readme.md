wpcom.js pre production
=======================

`Stage` is used to make deploys to `gh-pages` branch.

### Edit

Modify the application editing `index.jade`, `style.styl` and `app.js` sources files.

### Compile

Use `make` to compile files is `site/` folder

```cli
> make
```

### Deploy

Use `make gh` to deploy to github.

```cli
> make gh
```

### Test

In `stage` branch you can test app into `site/` folder.