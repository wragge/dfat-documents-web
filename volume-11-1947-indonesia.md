---
title: 'Volume 11: 1947, Indonesia'
vol_id: 11
permalink: /volumes/volume-11-1947-indonesia/
layout: volume
---

# {{ page.title }}

{% assign documents = site.volumes | where: 'vol_id', page.vol_id | sort: 'doc_id' %}

{% for document in documents %}

* [{{ document.title }}]({{site.baseurl}}{{ document.url }})

{% endfor %}