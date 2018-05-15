document.addEventListener("DOMContentLoaded", function(event) {

  // copy username/password when clicked
  for (var element of document.getElementsByClassName('tag')) {
    element.onclick = function(e) {
      e.preventDefault();
      document.getElementById('clipboard').value = e.srcElement.innerText;
      document.getElementById('clipboard').select();
      document.execCommand('copy');
    };
  }

});
