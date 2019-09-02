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

var buttons = $("#buttons");

buttonsArray.forEach(function(item) {
	buttons.append(
		"<button class='btn btn-primary buttons'>" + item + "</button>"
	);
});
