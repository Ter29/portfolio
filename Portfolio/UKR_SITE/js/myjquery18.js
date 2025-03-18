$(function () {

/*Фільтрація елментів*/

// Method first() - searching first element
$(':header').first();

// Method last() - searching last element
$(':header').last();

//Method eq() - getting element by index
$(':header').eq(1);

//Method css() allow chanhe style
$(':header').first().css({"background-color":'grey','font-size':'400%'}); //change few characteristics

//Method prop() allow to work with characteristics of shape
// For example, set flag for second element check box
$("input[type='checkbox']").eq(1).prop('checked',true);
//For example, returning parameter value
$("input[type='checkbox']").eq(1).prop('checked');
//Method indexOf() - using for checking entering the string
var position=$('#email').val().indexOf('Приклад:');
if(position>=0)
{
	alert('Текст є в полі');
}
else{
	alert('Текста немає в полі');
}
$("input[type='radio']").eq(0).prop('checked',true);


var value1=$('#radio').eq(0).prop('checked');

if(value1=true)
{
	$('#radio').css("background-color",'red');
}
else
{
	$('#radio').css("background-color",'white');
}


var position=$('#email').val().indexOf('Приклад:');
if(position>=0)
{
	$('#email').css("background-color",'red');
}
else{
	$('#email').css("background-color",'green');
}

});