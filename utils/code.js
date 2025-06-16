const path                = require("node:path");
const hljs                = require("highlight.js");
const markdownIt          = require("markdown-it");
const markdownItAttrs     = require("markdown-it-attrs");
const markdownItFootnotes = require("markdown-it-footnote");
const markdownItKatex     = require("markdown-it-katex");
const markdownItAnchor    = require("markdown-it-anchor");

const ENABLE_ANCHORS_RE = /\/(?:blog|projects|daily)\//;

const basePermalink = markdownItAnchor.permalink.linkInsideHeader({
  symbol: "",
  placement: "before",
  ariaHidden: true,
  class: "header-anchor",
});

function highlight() {
  return markdownIt({
    html: true,
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          const highlighted = hljs.highlight(str, { language: lang, ignoreIllegals: true }).value;
          return `<pre><code class="hljs language-${lang}">${highlighted}</code></pre>`;
        } catch (err) {}
      }
      const escaped = markdownIt().utils.escapeHtml(str);
      return `<pre><code class="hljs">${escaped}</code></pre>`;
    }
  })
  .use(markdownItAttrs)
  .use(markdownItFootnotes)
  .use(markdownItKatex)
  .use(markdownItAnchor, {
    permalink: (slug, opts, state, idx) => {
      const file = (state.env.page?.inputPath ?? "");
      const unixPath = path.posix.normalize(file);
      if (ENABLE_ANCHORS_RE.test(unixPath)) {
        basePermalink(slug, opts, state, idx);
      } else {
        // Do not render anchors
      }
    },
    slugify: s =>
    s.trim().toLowerCase().replace(/[\s]+/g, '-').replace(/[^\w-]/g, '')
  });
}

function tweet(id) {
  return `
    <div class="tweet">
      <blockquote class="twitter-tweet">
        <a href="https://twitter.com/i/status/${id}"></a>
      </blockquote>
    </div>
  `;
}

module.exports = { highlight, tweet };

