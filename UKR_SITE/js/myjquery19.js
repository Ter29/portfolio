$(function()
{
//18.5
$('#my_form').click(function()
{
InfoMoto();
})
function InfoMoto()
{
var moto=$('#motoSelect option:selected').text();	
var days=$('#daysSelect option:selected').text();
var email=$('#email').val();
var helmet='',trunk='',clothes='',insurance='';
if ($('input[type=checkbox]').eq(0).prop('checked')==true)
{
	helmet=$('label[for="shlem"]').text();
}
if ($('input[type=checkbox]').eq(1).prop('checked')==true)
{
	trunk=$('label[for="bag"]').text();
}
if ($('input[type=checkbox]').eq(2).prop('checked')==true)
{
	clothes=$('label[for="od"]').text();
}
if ($('#inch_yes').prop('checked')==true){
	insurance='Так';
}
else{
	insurance='Ні';
}
$('textarea').text(moto+' на '+days+' днів\n'+email+'\nАксесуари: '+helmet+'  '+trunk+' '+clothes+'\nСтраховка: '+insurance);
}

//Creating animations
$('.slide-btn').animate({width: '500px',opacity:'0.5'},2000);
//parameters of animations:
$('.m6').animate({marginRight: '200px', fontSize:'20px'},'slow');
});