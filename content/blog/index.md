---
layout: templates/base.liquid
---

# Blog {.no-margin}

My blog posts range from semi-formal writings to notes for future reference.
Sometimes I like to jot down ideas or bits of knowledge as I discover them,
so that I can easily refer back to them in the future, or potentially help
save others some time.

For very quick notes on things I've found interesting on the internet see
[my daily links](/daily).

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
    <div class="archive-entry">
        <a class="archive-link" href="{{ post.url }}">{{ post.data.title }}</a>
        <p class="archive-brief">{{ post.data.brief }}</p>
        <p class="archive-more">
            <a href="{{ post.url }}">Read more »</a>
        </p>
    </div>
  </li>
{% endfor %}
</ul>

