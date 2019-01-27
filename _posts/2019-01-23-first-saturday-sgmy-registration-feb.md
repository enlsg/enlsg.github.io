---
layout: single-post
title:  Singapore IngressFS Registration for February 2019
description: Ingress First Saturday is a cross-faction event organised and run by agents, for agents on the First Saturday of each month.!
date:   2019-01-23 13:12:00 +0800
categories: news
pin_home: true
---
<script src='https://api.mapbox.com/mapbox-gl-js/v0.52.0/mapbox-gl.js'></script>
<link href='https://api.mapbox.com/mapbox-gl-js/v0.52.0/mapbox-gl.css' rel='stylesheet' />
<style>
	.mapboxgl-popup {
	  max-width: 260px;
	  max-height: 358px;
	}
	.mapboxgl-popup-content {
	  text-align: center;
	  font-family: 'Open Sans', sans-serif;
	}
	.img2 {
		text-align: left;
		height:340px;
		width:240px;
	}
</style>
![ingress fs](/assets/images/news/ifs_sg_banner.jpg){: .fill-width}

Singapore's 2nd Ingress First Saturday is going to be held on ![Date](https://img.shields.io/badge/12:00pm-02%20Feb%202019-orange.svg) which is just 10 days away.

Make progress towards your IFS Badge and enjoy double AP rewarded by Niantic after the event.

There will also be a special restocking portal after the event.

[Register Now &raquo;](https://fevgames.net/ifs/event/?e=11075){: .btn .btn-enlightened target="_blank"}

For official announcements, join  <a href="https://t.me/SingaporeIngressFS" target="_blank"><img src="https://img.shields.io/badge/Telegram-SingaporeIngressFS-2CA5E0.svg?logo=telegram&amp;logoColor=2CA5E0" alt="Azerlete" /></a> 

This post will be updated once more details are in.

#### Activities on 2 February 2019
{: .text-center .mt-5 .mb-4}

| 12 PM | Check In / Hack Reg Portal |
| TBA | Restock Portal Activated |
{: .table}

{: .mb-5}
<!--
<div id='map' style='height: 300px;'></div>{: .fill-width}
<script>
	mapboxgl.accessToken = 'pk.eyJ1IjoiZW5sc2ciLCJhIjoiY2pyOHZpcGpwMDNqYTN5cnBodHB6MGJkOCJ9.R2DHq1-Jzl97WhjzWPDXIA';
		var map = new mapboxgl.Map({
		center: [103.860755,1.301481],
		style: 'mapbox://styles/mapbox/navigation-guidance-night-v4',
		zoom: 15.0,
		attributionControl: false,
		container: 'map'
		//style: 'mapbox://styles/mapbox/streets-v11'
	});

	map.addControl(new mapboxgl.ScaleControl({
	    maxWidth: 100,
	    unit: 'metric'
	}));


	map.addControl(new mapboxgl.GeolocateControl({
	    positionOptions: {
	        enableHighAccuracy: true
	    },
	    fitBoundsOptions: {maxZoom: 18}
	    //trackUserLocation: true
	}));

	map.addControl(new mapboxgl.NavigationControl());

	map.on('load', function () {


		map.addSource("portal_data", {
		    "type": "geojson",
		    "data": {
		        "type": "FeatureCollection",
		        "features": [


					{"type":"Feature","geometry":{"type":"Point","coordinates":[103.860755,1.301481]},"properties": {"title":"Seow Choon Hua", "p":"N", "d": "N", "i": "https://lh3.ggpht.com/TSaC_NRpZ2sULjeAg2Kwn0h-pIWQQnEkymIPmkpmgzoB07_Cntme-3XM1_lM796J9DURmUkqHh_mf9lXrHjZ", "id":"103.860755,1.301481", "desc": "IFS Registration Portal"  }}

		        ]
		    }
		});



		map.addLayer({
		    id: "unclustered-point",
		    type: "symbol",
		    source: "portal_data",
		    layout: {
		        "icon-image": "marker-11",
		        "icon-optional": true,
		        "text-size": 11.45,
		        "text-field": "{title}",
		        "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
		        "text-offset": [0, 0.9],
		        "text-anchor": "top"
		    },
			"paint": {
			    "text-color": "lightsalmon",
			    //"text-color": "#c7cbd1",
			    "text-opacity": 0.9,
			    "text-halo-color": "#131c20",
	            "text-halo-blur": 0.0,
	            "text-halo-width": 1
			}
		});




		map.on('mouseenter', 'unclustered-point', function(e) {
		    // Change the cursor style as a UI indicator.
		    map.getCanvas().style.cursor = 'pointer';
		 });

		map.on('mouseleave', 'unclustered-point', function() {
		    map.getCanvas().style.cursor = '';
		});

		map.on('click', function(e) {

		  var features = map.queryRenderedFeatures(e.point, {
		    layers: ['unclustered-point'] // replace this with the name of the layer
		  });

		  if (!features.length) {
		    return;
		  }

		  var feature = features[0];

		  var title = feature.properties.title;
		  var image = feature.properties.i;
		  var desc = feature.properties.desc;
		  var latlng = feature.properties.id;

		  var data = '<div class="img2" id="p' + latlng + '" style="font-size: 11px;text-align: left; height:340px; width:240px; border: 1px solid rgba(0,0,0,0.5); background-size: cover; background-repeat:no-repeat; background-position:center;background-image:url(' + image + ') !important"><div style="padding: 6px; padding-bottom:4px; width:228px; position: absolute; background:rgba(255,255,255, 0.7);"><a style="font-size: 12px;color: green; font-weight: bold" href="https://intel.ingress.com/intel?ll=' + latlng + '&z=17&pll=' + latlng + '" target="_blank" >' + title + '</a><br>' + desc + '<br/></div></div>';



		  var popup = new mapboxgl.Popup({ offset: [0, 0] })
		    .setLngLat(feature.geometry.coordinates)
		    .setHTML(data)
		    .setLngLat(feature.geometry.coordinates)
		    .addTo(map);

		});


		// Insert the layer beneath any symbol layer.
		var layers = map.getStyle().layers;

		var labelLayerId;
		for (var i = 0; i < layers.length; i++) {
		    if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
		        labelLayerId = layers[i].id;
		        break;
		    }
		}

		map.addLayer({
		    'id': '3d-map',
		    'source': 'composite',
		    'source-layer': 'building',
		    'filter': ['==', 'extrude', 'true'],
		    'type': 'fill-extrusion',
		    'minzoom': 15,
		    'paint': {
		        //'fill-extrusion-color': '#5D6D7E',
		        'fill-extrusion-color': '#EBEDEF',

		        //'fill-extrusion-color': {
		        //    "property": "height",
		        //    "stops":[
		        //        [2.75, "rgb(220, 239, 151)"], // 1 floor
		        //        [5.5, "rgb(178, 234, 129)"],  // 2 floors
		        //        [13.75, "rgb(122, 217, 141)"],// 5 floors
		        //        [27.5, "rgb(65, 184, 164)"],  // 10 floors
		        //        [55, "rgb(8, 69, 148)"]       // 20 floors
		        //    ]
		        //},

		        // use an 'interpolate' expression to add a smooth transition effect to the
		        // buildings as the user zooms in
		        'fill-extrusion-height': [
		            "interpolate", ["linear"], ["zoom"],
		            15, 0,
		            15.05, ["get", "height"]
		        ],
		        'fill-extrusion-base': [
		            "interpolate", ["linear"], ["zoom"],
		            15, 0,
		            15.05, ["get", "min_height"]
		        ],
		        'fill-extrusion-opacity': 0.3
		    }
		}, labelLayerId);

	});	
