var xhr = newHttpRequest();

xhr.onload = function() {
  if (xhr.status === 200) { //When the ready state changes
    responseobject = JSON.parse(xhr.responseText); //If server status was ok

    var newContent = '';
    for (var i = 0; i < responseObject.events.length; i++) {
      newContent += '<div class="event">';
      newContent += '<img src=" ' + responseObject.events[i].map + '" ';
      newContent += 'alt="' + responseObject.events[i].location + '" />';
      newContent += '<p><b>' + responseObject.events[i].location + '</b></br>';
      newContent += responseObject.events[i].date + '</p>';
      newContent += '</div>';
    }

    document.getElementById('content').innerHTML = newContent;

  }
};
xhr.open('GET', 'data/data.json', true);
xhr.send(null);
