var elMap = document.getElementById('loc');
var msg = 'Sorry, we are unable to track your location.';

if (Modernizer.geolocation) {
  navigator.geolocation.getCurrentPosition(success, fail);
  elMap.textContent = 'Checking your location...';
} else {
  elMap.textContent = msg;
}

function success(position) {
  msg = '<h3>Longitude:<br>';
  msg += position.coords.longitude +'</h3>';
  msg += '<h3>Latitude<br>';
  msg += position.coords.latitude +'</h3>';
  elMap.innerHTML = msg;
}

function fail(msg) {
  elMap.textContent = msg;
  console.log(msg.code);
}
