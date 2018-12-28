---
layout: single-post
title: Passcodes Counting Down to 2019
description: It's new year again! Here are all the codes we've collected!
date: 2018-12-28 11:13:51 +0800
categories: news
---
<style type="text/css">
.passcode {
  margin-bottom: 1em;
}
</style>

As usual, to celebrate the coming of Year 2019, Niantic has release a countdown
passcode giveaways to all agents! Redeem it now today!

_Watch out this space as we will update this list daily until 2019!_

{% for codes in site.data.passcodes_2018 %}
{%- assign code = codes[0] -%}
{%- assign data = codes[1] -%}
{%- if data.tag == 'countdown-2019' -%}
{%- include passcode.html code=code date=data.date items=data.items -%}
{%- endif -%}
{% endfor %}
