---
title: 'Volume 20: Australia and the Indonesian Incorporation of Portuguese Timor, 1974-1976'
vol_id: 20
permalink: /volumes/volume-20-australia-and-the-indonesian-incorporation-of-portuguese-timor-1974-1976/
layout: volume
---

# {{ page.title }}

{% assign documents = site.volumes | where: 'vol_id', page.vol_id | sort: 'doc_id' %}

{% for document in documents %}

* [{{ document.title }}]({{site.baseurl}}{{ document.url }})  
  {% if document.date %}<span class="text-muted">{{ document.date | date: '%e %B %Y'}}</span>{% endif %}

{% endfor %}