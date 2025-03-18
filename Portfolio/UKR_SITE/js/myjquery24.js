$(function() {
 //alert();
 var count=0, sume=0;
 $('#draggable1').draggable({helper: 'clone'});
 $('#draggable2').draggable({helper: 'clone'});
 $('#draggable3').draggable({helper: 'clone'});
 $('#draggable4').draggable({helper: 'clone'});
 var $gallery=$('')
 $trash.droppable({
 	drop:function(event, ui){
 		$('.koshik-wrapper').addClass('ui-state-highlight')
 	}
 })
})





