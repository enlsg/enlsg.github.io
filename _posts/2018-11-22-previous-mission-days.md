---
layout: single-post
title:  Previous Mission Days in Singapore
description: Complete list of all the mission day missions in Singapore.
date:   2018-11-20 21:00:00 +0800
categories: news

image_size: 80
md:
- md_201808_sentosa
- md_201609_building
- md_201607_shine
- md_201509_sg50
---

This is a complete list of all the mission day missions held in Singapore.

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
    <table style="width:{{ page.image_size | times: 6 }}px">
    {% for mission in data.missions %}
      {% assign m = forloop.index0 | modulo: 6 %}
      {% if m == 0 %}
        <tr>
      {% endif %}
      <td class="p-0">
        <img src="{{ mission.image }}=s{{ page.image_size }}"
             alt="{{ mission.name}}" />
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


<div style="font-size: 1.2em;background:#ddd;color:black;">Aug 2018 - MD: Singapore-Sentosa</div>

<div class="card-group">

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/l7wD4j9-8t4xPHo-2cmkPZ5kZGFDZo8McxjdPV1lzIjLQKgKnuFuBtZ6c4V1-e0ybDjuiD5ypX7t3CTxEiBj9Q">
    <div class="card-body ">
	   <h5 class="card-title">MD: Singapore-Sentosa, Mount Faber Park</h5>
      <p class="card-text">Mount Faber Park stands like a towering guardian watching over Sentosa and Keppel Harbour below. It is a popular spot for tourists to catch panoramic views of the city from its peak.</p>
      <small class="text-muted">bbbf10bfe9664d0192b2ac4dfbe06a86.1c</small>
    </div>
  </div>		

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/f4TtzGORFzC78Yy6ySO6mk3d3VZ2GWybmQDhxs9VSXejn91hv1Fl18WQiZjiaaWqFOCcRpIb9WiXCtVHObM">
    <div class="card-body ">
	   <h5 class="card-title">MD: Singapore-Sentosa, Tiger Sky Tower</h5>
      <p class="card-text">Gently rising 131 metres above sea level, relax inside the air-conditioned cabin of the Tiger Sky Tower and enjoy panoramic views across Sentosa.</p>
      <small class="text-muted">22120e911655421a9327b1d48a93bf07.1c</small>
    </div>
  </div>		

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/o4lUG7zAPIXXexDcFRr-c3ULPvoNafpj1tK4iZ91JAW6_LNdObhGaW3daWTB1imwKyDexSjxL3CYhGT_69qY">
    <div class="card-body ">
	   <h5 class="card-title">MD: Singapore-Sentosa, Fort Siloso</h5>
      <p class="card-text">Fort Siloso is the sole restored coastal gun battery from the 12 such batteries which made up "Fortress Singapore" at the start of World War II.</p>
      <small class="text-muted">28d5245c3c22479f8c379e336b24b26a.1c</small>
    </div>
  </div>		
</div>

<div class="card-group">
  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/yMLDJcWSaLfx1ncNrW3l49juEipDABj1RsCY35z3GsqM4Ni24GNp3jecWgjY4NrPiWelaie-tD3UtTqPIe0">
    <div class="card-body ">
	   <h5 class="card-title">MD: Singapore-Sentosa, Siloso Beach</h5>
      <p class="card-text">The Siloso Beach in Sentosa is Singapore's hippest beach, and plays host to the best New Year countdown beach party in Singapore, the Siloso Beach Party</p>
      <small class="text-muted">0d3069f5df7f440988640653b5d0dccb.1c</small>
    </div>
  </div>		

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/xn-dk-EC-wDbDp5HzF2AvbKjJjojlZ-GBcG6i3WVKIdT8cxJQtZxG4LewXJeLF9ACzi9ZvCLF63uJrY40ENy">
    <div class="card-body ">
	   <h5 class="card-title">MD: Singapore-Sentosa, AJ Hackett Sentosa</h5>
      <p class="card-text">Singapore's first and only bungy tower that stands 50m above the ground giving everyone their dose of adventure and adrenaline right on Siloso Beach.</p>
      <small class="text-muted">e4031e33a78549298056f18326a19bb9.1c</small>
    </div>
  </div>		

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/9lO8FjMpTacCviuJ4M3_gIOc9cMl1_wMn_R-OO2z_zOYS-wBFbJIP-avA1z-LOaN27da8ofIjshz8E2ERRlZ">
    <div class="card-body ">
	   <h5 class="card-title">MD: Singapore-Sentosa, Wings of Time</h5>
      <p class="card-text">Award Winning Outdoor Night Show in the world set against the majestic open sea! Be mesmerized by a multi-sensory, awe-inspiring display of water, laser and fire effects, set to majestic music.</p>
      <small class="text-muted">dc9d52609a5d469191dc9b73497a4adf.1c</small>
    </div>
  </div>		

</div>

