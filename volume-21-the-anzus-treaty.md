---
title: 'Volume 21: The ANZUS Treaty'
vol_id: 21
permalink: /volumes/volume-21-the-anzus-treaty/
layout: volume
---

# {{ page.title }}

{% assign documents = site.volumes | where: 'vol_id', page.vol_id | sort: 'doc_id' %}

{% for document in documents %}

* [{{ document.title }}]({{site.baseurl}}{{ document.url }})

{% endfor %}