var xhr = new XMLHttpRequest();
xhr.onload = function() {
  if (xhr.status === 200) {

var response = xhr.responseXML;
var events = response.getElementsByTagName('event');

for (var i = 0; i < events.length; i++) {
  var container, image, location, city, newline;
  container = document.createElement('div');
  container.className = 'event';

  image = document.createElement('img');
  image.setAttribute('src', getNodeValue(events[i], 'map'));
  image.setAttribute('alt', getNodeValue(events[i], 'location'));
  container.appendChild(image);

  location = document.creatElement('p');
  city = document.createElement('b');
  newline = document.createElement('br');
  city.appendChild = (document.creatTextNode(getNodeValue(events[i], 'location')));
  location.appendChild(newline);
  location.insertBefore(city, newline);
  location.appendChild(document.createTextNode(getNodeValue(events[i], 'date')));

  document.getElementsById('content').appendChild(container);
}
  } // Final line of the if statement
function getNodeValue(obj, tag) {
  return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
}

};

xhr.open('GET', 'data/data.xml', true); //Prepare the XMLHttpRequest
xhr.send(null);                         //Push the XMLHttpRequest
