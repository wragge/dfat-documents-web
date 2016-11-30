---
title: 'Volume 16: 1948-49, Australia and the Postwar World - Beyond the Region'
vol_id: 16
permalink: /volumes/volume-16-1948-49-australia-and-the-postwar-world-beyond-the-region/
layout: volume
---

# {{ page.title }}

{% assign documents = site.volumes | where: 'vol_id', page.vol_id | sort: 'doc_id' %}

{% for document in documents %}

* [{{ document.title }}]({{site.baseurl}}{{ document.url }})  
  {% if document.date %}<span class="text-muted">{{ document.date | date: '%e %B %Y'}}</span>{% endif %}

{% endfor %}