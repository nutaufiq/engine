$(document).ready(function(){

	//saran
	$('#form-saran').submit(function(){
		
		$('#btn-saran').attr('disabled', 'disabled');
		$('#btn-saran').html('Tunggu...');

		$this = $(this);

		$.post($(this).attr('action'), $(this).serialize(), function(data)
		{
			if(data.st == 0)
			{
				$('#btn-saran').removeAttr('disabled');
				$('#btn-saran').html('Kirim');

		 		$('#msg-saran').html(data.msg);
			}
				
			if(data.st == 1)
			{
				$('#btn-saran').removeAttr('disabled');
				$('#btn-saran').html('Kirim');

		  		$('#msg-saran').html(data.msg);

				$('#feedback_content').val('');
			}
				
		}, 'json');

		return false;			
   	});

	//forgot password
	$('#form-forgotpassword').submit(function(){
		
		$('#btn-forgotpassword').attr('disabled', 'disabled');
		$('#btn-forgotpassword').html('Tunggu...');

		$this = $(this);

		$.post($(this).attr('action'), $(this).serialize(), function(data)
		{
			if(data.st == 0)
			{
				$('#btn-forgotpassword').removeAttr('disabled');
				$('#btn-forgotpassword').html('Kirim');

		 		$('#msg-forgotpassword').html(data.msg);
			}
				
			if(data.st == 1)
			{
				$('#btn-forgotpassword').html('Sukses');

		  		$('#msg-forgotpassword').html(data.msg);

				setTimeout(
					function()
					{
						$('#modal-lupapassword').modal('hide');

						$('#btn-forgotpassword').removeAttr('disabled');
						$('#btn-forgotpassword').html('Kirim');

						$('#msg-forgotpassword').html('');

						$('#f_user_email').val('');
					}
					, 2000
				);
			}
				
		}, 'json');

		return false;			
   	});

	//signin
	$('#form-signin').submit(function(){
		
		$('#btn-signin').attr('disabled', 'disabled');
		$('#btn-signin').html('Tunggu...');

		$this = $(this);

		$.post($(this).attr('action'), $(this).serialize(), function(data)
		{
			if(data.st == 0)
			{
				$('#btn-signin').removeAttr('disabled');
				$('#btn-signin').html('Masuk');

		 		$('#msg-signin').html(data.msg);
			}
				
			if(data.st == 1)
			{
		  		$('#msg-signin').html(data.msg);

		  		var redirect = $this.attr('redirect');

		  		if((redirect != "" || redirect != "undefine") && redirect != base_url+'home')
		  		{
			  		window.location.href = redirect;
				}
				else
				{
					window.location.href = base_url+'peraturan-pajak';
				}
			}
				
		}, 'json');

		return false;			
   	});

	//signup
	$('#form-signup').submit(function(){
		
		$('#btn-signup').attr('disabled', 'disabled');
		$('#btn-signup').html('Tunggu...');

		$this = $(this);

		$.post($(this).attr('action'), $(this).serialize(), function(data)
		{
			if(data.st == 0)
			{
				$('#btn-signup').removeAttr('disabled');
				$('#btn-signup').html('Daftar');

		 		$('#msg-signup').html(data.msg);
			}
				
			if(data.st == 1)
			{
		  		$('#msg-signup').html(data.msg);

		  		var redirect = $this.attr('redirect');

		  		if(redirect != "" || redirect != "undefine")
		  		{
			  		window.location.href = redirect;
				}
				else
				{
					window.location.href = base_url+'home';
				}
			}
				
		}, 'json');

		return false;			
   	});

   	//settings
	$('#form-settings').submit(function(event){
		
		$('#btn-settings').attr('disabled', 'disabled');
		$('#btn-settings').html('Tunggu...');

		$this = $(this);

		//disable the default form submission
		event.preventDefault();
		 
		//grab all form data  
		var formData = new FormData($(this)[0]);
		 
		$.ajax({
			url: $(this).attr('action'),
		    type: 'POST',
		    data: formData,
		    async: false,
		    cache: false,
		    contentType: false,
		    processData: false,
		    success: function (data) {
		    	var obj = jQuery.parseJSON(data);

		      	if(obj.st == 0)
				{
					$('#btn-settings').removeAttr('disabled');
					$('#btn-settings').html('Simpan');

			 		$('#msg-settings').html(obj.msg);
				}
					
				if(obj.st == 1)
				{
					$('#btn-settings').removeAttr('disabled');
					$('#btn-settings').html('Simpan');

			  		$('#msg-settings').html(obj.msg);
				}
		    }
		});

		return false;			
   	});

   	//peraturan pajak
	$('#form-search').submit(function(){
		
		$('#btn-search').attr('disabled', 'disabled');
		$('#btn-search').html('Tunggu...');

		$this = $(this);

		$.post($(this).attr('action'), $(this).serialize(), function(data)
		{
			if(data.st == 0)
			{
				$('#btn-search').removeAttr('disabled');
				$('#btn-search').html('Cari Dokumen');

		 		$('#msg-search').html(data.msg);
			}
				
			if(data.st == 1)
			{
		  		$('#msg-search').html(data.msg);

		  		var redirect = data.url;

		  		if(redirect != "" || redirect != "undefine")
		  		{
			  		window.location.href = redirect;
				}
				else
				{
					window.location.href = base_url+'home';
				}
			}

			if(data.st == 2)
			{
				$('#btn-search').removeAttr('disabled');
				$('#btn-search').html('Cari Dokumen');
				
				$('.doc-modal').modal('hide');
          		$('.modal-login').modal('show');
			}
				
		}, 'json');

		return false;			
   	});

   	//putusan pengadilan
   	$('#form-search-pp').submit(function(){
		
		$('#btn-search-pp').attr('disabled', 'disabled');
		$('#btn-search-pp').html('Tunggu...');

		$this = $(this);

		$.post($(this).attr('action'), $(this).serialize(), function(data)
		{
			if(data.st == 0)
			{
				$('#btn-search-pp').removeAttr('disabled');
				$('#btn-search-pp').html('Cari Dokumen');

		 		$('#msg-search-pp').html(data.msg);
			}
				
			if(data.st == 1)
			{
		  		$('#msg-search-pp').html(data.msg);

		  		var redirect = data.url;

		  		if(redirect != "" || redirect != "undefine")
		  		{
			  		window.location.href = redirect;
				}
				else
				{
					window.location.href = base_url+'home';
				}
			}

			if(data.st == 2)
			{
				$('#btn-search-pp').removeAttr('disabled');
				$('#btn-search-pp').html('Cari Dokumen');
				
				$('.doc-modal').modal('hide');
          		$('.modal-login').modal('show');
			}
				
		}, 'json');

		return false;			
   	});

   	//mahkamah agung
   	$('#form-search-ma').submit(function(){
		
		$('#btn-search-ma').attr('disabled', 'disabled');
		$('#btn-search-ma').html('Tunggu...');

		$this = $(this);

		$.post($(this).attr('action'), $(this).serialize(), function(data)
		{
			if(data.st == 0)
			{
				$('#btn-search-ma').removeAttr('disabled');
				$('#btn-search-ma').html('Cari Dokumen');

		 		$('#msg-search-ma').html(data.msg);
			}
				
			if(data.st == 1)
			{
		  		$('#msg-search-ma').html(data.msg);

		  		var redirect = data.url;

		  		if(redirect != "" || redirect != "undefine")
		  		{
			  		window.location.href = redirect;
				}
				else
				{
					window.location.href = base_url+'home';
				}
			}

			if(data.st == 2)
			{
				$('#btn-search-ma').removeAttr('disabled');
				$('#btn-search-ma').html('Cari Dokumen');
				
				$('.doc-modal').modal('hide');
          		$('.modal-login').modal('show');
			}
				
		}, 'json');

		return false;			
   	});

   	//folder
	$('#form-folder').submit(function(){
		
		$('#btn-folder').attr('disabled', 'disabled');
		$('#btn-folder').html('Tunggu...');

		$this = $(this);

		$.post($(this).attr('action'), $(this).serialize(), function(data)
		{
			if(data.st == 0)
			{
				$('#btn-folder').removeAttr('disabled');
				$('#btn-folder').html('Simpan');

		 		$('#msg-folder').html(data.msg);
			}
				
			if(data.st == 1)
			{
		  		$('#msg-folder').html(data.msg);

		  		var redirect = data.url;

		  		if(redirect != "" || redirect != "undefined")
		  		{
			  		window.location.href = redirect;
				}
				else
				{
					window.location.href = base_url+'user/favourite';
				}
			}
				
		}, 'json');

		return false;			
   	});

});