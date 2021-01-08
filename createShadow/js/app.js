function shadow({ font_size, offset_x, offset_y, blur, rgba, textColor, textColorRgba, textOpacity }) {
	let styles = `${offset_x}px ${offset_y}px ${blur}px ${rgba}`;
	$("h1").css({
		"text-shadow": styles,
		color: textColorRgba,
	});
	$("#resultRgba").val(`text-shadow: ${offset_x}px ${offset_y}px ${blur}px ${rgba}; \nfont-size: ${font_size}px; \ncolor: ${textColorRgba};`);
}

shadow({
	font_size: 100,
	offset_x: 5,
	offset_y: 5,
	blur: 0,
	opacity: 1,
	color: "#5246ff",
	rgba: "rgba(82, 70, 255, 1)",
	textColor: "#ffffff",
	textColorRgba: "rgb(255, 255, 255, 1)",
	textOpacity: 1,
});

$(document).on("input change", "input", () => {
	let font_size = $("#font_size").val();
	let offset_x = $("#offset_x").val();
	let offset_y = $("#offset_y").val();
	let blur = $("#blur").val();
	let opacity = $("#opacity").val();
	let color = $('input[type="color"]').val() + "";
	var rgba = $("#rgba").val();
	var textColor = $("#textColor").val() + "";
	let textOpacity = $("#textOpacity").val();

	function convertColor(coLor) {
		if (coLor.substring(0, 1) == "#") {
			coLor = coLor.substring(1);
		}

		let r = parseInt(coLor.substring(0, 2), 16);
		let g = parseInt(coLor.substring(2, 4), 16);
		let b = parseInt(coLor.substring(4), 16);

		var rgbColor = `rgba(${r}, ${g}, ${b})`;

		return rgbColor;
	}

	var textColorRgba = `${convertColor(textColor).slice(0, -1)}, ${textOpacity})`;
	var rgba = `${convertColor(color).slice(0, -1)}, ${opacity})`;

	$("h1").css({
		fontSize: `${font_size}px`,
	});

	$("#spanFontSize").text(`[${font_size}px]`);
	$("#spanOffsetX").text(`[${offset_x}px]`);
	$("#spanOffsetY").text(`[${offset_y}px]`);
	$("#spanBlur").text(`[${blur}px]`);
	$("#spanShadowOpacity").text(`[${opacity}]`);
	$("#spanTextOpacity").text(`[${textOpacity}]`);

	shadow({
		font_size: font_size,
		offset_x: offset_x,
		offset_y: offset_y,
		blur: blur,
		opacity: opacity,
		color: color,
		rgba: rgba,
		textColor: textColor,
		textColorRgba: textColorRgba,
		textOpacity: textOpacity,
	});
});
