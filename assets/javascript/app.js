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
var searchTerm = "";
var queryURL = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=OGnk9LWXYQF38vG8loDkmGDa2Fm7FJgN`;

buttonsArray.forEach(function(item) {
  buttonsDiv.append(
    "<button class='btn btn-primary buttons' id='thisbutton'>" +
      item +
      "</button>"
  );
});

var thisbutton = $("#thisbutton");

thisbutton.on("click", function(e) {
  e.preventDefault();
  $.ajax({
    query: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });
});
