console.log("Hello World, Welcome to My Portolio Website!")

function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  x.className += ' responsive';
}
function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}
