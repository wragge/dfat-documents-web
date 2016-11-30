---
title: 'Volume 8: 1945'
vol_id: 8
permalink: /volumes/volume-8-1945/
layout: volume
---

# {{ page.title }}

{% assign documents = site.volumes | where: 'vol_id', page.vol_id | sort: 'doc_id' %}

{% for document in documents %}

* [{{ document.title }}]({{site.baseurl}}{{ document.url }})

{% endfor %}