---
title: 'Volume 22: Australia and Recognition of the People’s Republic of China, 1949–1972'
vol_id: 22
permalink: /volumes/volume-22-australia-and-recognition-of-the-people-s-republic-of-china-1949-1972/
layout: volume
---

# {{ page.title }}

{% assign documents = site.volumes | where: 'vol_id', page.vol_id | sort: 'doc_id' %}

{% for document in documents %}

* [{{ document.title }}]({{site.baseurl}}{{ document.url }})  
  {% if document.date %}<span class="text-muted">{{ document.date | date: '%e %B %Y'}}</span>{% endif %}

{% endfor %}