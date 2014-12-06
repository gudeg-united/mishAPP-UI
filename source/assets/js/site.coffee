# init google map as a background
#
$('#mapbg').gmap3
  map:
    options:
      zoom: 12
      mapTypeControl: false
      streetViewControl: false
      scrollwheel: false
      navigationControl: false
    address: 'Jakarta, Indonesia'


# tooltip for all link which have title attribute
#
$('a[title]').tooltip
  position:
    my: 'center top+15'
  track: true
  hide:
    effect: 'explode'
    duration: 500
