$(function()
{
	//Методи розгортання та повільного відображення елементів. Функція зворотнього виклику.
//Метод fadeOut()- ховає елемент з ефектом прозорості
//Метод fadeIn()- відображає елемент з ефектом прозорості
$('.slide-text>h1').fadeOut(3000);
$('.slide-text>h1').fadeIn(3000);
//Метод fadeTo()- для неповного зникнення з ефектом прозорості(задається значення прозорості)
$(".head-moto-img").fadeTo('fast',0.05);
$(".head-moto-img").fadeTo(7000,1);
//Метод slideUp(час) - анімація згортання елементу
//Метод slideDown(час) - анімація розгортання елементу
//Функція зворотнього виклику виконується після виконання поточного ефекту на 100%.
//zavdannya 2.5
//Функція "сховати"
/*function zr(name_obj,t1,t2){
var obj=$(name_obj);
obj.slideUp(t1);
obj.slideDown(t2);
}
zr('#my_form',2000,1000);//виклик функції за ім'ям*/

function prozor(name_obj, time, opacity){
	
	var obj=$(name_obj);
	obj.fadeTo(time,opacity);
	obj.slideUp(time);
	obj.slideDown(time);
	obj.fadeTo(time,1);
}
prozor('#my_form',2000,0.3);
});
