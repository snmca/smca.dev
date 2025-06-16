---
layout: templates/base.liquid
headIncludes:
  - anchor.liquid
---

# Daily Links {.no-margin}

My daily links are things on the internet I've stumbled across that I've found
interesting, or have been reading lately. Despite the name, this page isn't
necessarily updated daily.

For longer-form writing see my [blog](/blog).

{% assign last_year = '' %}
{% assign last_month = '' %}
{% for post in collections.daily reversed %}
  {% assign year = post.date | date: '%Y' %}
  {% assign month = post.date | date: '%B' %}

  {% if year != last_year or month != last_month %}
    {% unless forloop.first %}
        <br>
    {% endunless %}

<!--<h2>{{ month }} {{ year }}</h2>-->
    <!--{% assign last_year = year %}-->
    <!--{% assign last_month = month %}-->
  <!--{% endif %}-->
{% include 'components/dailyLinks.liquid', post: post %}
{% endfor %}
</ul>

