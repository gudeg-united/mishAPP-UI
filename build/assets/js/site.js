(function() {
  $(document).on('ready page:load', function() {
    $('#mapbg').gmap3({
      map: {
        options: {
          zoom: 12,
          mapTypeControl: false,
          streetViewControl: false,
          scrollwheel: false,
          navigationControl: false
        },
        address: 'Jakarta, Indonesia'
      }
    });
    return $('a[title]').tooltip({
      position: {
        my: 'center top+15'
      },
      track: true,
      hide: {
        effect: 'explode',
        duration: 500
      }
    });
  });

}).call(this);
