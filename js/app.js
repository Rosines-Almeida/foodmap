 $(document).ready(function(){
    $(".box-2").fadeIn(5000).delay('slow');
    
               
        console.log('oi')   
   
   $(function() {
    var completeType = [
      "Arabe",
      "Fast food",
      "Italiana",
      "Vegana",
      'Japonesa',

    ];
    $("#tags").autocomplete({
      source: completeType  
    });
  });

  loadMap(restaurantes);

  function loadMap(restaurantes){
   
    var initialCoordinates = [-23.5539487, -46.65];  
    var initialZoomLevel = 14;
   
    var map = L.map('map').setView(initialCoordinates, initialZoomLevel);
   
    L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; Contribuidores do <a href="https://osm.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
  
    $.each(restaurantes, function(index, value){
  let coordinates = [value.latitude, value.longitude];
      L.marker(coordinates ).addTo(map).openPopup();
   
    });
   
  }
  
 

$.each(restaurantes, function(index, value){
     
    $('#restaurants').append('<div> <img id =img-list width = 2300px height=40px  data-toggle="modal" data-target="#modalRestautante"src=' + value.image + '> <h6>'+ value.name +'</h6></div>')
    

 
})
 

$('#btn-filter').click(function filter(){
    $('#restaurants').css('display','none') 
    $('#listRestaurants').html('')

    
        $.each(restaurantes, function(index, value){
         
             var restaurantType = value.type;
             var restaurantName = value.name
             option = $(".input").val().toLowerCase();
             console.log(option)
            if(option == restaurantType || option == restaurantName){
              
     console.log (value.name) 
    
     $('#listRestaurants').append('<div> <img id =img-list width = 2300px height=40px  data-toggle="modal" data-target="#modalRestautante"src=' + value.image + ' val =' + index + " alt=" + value.name + '> <h6>'+ value.name +'</h6> </div>')
   
    
}
}) 
$('.input').val("");
 
 

$('#listRestaurants img').click(function (){ 
    var index = $(this).attr('val');
    alt = $(this).attr('alt')
 $('#name-restaurant').html('')
  
    $('#name-restaurant').append( restaurantes[index].name   )
   $('#type-modal').append(restaurantes[index].type  )
   $('#description-modal').append( restaurantes[index].description  )
  var lat = restaurantes[index].latitude;
  var long = restaurantes[index].longitude;
 
   var map = L.map('mapModal').setView([lat, long], 20 );
   
   L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
     attribution: '&copy; Contribuidores do <a href="https://osm.org/copyright">OpenStreetMap</a>'
   }).addTo(map) 

   L.marker([lat, long]).addTo(map)
    .openPopup();
 

})

})

 

})
 
