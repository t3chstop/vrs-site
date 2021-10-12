---
layout: course
title:  "Courses for VRS"
date:   2021-09-21 08:14:17 -0400
categories: jekyll update
ns: true
---

{% for course in site.courses %}
{% if course.ns != true %}
[{{course.title}}]({{course.url}})
{% endif %}
{% endfor %}