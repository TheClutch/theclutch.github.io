function setName(name) {
  $('.title').html = name;
}
function one() {
  setName('ClutchNightmare');
  setInterval(two, 3000);
}
function two() {
  setName("- and -");
  setInterval(three, 3000);
}
function three() {
  setName("awesomebing1");
  $(".avatar").attr('src', 'https://minotar.net/avatar/awesomebing1.png');
  setInterval(taDa, 3000);
}
function taDa() {
  
}
