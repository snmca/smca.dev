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
    gen:modified:   # node utils/genLastModified.js
    build:          # npx @11ty/eleventy
    make:           # npm run gen:modified && npx @11ty/eleventy
    start:          # npm run gen:modified && npx @11ty/eleventy --serve
    clean:          # rm -r _site/*
```

`npm run start` starts a development server at `localhost:8080`. Updating files
by default does not update the content served by the development server, unless
a watcher for that file has been added to `eleventy.config.js`:

```javascript
eleventyConfig.addWatchTarget("static/styles/bundle.css")
```

Because of the way that this site is deployed, accurate last-modified-on timestamps
for the input files are not always accessible. So, to provide a last-modified
time in the rendered output for each file, the script at `utils/genLastModified.js`
should be run before committing changes which update site content. This populates
`_data/lastModified.json` which is then used during the build process.
