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

  for (var element of document.querySelectorAll('[data-url]')) {
    element.onclick = function(e) {
      e.preventDefault();
      window.location = this.getAttribute('data-url');
    };
  }

});

window.screenshot = function() {
  for (var element of document.getElementsByClassName('tag')) {
    if (element.className == 'tag is-white') {
      element.innerHTML = 'Username';
    }
    if (element.className == 'tag is-dark') {
      element.innerHTML = 'Password';
    }
  }
}