<div class="card-group">

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/MPGcPztvpUHAO-W7cUtHRjsuRVya1AW4pYQ7-e5tJkyYw1Eu3D2wPjKCULuZyXGtvIYl9cFigRWlAkXR2HWI">
    <div class="card-body ">
	   <h5 class="card-title">MD: Singapore-Sentosa, Southern Most Point of Asia</h5>
      <p class="card-text">Stand at the edge of continental Asia right on Palawan Beach! Accessible via a suspension bridge, the Southernmost Point of Asia is a tiny islet that promises a unique experience.</p>
      <small class="text-muted">9ae3097433584fffa8ad5e3f001a8e1a.1c</small>
    </div>
  </div>		

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/7Z5AhgWtZhHC2aITfz08kLGJYs_6dzsTbUnyCSQ43U40RaoijVoFuhHfWUJp9rL5QTKS9tIOQLdhHkPj7_meDw">
    <div class="card-body ">
	   <h5 class="card-title">MD: Singapore-Sentosa, Palawan Pirate Ship</h5>
      <p class="card-text">A water play area designed for children aged 3-10 years old, the Palawan Pirate Ship is free for guests to splash around and have fun as a family!</p>
      <small class="text-muted">4fe1cc53e564484fb6d37472e478b030.1c</small>
    </div>
  </div>		

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/pEBKKx2Q976SyM-zCKOUu7Xz33f5uN4YuNXatENvYH-Hz_kAEo1-GQ4h5SnSssMXOx9U0eGK7zo4NRbvUm7x">
    <div class="card-body ">
	   <h5 class="card-title">MD: Singapore-Sentosa, Palawan Beach</h5>
      <p class="card-text">Palawan Beach, Singapore's happiest family beach, boasts interesting shops and eateries that are a favourite with adults and children alike.</p>
      <small class="text-muted">b700e613dd794a1d8fd6739b86b022c8.1c</small>
    </div>
  </div>		
</div>

<div class="card-group">  	
  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/BKNjTn5psphTvqzT6mv4Ifjpz-Zgyq2ZCL3Us4lrrfOmbXqHEypX7P1lPASIET3BMUC2JSxYC38hTXMZ0L_m">
    <div class="card-body ">
	   <h5 class="card-title">MD: Singapore-Sentosa, iFly Singapore</h5>
      <p class="card-text">Live your dreams with the world’s largest themed wind tunnel for indoor skydiving. With its state-of-the-art technology, iFly Singapore has made flying more fun and easier than ever!</p>
      <small class="text-muted">913f20f130344d4fbe4b9d9659745a65.1c</small>
    </div>
  </div>		

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/vkPFh_iJ007INY67sWlU7pOsqvi3E-1yQc66JEvLkn5hIzm56k6eJWMwEjeYNc_jmFz0vykYmsa04aSM-ZtP">
    <div class="card-body ">
	   <h5 class="card-title">MD: Singapore-Sentosa, Sentosa Merlion</h5>
      <p class="card-text">Singapore’s must-visit legendary icon, the 37m-tall mythical creature with a lion’s head and a fish’s body guards the prosperity of Singapore.</p>
      <small class="text-muted">dfb3a5034cc24b44b3ef199b385535ac.1c</small>
    </div>
  </div>		

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/LR8YjwAiAptiXPF2V-qeWZQQTmXU3vW_fdomQHhUHCxbZsyXreIwXCIFeMj6oQTQx5XUZ4qKCWD9YdczRgs">
    <div class="card-body ">
	   <h5 class="card-title">MD: Singapore-Sentosa, Lake of Dreams</h5>
      <p class="card-text">A spectacular choreographed display of fire, water and light, designed by Emmy award-winner Jeremy Railton.</p>
      <small class="text-muted">b6169fc8e23541109965a03e9465b6d2.1c</small>
    </div>
  </div>		

</div>

<div class="card-group">

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/nOhV0FNLIbsTQn-uOPfIqWg8VmSrRaZkf_63KEzrWExNcy0Bm2SdenTHQqQ1WFfjagRmjHZ1CfJLMIO_KQlO3w">
    <div class="card-body ">
	   <h5 class="card-title">MD: Singapore-Sentosa, Universal Studios Singapore</h5>
      <p class="card-text">Southeast Asia's first and only Universal Studios theme park, featuring 24 rides, shows and attractions in seven themed zones.</p>
      <small class="text-muted">2d1bc1b62e484526b05b294e5a954cf4.1c</small>
    </div>
  </div>		

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/o5bucTZOGv-Hl7tZLx1sZnyx_ZrG9ai9LnC8FG9lf_VJDBGmEwjLMl4IBEyvhC7w-RO4xs2S8ef0fyTWlSp8aw">
    <div class="card-body ">
	   <h5 class="card-title">MD: Singapore-Sentosa,Maritime Experiential Museum</h5>
      <p class="card-text">At the Maritime Experiential Museum, you'll get to relive the glorious conquest of the seas, as you return to the Maritime Silk Route of eras past.</p>
      <small class="text-muted">0f86bea2379341baae70b818885a54ea.1c</small>
    </div>
  </div>		

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/F2rSjY72zhG41somE4uCKP-HtVnQ3bR_enaa1o1XUdDfgzo_bJ3obk4j6vMYH_GMLJxhOQHDKJgtpLDzg_k">
    <div class="card-body ">
	   <h5 class="card-title">MD: Singapore-Sentosa, Resorts World Sentosa</h5>
      <p class="card-text">Spanning 49 hectares, RWS is home to four world-class attractions including Universal Studios Singapore, S.E.A. Aquarium, The Maritime Experiential Museum, Dolphin Island and Adventure Cove Waterpark.</p>
      <small class="text-muted">5540a9d0084e4dc3baf64996feb96d50.1c</small>
    </div>
  </div>		
