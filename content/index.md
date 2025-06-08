---
layout: templates/base.liquid
---

{% include 'components/bio.liquid' %}

---

I'm too young to remember the early internet, but I've heard good things. This
website is self-hosted and largely handmade (can you tell?). To contribute to
the kind of internet I'd like to see more of, I maintain this website. It is
principally a blog, but it also contains notes, projects descriptions, and links
to things which I find useful or interesting. You can find much of this under
[Miscellanea](https://seanmcauliffe.ca/miscellanea.html).

If you are interested in exploring the margins of the internet,
[Marginalia Search](https://search.marginalia.nu/) is a search engine which
is designed with the goal of improving the discoverability of blogs and other
parts of the independent web.

I'm interested in many topics these days. If you see anything here you find
interesting please reach out to me. I love getting email, à la
[Patrick McKenzie](https://www.kalzumeus.com/standing-invitation/).
Consider this a standing invitation.

Do people still send emails? Please email me to let me know.

---

# Blog {.no-bottom-margin}

{% for post in collections.blog reversed limit:5 %}
{% include 'components/postPreview.liquid', post: post %}
{% endfor %}

[See all posts ⟶ ](/blog)

# Projects {.no-bottom-margin}

{% for project in collections.project reversed limit:5 %}
{% include 'components/projectPreview.liquid', post: project%}
{% endfor %}

[See all projects ⟶ ](/projects)
