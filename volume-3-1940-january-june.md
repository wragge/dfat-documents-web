---
title: 'Volume 3: 1940, January-June'
vol_id: 3
permalink: /volumes/volume-3-1940-january-june/
layout: volume
---

# {{ page.title }}

{% assign documents = site.volumes | where: 'vol_id', page.vol_id | sort: 'doc_id' %}

{% for document in documents %}

* [{{ document.title }}]({{site.baseurl}}{{ document.url }})

{% endfor %}