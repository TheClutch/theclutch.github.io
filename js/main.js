function one() {
  $('.title').text('ClutchNightmare');
  setTimeout(function() {
      setTimeout(function() {
        $('.title').text("- and -");
      setTimeout(function() {
          changeImage('https://minotar.net/avatar/awesomebing1.png');
        $('.title').text("awesomebing1");
  setTimeout(function() {
    taDa();
      }, 3000);
}, 3000);
}, 3000);
}, 3000);
}
function changeImage(a) {
        document.getElementById("swag").src=a;
    }
function taDa() {
  $( "body div" ).removeClass( "title swag" );
}
