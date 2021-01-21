// document.onkeydown = function (e) {
// 	if ((e.ctrlKey || e.shiftKey) && (e.keyCode === 73 || e.keyCode === 85)) {
// 		return false;
// 	} else if (e.keyCode === 123) {
// 		return false;
// 	}
// 	return true;
// };

$(document).ready(function () {
	$(document).bind("contextmenu", function (e) {
		return false;
	});
});

function renderTime() {
	const date = new Date();
	const now = new Date();
	const christmas = new Date(date.getFullYear() + 1, 0, 1, 0, 0, 0, 0);
	const timeTo = christmas - now;

	let days = Math.floor(timeTo / (1000 * 3600 * 24));
	let hours = Math.floor((timeTo % (1000 * 3600 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((timeTo % (1000 * 3600)) / (1000 * 60));
	let seconds = Math.floor((timeTo % (1000 * 60)) / 1000);

	if (seconds > 10) {
		var slice = seconds.toString().slice(1);
		if (seconds == 11 || seconds == 12 || seconds == 13 || seconds == 14) {
			$("#second").text("Секунд");
		} else if (slice == 4 || slice == 3 || slice == 2) {
			$("#second").text("Секунды");
		} else if (slice == 1) {
			$("#second").text("Секунда");
		} else {
			$("#second").text("Секунд");
		}
	} else if (seconds < 10) {
		if (seconds == 4 || seconds == 3 || seconds == 2) {
			$("#second").text("Секунды");
		} else if (seconds == 1) {
			$("#second").text("Секунда");
		} else {
			$("#second").text("Секунд");
		}
	}

	if (minutes > 10) {
		var slice = minutes.toString().slice(1);
		if (minutes == 14 || minutes == 13 || minutes == 12 || minutes == 11) {
			$("#minut").text("Минут");
		} else if (slice == 4 || slice == 3 || slice == 2) {
			$("#minut").text("Минуты");
		} else if (slice == 1) {
			$("#minut").text("Минута");
		} else {
			$("#minut").text("Минут");
		}
	} else if (minutes < 10) {
		if (minutes == 0) {
			$("#minutes").remove();
			$("#minut").remove();
		} else if (minutes == 4 || minutes == 3 || minutes == 2) {
			$("#minut").text("Минуты");
		} else if (minutes == 1) {
			$("#minut").text("Минута");
		} else {
			$("#minut").text("Минут");
		}
	}

	// if value == 0
	if (hours == 0) {
		$("#hours").remove();
		$("#hour").remove();
	}

	if (days === 0) {
		$("#days").remove();
		$("#day").remove();
	}

	if (days === 0) {
		$("#days").remove();
		$("#day").remove();
	}

	if (hours > 10) {
		var slice = hours.toString().slice(1);
		if (hours == 10 || hours == 11 || hours == 12 || hours == 13 || hours == 14) {
			$("#hour").text("Часов");
		} else if (slice == 4 || slice == 3 || slice == 2) {
			$("#hour").text("Часа");
		} else if (slice == 1) {
			$("#hour").text("Час");
		} else {
			$("#hour").text("Часов");
		}
	} else if (hours < 10) {
		if (hours == 4 || hours == 3 || hours == 2) {
			$("#hour").text("Часа");
		} else if (hours == 1) {
			$("#hour").text("Час");
		} else {
			$("#hour").text("Часов");
		}
	}

	if (days > 100) {
		var slice2x = days.toString().slice(2);
		var slice = days.toString().slice(1);

		if (slice2x == 1) {
			$("#day").text("День");
		} else if (slice == 11 || slice == 12 || slice == 13 || slice == 14) {
			$("#day").text("Дней");
		} else if (slice2x == 4 || slice2x == 3 || slice2x == 2) {
			$("#day").text("Дня");
		}
	} else if (days < 100) {
		var slice = days.toString().slice(1);
		console.log(slice);

		if (days == 11 || days == 12 || days == 13 || days == 14) {
			$("#day").text("Дней");
		} else if (slice == 1 || days == 1) {
			$("#day").text("День");
		} else if (slice == 4 || slice == 3 || slice == 2 || days == 4 || days == 3 || days == 2) {
			$("#day").text("Дня");
		}
	}

	// if (days === 4 || days === 3 || days === 2) {
	// 	$("#day").text("Дня");
	// } else if (days == 1) {
	// 	$("#day").text("День");
	// } else {
	// 	$("#day").text("Дней");
	// }

	$("#days").text(days);
	$("#hours").text(hours);
	$("#minutes").text(minutes);
	$("#seconds").text(seconds);

	setTimeout("renderTime()", 300);
}
renderTime();
