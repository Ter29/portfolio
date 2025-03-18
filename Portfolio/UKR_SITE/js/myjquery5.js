$(function()
{
	/*Додавання та видалення елементів*/
		//Додавання класу методом addClass()
	/*$('#about-moto').addClass('new');
		//Видалення класу методом removeClass()
	$('#about-moto').removeClass('new');
		//Метод toggleClass() додвання та видалення класу згідно дії
	$('li').hover(
	function(){
		$(this).toggleClass('svitlo');
	}
	)*/
	//Вставка елементу перед іншим before()
	$('#about-moto').before('<p class="fon_yellow">Абзац доданий за допомогою методу before</p>')
	//Вставка елементу пілся іншого after()
	$('#about-moto').after('<p class="fon_yellow">Абзац доданий за допомогою методу after()</p>')

	/*$('.head-moto-img').click(function()
	{
		$(this).clone().appendTo('.koshik-wrapper');
		$(this).remove();
		$('.koshik-wrapper').addClass('full-koshik');
	}
	)*/

	/*$('.head-moto-img').click(function(){
		var n=$(this);
		
		$('.koshik-wrapper-items').each(function(){
		if(n.attr('nomer')==$(this).attr('nomer'))
		{
		$(this).html(n.clone());
		n.remove();
		$('.koshik-wrapper').addClass('full-koshik');
		}

	})
	})*/

	function Sum(){
var count=0;
var suma=0;
$('.koshik-wrapper>.head-moto-img').each(
function(){
	count++;
	suma+=parseInt($(this).attr('price'));
	
}
)
$('#suma').html('Всього мотоциклів : '+count+' на суму '+suma+' y.o. ');
if(count>0){
$('.koshik-wrapper').addClass('full-koshik');}
	else
	{$('.koshik-wrapper').removeClass('full-koshik');}
}
$('.head-moto-img').click(function(){
	$('.koshik-wrapper').append($(this).clone().click(function(){
		$(this).remove();
	}));
	Sum();
})
	

	//Method height()


$('.head-moto-img').click(function(){
	
	var title=$(this).attr('title');
	var width=$(this).width();
	var height=$(this).height();
	if (title=='')
	{
		$(this).width(width*1.5).height(height*1.5);
		$(this).attr('title','1');
		
	}
	else{
	$(this).width(width/1.5).height(height/1.5);
		$(this).attr('title','');
	
	}
})

});