</div>

<div class="card-group">  	
  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/mOnGbEmnCfrIijJbLcAcfwmJaIwbLNifSV294xbvixA3EdA37bdlahwRL8fQGdwj4jINBXU7yor0pOSMN_aD">
    <div class="card-body ">
	   <h5 class="card-title">MD: Singapore-Sentosa, Sentosa Gateway</h5>
      <p class="card-text">Sentosa, previously called Pulau Blakang Mati, is a resort island in Singapore. It was once a British military base and a Japanese prisoner of war camp. The island was renamed Sentosa in 1972.</p>
      <small class="text-muted">84ada35b65ab4819a1d5eaac5af781af.1c</small>
    </div>
  </div>		

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/ZYNNX5n0sN83Q8UHcBy7j6vILX0l5u30RNZeuuo49N_GrqqBAFov5-f0ZK08Fp7MseuvMR3WZ03wwk66-DKp">
    <div class="card-body ">
	   <h5 class="card-title">MD: Singapore-Sentosa, Sentosa Boardwalk</h5>
      <p class="card-text">The Sentosa Boardwalk is a sheltered walkway that shares the same bridge which carries vehicular traffic into Sentosa. The boardwalk is accessible from VivoCity and connects to the Sentosa Waterfront.</p>
      <small class="text-muted">c1c2b9966017478aa413f185776d5b2a.1c</small>
    </div>
  </div>		

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/F9ooTZzehHN11DyRHuGLKuqG1x5aFwi8KkxwxNFDMaxQk5y78sfK7_newwDz2dzR8tmP5ymNeU4uBbKkUoTT">
    <div class="card-body ">
	   <h5 class="card-title">MD: Singapore-Sentosa, VivoCity</h5>
      <p class="card-text">As Singapore's largest retail and lifestyle destination, VivoCity is an imposing part of the country's plethora of shopping options.</p>
      <small class="text-muted">4d6ec7a2a2304e6da1c8f8371a7873a3.1c</small>
    </div>
  </div>		

</div>






{: .text-center }
<div style="font-size: 1.2em;background:#ddd;color:black;">Sept 2016 - MD: Building Our Singapore</div>


<div class="card-group">

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/qKa2nuokrP6b1sa5esHxIID2BIvXCmkVppFRpm9KGA8nDyTlEsf2-MS9tflW1tniwqvdtVrd7334I_H_Utk">
    <div class="card-body ">
     <h5 class="card-title">MD: Building Our Singapore: Mission 18</h5>
      <p class="card-text">As Singapore approached its 50th National Day, Lee Kuan Yew passed away on 23 March 2015. His legacy, along with others before him, pave the way for the Singapore of the future.</p>
      <small class="text-muted">5ca8c653056d4f57b3cdce7043c7e1e5.1c</small>
    </div>
  </div>    

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/LHnyTYjQ0DX8WmcIacDYFjQ3YrDRVVGPIb7VlPtDZKATR9cvXDHixW2dykvztF8kE2ecImro00kCHPs7wy0r">
    <div class="card-body ">
     <h5 class="card-title">MD: Building Our Singapore: Mission 17</h5>
      <p class="card-text">28 November 1990, Lee Kuan Yew stepped down as Prime Minister of Singapore. However, he continued to serve the nation as Senior Ministor and Minister Mentor, guiding the next generation of leaders.</p>
      <small class="text-muted">1ac1e7bf204145c287ffa2d0527eac97.1c</small>
    </div>
  </div>    

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/0o-bgTOgF8PGw4Vlkt16qdEvpA3C1Qn2Z0DO_drBFwQv1SSYfBIaSdPt1p4H9odoYu2XBE5r4DRK4tk8ITH0">
    <div class="card-body ">
     <h5 class="card-title">MD: Building Our Singapore: Mission 16</h5>
      <p class="card-text">9 August 1965, Lee Kuan Yew announced Singapore as an independent nation, forming the Republic of Singapore. He tried to create a unique Singaporean identity, one that embraced multiculturalism.</p>
      <small class="text-muted">ff2fc49e18ee40a6a2d3f6dc6a08fef5.1c</small>
    </div>
  </div>    

