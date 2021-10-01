(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space
document.addEventListener('DOMContentLoaded', function () {
  let devfolioOptions = {
      buttonSelector: '#devfolio-apply-now',
      key: 'hackthebuild',
  }

  let script = document.createElement('script');
  script.src = "https://apply.devfolio.co";
  document.head.append(script);

  script.onload = function () {
      new Devfolio(devfolioOptions);
  }

  script.onerror = function () {
      document.querySelector(devfolioOptions.buttonSelector).addEventListener('click', function () {
          window.location.href = 'https://devfolio.co/external-apply/' + devfolioOptions.key;
      });
  }
});

var countDownDate = new Date("Oct 02, 2021 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Register Now";
  }
}, 1000);
