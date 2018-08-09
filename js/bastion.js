$('.count').each(function () {
	console.log("malo by");
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});




$('#newsCarousel').carousel({
  interval: 10000
})

$('#newsCarousel .carousel-item').each(function(){
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=0;i<2;i++) {
        next=next.next();
        if (!next.length) {
        	next = $(this).siblings(':first');
      	}
      next.children(':first-child').clone().appendTo($(this));
    }
});

$(function(){
    $(".fancybox").fancybox({
          'cyclic': true,
          arrows : true,
          infobar: true,
          protect: true,
          loop: true,
          animationEffect:"zoom-in-out"
      });

      
      $(".zoom").hover(function(){
      
      $(this).addClass('transition');
    }, function(){
          
      $(this).removeClass('transition');
    });
  });

function goHome(){
  $('html, body').animate({scrollTop:$("#header").position().top - 88}, 'slow');
}
function goSpaces(){
  $('html, body').animate({scrollTop:$("#spaces").position().top - 88}, 'slow');
}
function goAdvantages(){
	$('html, body').animate({scrollTop:$("#advantages").position().top - 88}, 'slow');
}
function goAbout(){
	$('html, body').animate({scrollTop:$("#aboutus").position().top - 88}, 'slow');
}
function goLocation(){
	$('html, body').animate({scrollTop:$("#map").position().top - 88}, 'slow');
}
function goGallery(){
	$('html, body').animate({scrollTop:$("#gallery").position().top - 88}, 'slow');
}
function goMmInvest(){
	$('html, body').animate({scrollTop:$("#mminvest").position().top - 88}, 'slow');
}
function goNews(){
	$('html, body').animate({scrollTop:$("#news").position().top - 88}, 'slow');
}
function goContact(){
  $('html, body').animate({scrollTop:$("#contactUs").position().top - 88}, 'slow');
}

var firsttime = true;
var busMarkers = [];
var carparkMarkers = [];
var restaurantsMarkers = [];
var caffeMarkers = [];
var atmMarkers = [];
var postofficeMarkers = [];
var map;

