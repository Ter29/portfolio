$(function()
{
	var myicons = {
		header: "ui-icon-circle-arrow-e",
		activeHeader: "ui-icon-circle-arrow-s"
	};

	//Creating accordion
	$('#accordion').accordion({
		collapsible: true,
		icons: myicons,
		active: false,
		heightStyle: "content"
	});
});