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

var searchTerm = "";
var query = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=OGnk9LWXYQF38vG8loDkmGDa2Fm7FJgN`;

var buttons = $("#buttons");

buttonsArray.forEach(function(item) {
  buttons.append(
    "<button class='btn btn-primary buttons'>" + item + "</button>"
  );
});
