---
layout: templates/base.liquid
---

# Blog {.no-margin}  

{% assign last_year = '' %}
{% for post in collections.blog reversed %}
  {% assign year = post.date | date: '%Y' %}

  {% if year != last_year %}
    {% unless forloop.first %}
        </ul>
    {% endunless %}

<h2 class="archive-year">{{ year }}</h2>
<ul class="archive-list">
    {% assign last_year = year %}
  {% endif %}

  <li class="archive-item">
    <span class="archive-date">{{ post.date | formatDate }}</span>
    <a class="archive-link" href="{{ post.url }}">{{ post.data.title }}</a>
  </li>
{% endfor %}
</ul>

