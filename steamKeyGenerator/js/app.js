function copyToClipboard(element) {
	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val($(element).val()).select();
	document.execCommand("copy");
	$temp.remove();
}

$("#generate").click(() => {
	let numbers = "0123456789";
	let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

	function randomNumber(min, max) {
		let random = Math.round(min + Math.random() * (max - min));
		return random;
	}

	function randomChar() {
		let value = randomNumber(1, 2);
		if (value == 1) {
			return numbers[randomNumber(0, 9)];
		} else if (value == 2) {
			return letters[randomNumber(0, 25)];
		}
	}

	let key = randomChar();

	for (let i = 1; i < 15; i++) {
		if (i == 5 || i == 10) {
			key += "-";
		}

		key += randomChar();
	}

	$("#key");
	$("#key").val(key);
});

$("#generate").click(() => {
	if ($("#copy div").text() == "Copied!") {
		$("#copy div")
			.fadeOut(300, () => {
				$("#copy div").text("Copy");
			})
			.fadeIn(300);
	}
});

$("#copy").click(() => {
	$("#copy div")
		.stop(true, true)
		.fadeOut(300, () => {
			$("#copy div").text("Copied!");
		})
		.fadeIn(300);

	copyToClipboard("#key");
});
