$(function()
{
	/*//	click()- клік
	//dbclick()- подвійний клік
	$('.slide-btn').click(function(){
		alert('Натиснутий елемент');
	})
	$('').resize(function(){
	$('').text(x+=1);
})
$('.features-grids').click(function(){
$('.head-moto-img').toggle(3000);

})
*/
$('.head-moto-img').click(function(){
$(this).fadeToggle(2000);
})

$('.header').mouseenter(function(){
$('.slide-text').slideUp();
})
$('.header').mouseenter(function(){
$('.slide-text').slideDown();
})
});
