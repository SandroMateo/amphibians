$(function() {
  $("form").submit(function(event){
    var type = $("#amphibian").val();
    if (type === "1") {
        window.location.assign("https://en.wikipedia.org/wiki/Axolotl");
    } else if (type === "2") {
        window.location.assign("https://en.wikipedia.org/wiki/Chinese_giant_salamander");
    } else {
        window.location.assign("http://www.ourbreathingplanet.com/black-rain-frog/");
    }

    event.preventDefault();
  });
});
