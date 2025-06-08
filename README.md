# smca.dev

This is a static site generated with Eleventy. To build the project run the
following in the root project directory:

```bash
    npm install
    npm run build
```

The static output is put into the `_site` directory. Configure the webserver to
serve files from this location. For 404 errors redirect to `_site/404.html`.

The following aliases have been defined:

```bash
    npm run build  # npx @11ty/eleventy
    npm run start  # npx @11ty/eleventy --serve
    npm run clean  # rm -rf _site/*
```

`npm run start` starts a development server at `localhost:8080`. Updating files
by default does not update the content served by the development server, unless
a watcher for that file has been added to `eleventy.config.js`:

```javascript
eleventyConfig.addWatchTarget("static/styles/bundle.css")
```
