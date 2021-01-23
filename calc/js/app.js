let result = $("#result");
let question = "";

$("button:eq(0)").click(() => {
	result.val(result.val().slice(0, -result.val().length));
	question = question.slice(0, -question.length);
});

$("button:eq(1)").click(() => {
	result.val(result.val().slice(0, -1));
	question = question.slice(0, -1);
});

$("button:eq(2)").click(() => {
	result.val(result.val() + "÷");
	question += "/";
});

$("button:eq(3)").click(() => {
	result.val(result.val() + "7");
	question += "7";
});

$("button:eq(4)").click(() => {
	result.val(result.val() + "8");
	question += "8";
});

$("button:eq(5)").click(() => {
	result.val(result.val() + "9");
	question += "9";
});

$("button:eq(6)").click(() => {
	result.val(result.val() + "×");
	question += "*";
});

$("button:eq(7)").click(() => {
	result.val(result.val() + "4");
	question += "4";
});

$("button:eq(8)").click(() => {
	result.val(result.val() + "5");
	question += "5";
});

$("button:eq(9)").click(() => {
	result.val(result.val() + "6");
	question += "6";
});

$("button:eq(10)").click(() => {
	result.val(result.val() + "-");
	question += "-";
});

$("button:eq(11)").click(() => {
	result.val(result.val() + "1");
	question += "1";
});

$("button:eq(12)").click(() => {
	result.val(result.val() + "2");
	question += "2";
});

$("button:eq(13)").click(() => {
	result.val(result.val() + "3");
	question += "3";
});

$("button:eq(14)").click(() => {
	result.val(result.val() + "+");
	question += "+";
});

$("button:eq(15)").click(() => {
	result.val(result.val() + "0");
	question += "0";
});

$("button:eq(16)").click(() => {
	result.val(result.val() + ".");
	question += ".";
});

$("button:eq(18)").click(() => {
	if ($(".buttons_other button:eq(2)").css("display") == "none") {
		$(".buttons_other button:eq(1)").fadeIn(500);
		$(".buttons_other button:eq(2)").fadeIn(500);
		$(".buttons_other button:eq(3)").fadeIn(500);
	} else if ($(".buttons_other").css("display") !== "none") {
		$(".buttons_other button:eq(1)").fadeOut(500);
		$(".buttons_other button:eq(2)").fadeOut(500);
		$(".buttons_other button:eq(3)").fadeOut(500);
	}
});

$("button:eq(19)").click(() => {
	result.val(result.val() + "(");
	question += "(";
});

$("button:eq(20)").click(() => {
	result.val(result.val() + ")");
	question += ")";
});

$("button:eq(21)").click(() => {
	result.val(result.val() + "%");
	question += "%";
});

$("button:eq(17)").click(() => {
	try {
		question = question.toString();
		result.val(result.val().slice(0, -result.val().length));
		result.val(eval(question).toString().substr(0, 15));
	} catch (err) {
		result.val(err);
	}
});
