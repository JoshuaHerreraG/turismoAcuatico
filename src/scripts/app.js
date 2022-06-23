const nav = document.getElementById("navMovil");
const btnMenu = document.getElementById("menu");
const a = document.getElementById("menu-a");

btnMenu.addEventListener('click', ()=>{
  nav.classList.toggle("header-movil__menu--move");
  nav.classList.remove('move');
});

a.addEventListener('click', ()=>{
  nav.classList.toggle('move');
  nav.classList.remove("header-movil__menu--move");
});


function iniciarMap() {
  var coord = { lat: 19.2898695, lng: -70.2964908 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: coord,
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map,
  });
}``
