---
title: 'Volume 2: 1939'
vol_id: 2
permalink: /volumes/volume-2-1939/
layout: volume
---

# {{ page.title }}

{% assign documents = site.volumes | where: 'vol_id', page.vol_id | sort: 'doc_id' %}

{% for document in documents %}

* [{{ document.title }}]({{site.baseurl}}{{ document.url }})  
  {% if document.doc_date %}<span class="text-muted">{{ document.doc_date | date: '%e %B %Y'}}</span>{% endif %}

{% endfor %}