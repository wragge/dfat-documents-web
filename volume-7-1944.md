---
title: 'Volume 7: 1944'
vol_id: 7
permalink: /volumes/volume-7-1944/
layout: volume
---

# {{ page.title }}

{% assign documents = site.volumes | where: 'vol_id', page.vol_id | sort: 'doc_id' %}

{% for document in documents %}

* [{{ document.title }}]({{site.baseurl}}{{ document.url }})  
  {% if document.date %}<span class="text-muted">{{ document.date | date: '%e %B %Y'}}</span>{% endif %}

{% endfor %}