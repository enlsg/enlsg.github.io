---
layout: single-post
title:  Previous Mission Days in Singapore
description: Complete list of all the mission day missions in Singapore.
date:   2018-11-20 21:00:00 +0800
categories: news

image_size: 90
md:
- md_201808_sentosa
- md_201609_building
- md_201607_shine
- md_201509_sg50
---

This is a complete list of all the mission day missions held in Singapore. Click on any of the missions to read their description.

<table class="table">
  <thead>
    <tr>
      <th>Date</th>
      <th>Mission Day Event</th>
      <th>No. of Missions</th>
    </tr>
  </thead>
  <tbody>
    {% for md in page.md %}
      {% assign data = site.data[md] %}
      <tr>
        <td>{{ data.date }}</td>
        <td>{{ data.name }}</td>
        <td>{{ data.missions.size }}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>

{% for md in page.md %}
  {% assign data = site.data[md] %}
  <table class="table">
  <thead>
    <tr><th>{{ data.date }} - {{ data.name }}</th></tr>
  </thead>
  <tbody>
  <tr><td>
    <table style="width:100%;text-align:center;">
    {% for mission in data.missions %}
      {% assign m = forloop.index0 | modulo: 6 %}
      {% if m == 0 %}
        <tr>
      {% endif %}
      <td class="p-0" style="border: none;">
        <a style="d-block" tabindex="0" role="button" data-toggle="popover" data-placement="auto" data-trigger="focus" title="{{ mission.name | escape }}" data-content="{{ mission.description | escape }}"><img src="{{ mission.image }}=s{{ page.image_size }}"
             alt="{{ mission.name }}" />
        </a>
      </td>
      {% if m == 5 %}
        </tr>
      {% endif %}
    {% endfor %}
    </table>
  </td></tr>
  </tbody>
  </table>
{% endfor %}

<script type="text/javascript">
$(function () {
  $('[data-toggle="popover"]').popover()
});
</script>
