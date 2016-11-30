---
title: 'Volume 18: 1923 - 1929, Letters from S.M. Bruce to McDougall'
vol_id: 18
permalink: /volumes/volume-18-1923-1929-letters-from-s-m-bruce-to-mcdougall/
layout: volume
---

# {{ page.title }}

{% assign documents = site.volumes | where: 'vol_id', page.vol_id | sort: 'doc_id' %}

{% for document in documents %}

* [{{ document.title }}]({{site.baseurl}}{{ document.url }})

{% endfor %}