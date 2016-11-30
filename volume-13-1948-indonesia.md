---
title: 'Volume 13: 1948, Indonesia'
vol_id: 13
permalink: /volumes/volume-13-1948-indonesia/
layout: volume
---

# {{ page.title }}

{% assign documents = site.volumes | where: 'vol_id', page.vol_id | sort: 'doc_id' %}

{% for document in documents %}

* [{{ document.title }}]({{site.baseurl}}{{ document.url }})  
  {% if document.date %}<span class="text-muted">{{ document.date | date: '%e %B %Y'}}</span>{% endif %}

{% endfor %}