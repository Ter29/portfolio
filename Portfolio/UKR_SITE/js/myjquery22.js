$(function()
{
	
	//Елементи форми бібліотеки jQueryUI
	//Стилі елементів. Стиль кнопки. Метод button()

	$('#my_button,#clear_form').button();
	//Зміна стилів перемикачів. Метод checkboxradio()
	$('input[type=checkbox], input[type=radio]').checkboxradio();
	//Стилі для випадаючих списків
	$("#motoSelect, #daysSelect").selectmenu();
	$('#clear_form').click(function(event){
		$('#div_form_1 input=[type=ckeckbox]').removeAttr('checked');
		$('#div_form_1 input=[type=radio]').removeAttr('checked');
		$('input[type=text], textarea').val('');
		event.preventDefault();
	});
});
