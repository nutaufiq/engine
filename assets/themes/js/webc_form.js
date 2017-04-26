$(document).ready(function(){

	//delete lamp1_file
	$('#delete_lamp1_file').click(function(){

		var id = $(this).attr('data-id');

		$.post( base_url+'webcontrol/peraturanpajak/delete_pdf/lamp1_file', { id: id })
		.done(function( data ) {
		    $('#view_lamp1_file').hide();
		});

		return false;
	});

	//delete file_pdf
	$('#delete_file_pdf').click(function(){

		var id = $(this).attr('data-id');

		$.post( base_url+'webcontrol/peraturanpajak/delete_pdf/file_pdf', { id: id })
		.done(function( data ) {
		    $('#view_file_pdf').hide();
		});

		return false;
	});

});