// Add your JavaScript


var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: -23.56261835,
      lng: -46.65490751
    },
    zoom: 8
  });
}

/*FUNÇÃO efeito delay  na pagina i */
$(document).ready(function () {
  $('.box-2').delay('3000').fadeIn('slow')


  /*Função filtrar */


  var dataRestaurants = [];
  var restaurantName = [];
  var image = [];
  var types = [];
  var descriptions = [];

  $.each(restaurantes, function (index, value) {
    dataRestaurants.push(index);
    restaurantName.push(value.name);
    image.push(value.image);
    types.push(value.type.toUpperCase());
    descriptions.push(value.description);
    $("#img-restaurant").append("<img src= " + value.image + " alt=" + value.type.toUpperCase() + " val=" + index + " data-toggle='modal' data-target='#modalRestautante'>");

  })


  $('.btn-filtrar').click(function () {
    var inputValue = $('.user-text').val().toUpperCase();
    $("img").each(function () {
      if ($(this).attr("alt") !== inputValue) {
        $(this).fadeOut('slow');
      }
    });
  })

  $('img').click(function () {
    var index = $(this).attr("val");
    $("#name-restaurant").append(restaurantName[index]);
    $("#type-modal").append(types[index]);
    $('#description-modal').append(descriptions[index]);
  });
});