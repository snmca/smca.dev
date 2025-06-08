---
title: Hello, World!
date: 2024-01-17
brief: "I have an idea; I'll start a blog."
layout: templates/post.liquid
---

I've decided to maintain a blog. It's just a personal thing, I have no brand,
nothing to sell. Partly I decided that I wanted to start this blog as an excuse
to build a personal website and gain some experience with building applications
that run on the web. I'm not a web developer. Far from it; my usual work is C++
development (both on Windows and on various embedded platforms). So, it seemed
appropriate that I should round out my experience, break my streak of ignorance,
and actually learn some good old fashioned *JavaScript*.

Okay, this isn't quite a web-app. It's almost entirely static content. But, I
have aspirations. Perhaps I will soon build out this site and link to something
more dynamic, more application-like. Or, perhaps this will remain a static blog
forever, and it will merely be my foot-in-the-door introduction to the world of
internet-based front-end.

The reason for this sites' existence has a much to do with learning how to build
websites as it does with having a dedicated place to write. I've been admonished 
many times by posts such as
[this one](https://rmoff.net/2023/07/19/blog-writing-for-developers/) that
writing is essentially structured thinking and is an important skill that one
should cultivate. Okay, consider me convinced.

The extent of the features I've built out so far are what you see here. There is
some primitive ability to include `code` snippets. In larger code-blocks there
is functional syntax highlighting (this was a must-have). This works thanks to
[highlight.js](https://highlightjs.org/).

```js
console.log("Hello, World!");
```

Markdown to HTML conversion is handled by the
[marked](https://www.npmjs.com/package/marked) library. Footnotes work thanks
to the [marked-footnote](https://www.npmjs.com/package/marked-footnote) extension.
So far, the main thing I've learned is that the path of least resistance when
creating a web-something is a series of `npm install do-thing` commands, and
then gluing it all together appropriately in your code. I suppose that's not at
all an unfamiliar paradigm to say, Python, developers. It does make me just a
*touch* nervous, however.

I want to keep the dependency list for this project as small as practical. Maybe
I will take the time to remove some of these dependencies in favour of home-brewed
solutions. But, maybe not. So often the most-used library for commonly-needed
feature X just works so much better than anything I could realistically spend
the time to make to replace it.

Anyways - hello, world! Here it is; blog `v1.0`.
