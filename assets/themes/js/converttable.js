$(document).ready(function() {
	var count = 0;
	if($('.wi').length == '') {
		$('.doc-modal-pp td').wrapInner('<div class="wi"></div>');
	}
	$('.nocompare-content-pp').find('table').each(function() { 
		if($(this).parents('table').length != '') {
			$(this).wrap('<div class="tablewrap"></div>');
			$(this).css({'max-width': '1px'});
			//$(this).css({'width': '300px'});
			var thistableori = $(this);
			var thistable = thistableori[0];
			//convertToImage(thistableori,thistable);
		}
	});
	
	$('body').find('table').each(function() { 
		var border = $(this).attr('border');
		if(border != '1') {
			$(this).find('td').css({'font-size': '10px'});
		}
	});
	
	$('.nocompare-content-pp').find('p').each(function() { 
		$(this).css({'page-break-inside': 'auto'});
	});
	
	function convertToImage(thistableori,thistable) {
	  var resultDiv = document.getElementById("result");
	  html2canvas(thistable, {
		onrendered: function(canvas) {
		   var img = canvas.toDataURL("image/png");
		   thistableori.parents('.tablewrap').html('<img src="'+img+'" style="margin-bottom:10px;"/>');
		   //$('<img src="'+img+'" style="margin-bottom:10px;"/>').insertAfter(thistableori);
		   //$('<img src="'+img+'" style="margin-bottom:10px;"/>').insertAfter('.nocompare-content-pp');
		   //thistableori.remove();
		}
	  });
	}
});