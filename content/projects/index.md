---
layout: templates/base.liquid
---

# Projects {.no-margin}

<div class="projects-grid">
  {%- for project in collections.project reversed -%}
    {% include "components/projectCard.liquid",
      project: project
    %}
  {%- endfor -%}
</div>



