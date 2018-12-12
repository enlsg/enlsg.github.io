---
layout: single-post
title:  6 New Unlockable Medals
description: More medals 🏅 to unlock for every agent
date:   2018-12-12 15:01:00 +0800
categories: news
badge_img_path: /assets/images/news/2018-12-12-badges/
badges:
  - name: first_saturday
    title: First Saturday
    tiers: [1, 6, 12, 24, 36]

  - name: ocf
    title: Operation Clear Field
    tiers: [1, 3, 6, 10, 20]

  - name: intelops
    title: Intel Ops
    tiers: [1, 3, 6, 10, 20]

  - name: oprlive
    title: OPR Live
    tiers: [1, 3, 6, 10, 20]

  - name: primechallenge
    title: Prime Challenge
    tiers: [1, 2, 3, 4, 0]

  - name: stealthops
    title: Stealth Ops
    tiers: [1, 3, 6, 10, 20]
---

Niantic quietly made a change on their server side to enable 6 more unlockable medals for everyone.

As previously announced, "First Saturday" is a new medal awarded to agents who attend Ingress First Saturday events.
The other 5 medals were previously not display your agent profile if did not have them. However. it is now displayed as a unlockable badge.

"Prime Challenge" seems to be currently missing the Onyx tier. Perhaps it will added at a later time.

{: .text-center .mt-5 .mb-4}

<table class="table table-sm">
<tbody>
{% for badge in page.badges %}
  <tr>
  <th colspan="5" style="font-size: 1.2em;background:#ddd;color:black;">{{ badge.title }}</th>
  </tr>
  <tr>
    {% for tier in badge.tiers %}
      {% if tier > 0 %}
        <td><img src="{{ page.badge_img_path }}{{ badge.name }}{{ forloop.index }}.png" /></td>
      {% else %}
        <td></td>
      {% endif %}
    {% endfor %}
    </tr>
    <tr>
    {% for tier in badge.tiers %}
      {% if tier > 0 %}
        <td>{{ tier }}</td>
      {% else %}
        <td></td>
      {% endif %}
    {% endfor %}
  </tr>
  <tr><td colspan="5" style="height: 50px;">&nbsp;</td></tr>
{% endfor %}
</tbody>
</table>
