---
title: 'Volume 3: 1940, January-June'
vol_id: 1
permalink: /volumes/volume-3-1940-january-june/
layout: volume
---

# {{ page.title }}

{% assign documents = site.volumes | where: 'vol_id', 2 | sort: 'doc_id' %}

{% for document in documents %}

* [{{ document.title }}]({{ document.url }})

{% endfor %}