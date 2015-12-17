

var elSearch = document.getElementById('search');
var elSubmit = document.getElementById('submit');

elSubmit.addEventListener('click', postSearch, true);
elSearch.addEventListener('keypress', submit, true);

function submit(e) {
  var key = e.which || e.keyCode;
  if (key === 13) {
    postSearch();
  }
}


function postSearch() {
  var query = {
    query: elSearch.value
  };

  console.log(query);

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