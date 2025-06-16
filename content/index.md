---
layout: templates/base.liquid
---

{% include 'components/bio.liquid' %}

---

I'm interested in many topics these days. If you see anything here you find
interesting please reach out to me. I love getting email, à la
[Patrick McKenzie](https://www.kalzumeus.com/standing-invitation/).
Consider this a standing invitation.

Do people still send emails? Please email me to let me know.

You can see semi-formal writings, as well as my own notes on my [blog](/blog).
I maintain a list of [daily links](/daily) for tracking things on the internet
I find interesting. Write-ups for completed projects can be found under
[projects](/projects). You can read about me personally on my [about](/about)
or [now](/now) pages. For a list of other information on this site see
[Miscellanea](/misc) or the [SiteMap](/sitemap)

---

# Blog {.no-bottom-margin}

{% for post in collections.blog reversed limit:5 %}
{% include 'components/postPreview.liquid', post: post %}
{% endfor %}

[See all posts »](/blog)

# Daily Links {.no-bottom-margin}

{% for post in collections.daily reversed limit:2 %}
{% include 'components/dailyLinks.liquid', post: post %}
{% endfor %}

[See more entries »](/daily)


# Projects {.no-bottom-margin}

{% for project in collections.project reversed limit:5 %}
{% include 'components/projectPreview.liquid', post: project%}
{% endfor %}

[See all projects »](/projects)