</div>
<div class="card-group">  

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/stWHnhfkk671-NPUse-OGK3203j5L4hkD_eLkbGjTKAb-lA9hqOmWeqthsE_LAcRr5Rx2S2RywVadHkDoY8WlQ">
    <div class="card-body ">
     <h5 class="card-title">MD: Building Our Singapore: Mission 15</h5>
      <p class="card-text">On 16 September 1963,  Lee Kuan Yew led Singapore to become part of the new Federation of Malaysia. But due to racial riots, Singapore was to be expelled from the federation.</p>
      <small class="text-muted">0f01d05c48be40dd842658c7237a57b4.1c</small>
    </div>
  </div>    

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/PJv2DIt01yifvsd3-TfMugzrwAJQts83WbVhUdzVUyG1uVm0gqJ2laZ4H3frEC4Zl27omw5VqSToMGmryS4">
    <div class="card-body ">
     <h5 class="card-title">MD: Building Our Singapore: Mission 14</h5>
      <p class="card-text">On 3 June 1959, Lee Kuan Yew became the first Prime Minister of a Pre-independent Singapore. During which Singapore gained self-governance with autonomy in nearly all state matters.</p>
      <small class="text-muted">55d28ff4f12343d3a57234306f0b486a.1c</small>
    </div>
  </div>    

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/XsU3TQL0kyeUp744lVLJLX4IMWo_ZmLX8M2SQQZEEYZeits1ZCbuTtldEKyalsb3wh4_J-Egi2xAU40gg9uL">
    <div class="card-body ">
     <h5 class="card-title">MD: Building Our Singapore: Mission 13</h5>
      <p class="card-text">Lee Kuan Yew, an English trained lawyer, became the secretary-general of the  People’s Action Party in 12 November 1954, a role he would remain in for nearly 4 decades.</p>
      <small class="text-muted">16344521ba474f8c8b69fa0d94d6a283.1c</small>
    </div>
  </div>    

</div>

<div class="card-group">

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/EaQZsGd-iNyUsJT9d3U-lzledCW0beBzDIcTCwxMEmAvyKYNdVEB-4boRz1SrsPnlegnYFA1ITIEOYygv2t3sQ">
    <div class="card-body ">
     <h5 class="card-title">MD: Building Our Singapore: Mission 12</h5>
      <p class="card-text">Raffles returned to England in October 1823. Unfortunately, due to failing health, he was never to again return to the growing port city.</p>
      <small class="text-muted">fce7cd38981847f39ea33f755fa7c3d5.1c</small>
    </div>
  </div>    

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/-E3ZuHyNlNqY2Loe8KM-iCm_OvU-CUcUSfa1Ux5NKgwoqtModRFVASluu-4jQG5vyvVmNwq7HHfuGdXY4Ruo">
    <div class="card-body ">
     <h5 class="card-title">MD: Building Our Singapore: Mission 11</h5>
      <p class="card-text">Raffles also helped establish Singapore as a free port through a set of policies and regulations. This made Singapore an attractive place for traders around the region.</p>
      <small class="text-muted">2f5464a890b8441787bbbb39abcfa130.1c</small>
    </div>
  </div>    

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/DVA9vgocJkyeIe7AGoIL9SZwOEDly1KIujhbLgd8cTOl8LB9EoEPIpQ9R7njSAc8F5jXZ8e_BhRe14S4IP7ZMg">
    <div class="card-body ">
     <h5 class="card-title">MD: Building Our Singapore: Mission 10</h5>
      <p class="card-text">Raffles arranged for a second treaty that was signed on 7 June 1823. This extended British possession to the entire island and brought the island under the British commonwealth.</p>
      <small class="text-muted">0e14686532b148c78b700e607b0d75d5.1c</small>
    </div>
  </div>    

</div>
<div class="card-group">  

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/9zfnrZBrtemhBKTXssN2OzVj_ECJZpK7Z6IJWBGilBTcV2J8_LxX1PAJdDhiWfJS8lrQEOQqatqCKrWWpOzK">
    <div class="card-body ">
     <h5 class="card-title">MD: Building Our Singapore: Mission 9</h5>
      <p class="card-text">Raffles set up a town plan which accommodated the growing multi-ethnic population and established schools and churches in native languages.</p>
      <small class="text-muted">d182486b371c4b67b51b07276ea86b3b.1c</small>
    </div>
  </div>    

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/ibgVj1JmLRMLPWKIQWGX-F4WLhiMCGzzz_VeS9jgyFbT-6JA0JwCg85xoptkKJ1-lOB4KXocpWyYcr7Ar20C">
    <div class="card-body ">
     <h5 class="card-title">MD: Building Our Singapore: Mission 8</h5>
      <p class="card-text">On 6 February 1819, he signed a treaty which allowed an establishment of a British settlement on the island and thus was born modern Singapore.</p>
      <small class="text-muted">a3441def70a24a259c866e2f07ebd19d.1c</small>
    </div>
  </div>    

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/SVl0Uezh2PCX0XYYQy-XMtTALqbW8pIkhlKH9oB7CoIf4s3-PWvKgNkpEEVOE7LFgJ_ucI8MiTIUlTolKNs">
    <div class="card-body ">
     <h5 class="card-title">MD: Building Our Singapore: Mission 7</h5>
      <p class="card-text">On 28 January 1819, Sir Stamford Raffles arrived at the mouth of the present day Singapore river. There he found a small Malay settlement.</p>
      <small class="text-muted">998f5e9abef94315af0cb82d9f16f44c.1c</small>
    </div>
  </div>    

