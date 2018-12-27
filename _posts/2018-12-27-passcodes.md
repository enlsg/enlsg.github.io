---
layout: single-post
title:  Passcode History
description: List of Passcodes
date:   2018-12-27 14:24:28 +0800
categories: news
passcodes: |
  JJT772019589FB: 1331 XM<br />Ultra Strikes x 8<br />Resonators x 25<br />Power Cubes x 15<br />XMP Bursters x 25 
  TBZ662019942MW: 1331 XM<br />Portal Shields x 5<br />Resonators x 15<br />Power Cubes x 10<br />XMP Bursters x 25
---

{:  .mt-2 .mb-4}

{% assign passcodes = page.passcodes | newline_to_br | strip_newlines  %}

<table class="table table-sm table-bordered" style="font-size: 0.9em;">
<tbody>
{% for passcode in passcodes %}
  {% assign splits = passcode | split: ': ' %}
  {% if splits.size == 2 %}
    <tr>
      <td class="text-center">{{splits[0] | strip}}</td>
      <td>{{splits[1] | strip}}</td>
    </tr>
  {% endif %}
{% endfor %}
</tbody>
</table>


