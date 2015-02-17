function setName(name) {
  $('.title').html = name;
}
function beginShow() {
setInterval(setName('ClutchNightmare'), 3000);
setInterval(setName("- and -"), 3000);
setInterval(setName('awesomebing1'), 3000);
$(".avatar").attr('src', 'https://minotar.net/avatar/awesomebing1.png');
}
