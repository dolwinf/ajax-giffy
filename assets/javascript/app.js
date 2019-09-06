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
var searchButton = $("#searchButton");

searchButton.on("click", function(e) {
  e.preventDefault();
  var searchText = $("#searchbar")
    .val()
    .trim();

  buttonsDiv.append(
    "<button class='btn btn-primary buttons' id='" +
      searchText +
      "'>" +
      searchText +
      "</button>"
  );

  $("input").val("");
  listen();
});

buttonsArray.forEach(function(item) {
  buttonsDiv.append(
    "<button class='btn btn-primary buttons' id='" +
      item +
      "'>" +
      item +
      "</button>"
  );
});

listen();
function listen() {
  $("button").on("click", function(e) {
    e.preventDefault();
    var buttonName = $(this).attr("id");

    var queryURL = `http://api.giphy.com/v1/gifs/search?q=${buttonName}&api_key=OGnk9LWXYQF38vG8loDkmGDa2Fm7FJgN&limit=5`;
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      var imgData = response.data;
      console.log(imgData);
      imgData.forEach(function(item) {
        var eachImage =
          "<img src='" +
          item.images.fixed_height.url +
          "' still-image='' gif-image='' state='animate'/>";
        $("#images").prepend(eachImage);
      });
      $("img").on("click", function() {
        state = $(this).attr("state");
        if (state === "animate") {
          $(this).attr("src", imgData[0].images.fixed_height_still.url);
        }
      });
    });
  });
}
