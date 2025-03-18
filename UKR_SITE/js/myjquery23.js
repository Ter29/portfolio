$(function () {
	var handle=$('#custom-handle');
	$('#slider').slider(
	{
		create: function(){
			handle.text($(this).slider('value'));
		},
		slide:function(event,ui) {
			handle.text(ui.value);
		$('#mytextarea').text(ui.value+' мотоциклів');	
		}
	})
	var dateForma='mm/dd/yy'
	from=$('#from')
	.datepicker({
		defaultDate:'',
		changeMonth:true,
		numberOfMonth:1
	})
	.on('change',function(){
		to.datepicker('option','minDate',getDate(this));
	}),
	to=$('#to').datepicker({
		defaultDate:'+1',
		changeMonth:true,
		numberOfMonth:1
	})
	.on('change',function(){
		to.datepicker('option','maxDate',getDate(this));
	});
	function getDate(element)
	{
		var date;
		try{
			date=$.datepicker.parseDate(dateFormat,elemnt.value);
		}
		catch(error)
		{
			date=null;
		}
		return date;
	}
	var days=0;
	$('#to').change(function(){
	var Date1=new Date($('.datepicker:first').val());
	var Date2=new Date($('.datepicker:last').val());
	var Days=Math.floor(((Date2.getTime() - Date1.getTime())/(1000*60*60*24))+1);
	days=Days;
	$('#mytextarea').text(function(i,orig){
		
		return Days+' днів'+' '+ orig;
	})
});

	$("#slider-range").slider({
		range: true,
		min:10,
		max:1000,
		values:[50,400],
		slide:function(event,ui){
			$('#amount').val(ui.values[0]+' - '+ui.values[1]+' км');	
	}
		
});
	$('#amount').val($('#slider-range').slider('values',0)+' - '+$('#slider-range').slider('values',1)+ ' км');

	/*$('#progressbar').progressbar({
		value:0
	})
	$('#opros :radio').change(function(){
		var chRadio=$('#opros :radio:checked').size();
		$('#progressbar').progressbar({
			value:chRadio*20
		});
		var count=$('#opros div[id*=radio]').size();
	});
	$('#answerCount').text('Дано відповідей '+chRadio+' з '+count);
	$('#progressbar').bind('progressbarchange',function(event,ui){
		var selector='#'+this.id+'>div';
		var value=this.getAttribute('aria-valuenow');
		if(value<50)
		{
			$(selector).css({'background':'Red'});
		}
		else if(value>=60 && value<100){
			$(selector).css({'background':'Yellow'});
		}
 		else if(value==100){
 			$(selector).css({'background':'Green'});
 		}
	});*/
var avilableTags=['Вінницька','Волинська'];
$('#tags').autocomplete({
	source:avilableTags
})
$('#dialog').dialog({
	autoOpen:false;
});
$('#my_button').on('click',function(){
	$('#dialog').dialog('open');
})
});



