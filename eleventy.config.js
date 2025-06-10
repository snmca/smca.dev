const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const date = require("./utils/date.js");
const code = require("./utils/code.js");
const utils = require("./utils/util.js");

module.exports = function(eleventyConfig) {

  // Collections
  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("content/blog/*.md").filter(item => {
      return !item.inputPath.endsWith("index.md");
    });
  });
  eleventyConfig.addCollection("project", function(collectionApi) {
    return collectionApi.getFilteredByGlob("content/projects/*.md").filter(item => {
      return !item.inputPath.endsWith("index.md");
    });
  });

  // Filters
  eleventyConfig.addFilter("formatDate", date.format);
  eleventyConfig.addFilter("formatLong", date.formatLong);
  eleventyConfig.addFilter("lastModified", date.lastModified);
  eleventyConfig.addFilter("createdOn", date.createdOn);

  // Passthroughs
  eleventyConfig.addPassthroughCopy({ "content/robots.txt": "robots.txt" });
  eleventyConfig.addPassthroughCopy({"static/" : "static/"})
  eleventyConfig.addPassthroughCopy({
    "node_modules/highlight.js/styles/github-dark-dimmed.css": "static/styles/github-dark-dimmed.css"
  });

  // Watchers, update dev server when these files are edited
  eleventyConfig.addWatchTarget("static/styles/bundle.css")

  // Code syntax highlighting, markdown attributes
  eleventyConfig.setLibrary("md", code.highlight());

  // Short Codes
  eleventyConfig.addShortcode("tweet", code.tweet);

  return {
    dir: {
      input: "content",
      includes: "../_includes",
      data: "../_data",
      output: "_site"
    },
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
    templateFormats: [
      "md",
      "html",
      "liquid"
    ],
    ignores: ["README.md"],
  };
};

