---
layout: single-post
title:  Singapore January IFS Winners
description: Ingress First Saturday is a cross-faction event organised and run by agents, for agents on the First Saturday of each month.!
date:   2019-01-06 00:01:00 +0800
categories: news

tops:
- name: Top AP Gain resistance
  agent: SlapYouAll
  value: 795,294 AP
- name: Top AP Gain Enlightened
  agent: soonofagun
  value: 373,516 AP
- name: Top Trekker Gain
  agent: RockGambit
  value: 7KM
- name: Top Builder Gain
  agent: EagleChang
  value: 1,962 Resonators
- name: Top Connector Gain
  agent: Woonie
  value: 163 Links
---
<style type="text/css">
.top {
  margin-bottom: 10px;
  background: #f3f3f3;
  padding: 12px 15px;
}
.top h5 {
  font-size: 1rem;
}
.top .value {
  font-style: italic;
  font-size: 0.9em;
}
</style>

![ingress fs](/assets/images/news/ifs_sg_banner.jpg){: .fill-width}

Congratulations to the following agents for winning the January IFS Agent stats Challenge!

<style>
.badge { border-radius: 0; }
</style>
<!--
{: .mt-5 .mb-4}
| Top AP Gain Resistance | <span class="badge badge-secondary">L16</span><span class="badge badge-primary">slapyouall</span> | 795,294 AP |
| Top AP Gain Enlightened | <span class="badge badge-secondary">L11</span><span class="badge badge-success">soonofagun</span> | 373,516 AP |
| Top Trekker Gain | <span class="badge badge-secondary">L16</span><span class="badge badge-success">Rockgambit</span> | 7KM |
| Top Builder Gain | <span class="badge badge-secondary">L16</span><span class="badge badge-primary">Eaglechang</span> | 1,962 Resonators |
| Top Connector Gain | <span class="badge badge-secondary">L16</span><span class="badge badge-primary">Woonie</span> | 163 Links |
{: .table}
//-->

<div class="mb-4">
{%- for top in page.tops -%}
<div class="top">
  <h5 class="mb-1">{{ top.name }}</h5>
    <div class="row">
      <div class="col-6">
        {%- include agent_badge.html agent=top.agent -%}
      </div>
      <div class="col-6 text-right value">
        {{top.value}}
      </div>
  </div>
</div>
{%- endfor -%}
</div>

Thank You everyone else for participating and supporting the event!  We hope you enjoyed yourselves. 😊 <br/>

![Group Picture](/assets/images/news/ifs_sg_group.jpg){: .fill-width}

IFS POCs<br/>
{%- include agent_badge.html agent="sylarspock" -%}{: .mr-1 }
{%- include agent_badge.html agent="jo3f" -%}
