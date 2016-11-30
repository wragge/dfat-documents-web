---
title: 'Volume 25: Australia and the Formation of Malaysia, 1961–1966'
vol_id: 25
permalink: /volumes/volume-25-australia-and-the-formation-of-malaysia-1961-1966/
layout: volume
---

# {{ page.title }}

{% assign documents = site.volumes | where: 'vol_id', page.vol_id | sort: 'doc_id' %}

{% for document in documents %}

* [{{ document.title }}]({{site.baseurl}}{{ document.url }})  
  {% if document.date %}<span class="text-muted">{{ document.date | date: '%e %B %Y'}}</span>{% endif %}

{% endfor %}