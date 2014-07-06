$(function () {
  $('.backstretched-background').each(function() {
    var image_url = $(this).data('background');

    if (image_url) {
      $(this).backstretch(image_url);
    }
  });
});
