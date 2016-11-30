---
title: 'Volume 4: 1940, July - 1941, June'
vol_id: 4
permalink: /volumes/volume-4-1940-july-1941-june/
layout: volume
---

# {{ page.title }}

{% assign documents = site.volumes | where: 'vol_id', page.vol_id | sort: 'doc_id' %}

{% for document in documents %}

* [{{ document.title }}]({{site.baseurl}}{{ document.url }})  
  {% if document.date %}<span class="text-muted">{{ document.date | date: '%e %B %Y'}}</span>{% endif %}

{% endfor %}