---
title: 'Volume 14: 1948-49, The Commonwealth, Asia and the Pacific'
vol_id: 14
permalink: /volumes/volume-14-1948-49-the-commonwealth-asia-and-the-pacific/
layout: volume
---

# {{ page.title }}

{% assign documents = site.volumes | where: 'vol_id', page.vol_id | sort: 'doc_id' %}

{% for document in documents %}

* [{{ document.title }}]({{site.baseurl}}{{ document.url }})  
  {% if document.doc_date %}<span class="text-muted">{{ document.doc_date | date: '%e %B %Y'}}</span>{% endif %}

{% endfor %}