</script>
//-->

ENL IFS POCs<br/>
<img src="https://img.shields.io/badge/L13-Yacatect-28a745.svg?colorA=darkgray&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAAAXNSR0IArs4c6QAAAlJJREFUOBGtk0toU0EYhc99pjcx5mGRhqbapKhRqaW21lppIyh25QtBVz4oCEpx4VYEF0oXdaGuFJSiK2mIyyIi0lZQ24Xgwj6UKkXUGqqmIokmub3jmVt00wi+DvnIzPn/OXfuZAIA68j/UkgGTZNGOfhH+bn+vswQ5Bs5RTTyN9rORVNEZkGcS7QJE6qcyCf4pPkHOsHe+W2BahH1+BYCR7ceEv1Ne0XcG3RYHCWtvxEoz+umpRn22VXtYqy5S9R5A0KXC82Sgi3+Kgxs3q90Pb3T8jj77jLtWyQu62WUoxdebvoO923ahQ1GEMVCyW1zA+VIn1ewVDHRm+hAcjTV4DjOFdrHG8MRI6YF3GZNU5HOTEAIcYNGR3d1CxrVEJR5oOh2AKr8LhkCDo9Q5QvXmkHsrlztoX2E3PWWHFxasxNX1yeRDEdlWIb+g5BhxbsiiYWTp8H9gJ+FwJ4Xj/DZtqFqBkw4OBBdC4+mJ1mfeJL7iGdfP2HOsXH+5UNaSJPek7Fm6NyOomgoGsDAzATeFPPuNZmezGdrUpnnEb9WoUStCkS8fgzPvlbeF3OvbOHki45d44GB/sx4gS8xtEQ3O0/XtcKiN5x9izOTg+JaZvyD7TgX5RN/qJsDYZmm6KvfJ9INB+UVyJONpOTRdTm/QO7tCK0QI01HRX2gSnqSFCl7h2Ms9GiqNte+LCa4E9ncQ4bIDJHhhfbKlSKkubXbnCdJ2TD6P1XL0SD5QsbIHnKdHCMFIv8VnWSR5A/zK/Go0UZMIsPlRbZIAxkhs2SRvgMgV7kSB0nKVQAAAABJRU5ErkJggg=="> <a href="https://t.me/Azerlete" target="_blank"><img src="https://img.shields.io/badge/Telegram-Azerlete-2CA5E0.svg?logo=telegram&amp;logoColor=2CA5E0" alt="Azerlete" /></a>