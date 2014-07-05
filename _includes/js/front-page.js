$(function () {
  function shuffle (array) {
    // Fisher-Yates shuffle
    var tempValue, rndIndex, curIndex = images.length;

    while (0 !== curIndex) {
      rndIndex = Math.floor(Math.random() * curIndex);
      curIndex -= 1;
      tempValue = images[curIndex];
      array[curIndex] = array[rndIndex];
      array[rndIndex] = tempValue;
    }
    return array;
  }

  var images = new Array();
  var nr_images = 10;
  for (var i = 0; i < nr_images; i++) {
    images[i] = '/img/eindhoven/eindhoven-'+i.toString()+'.jpg';
  }
  shuffle(images);

  // We're on desktop
  if ($('body.front-page .navbar button.navbar-toggle').is(':hidden')) {
    $('.backdrop').backstretch(images, {fade: 1.5e3, duration: 5e3});
  } else { // We're on mobile
    $('.backdrop').backstretch(images[0]);
  }
});
