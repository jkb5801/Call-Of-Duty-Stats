$(document).ready(() => {
  var category;
  $(".selector").change(() => {
    category = $("#mySelect option:selected").text();
    $(`.weapon`).children("div").addClass("hide");
    $(`.weapon>#${category}`).removeClass("hide");
    if (category === "All") {
      $(`.weapon`).children("div").removeClass("hide");
    }
  });
  $(".search-btn").click(() => {
    var query = $(".search").val();
    if (category !== "All") {
      $(`.weapon>#${category}`).addClass("hide");
      $(`.weapon>.${query}`).removeClass("hide");
      $(".search").val("");
    }
    if (category == null) {
      $(`.weapon`).children("div").addClass("hide");
      $(`.weapon>.${query}`).removeClass("hide");
      $(".search").val("");
    } else {
      $(`.weapon`).children("div").addClass("hide");
      $(`.weapon>.${query}`).removeClass("hide");
      $(".search").val("");
    }
  });
});
