---
title: 'Volume 5: 1941, July - 1942, June'
vol_id: 5
permalink: /volumes/volume-5-1941-july-1942-june/
layout: volume
---

# {{ page.title }}

{% assign documents = site.volumes | where: 'vol_id', page.vol_id | sort: 'doc_id' %}

{% for document in documents %}

* [{{ document.title }}]({{site.baseurl}}{{ document.url }})  
  {% if document.doc_date %}<span class="text-muted">{{ document.doc_date | date: '%e %B %Y'}}</span>{% endif %}

{% endfor %}