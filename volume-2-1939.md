---
title: 'Volume 2: 1939'
vol_id: 1
permalink: /volumes/volume-2-1939/
layout: volume
---

# {{ page.title }}

{% assign documents = site.volumes | where: 'vol_id', 2 | sort: 'doc_id' %}

{% for document in documents %}

* [{{ document.title }}]({{site.baseurl}}{{ document.url }})

{% endfor %}