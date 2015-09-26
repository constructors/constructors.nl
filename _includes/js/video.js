$(function () {
  var $modal_video = $('#modal-video');
  var $modal_iframe = $modal_video.find('iframe');

  // This does autoplay on localhost for security reasons
  $modal_video.on('shown.bs.modal', function () {
    $modal_iframe.attr('src', $modal_iframe.data('src'));
  });

  $modal_video.on('hidden.bs.modal', function () {
    $modal_iframe.attr('src', '');
  });
});