</div>

<div class="card-group">

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/A3tMmzQTUHMpQFeKAmty22A6YUnxV4AAMqehSzZ2o2tqQmBbpeqotcwa9X2CQGJMyILa6diEVzwn1QOWrWo">
    <div class="card-body ">
     <h5 class="card-title">MD: Building Our Singapore: Mission 6</h5>
      <p class="card-text">Sang Nila Utama went on the rename this city, Singapura, which meant 'Lion City' and ruled Singapura for 48 years and was buried at the foot of Bukit Larangan (Present day Fort Canning Hill).</p>
      <small class="text-muted">f71e4070f1f644ce961ac27193b6f5df.1c</small>
    </div>
  </div>    

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/lO3o6dTF-nrTaNw4Va4TF5U0uNz570-uTwBxs2rqJ3jVnramB-n1Ngcf6V0xoM5ahev2F3OuSrfutStFE8Gl">
    <div class="card-body ">
     <h5 class="card-title">MD: Building Our Singapore: Mission 5</h5>
      <p class="card-text">Sang Nila Utama was told it was a lion, which was believed to be a good omen. He decided to settled down and build a city.</p>
      <small class="text-muted">89892abdc0c94f36b3eb905a24c20c6a.1c</small>
    </div>
  </div>    

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/iiSpIdt4yyXFG-w3ljP8Nw1F-agKZ8OcBmYoQVFnjq6rhmK0T_RZ_mZisFfZFHhkLRhaNCkJrzTNKRvfSih6">
    <div class="card-body ">
     <h5 class="card-title">MD: Building Our Singapore: Mission 4</h5>
      <p class="card-text">Reaching Temasek safely, Sang Nila Utama saw an animal with red body, black head and a white breast. It was a fine-looking animal and moved with great speed as it disappeared into the jungle.</p>
      <small class="text-muted">c391bf820c584fa4a9721d6f5013f8a8.1c</small>
    </div>
  </div>    

</div>
<div class="card-group">  


  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/88_CbqKJfd-wxOSjsBWO_zcvFXmF5GksEknt0fCgWG_kmDgEpU54S7R7gPeIBBwUS2GFdHBH0ZxCC-G59ecs">
    <div class="card-body ">
     <h5 class="card-title">MD: Building Our Singapore: Mission 3</h5>
      <p class="card-text">Throwing heavy things overboard was the only way to prevent the vessel from sinking. On the advice of the ship's captain, Sang Nila Utama threw his crown overboard, and the storm died.</p>
      <small class="text-muted">55cd5c59736c412fb1ae1a169802a42f.1c</small>
    </div>
  </div>    

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/rdFON8q5K34g6cqDS2nKdKj_OzDPw7I_nzzeI6hxMtieNC5r6VqFxUpW4Ct1xxETmu8CCcEJrQ0Ly_iMFWgy">
    <div class="card-body ">
     <h5 class="card-title">MD: Building Our Singapore: Mission 2</h5>
      <p class="card-text">Sang Nila Utama saw another island, to which his chief minister told him was the island of Temasek. He decided to explore the island but a great storm erupted as he was travelling to Temasek.</p>
      <small class="text-muted">cd5fb60f6e344dce83fe074a027ba081.1c</small>
    </div>
  </div>    

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/LYqetVStTcqQF6eKwj1GpJU-fqv6RZ7ckSkQlPaY9U8YyfKgU-NO_ZRNU8NHRgQsiL1GujbG-30sdh8kCj0">
    <div class="card-body ">
     <h5 class="card-title">MD: Building Our Singapore: Mission 1</h5>
      <p class="card-text">In the year 1299 AD, Sang Nila Utama, a prince of Palembang, was on Bintan Island hunting. He spotted a stag and started chasing it up a hill. But guess what he found?</p>
      <small class="text-muted">d66bb38bfba14fcd9a5f0d51bf6146a8.1c</small>
    </div>
  </div>    

</div>