function myMap() {
        map = new google.maps.Map(document.getElementById('bastionMap'), {
          zoom: 16,
          center: {lat: 48.726102, lng: 21.256221},
          mapTypeId: 'terrain'
        });

        var latlng1 = new google.maps.LatLng(48.727163, 21.255943);

        var imageBounds = {
          north: 48.725136,
          south: 48.724521,
          east: 21.255042,
          west: 21.251394
        };

        titleCentrumOverlay = new google.maps.GroundOverlay(
            './images/icons/titleCentrumMesta.png',
            imageBounds);
        titleCentrumOverlay.setMap(map);

        //mapLabel.set('position', new google.maps.LatLng(48.727179, 21.254713));
        var marker = new google.maps.Marker({
            position: latlng1,
            icon: './images/icons/bastion.png',
            maxZoom: 10,
            map: map
        });

        var bastiOn = [
          {lng: 21.255407,lat: 48.727261},
          {lng: 21.255697,lat: 48.726705},
          {lng: 21.256453,lat: 48.727183},
          {lng: 21.256276,lat: 48.727470},
          {lng: 21.255407,lat: 48.727261}
        ];

        var hlavnaUlica = [
          {lng: 21.254713, lat: 48.727179},
          {lng: 21.255120, lat: 48.726489},
          {lng: 21.255211, lat: 48.726517},
          {lng: 21.255785, lat: 48.725540},
          {lng: 21.255689, lat: 48.725494},
          {lng: 21.256576, lat: 48.723886},
          {lng: 21.256979, lat: 48.723161},
          {lng: 21.257945, lat: 48.721693},
          {lng: 21.258564, lat: 48.720674},
          {lng: 21.258660, lat: 48.720497},
          {lng: 21.259399, lat: 48.718793},
          {lng: 21.259786, lat: 48.718026},
          {lng: 21.259910, lat: 48.717754},
          {lng: 21.260376, lat: 48.717152},
          {lng: 21.259631, lat: 48.716925},
          {lng: 21.259497, lat: 48.717159},
          {lng: 21.259556, lat: 48.717258},
          {lng: 21.259228, lat: 48.717838},
          {lng: 21.258649, lat: 48.718833},
          {lng: 21.258574, lat: 48.718822},
          {lng: 21.257951, lat: 48.719804},
          {lng: 21.257865, lat: 48.719779},
          {lng: 21.257533, lat: 48.720345},
          {lng: 21.257120, lat: 48.721042},
          {lng: 21.256429, lat: 48.722799},
          {lng: 21.255765, lat: 48.724564},
          {lng: 21.255467, lat: 48.725272},
          {lng: 21.254946, lat: 48.726294},
          {lng: 21.254893, lat: 48.726294},
          {lng: 21.254517, lat: 48.726928},
          {lng: 21.254404, lat: 48.727105},
          {lng: 21.254713, lat: 48.727179}
        ];

        var kosiceCentrum = [
          {lat: 48.727446, lng: 21.257006},
          {lat: 48.725981, lng: 21.258937},
          {lat: 48.724955, lng: 21.260160},
          {lat: 48.722577, lng: 21.261995},
          {lat: 48.720148, lng: 21.263824},
          {lat: 48.719766, lng: 21.262827},
          {lat: 48.719080, lng: 21.263309},
          {lat: 48.718662, lng: 21.262076},
          {lat: 48.718004, lng: 21.262612},
          {lat: 48.716999, lng: 21.260123},
          {lat: 48.716581, lng: 21.258278},
          {lat: 48.716439, lng: 21.256797},
          {lat: 48.716411, lng: 21.256239},
          {lat: 48.716545, lng: 21.253450},
          {lat: 48.719497, lng: 21.252731},
          {lat: 48.724282, lng: 21.251538},
          {lat: 48.726299, lng: 21.251066},
          {lat: 48.727177, lng: 21.254617},
          {lat: 48.727686, lng: 21.256891},
          {lat: 48.727446, lng: 21.257006}
        ];

        var oblastBastion= new google.maps.Polygon({
          paths: bastiOn,
          strokeColor: '#000000',
          strokeOpacity: 0.0,
          strokeWeight: 0,
          fillColor: '#000000',
          fillOpacity: 0.8
        });

        var oblastKosiceCentrum = new google.maps.Polygon({
          paths: kosiceCentrum,
          strokeColor: '#FF0000',
          strokeOpacity: 0.5,
          strokeWeight: 1,
          fillColor: '#FF0000',
          fillOpacity: 0.1
        });

        var oblastKosiceHlavna = new google.maps.Polygon({
          paths: hlavnaUlica,
          strokeColor: '#FF0000',
          strokeOpacity: 0.1,
          strokeWeight: 1,
          fillColor: '#FF0000',
          fillOpacity: 0.2
        });

        oblastBastion.setMap(map);
        oblastKosiceCentrum.setMap(map);
        oblastKosiceHlavna.setMap(map);

        var busLocations = [
          ['Autobus 17,19', 48.726782, 21.255883],
          ['Autobus 14,16,22,25,27,29,36,71,71,N5', 48.728373, 21.256714],
          ['Autobus 14,16,22,25,27,29,36,71,71,N5', 48.727542, 21.255328],
          ['Autobus 14,16,22,25,27,29,36,71,71,N5', 48.727370, 21.255583],
          ['Autobus 14,16,22,25,27,29,36,71,71,N5', 48.726891, 21.256202],
          ['Autobus 14,16,22,25,27,29,36,71,71,N5', 48.726999, 21.257498],
          ['Železničná stanica', 48.7226797, 21.2656555],
          ['Autobusová stanica', 48.721324,21.2651641]
        ]

        var carparklocation = [
          ['Parkovisko', 48.72845, 21.2556323],
          ['Parkovisko', 48.72629, 21.2533507],
          ['Parkovisko', 48.7275317, 21.25425],
          ['Parkovisko', 48.728247, 21.257781],
          ['Parkovisko', 48.7284444,21.253728]
        ]
        var restaurantslocation = [
          ['U nás doma', 48.7266499, 21.2555546],
          ['Govinda', 48.7266391, 21.2550285],
          ['Lampáreň restaurant', 48.7263331, 21.2553345],
          ['Rijeka', 48.7285517, 21.2583196],
          ['Bistro Tabačka', 48.729069, 21.2559743],
          ['Reštaurácia Diplomat', 48.7249063, 21.256073],
          ['12 Apoštolov', 48.7244766, 21.2580607],
          ['Smelly cat', 48.724815, 21.255583],
          ['Karczma mlyn', 48.7239607, 21.2560328]
        ]

        var caffelocation = [
          ['Šálka kávy', 48.727056, 21.2550651],
          ['Campo cafe', 48.7268963, 21.2588546],
          ['Cafe No. 1', 48.7290272, 21.2576082],
          ['Crema caffe', 48.7283199, 21.2531999],
          ['Smelly cat', 48.724815, 21.255583],
          ['Cafe Bayer', 48.724906, 21.2560733],
          ['Clematis coffee', 48.7238192, 21.2560129]
        ]

        var atmlocation = [
          ['VÚB', 48.7261919, 21.2546517],
          ['ČSOB', 48.7285769, 21.258276],
          ['Slovenská sporiteľna', 48.7282708, 21.2584819],
          ['Poštová banka', 48.7280422, 21.2591142],
          ['Tatra banka', 48.7245451, 21.2562503]
        ]

        var postofficelocation = [
          ['Pošta Košice 2', 48.7260083, 21.2662925],
          ['Pošta Košice 1', 48.7217732, 21.2503481]
        ]

        var locationmarker, i;

   /* if(firsttime){
    	for (i = 0; i < busLocations.length; i++) {  
            marker = new google.maps.Marker({
              position: new google.maps.LatLng(busLocations[i][1], busLocations[i][2]),
              map: map,
              icon:'./images/map/green.png',
              title:busLocations[i][0]
            });
        }
        firsttime=false;
    }*/

    
    for (i = 0; i < busLocations.length; i++) {  
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(busLocations[i][1], busLocations[i][2]),
          map: map,
          icon:'./images/map/green.png',
          title:busLocations[i][0]
        });
        busMarkers.push(marker);
    }

    for (i = 0; i < carparklocation.length; i++) {  
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(carparklocation[i][1], carparklocation[i][2]),
          map: map,
          icon:'./images/map/purple.png',
          title:carparklocation[i][0]
        });
        carparkMarkers.push(marker);
    }


    for (i = 0; i < restaurantslocation.length; i++) {  
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(restaurantslocation[i][1], restaurantslocation[i][2]),
          map: map,
          icon:'./images/map/red.png',
          title:restaurantslocation[i][0]
        });
        restaurantsMarkers.push(marker);
    }


    for (i = 0; i < caffelocation.length; i++) {  
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(caffelocation[i][1], caffelocation[i][2]),
          map: map,
          icon:'./images/map/black.png',
          title:caffelocation[i][0]
        });
        caffeMarkers.push(marker);
    }


    for (i = 0; i < atmlocation.length; i++) {  
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(atmlocation[i][1], atmlocation[i][2]),
          map: map,
          icon:'./images/map/yellow.png',
          title:atmlocation[i][0]
        });
        atmMarkers.push(marker);
    }


    for (i = 0; i < postofficelocation.length; i++) {  
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(postofficelocation[i][1], postofficelocation[i][2]),
          map: map,
          icon:'./images/map/red.png',
          title:postofficelocation[i][0]
        });
        postofficeMarkers.push(marker);
    }
    showMarkers(0);
}

