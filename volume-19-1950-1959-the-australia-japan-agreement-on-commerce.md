---
title: 'Volume 19: 1950 - 1959, The Australia Japan Agreement on Commerce'
vol_id: 19
permalink: /volumes/volume-19-1950-1959-the-australia-japan-agreement-on-commerce/
layout: volume
---

# {{ page.title }}

{% assign documents = site.volumes | where: 'vol_id', page.vol_id | sort: 'doc_id' %}

{% for document in documents %}

* [{{ document.title }}]({{site.baseurl}}{{ document.url }})  
  {% if document.date %}<span class="text-muted">{{ document.date | date: '%e %B %Y'}}</span>{% endif %}

{% endfor %}