{: .text-center }
<div style="font-size: 1.2em;background:#ddd;color:black;">July 2016 - MD: Shine Festival 2016</div>
<div class="card-group">

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/pUXe0waWPvNC0aH2lFj3grJCQCgqdJ9KCbzqTS-0nTe5mithe32K0IzhFgx-VgDIuQjOzQ12mSZlx3FTO88">
    <div class="card-body ">
     <h5 class="card-title">SHINE Festival 2016 - Pop Culture</h5>
      <p class="card-text">SHINE is a nationwide festival in Singapore "by youth, for youth' and is jointly supported by the Ministry of Social and Family Development and the National Youth Council.</p>
      <small class="text-muted">5c13e51cd39d45238f423c77cb9369b6.1c</small>
    </div>
  </div>    

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/m89VXupctkqtvcx7tOCYON9ZbPC2tsIaaq0O1st7twPU27HsaT-PEZCL-aIC4LNF5AZL7orLb2iQL8br9M4">
    <div class="card-body ">
     <h5 class="card-title">SHINE Festival 2016 - Interactive Media</h5>
      <p class="card-text">SHINE is a nationwide festival in Singapore "by youth, for youth' and is jointly supported by the Ministry of Social and Family Development and the National Youth Council.</p>
      <small class="text-muted">99ac2b1191654b9ab98172e6fc10fa7d.1c</small>
    </div>
  </div>    

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/Es7otZgke4sxeJ_nQWHuWi2Pu2G7V7hlGVh_yiKo1SKd9OAtKV1lVXhdblZHFfq53QySKxq-FW36PoNZgE4cIg">
    <div class="card-body ">
     <h5 class="card-title">SHINE Festival 2016 - Music & Dance</h5>
      <p class="card-text">SHINE is a nationwide festival in Singapore "by youth, for youth' and is jointly supported by the Ministry of Social and Family Development and the National Youth Council.</p>
      <small class="text-muted">87a68e552ea34666b9c6e27ccc577782.1c</small>
    </div>
  </div>    

</div>

<div class="card-group">

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/eGJFtEsrIcP-P50_b56yDS_Yz8yLyTbSc1w4xgtlDN805nCUQsV1x2_yBKfcgQYHZcoxxPSdOpUoZMYKRwtd">
    <div class="card-body ">
     <h5 class="card-title">SHINE Festival 2016 - Urban Art</h5>
      <p class="card-text">SHINE is a nationwide festival in Singapore "by youth, for youth' and is jointly supported by the Ministry of Social and Family Development  and the National Youth Council.</p>
      <small class="text-muted">0d42f72975ee4369bbe2add02c90e98c.1c</small>
    </div>
  </div>    

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/MxtCt-yA9_51RDMW8lLgvz_N4Q255FuV144GwQCQjPIW_JlsxIbdtweSMDH6POaFMgRd3AzGQrXPZuVSh3xy">
    <div class="card-body ">
     <h5 class="card-title">SHINE Festival 2016 - Gaming</h5>
      <p class="card-text">SHINE is a nationwide festival in Singapore "by youth, for youth' and is jointly supported by the Ministry of Social and Family Development and the National Youth Council.</p>
      <small class="text-muted">bcd2c6a098e141a8930baded0e4952f1.1c</small>
    </div>
  </div>    

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/V9dCuBXZ7taeKMqp1Ja7kphVgWDkLs2z0Qgu_tbsWdXMOuFDYDz_Y7ImL078Z_gSA_inWwEUVikJlOfCB537ow">
    <div class="card-body ">
     <h5 class="card-title">SHINE Festival 2016 - Urban Sports</h5>
      <p class="card-text">SHINE is a nationwide festival in Singapore "by youth, for youth' and is jointly supported by the Ministry of Social and Family Development and the National Youth Council.</p>
      <small class="text-muted">e5cfefa475bc42a8bea83ca0ed8e6c5d.1c</small>
    </div>
  </div>    

</div>


