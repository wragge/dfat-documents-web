---
title: 'Volume 10: 1946, July-December'
vol_id: 10
permalink: /volumes/volume-10-1946-july-december/
layout: volume
---

# {{ page.title }}

{% assign documents = site.volumes | where: 'vol_id', page.vol_id | sort: 'doc_id' %}

{% for document in documents %}

* [{{ document.title }}]({{site.baseurl}}{{ document.url }})  
  {% if document.doc_date %}<span class="text-muted">{{ document.doc_date | date: '%e %B %Y'}}</span>{% endif %}

{% endfor %}