---
title: 'Volume 27: Australia and the United Kingdom, 1960–1975'
vol_id: 27
permalink: /volumes/volume-27-australia-and-the-united-kingdom-1960-1975/
layout: volume
---

# {{ page.title }}

{% assign documents = site.volumes | where: 'vol_id', page.vol_id | sort: 'doc_id' %}

{% for document in documents %}

* [{{ document.title }}]({{site.baseurl}}{{ document.url }})  
  {% if document.doc_date %}<span class="text-muted">{{ document.doc_date | date: '%e %B %Y'}}</span>{% endif %}

{% endfor %}