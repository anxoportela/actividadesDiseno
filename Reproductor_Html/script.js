$(document).ready(function () {
  $("#sel").change(function () {
    var videoValue = $(this).val();

    if (videoValue == 1) {
      $("#clip").attr("src", "vids/Forest.mp4");
      $("#clip").attr("type", "video/mp4");
    } else if (videoValue == 2) {
      $("#clip").attr("src", "vids/Forest.ogv");
      $("#clip").attr("type", "video/ogv");
    } else {
      $("#clip").attr("src", "vids/Forest.webm");
      $("#clip").attr("type", "video/webm");
    }
  });
});

$(function () {
  var video = $("#clip")[0];

  $("#play").click(function () {
    video.play();
  });

  $("#pause").click(function () {
    video.pause();
  });

  $("#stop").click(function () {
    video.pause();
    video.currentTime = 0;
  });

  $("#rw").click(function () {
    video.currentTime -= 1;
  });

  $("#ff").click(function () {
    video.currentTime += 1;
  });

  $("#volmen").click(function () {
    if (video.volume > 0.1) {
      video.volume = video.volume - 0.1;
    } else {
      alert("Volumen al mínimo");
    }
  });

  $("#volmas").click(function () {
    if (video.volume < 1) {
      video.volume = video.volume + 0.1;
    } else {
      alert("Volumen al máximo");
    }
  });
});