function showMarkers(e){
  clearMarkers();
  console.log(busMarkers);
  console.log(carparkMarkers);
  console.log(restaurantsMarkers);
  console.log(caffeMarkers);
  console.log(postofficeMarkers);

  if(e==0){
    for (var i = 0; i < busMarkers.length; i++) {
      busMarkers[i].setMap(map);
    }
  }
  if(e==1){
    for (var i = 0; i < carparkMarkers.length; i++) {
      carparkMarkers[i].setMap(map);
    }
  }
  if(e==2){
    for (var i = 0; i < restaurantsMarkers.length; i++) {
      restaurantsMarkers[i].setMap(map);
    }
  }
  if(e==3){
    for (var i = 0; i < caffeMarkers.length; i++) {
      caffeMarkers[i].setMap(map);
    }
  }
  if(e==4){
    for (var i = 0; i < atmMarkers.length; i++) {
      atmMarkers[i].setMap(map);
    }
  }
  if(e==5){
    for (var i = 0; i < postofficeMarkers.length; i++) {
      postofficeMarkers[i].setMap(map);
    }
  }
}



function setMapOnAll(map) {
  for (var i = 0; i < busMarkers.length; i++) {
    busMarkers[i].setMap(map);
  }
  for (var i = 0; i < carparkMarkers.length; i++) {
    carparkMarkers[i].setMap(map);
  }
  for (var i = 0; i < restaurantsMarkers.length; i++) {
    restaurantsMarkers[i].setMap(map);
  }
  for (var i = 0; i < caffeMarkers.length; i++) {
    caffeMarkers[i].setMap(map);
  }
  for (var i = 0; i < atmMarkers.length; i++) {
    atmMarkers[i].setMap(map);
  }
  for (var i = 0; i < postofficeMarkers.length; i++) {
    postofficeMarkers[i].setMap(map);
  }
}

function clearMarkers() {
  console.log("volam");
  setMapOnAll(null);
}



function openmore(e){
  if(e == 0){
    document.getElementById("aboutInfo").style.display = "block";
  }
  if(e == 1){
    document.getElementById("aboutInfo").style.display = "none";
  }
}

function showFirst(e){
  if (e == 0) {
    document.getElementById("first").style.display = "block";
  }
  if (e == 1) {
    document.getElementById("first").style.display = "none";
  }
}
function showSecond(e){
  if (e == 0) {
    document.getElementById("second").style.display = "block";
  }
  if (e == 1) {
    document.getElementById("second").style.display = "none";
  }
}
function showThird(e){
  if (e == 0) {
    document.getElementById("third").style.display = "block";
  }
  if (e == 1) {
    document.getElementById("third").style.display = "none";
  }
}
function showFourth(e){
  if (e == 0) {
    document.getElementById("fourth").style.display = "block";
  }
  if (e == 1) {
    document.getElementById("fourth").style.display = "none";
  }
}
function showFifth(e){
  if (e == 0) {
    document.getElementById("fifth").style.display = "block";
  }
  if (e == 1) {
    document.getElementById("fifth").style.display = "none";
  }
}





