

var elSearch = document.getElementById('search');
var elSubmit = document.getElementById('submit');

elSubmit.addEventListener('click', submit, true);

function submit() {
  var query = {
    query: elSearch.value
  };

  console.log(query);
  
  postSearch(query);
}



function postSearch(query) {
  var xhr = new XMLHttpRequest();

  xhr.onload = function() {
    if (xhr.status === 200) {
      response = JSON.parse(xhr.responseText);

      populate(response);
    }
  };

  xhr.open('POST', '/api', true);
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhr.send(JSON.stringify(query));
}






function populate(response) {
  var elStream = document.getElementById('stream');

  var elList = document.createElement('p');
  elStream.appendChild(elList);

  console.log(response);
}