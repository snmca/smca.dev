const hljs = require("highlight.js");
const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const markdownItFootnotes = require("markdown-it-footnote");
const markdownItKatex = require("markdown-it-katex");

function highlight() {
  return markdownIt({
    html: true,
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          const highlighted = hljs.highlight(str, { language: lang, ignoreIllegals: true }).value;
          return `<pre><code class="hljs language-${lang}">${highlighted}</code></pre>`;
        } catch (err) {
        }
      }
      const escaped = markdownIt().utils.escapeHtml(str);
      return `<pre><code class="hljs">${escaped}</code></pre>`;
    }
  })
  .use(markdownItAttrs)
  .use(markdownItFootnotes)
  .use(markdownItKatex);
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

