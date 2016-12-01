---
title: 'Volume 23: The Negotiation of the Australia New Zealand Closer Economic Relations Trade Agreement 1983'
vol_id: 23
permalink: /volumes/volume-23-the-negotiation-of-the-australia-new-zealand-closer-economic-relations-trade-agreement-1983/
layout: volume
---

# {{ page.title }}

{% assign documents = site.volumes | where: 'vol_id', page.vol_id | sort: 'doc_id' %}

{% for document in documents %}

* [{{ document.title }}]({{site.baseurl}}{{ document.url }})  
  {% if document.doc_date %}<span class="text-muted">{{ document.doc_date | date: '%e %B %Y'}}</span>{% endif %}

{% endfor %}