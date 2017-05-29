function initMap(){


	var laboratoriaMexico = {lat: 19.4176437, lng: -99.167004};

	var map = new google.maps.Map(document.getElementById('map'),{
	zoom: 18,
	center:laboratoriaMexico
	});
}

var markadorLaboratoria = new google.maps.Marker({
	position:laboratoriaMexico,
	map:map
});

function buscar (){
	if(navigator.geolocalitation){
		naviator.geolocalitation.getCurrentPosition(funcionExito, funcionError);
	}
}

var latitud, longitud;
var funcionExito = function(position){
	
	latitud = posicion.coords.latitude;
	longitud = posicion.coords.longitude;

};

var miUbicacion = new google.maps.Marker({
	position:{lat:latitud, lng:longitud},
	map:map
});

map.setZoom(18);
map.setCenter({lat:latitud, lng:longitud});

var funcionExito = function(error){
	alert("Tenemos un problema con tu ubicación");
};

document.getElementById("encuentrame").document.addEventListener("click", buscar);


