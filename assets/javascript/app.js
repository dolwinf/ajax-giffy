var buttonsArray = [
  "Cat",
  "Dog",
  "Goku",
  "Arnold",
  "Mike Tyson",
  "Ricky Pointing",
  "Supercar",
  "Nasa",
  "Games",
  "Ghost",
  "Relaxed",
  "Beach"
];

var buttonsDiv = $("#buttons");

buttonsArray.forEach(function(item) {
  buttonsDiv.append(
    "<button class='btn btn-primary buttons' id='" +
      item +
      "'>" +
      item +
      "</button>"
  );
});

$("button").on("click", function(e) {
  e.preventDefault();
  var buttonName = $(this).attr("id");
  console.log(buttonName);
  var queryURL = `http://api.giphy.com/v1/gifs/search?q=${buttonName}&api_key=OGnk9LWXYQF38vG8loDkmGDa2Fm7FJgN`;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var imgData = response.data;
    imgData.forEach(function(item) {
      $("#images").append("<img src='" + item.images.fixed_height.url + "' />");
    });
  });
});