{: .text-center }
<div style="font-size: 1.2em;background:#ddd;color:black;">Sept 2015 - MD: Singapore SG50</div>
<div class="card-group">

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/WjU71Gn-P6wz-SXfdgEoPFp-ue-YQzaGuqUSFiGi8gPjCzZk8_UMZFPJbDOPPc7MeeGAgvAsCf0xoEhfJ_v1">
    <div class="card-body ">
     <h5 class="card-title">Palawan Beach, Singapore</h5>
      <p class="card-text">With a suspension bridge linking beach-goers to the Southernmost Point of Continental Asia (and also Asia's closest point to the Equator), Palawan Beach is known as Singapore's happiest family beach.</p>
      <small class="text-muted">5af341104e47443880c69a5c186386c8.1c</small>
    </div>
  </div>    

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/6BRVNEY21nAyrCL1WbtPMohFXTUJm0i-OiSnmW6LVzBT54KvPOyd-70Kx8pZSQZ7vBgBMEYrFxhj7bRgpvA2">
    <div class="card-body ">
     <h5 class="card-title">Merlion Tower, Singapore</h5>
      <p class="card-text">A 37 metre-tall mythical creature to be precise. The legendary Merlion is a half lion half fish guardian of prosperity which personifies Singapore’s history as a port city.</p>
      <small class="text-muted">79b2fab2092a458eaa7fecf8e13cdd79.1c</small>
    </div>
  </div>    

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/L4OzxhxpwsDyFDXi7LXHjYmP6i1qqwAtKygKlBlfvdHB4ZJnNLXcF5jk1fPq2zlEphRUZ1xdGdjB-5-YV54JcQ">
    <div class="card-body ">
     <h5 class="card-title">Buddha Tooth Relic Temple, Singapore</h5>
      <p class="card-text">Based on the Tang dynasty architectural style & built to house the tooth relic of the historical Buddha. It is claimed that the relic  from which it gains its name was found in 1980 in Myanmar.</p>
      <small class="text-muted">48a8917dae244385b303d7aa64558519.1c</small>
    </div>
  </div>    

</div>

<div class="card-group">

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/7nVSS5NuN_QoMUbMZ4WaJ0MsMo6-0yCAVvrYpCWMRO1-4nN9basFAVtVb-h4Ft1Zu1lnTeVdvKSPJB6vHB7Z">
    <div class="card-body ">
     <h5 class="card-title">Maxwell Food Centre, Singapore</h5>
      <p class="card-text">One of Singapore’s most popular hawker centres is Maxwell Food Centre. It’s home to the renowned Tian Tian Chicken Rice,Zhen Zhen Porridge, and Char Kway Teow from Marina South Delicious Food.</p>
      <small class="text-muted">d81e8780c6874c9fa1564161706aeea7.1c</small>
    </div>
  </div>    

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/Xeb61pjDVJ0Qy6iq8cD7t-n5ezrr-PWsrKv4DoMYzOdXz7-wumCMU6_Z1gWZnNmz7cLlXsygUxdYb0d0hGBaYA">
    <div class="card-body ">
     <h5 class="card-title">Red Dot Design Museum, Singapore</h5>
      <p class="card-text">The Museum presents the latest trends in the international design scene with a collection of more than 1,000 exhibits in the field of product design & communication design from over 50 countries.</p>
      <small class="text-muted">ac36ea1dda4348e1a1fa0d587207dcb8.1c</small>
    </div>
  </div>    

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/DllzliBikCiS5v7JyZA7oV41ExZGa5yVXJMQaqTqxpwPHczvKTDd99pGak_Lqmf7Hj50bVT4GCahPSa18Ac">
    <div class="card-body ">
     <h5 class="card-title">Little India, Singapore</h5>
      <p class="card-text">Little India is distinct from the Chulia Kampong area for Tamil immigrants under the British policy of ethnic segregation.  Today, many ethnic Tamils have moved into what is now known as Little India.</p>
      <small class="text-muted">dc0cc3dbec2e4e47bc05c64556733efb.1c</small>
    </div>
  </div>    

</div>

<div class="card-group">

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/UhUoSyy_8QFeShuwAHtVWdyowPaY6noQMBL7n5IiBGvMEVXLBDaMg_9p9_GwXCG5-MvejKil9zJy5piP-mI">
    <div class="card-body ">
     <h5 class="card-title">Majestic Theatre, Singapore</h5>
      <p class="card-text">Majestic Theatre was a Cantonese opera house built by philanthropist Eu Tong Sen, a tin and rubber magnate, for his wife who was a Cantonese opera fan.</p>
      <small class="text-muted">80f2c881c7bb49689141d3eccc1daca0.1c</small>
    </div>
  </div>    

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/6EGLOYD2wEDu0qqUVHgxXKv_u8P-2EhraNMxLGoUTuKqQIzfy66XGfAQX1zX6BFKaxBrmVwN9tRhdNCh4jw">
    <div class="card-body ">
     <h5 class="card-title">Hong Lim Park, Singapore</h5>
      <p class="card-text">Created by Hokkien businessman and philanthropist Cheang Hong Lim in 1885, Hong Lim Park was the first public garden in Singapore. It was the venue for many election rallies and political speeches.</p>
      <small class="text-muted">ae4e5b5bc5184fd58a67d9cecaae2fb6.1c</small>
    </div>
  </div>    

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/KpMFH3xNs8RyNruWqHi_5AiDMa-TEscZGFUfIwUvQDw5KpFu7ywPNOoxHnHFSsX-lAr0D0RoyCfQZ_LeQLUn">
    <div class="card-body ">
     <h5 class="card-title">Singapore River</h5>
      <p class="card-text">When Sir Stamford Raffles landed in Singapore in 1819, he realised the importance of the river and this is where modern Singapore was born!</p>
      <small class="text-muted">69a8110e6b0a401b884aa571ed8c7a63.1c</small>
    </div>
  </div>    

</div>

<div class="card-group">

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/yRx53UlJDsO8M9H0d2aqSZezmtsitLX5DXU5vanYvw6Q1JkLvC91ATMCwquC2tIW9gtIpYRiThjv7ZRqiop6">
    <div class="card-body ">
     <h5 class="card-title">Peranakan Museum, Singapore</h5>
      <p class="card-text">The Peranakan Museum is a museum in Singapore specialising in Peranakan culture. It is the first of its kind in the world, that explores the Peranakan culture of Southeast Asia.</p>
      <small class="text-muted">27b6924d666d4e6bb446f429896c567c.1c</small>
    </div>
  </div>    

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/__BXuXKNgr8qKVp22RDik_5GYl0lBwaQ28OpzG3Xibx16Nb7RiP91fxYYGmc4isN4_R1vMWVTDewHGfQGg1r1w">
    <div class="card-body ">
     <h5 class="card-title">Fort Canning, Singapore</h5>
      <p class="card-text">Sir Stamford Raffles, founder of modern Singapore, built his first residence here and also built Singapore's first botanical garden there in 1822.</p>
      <small class="text-muted">e17b7946e6e04d54a54f649f76517391.1c</small>
    </div>
  </div>    

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/ThmE4jL_N9ofguERvPJ_nkKVXAZGS4Y6ZVHN_cHE4h7MoZgx36gH7qByG88dC-LXqx1nAkif5fRARrR8kAUP">
    <div class="card-body ">
     <h5 class="card-title">National Museum of Singapore</h5>
      <p class="card-text">The oldest museum in Singapore. Its history dates back to 1849 when it was started as a section of a library at Singapore Institution. The Museum was relocated to its permanent site in 1887.</p>
      <small class="text-muted">d0cf5ef7d9044299b829ed24ec662cb0.1c</small>
    </div>
  </div>    

</div>

<div class="card-group">

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/lAlmeo6GETO0KWVP1G43BGkuEpgn9H7zJxBeAxwqPWG5CZwIzLOCop7QoDwD-km_AB-RsVdGvPVBOyRmYEHNlA">
    <div class="card-body ">
     <h5 class="card-title">Kwan Im Thong Hood Cho Temple, Singapore</h5>
      <p class="card-text">Kwan Im Thong Hood Cho Temple is a traditional Chinese temple of significance to the Chinese in Singapore, and is believed to bring worshippers good luck after praying to the Kuan Yin (观音), or Avaloki</p>
      <small class="text-muted">b7c4c4766add4077912c6e8035873be5.1c</small>
    </div>
  </div>    

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/gN0PoEEi_g3aAuw6iSeELg-JhzIa10IHEzt0nu8BiKiW0PHT1beUJdfajn-e_HVqzBs3310QMACCdyiPiZAA">
    <div class="card-body ">
     <h5 class="card-title">Malay Heritage Centre, Singapore</h5>
      <p class="card-text">The Malay Heritage Centre is a cultural centre and museum in Singapore that showcases the culture, heritage and history of Malay Singaporeans.</p>
      <small class="text-muted">f6fda601800540cb81dbf6878d5f44cd.1c</small>
    </div>
  </div>    

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/y51QPLQ7-oUNH_7t6XKAl5UNw-N-WIEt5O7E7jJ9KFJ1nVp4QYdTlXRxb37ujz1Q_U25suIerZqb8x7gl9I0">
    <div class="card-body ">
     <h5 class="card-title">Sultan Mosque, Singapore</h5>
      <p class="card-text">Masjid Sultan or Sultan Mosque is considered one of the most important mosques in Singapore. The prayer hall and domes highlight the mosque's star features.</p>
      <small class="text-muted">8e2df4e3d79a427989409f202744c45e.1c</small>
    </div>
  </div>    

</div>

<div class="card-group">

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/mxd07daVKN0nb9ecyyCA5Yp6szfBMeIA_Tkl3RPmDMqg_SXnaGfZLOv85hTsmDTaUfnOiY5doqpzAUL_ONp9">
    <div class="card-body ">
     <h5 class="card-title">Haji Lane, Singapore</h5>
      <p class="card-text">Haji Lane is in the Kampong Glam neighbourhood of Singapore. Young people frequent the shophouses along this lane for the independent fashion boutiques and Middle Eastern cafes.</p>
      <small class="text-muted">f298f43e29d443838e797cbcf3907534.1c</small>
    </div>
  </div>    

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/3GbRbb-Mn6HInjQA28GNl4T636yP6Pnw9sj7jmgCG8HAGzpZKnY1raxV27q8zst7ou76nRgDH-EycxGBHnWhbA">
    <div class="card-body ">
     <h5 class="card-title">Artscience Museum, Singapore</h5>
      <p class="card-text">The lotus shaped ArtScience Museum promises to feature 21 gallery spaces equating to 50,000 square feet which will display exhibits from combined art/science, media/technology, as well as design/archi</p>
      <small class="text-muted">0672de2ba25f4938b486497ab1edb7ec.1c</small>
    </div>
  </div>    

  <div class="card">
    <img class="card-img-top" src="https://lh3.googleusercontent.com/yNYnTa7IIlcpiA-FAKulVzHOSeUDVmtygpkJkEyqwbvq7UzKHO5j_kLXvyhNWgSAn9nU4mznGL7akYmQLDAJ7w">
    <div class="card-body ">
     <h5 class="card-title">Gardens by the Bay, Singapore</h5>
      <p class="card-text">Gardens by the Bay was established to transform Singapore from a "Garden City" to a "City in a Garden". Its aim to raise the quality of life by enhancing greenery and flora in the city.</p>
      <small class="text-muted">9fbcc7780bc94f479bfb00e9533d8da5.1c</small>
    </div>
  </div>    

</div>
