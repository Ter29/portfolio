$(function()
{
/* //Додавання та видалення елементів на сторінці
	// 1.Додавання класу методом addClass()
	$('#about-moto').addClass('new');
	//2. Видалення класу методом removeClass();
	$('#about-moto').removeClass('new');
	//3.Метод toggleClass() виконує додавання та видалення класу згідно дії
	$('li').hover(
	function(){
		$(this).toggleClass('svitlo');
		
	}
	)
	//4.Вставка елементу(наприклад, html-коду) перед іншим елементом. Метод before()
	$('#about-moto').before('<p class="fon_yellow">абзац доданий за допомогою методу</p>');
//5.Вставка елементу за іншим елементом методом after()

$('#about-moto').after('<p class="fon_yellow">абзац доданий за допомогою методу after()</p>');

//6.Вставка елементу в інший елемент перед його вмістом. Метод prepend()
$('#about-moto').prepend('<p class="fon_yellow">абзац доданий за допомогою методу prepend()</p>');
//7.Вставка елементу в інший елемент після його вмісту. Метод append()
$('#about-moto').append('<p class="fon_yellow">абзац доданий за допомогою методу append()</p>'); */

//8.Копіювання елементу, який при потребі повертається в jquery. Метод clone(); 
 //$('.head-moto-img').click(function(){
 //$(this).clone().prependTo('.koshik-wrapper');
// $(.this).addClass('full-koshik');
//$(this).remove();	//9.Видалення елементу. Метод remove()

	
//}); 
//Цикл each() використовується для перебору елементів певного класу
/* $('top-nav li').each(
function(){
	alert($(this).text()); 
		
	}
	


);*/

//5.4,5.5
$('.head-moto-img').click(function()
{
	$(this).clone().appendTo('.koshik-wrapper');
	$(this).remove();
	$('.koshik-wrapper').addClass('full-koshik');
})

$('.head-moto-img').click(function(){
var n=$(this);
S('.koshik-wrapper-items').each(function(){
	if(n.attr('nomer')==$(this).attr('nomer'))
	{
		$(this).html(n.clone());
		n.remove();
		$('.koshik-wrapper').addClass('full-koshik');
}	

});

})	