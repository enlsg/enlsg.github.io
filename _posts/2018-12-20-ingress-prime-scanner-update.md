---
layout: single-post
title:  Ingress Prime Scanner Update
description: Niantic has just pushed a new Ingress Prime update to the public. Kudos to the dev team!
date:   2018-12-20 10:20:48 +0800
categories: news

# Scanner Version
version: 2.14

# Icon mapping. Search icon here:
# https://fontawesome.com/icons?d=gallery
icons:
  Performance: fas fa-bolt text-warning
  Bug: fas fa-bug text-danger
  UX: fas fa-clone text-info
  UI: fas fa-layer-group text-info

# Assuming they are using this format, we can easily do string
# manipulation to echo out nice and beautiful stuff using splits.
# Simply copy the post from google plus, and paste it here.
logs: |
  Performance: Improved the speed of checking for linkable Portals.
  Bug: Fixed an issue with canceling Ingress Primer tutorial.
  Bug: Fixed multiple issues related to recharging a Resonator when one is destroyed
  Bug: Fixed an issue with Key count being inaccurate
  Bug: Fixed an issue with the Android back button in Inventory carousel.
  Bug: Fixed an issue where managing a Key Locker would show a blank screen.
  Bug: Fixed an issue where picking up an item caused the Scanner to not respond.
  Bug: Fixed an issue that could prevent new accounts from being created.
  Bug: Fixed an issue where during Ingress tutorial, deployed Resonators wouldn’t show an Agent’s name
  Bug: Fixed an issue with recycling multiple capsules.
  Bug: Fixed issues with French translations.
  Bug: Fixed an issue where dropped items were visually obstructed by the ground.
  Bug: Fixed an issue where a linkable Portal would be shown but couldn’t be linked.
  Bug: Fixed an issue where a Portal Key would reappear in inventory after being used.
  Bug: Text that is too long for the Link screen is now abbreviated with an ellipse (...).
  Bug: Fixed an issue where the Scanner view would be incorrect when trying to Link a faraway Portal.
  UX: When clicking on a Portal the visual transition is more smooth and stable.
  UI: Added Portal Level next to name and address.
  UI: Changed the way Portal Ornaments are displayed per feedback from Agents who participated in the Recursion Prime Anomaly.
  UX: Linking is now possible while Link creation is in process and Android “back” button will skip the Scanner display of Link creation.
  UI: Changed Store layout to show three CMU bundles per row to save screen space.
---

![Ouroboros](/assets/images/news/ingressprimeupdate.png){: .fill-width}

Niantic just pushed out another update for the Ingress Prime scanner:

##### Ingress Prime v{{ page.version }}

{% assign logs = page.logs | newline_to_br | strip_newlines | split: "<br />" %}

<table class="table table-sm table-bordered" style="font-size: 0.9em;">
<tbody>
{% for log in logs %}
  {% assign splits = log | split: ': ' %}
  {% if splits.size == 2 %}
    {% assign label = splits[0] | strip %}
    {% assign icon = page.icons[label] %}
    <tr>
      <td class="text-center"><i class="{{ icon }}"></i></td>
      <td>{{splits[1] | strip}}</td>
    </tr>
  {% endif %}
{% endfor %}
</tbody>
</table>

###### Things they are working on
- Portal Nominations
- Regional Scoring
- Continued Bug Fixes

###### Known issues:
To see a list of known issues go here:
[http://bit.ly/IngressPrimeKnownIssues](http://bit.ly/IngressPrimeKnownIssues){: target="_blank"}

[Source](https://plus.google.com/+Ingress/posts/BKsmRvgwdgg){: target="_blank"}
