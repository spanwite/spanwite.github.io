let result = $("#result");

$("button:eq(0)").click(() => {
	result.val(result.val().slice(0, -result.val().length));
});

$("button:eq(1)").click(() => {
	result.val(result.val().slice(0, -1));
});

$("button:eq(2)").click(() => {
	result.val(result.val() + "/");
});

$("button:eq(4)").click(() => {
	result.val(result.val() + "7");
});

$("button:eq(5)").click(() => {
	result.val(result.val() + "8");
});

$("button:eq(6)").click(() => {
	result.val(result.val() + "9");
});

$("button:eq(7)").click(() => {
	result.val(result.val() + "*");
});

$("button:eq(8)").click(() => {
	result.val(result.val() + "(");
});

$("button:eq(9)").click(() => {
	result.val(result.val() + "4");
});

$("button:eq(10)").click(() => {
	result.val(result.val() + "5");
});

$("button:eq(11)").click(() => {
	result.val(result.val() + "6");
});

$("button:eq(12)").click(() => {
	result.val(result.val() + "-");
});

$("button:eq(13)").click(() => {
	result.val(result.val() + ")");
});

$("button:eq(14)").click(() => {
	result.val(result.val() + "1");
});

$("button:eq(15)").click(() => {
	result.val(result.val() + "2");
});

$("button:eq(16)").click(() => {
	result.val(result.val() + "3");
});

$("button:eq(17)").click(() => {
	result.val(result.val() + "+");
});

$("button:eq(18)").click(() => {
	result.val(result.val() + "%");
});

$("button:eq(19)").click(() => {
	result.val(result.val() + "0");
});

$("button:eq(20)").click(() => {
	result.val(result.val() + ".");
});

$("button:eq(21)").click(() => {
	try {
		question = $("#result").val().toString();
		result.val(result.val().slice(0, -result.val().length));
		result.val(eval(question).toString().substr(0, 15));
	} catch (err) {
		result.val(err);
	}
});

$("button:eq(3)").click(() => {
	if ($(".buttons__main_other").css("display") == "none") {
		$(".buttons__main_other").fadeIn(500);
	} else if ($(".buttons__main_other").css("display") !== "none") {
		$(".buttons__main_other").fadeOut(500);
	}
});
