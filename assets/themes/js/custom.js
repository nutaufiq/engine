function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#image_upload_preview').hide();
            $('#image_upload_preview').attr('src', e.target.result);
            $('#image_upload_preview_bg').css('width', '104px');
            $('#image_upload_preview_bg').css('height', '104px');
            $('#image_upload_preview_bg').css('margin', '0 auto');
            $('#image_upload_preview_bg').css('background-size', 'cover');
            $('#image_upload_preview_bg').css('background-image', 'url(' + e.target.result + ')');
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#setting-editfoto").change(function () {
    readURL(this);
});

$('#saran-box').click(function(){
    $('.saran-body').slideToggle();
});

$(document).on('click', '#inside-login', function(event){
  $('.modal-login').modal('show');

  return false;
});

$(document).on('click', '#readmore-login', function(event){
  $('.doc-modal').modal('hide');
  $('.doc-modal-pp').modal('hide');
  $('.doc-modal-p3b').modal('hide');
  $('.doc-modal-ma').modal('hide');

  $('.modal-login').modal('show');

  return false;
});

var win_width = $(window).width();
var win_height = $(window).height();

$item = $('ul.navbar-menu li a').filter(function(){
    return $(this).prop('href').indexOf(location.pathname) != -1;
});

$($item).addClass("active");

//home
var $root = $('html, body');
$('#caridoc').click(function(){
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

$('#pp-tahun').click(function(){
  var url = $(this).attr('data-url');

  window.location.href = url;

  return false;
});

$('#pp-nomor').click(function(){
  var url = $(this).attr('data-url');

  window.location.href = url;

  return false;
});

$('#tanggal-from').datepicker({
  format : 'dd-mm-yyyy'
});
$('#tanggal-to').datepicker({
  format : 'dd-mm-yyyy'
});

if(win_width<1024){
  $('.left-bar > form').hide();
  $('.left-menu-title').click(function(){
    $('.left-bar > form').toggle('fast');
  });
}

$('#btn-salin').click(function(){
  window.getSelection().removeAllRanges(); 
  var copycontent = document.querySelector('#modal-contents');  
  var range = document.createRange();  
  range.selectNode(copycontent);  
  window.getSelection().addRange(range);  
  try {  
    var successful = document.execCommand('copy');  
    var msg = successful ? 'successful' : 'unsuccessful';  
    alert('Dokumen Tersalin');  
  } catch(err) {  
    console.log('Dokumen Gagal Teralin');  
  }  
  window.getSelection().removeAllRanges();    
});

$('#btn-salin-pp').click(function(){
  window.getSelection().removeAllRanges(); 
  var copycontent = document.querySelector('#modal-contents-pp');  
  var range = document.createRange();  
  range.selectNode(copycontent);  
  window.getSelection().addRange(range);  
  try {  
    var successful = document.execCommand('copy');  
    var msg = successful ? 'successful' : 'unsuccessful';  
    alert('Dokumen Tersalin');  
  } catch(err) {  
    console.log('Dokumen Gagal Teralin');  
  }  
  window.getSelection().removeAllRanges();    
});

$('#btn-salin-p3b').click(function(){
  window.getSelection().removeAllRanges(); 
  var copycontent = document.querySelector('#modal-contents-p3b');  
  var range = document.createRange();  
  range.selectNode(copycontent);  
  window.getSelection().addRange(range);  
  try {  
    var successful = document.execCommand('copy');  
    var msg = successful ? 'successful' : 'unsuccessful';  
    alert('Dokumen Tersalin');  
  } catch(err) {  
    console.log('Dokumen Gagal Teralin');  
  }  
  window.getSelection().removeAllRanges();    
});

$('#btn-salin-ma').click(function(){
  window.getSelection().removeAllRanges(); 
  var copycontent = document.querySelector('#modal-contents-ma');  
  var range = document.createRange();  
  range.selectNode(copycontent);  
  window.getSelection().addRange(range);  
  try {  
    var successful = document.execCommand('copy');  
    var msg = successful ? 'successful' : 'unsuccessful';  
    alert('Dokumen Tersalin');  
  } catch(err) {  
    console.log('Dokumen Gagal Teralin');  
  }  
  window.getSelection().removeAllRanges();    
});


//TOGGLE COMPARE ATO NOCOMPARE
$('#compare-wrapper').hide();


$('.modal-login').css('height',600);
$('.modal-daftar').css('height',600);
$('.modal-content').css('height',win_height-60);
$('#modallogin .modal-content').css('height','auto');
$('#modaldaftar .modal-content').css('height','auto');
$('#modal-lupapassword .modal-content').css('height','auto');
$('.compare-content, .nocompare-content').css('height',win_height-170);

$('#modaldocument').on('shown.bs.modal', function () {
    
    $("#nocompare-wrapper").scrollTo(1);
    $(".wordfound").hide();
    $("#carikata").val("");    
});

$('#modaldocument-p3b').on('shown.bs.modal', function () {
    $( "#nocompare-wrapper-p3b" ).scrollTo(0);
    $(".wordfound").hide();
    $("#carikata-p3b").val("");    
});

$('#modaldocument-pp').on('shown.bs.modal', function () {
    $( "#nocompare-wrapper-pp" ).scrollTo(0);
    $(".wordfound").hide();
    $("#carikata-pp").val("");    
});

$('#modaldocument-ma').on('shown.bs.modal', function () {
    $( "#nocompare-wrapper-ma" ).scrollTo(0);
    $(".wordfound").hide();
    $("#carikata-ma").val("");    
});


// $('.modalcaller').mousedown(function(e){ //CEK klik mana
//   var idval = $(this).attr('id');
//   if(e.which==3){ //IF klik Kanan buat session
//     localStorage["modalId"] = idval;
//   }
// });

// $(document).on('click', '.modalcaller-newtab', function(){
//   var idval = $(this).attr('id');
//   localStorage["modalId"] = idval;

//   window.open($(this).attr('href')); 
  
//   return false;
// });

$(document).on('click', '.modalcaller', function(event, a){

  $('#list-terkait').html('');
  $('#list-lampiran').html('');
  $('#list-riwayat').html('');
  $('#list-status').html('');
  $('#list-social').html('Tunggu..');

  if(a)
  {
    var idval = a;
  }
  else
  {
    var idval = $(this).attr('id');
  }

  //loading
  var loading = '<div id="loadingstate"><img src="'+base_url+'assets/themes/images/preloader.gif"><br>MEMUAT...</div>';
  $('.nocompare-content').html(loading);

  var get_post_url = base_url+'peraturan_pajak/get_body_final';
  $.post(get_post_url, { id: idval }, function() { $('#loadingstate').show() } )
      .done(function( data ) {
        
        if(data == 0)
        {
          // $('.doc-modal').modal('hide');
          // $('.modal-login').modal('show');

          $("#nocompare-wrapper").scrollTo(1);
          //$('.doc-modal').modal('show');
          $('#loadingstate').fadeOut('fast');
          $('.nocompare-content').html(data);

          $('#btn-sanding').attr('data-id', idval);
          $('#btn-favorit').attr('data-id', idval);
        }
        else
        {
          $("#nocompare-wrapper").scrollTo(1);
          //$('.doc-modal').modal('show');
          $('#loadingstate').fadeOut('fast');
          $('.nocompare-content').html(data);

          $('#btn-sanding').attr('data-id', idval);
          $('#btn-favorit').attr('data-id', idval);
        }
  });   

  var get_social_url = base_url+'peraturan_pajak/get_social';
  $.post(get_social_url, { id: idval })
      .done(function( data ) {

        $('.list-social').html(data);
  });

  var get_check_fav_url = base_url+'peraturan_pajak/check_favourite';
  $.post(get_check_fav_url, { id: idval })
      .done(function( data ) {

        if(data == 1)
        {
          $('#btn-favorit').find('.glyphicon-heart').addClass('active-ico');
        }
        else
        {
          $('#btn-favorit').find('.glyphicon-heart').removeClass('active-ico');
        }
  });

  var lastseen_url = base_url+'peraturan_pajak/lastseen';
  $.post(lastseen_url, { id: idval } );

  var get_lampiran_url = base_url+'peraturan_pajak/get_lampiran';
  $.post(get_lampiran_url, { id: idval })
      .done(function( data ) {

        var json = $.parseJSON(data);

        if(json.st != 0)
        {
          $('#list-lampiran').append(json.url);

          $('#btn-lampiran').find('.glyphicon-paperclip').addClass('active-ico');
        }
        else
        {
          $('#list-lampiran').append(json.url);

          $('#btn-lampiran').find('.glyphicon-paperclip').removeClass('active-ico');
        }
  });

  var get_terkait_url = base_url+'peraturan_pajak/get_terkait';
  $.post(get_terkait_url, { id: idval })
      .done(function( data ) {

        if(data != 0)
        {
          $('#list-terkait').append(data);
        }
        else
        {
          $('#list-terkait').append('<ul class="tools-list-items"><li>Tidak ada peraturan terkait.</li></ul>');
        }
  });

  var get_riwatat_url = base_url+'peraturan_pajak/get_riwayat';
  $.post(get_riwatat_url, { id: idval })
      .done(function( data ) {

        if(data != 0)
        {
          $('#list-riwayat').append(data);
        }
        else
        {
          $('#list-riwayat').append('<ul class="tools-list-items"><li>Tidak ada riwayat.</li></ul>');
        }
  });

  var get_status_url = base_url+'peraturan_pajak/get_status';
  $.post(get_status_url, { id: idval })
      .done(function( data ) {

        if(data != 0)
        {
          $('#btn-riwayat').find('.glyphicon-time').addClass('blink');
          $('#list-status').append(data);
        }
        else
        {
          $('#btn-riwayat').find('.glyphicon-time').removeClass('blink');
          $('#list-status').append('<ul class="tools-list-items"><li>Tidak ada status.</li></ul>');
        }
  });

});


//restart when modal close
$('.doc-modal').on('hidden.bs.modal', function (e) {
  $('#btn-cetak').show();
  $('#btn-riwayat').show();
  $('#btn-lampiran').show();
  $('#btn-terkait').show();
  $('#btn-sanding').show();
  $('#btn-favorit').show();

  $('.compare-content').hide();  
  $('.nocompare-content').show();  

  $('.nocompare-content').html('');
  $('.compare-left .compare-content-wide').html('');
  $('.compare-right .compare-content-wide').html('');

  $('#btn-lampiran').find('.glyphicon-paperclip').removeClass('active-ico');
  $('#btn-riwayat').find('.glyphicon-time').removeClass('blink');

  cari_old = "";
})

$('.doc-modal').on('show.bs.modal', function (e) {
  $('#btn-terkait').show();
})

//P3B
$('.doc-modal-p3b').on('hidden.bs.modal', function (e) {
  $('#btn-salin-p3b').show();
  $('#btn-cetak-p3b').show();
  $('#btn-sanding-p3b').show();
  $('#btn-favorit-p3b').show();

  $('.compare-content-p3b').hide();  
  $('.nocompare-content-p3b').show();  

  $('.nocompare-content').html('');
  $('.compare-left-p3b .compare-content-wide').html('');
  $('.compare-right-p3b .compare-content-wide').html('');

  cari_old = "";
})

$('.doc-modal-p3b').on('show.bs.modal', function (e) {
  $('#btn-terkait-p3b').show();
})
//------------------------

//PP
$('.doc-modal-pp').on('hidden.bs.modal', function (e) {
  $('#btn-salin-pp').show();
  $('#btn-cetak-pp').show();
  $('#btn-sanding-pp').show();
  $('#btn-favorit-pp').show();

  $('.compare-content-pp').hide();  
  $('.nocompare-content-pp').show();  

  $('.nocompare-content').html('');
  $('.compare-left-pp .compare-content-wide').html('');
  $('.compare-right-pp .compare-content-wide').html('');

  cari_old = "";
})

$('.doc-modal-pp').on('show.bs.modal', function (e) {
  $('#btn-terkait-pp').show();
})
//------------------------

//MA
$('.doc-modal-ma').on('hidden.bs.modal', function (e) {
  $('#btn-salin-ma').show();
  $('#btn-cetak-ma').show();
  $('#btn-sanding-ma').show();
  $('#btn-favorit-ma').show();

  $('.compare-content-ma').hide();  
  $('.nocompare-content-ma').show();  

  $('.nocompare-content').html('');
  $('.compare-left-ma .compare-content-wide').html('');
  $('.compare-right-ma .compare-content-wide').html('');

  cari_old = "";
})

$('.doc-modal-ma').on('show.bs.modal', function (e) {
  $('#btn-terkait-ma').show();
})
//------------------------

$('#modal-tools').click(function(){
  $('.modal-tools').toggle('fast');
});
$('#modal-tools-ma').click(function(){
  $('.modal-tools').toggle('fast');
});
$('#modal-tools-pp').click(function(){
  $('.modal-tools').toggle('fast');
});
$('#modal-tools-p3b').click(function(){
  $('.modal-tools').toggle('fast');
});
$('#modal-close').click(function(){
  $('.doc-modal').modal('hide');
});
$('#modal-close-ma').click(function(){
  $('.doc-modal-ma').modal('hide');
});
$('#modal-close-p3b').click(function(){
  $('.doc-modal-p3b').modal('hide');
});
$('#modal-close-pp').click(function(){
  $('.doc-modal-pp').modal('hide');
});


$(document).ready(function () {  //CEK IF OPEN IN NEW TAB
  if(localStorage["modalId"]){
    var get_post_url = base_url+'peraturan_pajak/get_body_final';
    $.post(get_post_url, { id: localStorage["modalId"] })
      .done(function( data ) {
        $('.nocompare-content').html(data);

        $('#btn-sanding').attr('data-id', localStorage["modalId"]);
        $('#btn-favorit').attr('data-id', localStorage["modalId"]);

        $('.doc-modal').modal();

        localStorage.removeItem("modalId");
    });   

    var get_check_fav_url = base_url+'peraturan_pajak/check_favourite';
    $.post(get_check_fav_url, { id: localStorage["modalId"] })
        .done(function( data ) {

          if(data == 1)
          {
            $('#btn-favorit').find('.glyphicon-heart').addClass('active-ico');
          }
    }); 

    var lastseen_url = base_url+'peraturan_pajak/lastseen';
    $.post(lastseen_url, { id: localStorage["modalId"] } );

    var get_lampiran_url = base_url+'peraturan_pajak/get_lampiran';
    $.post(get_lampiran_url, { id: localStorage["modalId"] })
        .done(function( data ) {

          var json = $.parseJSON(data);

          if(json.st != 0)
          {
            $('#list-lampiran').append(json.url);

            $('#btn-lampiran').find('.glyphicon-paperclip').addClass('active-ico');
          }
          else
          {
            $('#list-lampiran').append(json.url);

            $('#btn-lampiran').find('.glyphicon-paperclip').removeClass('active-ico');
          }
    });

    var get_terkait_url = base_url+'peraturan_pajak/get_terkait';
    $.post(get_terkait_url, { id: localStorage["modalId"] })
        .done(function( data ) {

          if(data != 0)
          {
            $('#list-terkait').append(data);
          }
          else
          {
            $('#list-terkait').append('<ul class="tools-list-items"><li>Tidak ada peraturan terkait.</li></ul>');
          }
    });

    var get_riwatat_url = base_url+'peraturan_pajak/get_riwayat';
    $.post(get_riwatat_url, { id: localStorage["modalId"] })
        .done(function( data ) {

          if(data != 0)
          {
            $('#list-riwayat').append(data);
          }
          else
          {
            $('#list-riwayat').append('<ul class="tools-list-items"><li>Tidak ada riwayat.</li></ul>');
          }
    });

    var get_status_url = base_url+'peraturan_pajak/get_status';
    $.post(get_status_url, { id: localStorage["modalId"] })
        .done(function( data ) {

          if(data != 0)
          {
            $('#btn-riwayat').find('.glyphicon-time').addClass('blink');
            $('#list-status').append(data);
          }
          else
          {
            $('#btn-riwayat').find('.glyphicon-time').removeClass('blink');
            $('#list-status').append('<ul class="tools-list-items"><li>Tidak ada status.</li></ul>');
          }
    });
  }
});


//FUNGSI UNTUK TOGGLE SEARCH
$('#opt-one').click(function(e) {

  $('#tanggal-from').attr('disabled',false);
  $('#tanggal-to').prop('disabled',false);
  $('#tahun').prop('disabled',true);

  $("select#tahun").val("0000");
});
$('#opt-two').click(function(e) {
  $('#tanggal-from').attr('disabled',true);
  $('#tanggal-to').prop('disabled',true);
  $('#tahun').prop('disabled',false);

  $('#tanggal-from').val('');
  $('#tanggal-to').val('');
});


// FUNGSI UNTUK COMPARE ITEM
$('.compare-notif').hide();
$('.compare-notif-mainpage').hide();

$('#compare-ico').click(function(){
  if($('#compare-ico').hasClass('glyphicon-transfer'))
  {
    var delete_cookie_sanding_url = base_url+'peraturan_pajak/delete_cookie_sanding';
    $.post( delete_cookie_sanding_url );
    
    var doc_2 = $('a#btn-sanding').attr('data-id');
    $(this).attr('doc_2', doc_2);

    var cur_doc_1 = $(this).attr('doc_1');
    var cur_doc_2 = $(this).attr('doc_2');

    var get_post_url = base_url+'peraturan_pajak/get_body_final'
    $.post(get_post_url, { id: cur_doc_1 })
        .done(function( data ) {

          $('.compare-content').show();  
          $('.compare-left .compare-content-wide').html(data);
    });  

    $.post(get_post_url, { id: cur_doc_2 })
        .done(function( data ) {

          $('.compare-content').show();  
          $('.compare-right .compare-content-wide').html(data);
    }); 

    $('#btn-cetak').hide();
    $('#btn-riwayat').hide();
    $('#btn-lampiran').hide();
    $('#btn-terkait').hide();
    $('#btn-sanding').hide();
    $('#btn-favorit').hide();

    $('#nocompare-wrapper').hide();
    $('#compare-wrapper').show('fast');
    $('#compare-notifs').hide();    
    $('.compare-notif-mainpage').hide();
  }
  else
  {

    var doc_1 = $('a#btn-sanding').attr('data-id');
    $(this).attr('doc_1', doc_1);

    //create cookie ma
    var create_cookie_sanding_url = base_url+'peraturan_pajak/create_cookie_sanding';
    $.post(create_cookie_sanding_url, { doc_1: doc_1 })
        .done(function() {
          $('#compare-wrapper').hide();
          $('#modaldocument').modal('hide');
          $('.compare-notif-mainpage').show();

          var controller = $('.doc-modal').attr('data-current-controller');

          if(controller != 'peraturan_pajak') window.location.href = base_url+'peraturan-pajak';
          
    });
  }
});

$('#btn-sanding').click(function(e) {
  var id = $(this).attr('data-id');
  $.ajax({
      type: "POST",
      url: base_url+"peraturan_pajak/sanding",
      data: {id : id},
      dataType: "html",
        success : function (response, textS, xhr) 
        {
          $('#doc-name').html(response);
          $('.compare-notif-mainpage').find('span#doc-title').html(response);
        },
  });
  $('.compare-notif').show(200);
});

$("#compare-wrapper .compare-right").click(function(e) {
  if(win_width<=540){
     $("#compare-wrapper .compare-content.compare-right").animate({
        width : "89%",
     }, 200, function() {
        //$("#compare-wrapper .compare-right").toggle('fast');
        $("#compare-wrapper .compare-content.compare-right").css({"overflow":"scroll","opacity":"1"});
        $("#compare-wrapper .compare-content.compare-right").addClass('shadow-right');
     });

     $("#compare-wrapper .compare-content.compare-left").animate({
        width : "10%",
        overflow : "hidden",
     }, 200, function() {
        //$("#compare-wrapper .compare-left").toggle('fast');
        $("#compare-wrapper .compare-content.compare-left").addClass('shadow-left');
        $("#compare-wrapper .compare-content.compare-left").css({"overflow":"hidden","opacity":"0.5"});
        $("#compare-wrapper .compare-content.compare-left").removeClass('shadow-left');
     });
   };
});

$("#compare-wrapper .compare-left").click(function(e) {
  if(win_width<=540){
     $("#compare-wrapper .compare-content.compare-right").animate({
        width : "9%",
        overflow : "hidden"
     }, 200, function() {
        //$("#compare-wrapper .compare-right").toggle('fast');
        $("#compare-wrapper .compare-content.compare-right").css({"overflow":"hidden","opacity":"0.5"});
        $("#compare-wrapper .compare-content.compare-right").removeClass('shadow-right');
     });

     $("#compare-wrapper .compare-content.compare-left").animate({
        width : "90%",
        overflow : "scroll"
     }, 200, function() {
        //$("#compare-wrapper .compare-left").toggle('fast');
        $("#compare-wrapper .compare-content.compare-left").addClass('shadow-left');
        $("#compare-wrapper .compare-content.compare-left").css({"overflow":"scroll","opacity":"1"});
     });
   };
});
$('#notif-minimize').click(function(e) {
  $( "#compare-notifs" ).animate({
      top: "30",
  }, 500, function() {
  });
});

$('#notif-close-notif').click(function(e) {
  var controller = $('.doc-modal-ma').attr('data-current-controller');

  if(controller == 'p3b')
  {
    //delete cookie ma
    var delete_cookie_sanding_url = base_url+'p3b/delete_cookie_sanding';
    $.post( delete_cookie_sanding_url, function() {
      $('.compare-notif-mainpage').hide(100);
    });
  }

  if(controller == 'putusan_mahkamah_agung')
  {
    //delete cookie ma
    var delete_cookie_sanding_url = base_url+'putusan_mahkamah_agung/delete_cookie_sanding';
    $.post( delete_cookie_sanding_url, function() {
      $('.compare-notif-mainpage').hide(100);
    });
  }
  
});
$('.modal-tools-item-content').hide();

//FAVOURITE
$('#btn-favorit').click(function(e) {
  var id = $(this).attr('data-id');
  var get_post_url = base_url+'peraturan_pajak/favourite';

  var $this = $(this);

  $.post(get_post_url, { id: id })
      .done(function( data ) {

        if(data == 1)
        {
          $this.find('.glyphicon-heart').addClass('active-ico');
        }
        if(data == 2)
        {
          $this.find('.glyphicon-heart').removeClass('active-ico');
        }
  });  
});

//MODAL TOOLS ITEM CONTENT
$('.modal-tools').find('.modal-tools-item').each(function() { 
  $(this).hover(function(){
    $(this).find(".modal-tools-item-content").toggle();
  });
});

$('#modaldocument').on('show.bs.modal', function () {
  if($(".compare-notif-mainpage").is(":visible")){
      $('#compare-notifs').show();  
      $("#compare-ico").removeClass("glyphicon-plus-sign");
      $("#compare-ico").addClass("glyphicon-transfer");
      $('#compare-word').html('BANDING');    
  }else{
      $('#compare-notifs').hide();        
      $("#compare-ico").removeClass("glyphicon-transfer");
      $("#compare-ico").addClass("glyphicon-plus-sign");
      $('#compare-word').html('TAMBAH');    
  }
});

$('#modaldocument-p3b').on('show.bs.modal', function () {
  if($(".compare-notif-mainpage").is(":visible")){
      $('#compare-notifs-p3b').show();  

      $("#compare-ico-p3b").removeClass("glyphicon-plus-sign");
      $("#compare-ico-p3b").addClass("glyphicon-transfer");

      $('#compare-word-p3b').html('BANDING');    
  }else{
      $('#compare-notifs-p3b').hide();        

      $("#compare-ico-p3b").removeClass("glyphicon-transfer");
      $("#compare-ico-p3b").addClass("glyphicon-plus-sign");

      $('#compare-word-p3b').html('TAMBAH');    
  }
});

$('#modaldocument-pp').on('show.bs.modal', function () {
  if($(".compare-notif-mainpage").is(":visible")){
      $('#compare-notifs-pp').show();  

      $("#compare-ico-pp").removeClass("glyphicon-plus-sign");
      $("#compare-ico-pp").addClass("glyphicon-transfer");

      $('#compare-word-pp').html('BANDING');    
  }else{
      $('#compare-notifs-pp').hide();        

      $("#compare-ico-pp").removeClass("glyphicon-transfer");
      $("#compare-ico-pp").addClass("glyphicon-plus-sign");

      $('#compare-word-pp').html('TAMBAH');    
  }
});

$('#modaldocument-ma').on('show.bs.modal', function () {
  if($(".compare-notif-mainpage").is(":visible")){
      $('#compare-notifs-ma').show();  

      $("#compare-ico-ma").removeClass("glyphicon-plus-sign");
      $("#compare-ico-ma").addClass("glyphicon-transfer");

      $('#compare-word-ma').html('BANDING');    
  }else{
      $('#compare-notifs-ma').hide();        

      $("#compare-ico-ma").removeClass("glyphicon-transfer");
      $("#compare-ico-ma").addClass("glyphicon-plus-sign");

      $('#compare-word-ma').html('TAMBAH');    
  }
});

//FUNGSI TOOLS SEARCH 
jQuery.fn.highlight = function(pat) {
 function innerHighlight(node, pat) {
  var skip = 0;
  if (node.nodeType == 3) {
   var pos = node.data.toUpperCase().indexOf(pat);
   pos -= (node.data.substr(0, pos).toUpperCase().length - node.data.substr(0, pos).length);
   if (pos >= 0) {
    var spannode = document.createElement('span');
    spannode.className = 'highlight';
    var middlebit = node.splitText(pos);
    var endbit = middlebit.splitText(pat.length);
    var middleclone = middlebit.cloneNode(true);
    spannode.appendChild(middleclone);
    middlebit.parentNode.replaceChild(spannode, middlebit);
    skip = 1;
   }
  }
  else if (node.nodeType == 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {
   for (var i = 0; i < node.childNodes.length; ++i) {
    i += innerHighlight(node.childNodes[i], pat);
   }
  }
  return skip;
 }
 return this.length && pat && pat.length ? this.each(function() {
  innerHighlight(this, pat.toUpperCase());
 }) : this;
};

jQuery.fn.removeHighlight = function() {
 return this.find("span.highlight").each(function() {
  this.parentNode.firstChild.nodeName;
  with (this.parentNode) {
   replaceChild(this.firstChild, this);
   normalize();
  }
 }).end();
};

$.fn.scrollTo = function( target, options, callback ){
  if(typeof options == 'function' && arguments.length == 2){ callback = options; options = target; }
  var settings = $.extend({
    scrollTarget  : target,
    offsetTop     : 300,
    duration      : 200,
    easing        : 'swing'
  }, options);
  return this.each(function(){
    var scrollPane = $(this);
    console.log(scrollPane);
    var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
    var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top + scrollPane.scrollTop() - parseInt(settings.offsetTop);
    scrollPane.animate({scrollTop : scrollY }, parseInt(settings.duration), settings.easing, function(){
      if (typeof callback == 'function') { callback.call(this); }
    });
  });
};

/*cari kata*/

function searchnav(bag,d) {
  //d is direction - prev or next
  var h = $('span.highlight').length; //total results found
  var c = $('.highlight').index($('.scrollhere')); //current location
  var n = c+1; //next location
  if(n>h){n=h;}
  var p = c-1; //previous location
  if(p<0){p=h-1;}
  $('.scrollhere').removeClass('scrollhere');
    console.log(bag);
  if(bag.length>0){
    var add=bag;
  }else{
    var add="";
  }
    console.log(add);
  if(d=="prev"){
    $('.highlight:eq(' + p + ')').addClass('scrollhere');
    $('#nocompare-wrapper'+add).scrollTo('.scrollhere');
  } else {
    $('.highlight:eq(' + n + ')').addClass('scrollhere');
    $('#nocompare-wrapper'+add).scrollTo('.scrollhere');
  }
}

var xcari = 0;
var cari_old = "";
var found_cari = 0;
var found_index = 0;
var next_id = 'next';

$('#btn-carikata').click(function(){
  var cari = $('#carikata').val();

  if(cari != cari_old)
  { 
    next_id = 'next';
    found_index = 0;
    $('#modal-contents').removeHighlight().highlight(cari);
    var found = $('span.highlight').length; //total results found
    found_cari = found;
    if(found>0){

      xcari = 1;
      cari_old = cari;

      $(".numword").html(found_index+'/'+found);
      $(".wordbutton").show();
    }else{

      xcari = 0;

      $(".numword").html("0");
      $(".wordbutton").hide();
    }
    $(".wordfound").show();
  }
  else
  {
    cari_old = cari;
  }
});
$('#btn-carikata-p3b').click(function(){
  var cari = $('#carikata-p3b').val();

  if(cari != cari_old)
  { 
    next_id = 'next-p3b';
    found_index = 0;
    $('#modal-contents-p3b').removeHighlight().highlight(cari);
    $('.modal-desc').removeHighlight().highlight(cari);
    var found = $('span.highlight').length; //total results found
    found_cari = found;
    if(found>0){

      xcari = 1;
      cari_old = cari;

      $(".numword").html(found);
      $(".wordbutton").show();
    }else{

      xcari = 0;

      $(".numword").html("0");
      $(".wordbutton").hide();
    }
    $(".wordfound").show();
  }
  else
  {
    cari_old = cari;
  }
});
$('#btn-carikata-pp').click(function(){
  var cari = $('#carikata-pp').val();

  if(cari != cari_old)
  { 
    next_id = 'next-pp';
    found_index = 0;
    $('#modal-contents-pp').removeHighlight().highlight(cari);
    var found = $('span.highlight').length; //total results found
    found_cari = found;
    if(found>0){

      xcari = 1;
      cari_old = cari;

      $(".numword").html(found);
      $(".wordbutton").show();
    }else{

      xcari = 0;

      $(".numword").html("0");
      $(".wordbutton").hide();
    }
    $(".wordfound").show();
  }
  else
  {
    cari_old = cari;
  }
});
$('#btn-carikata-ma').click(function(){
  var cari = $('#carikata-ma').val();

  if(cari != cari_old)
  {
    next_id = 'next-ma';
    found_index = 0;
    $('#modal-contents-ma').removeHighlight().highlight(cari);
    var found = $('span.highlight').length; //total results found
    found_cari = found;
    if(found>0){

      xcari = 1;
      cari_old = cari;

      $(".numword").html(found);
      $(".wordbutton").show();
    }else{

      xcari = 0;
      
      $(".numword").html("0");
      $(".wordbutton").hide();
    }
    $(".wordfound").show();
  }
  else
  {
    cari_old = cari;
  }
});

$(document).keypress(function(e) 
{
  if(e.which == 13 && xcari == 1) 
  {
    var id = next_id;
    if(id.indexOf("-")>0){
        var bag = id.substring(id.indexOf("-"),id.length);
    }else{
        var bag="";
    }
    searchnav(bag,'next');

    found_index++;
    if(found_index > found_cari)
    {
      found_index = 1;
    }
    $(".numword").html(found_index+'/'+found_cari);
  }
});

$('.prev').click(function(){
  var id = $(this).attr('id');
  if(id.indexOf("-")>0){
    var bag = id.substring(id.indexOf("-"),id.length);
  }else
  {
    var bag="";
  }
  searchnav(bag,'prev');

  found_index--;
  if(found_index < 1)
  {
    found_index = found_cari;
  }
  $(".numword").html(found_index+'/'+found_cari);
});

$('.next').click(function(){
  var id = $(this).attr('id');
  if(id.indexOf("-")>0){
      var bag = id.substring(id.indexOf("-"),id.length);
  }else{
      var bag="";
  }
  searchnav(bag,'next');

  found_index++;
  if(found_index > found_cari)
  {
    found_index = 1;
  }
  $(".numword").html(found_index+'/'+found_cari);
});

$("#carikata").keypress(function(e){
  if(e.which == 13) {
    $('#btn-carikata').click();
    }
});
$("#carikata-p3b").keypress(function(e){
  if(e.which == 13) {
    $('#btn-carikata-p3b').click();
    }
});
$("#carikata-pp").keypress(function(e){
  if(e.which == 13) {
    $('#btn-carikata-pp').click();
    }
});
$("#carikata-ma").keypress(function(e){
  if(e.which == 13) {
    $('#btn-carikata-ma').click();
    }
});

/*cari kata*/

/*

function searchnav(bag,d) {
  //d is direction - prev or next
  var h = $('span.highlight').length; //total results found
  var c = $('.highlight').index($('.scrollhere')); //current location
  var n = c+1; //next location
  if(n>h){n=h;}
  var p = c-1; //previous location
  if(p<0){p=h-1;}
  $('.scrollhere').removeClass('scrollhere');
    console.log(bag);
  if(bag.length>0){
    var add=bag;
  }else{
    var add="";
  }
    console.log(add);
  if(d=="prev"){
    $('.highlight:eq(' + p + ')').addClass('scrollhere');
    $('#nocompare-wrapper'+add).scrollTo('.scrollhere');
  } else {
    $('.highlight:eq(' + n + ')').addClass('scrollhere');
    $('#nocompare-wrapper'+add).scrollTo('.scrollhere');
  }
}

$('.prev').click(function(){
  var id = $(this).attr('id');
  if(id.indexOf("-")>0){
    var bag = id.substring(id.indexOf("-"),id.length);
  }else
  {
    var bag="";
  }
  searchnav(bag,'prev');
});

$('.next').click(function(){
  var id = $(this).attr('id');
  if(id.indexOf("-")>0){
      var bag = id.substring(id.indexOf("-"),id.length);
  }else{
      var bag="";
  }
  searchnav(bag,'next');
});

$('#btn-carikata').click(function(){
  var cari = $('#carikata').val();
  $('#modal-contents').removeHighlight().highlight(cari);
  var found = $('span.highlight').length; //total results found
  if(found>0){
    $(".numword").html(found);
    $(".wordbutton").show();
  }else{
    $(".numword").html("0");
    $(".wordbutton").hide();
  }
  $(".wordfound").show();
});
$('#btn-carikata-p3b').click(function(){
  var cari = $('#carikata-p3b').val();
  $('#modal-contents-p3b').removeHighlight().highlight(cari);
  $('.modal-desc').removeHighlight().highlight(cari);
  var found = $('span.highlight').length; //total results found
  if(found>0){
    $(".numword").html(found);
    $(".wordbutton").show();
  }else{
    $(".numword").html("0");
    $(".wordbutton").hide();
  }
  $(".wordfound").show();
});
$('#btn-carikata-pp').click(function(){
  var cari = $('#carikata-pp').val();
  $('#modal-contents-pp').removeHighlight().highlight(cari);
  var found = $('span.highlight').length; //total results found
  if(found>0){
    $(".numword").html(found);
    $(".wordbutton").show();
  }else{
    $(".numword").html("0");
    $(".wordbutton").hide();
  }
  $(".wordfound").show();
});
$('#btn-carikata-ma').click(function(){
  var cari = $('#carikata-ma').val();
  $('#modal-contents-ma').removeHighlight().highlight(cari);
  var found = $('span.highlight').length; //total results found
  if(found>0){
    $(".numword").html(found);
    $(".wordbutton").show();
  }else{
    $(".numword").html("0");
    $(".wordbutton").hide();
  }
  $(".wordfound").show();
});

$("#carikata").keypress(function(e){
  if(e.which == 13) {
    $('#btn-carikata').click();
    }
});
$("#carikata-p3b").keypress(function(e){
  if(e.which == 13) {
    $('#btn-carikata-p3b').click();
    }
});
$("#carikata-pp").keypress(function(e){
  if(e.which == 13) {
    $('#btn-carikata-pp').click();
    }
});
$("#carikata-ma").keypress(function(e){
  if(e.which == 13) {
    $('#btn-carikata-ma').click();
    }
});

*/

//FUNGSI TOOLS PRINT 
$('#btn-cetak').click(function(){
//     var printContents = document.getElementById("modal-contents").innerHTML;
//     var originalContents = document.body.innerHTML;
      //$("#loading-print").show('fast');
      var id = $("#btn-favorit").attr('data-id');
      window.location.href = base_url + "download/rp/"+id;
      //$("#loading-print").delay(3000).hide();
      //var printContents = document.getElementById("modal-contents").innerHTML;
      //var sendstring = printContents.slice(0, printContents.indexOf('<div class="footerdoc">'));
//      $.ajax({
  //      http://dannydarussalam.com/tax-engine/download/$tipedokument/$iddokumen
        //method: "POST",
        //url: base_url+"peraturan_pajak/cetaks",
        //data: { doc: sendstring }
    //  })
      //.done(function( msg ) {
          //alert("tes="+msg);
//          $("#loading-print").hide();
          //window.open('/tax-engine/newdir/'+msg+'.pdf');
//         var w = window.open('data:application/pdf;base64,'+msg, 'wnd');
//         var w = window.open('', 'wnd');
//         w.document.body.innerHTML = msg;
          
         //w.print();
         //w.close(); 
      //});

});
$('#btn-cetak-p3b').click(function(){
      var id = $('.doc-modal-p3b').attr('cur-doc-1');
      var lang = "";
      if( $("#id").is(':visible') ){
          lang = "id";
      }else{
          lang = "en";
      }
      window.location.href = base_url + "download/p3b/"+id+"/"+lang;
    
//     $("#loading-print").show('fast');
//     var printContents = document.getElementById("modal-contents-p3b").innerHTML;
//      //var sendstring = printContents.slice(0, printContents.indexOf('<div class="footerdoc">'));
//      var tmpsendstring = printContents.replace('<div class="footerdoc"><img src="http://dannydarussalam.com/tax-engine/assets/themes/images/docfooter.jpg"></div>','&nbsp;');
//      var sendstring = tmpsendstring.replace('<div class="footerdoc"><img src="http://dannydarussalam.com/tax-engine/assets/themes/images/docfooter.jpg"></div>','&nbsp;');
//      $.ajax({
//        method: "POST",
//        url: base_url+"peraturan_pajak/cetaks",
//        data: { doc: sendstring }
//      })
//      .done(function( msg ) {
//          $("#loading-print").hide();
//          window.open('/tax-engine/newdir/'+msg+'.pdf');
//      });
});
$('#btn-cetak-pp').click(function(){
      var id = $('.doc-modal-pp').attr('cur-doc-1');
      window.location.href = base_url + "download/pp/"+id;

//     $("#loading-print").show('fast');
//     var printContents = document.getElementById("modal-contents-pp").innerHTML;
//      var sendstring = printContents.slice(0, printContents.indexOf('<div class="footerdoc">'));
//      $.ajax({
//        method: "POST",
//        url: base_url+"peraturan_pajak/cetaks",
//        data: { doc: sendstring }
//      })
//      .done(function( msg ) {
//          $("#loading-print").hide();
//          window.open('/tax-engine/newdir/'+msg+'.pdf');
//      });
});
$('#btn-cetak-ma').click(function(){
      var id = $('.doc-modal-ma').attr('cur-doc-1');
      window.location.href = base_url + "download/ma/"+id;
    
//     $("#loading-print").show('fast');
//     var printContents = document.getElementById("modal-contents-ma").innerHTML;
//      var sendstring = printContents.slice(0, printContents.indexOf('<div class="footerdoc">'));
//      $.ajax({
//        method: "POST",
//        url: base_url+"peraturan_pajak/cetaks",
//        data: { doc: sendstring }
//      })
//      .done(function( msg ) {
//          $("#loading-print").hide();
//          window.open('/tax-engine/newdir/'+msg+'.pdf');
//      });
});

//FUNGSI SETTING PROFILE
$('#setting-ubahfoto').click(function(){
    $('#setting-editfoto').click();
});

//FUNGSI TAX TREATY
$('#kursdate1').datepicker();
$('#kursdate2').datepicker();

$('.active-compare').hide();
$('#treaty1').click(function() {
  $('.active-compare').hide('fast');
});
$('#treaty2').click(function() {
  $('.active-compare').show('fast');
});

//P3B
$('#btn-sanding-p3b').click(function(e) {
  var id = $('.doc-modal-p3b').attr('cur-doc-1');

  $.ajax({
      type: "POST",
      url: base_url+"p3b/sanding",
      data: {id : id},
      dataType: "html",
        success : function (response, textS, xhr) 
        {
          $('#doc-name-p3b').html(response);
          $('.compare-notif-mainpage').find('span#doc-title').html(response);
        },
  });

  $('.compare-notif').show(200);
});

$('#compare-ico-p3b').click(function(){
  if($('#compare-ico-p3b').hasClass('glyphicon-transfer'))
  {
    var delete_cookie_sanding_url = base_url+'p3b/delete_cookie_sanding';
    $.post( delete_cookie_sanding_url );

    var p3b_id1 = $('.doc-modal-p3b').attr('cur-doc-2');
    var p3b_id2 = $('.doc-modal-p3b').attr('cur-doc-1');

    //get double content - p3b
    var get_double_content_url = base_url+'p3b/get_double_content';
    $.post(get_double_content_url, { p3b_id1: p3b_id1, p3b_id2: p3b_id2 }, function() { $('#loadingstate').show() })
        .done(function( data ) {

          $('#loadingstate').fadeOut('fast');

          var json = $.parseJSON(data);

          if(json.st == 0)
          {
            $('.doc-modal-p3b').modal('hide');
            $('.modal-login').modal('show');
          }
          else
          {
            $('#btn-favorit-p3b').hide();
            $('#btn-sanding-p3b').hide();
            $('#btn-cetak-p3b').hide();
            $('#btn-salin-p3b').hide();

            $('.doc-modal-p3b').modal('show');

            $('.compare-left-p3b .compare-content-wide').html(json.full_content_left);
            $('.compare-right-p3b .compare-content-wide').html(json.full_content_right);

            $('.compare-left-p3b').find('#id').hide();
            $('.compare-right-p3b').find('#id').hide();
          }
    });

    $('#nocompare-wrapper-p3b').hide();
    $('#compare-wrapper-p3b').show('fast');
    $('#compare-notifs').hide();    
    $('.compare-notif-mainpage').hide();
  }
  else
  {
    var doc_1 = $('.doc-modal-p3b').attr('cur-doc-1');
    $('.doc-modal-p3b').attr('cur-doc-2', doc_1);

    //create cookie ma
    var create_cookie_sanding_url = base_url+'p3b/create_cookie_sanding';
    $.post(create_cookie_sanding_url, { doc_1: doc_1 })
        .done(function() {
          $('#compare-wrapper-p3b').hide();
          $('#modaldocument-p3b').modal('hide');
          $('.compare-notif-mainpage').show();

          var controller = $('.doc-modal-ma').attr('data-current-controller');

          if(controller != 'p3b') window.location.href = base_url+'p3b';
          
    });
  }
});

$('#btn-favorit-p3b').click(function(e) {
  var id = $('.doc-modal-p3b').attr('cur-doc-1');

  var get_post_url = base_url+'p3b/favourite';
  var $this = $(this);

  $.post(get_post_url, { id: id })
      .done(function( data ) {

        if(data == 1)
        {
          $this.find('.glyphicon-heart').addClass('active-ico');
        }
        if(data == 2)
        {
          $this.find('.glyphicon-heart').removeClass('active-ico');
        }
  });
});

$('.doc-modal-p3b').on('hidden.bs.modal', function (e) {
  //remove favourite
  $('#btn-favorit-p3b').find('.glyphicon-heart').removeClass('active-ico');
});

$('.treaty-btn').click(function(){

  if($('#treaty1').is(':checked')) 
  {
      var p3b_country = $('#treaty-country1').val();

      if(p3b_country != "none")
      {
        $('#nocompare-wrapper-p3b').show();
        $('#compare-wrapper-p3b').hide();
        $('.doc-modal-p3b').modal('show');

        $('#btn-favorit-p3b').show();

        //get single content - p3b
        var get_single_content_by_country_name_url = base_url+'p3b/get_single_content_by_country_name';
        $.post(get_single_content_by_country_name_url, { p3b_country: p3b_country }, function() { $('#loadingstate').show() })
            .done(function( data ) {

              $('#loadingstate').fadeOut('fast');

              var json = $.parseJSON(data);

              if(json.st == 0)
              {
                $('.doc-modal-p3b').modal('hide');
                $('.modal-login').modal('show');
              }
              else
              {
                $('.doc-modal-p3b').attr('cur-doc-1', json.p3b_id);

                $('#btn-sanding-p3b').show();
                $('#btn-favorit-p3b').show();
                
                $('.doc-modal-p3b').modal('show');
                $('.nocompare-content-p3b').html(json.full_content);
                $('.nocompare-content-p3b').find('#id').hide();

                if(json.favourite == 1) $('#btn-favorit-p3b').find('.glyphicon-heart').addClass('active-ico');
              }
        });
      }

  };

  if($('#treaty2').is(':checked')) 
  {
      var p3b_country1 = $('#treaty-country1').val();
      var p3b_country2 = $('#treaty-country2').val();

      var article = $('input:radio[name=article]:checked').val();

      var cut_1 = $('select[name=cut_1]').val();
      var cut_2 = $('select[name=cut_2]').val();
      var cut_3 = $('select[name=cut_3]').val();

      if(article == 'cut')
      {
        if(cut_1 > cut_2)
        {
          cut = 0;
        }
        else
        {
          cut = 1;
        }
      }
      else
      {
        cut = 1;
      }

      if(p3b_country1 != "none" && p3b_country2 != "none" && cut == 1)
      {
        $('#compare-wrapper-p3b').show();
        $('#nocompare-wrapper-p3b').hide();
        $('.doc-modal-p3b').modal('show');

        $('#btn-favorit-p3b').hide();
        $('#btn-sanding-p3b').hide();
        $('#btn-cetak-p3b').hide();
        $('#btn-salin-p3b').hide();

        //get double content - p3b
        var get_double_content_by_country_name_url = base_url+'p3b/get_double_content_by_country_name';
        $.post(get_double_content_by_country_name_url, { p3b_country1: p3b_country1, p3b_country2: p3b_country2, article: article, cut_1: cut_1, cut_2: cut_2, cut_3: cut_3 }, function() { $('#loadingstate').show() })
            .done(function( data ) {

              $('#loadingstate').fadeOut('fast');

              var json = $.parseJSON(data);

              if(json.st == 0)
              {
                $('.doc-modal-p3b').modal('hide');
                $('.modal-login').modal('show');
              }
              else
              {
                $('.doc-modal-p3b').modal('show');

                $('.compare-left-p3b .compare-content-wide').html(json.full_content_left);
                $('.compare-right-p3b .compare-content-wide').html(json.full_content_right);

                $('.compare-left-p3b').find('#id').hide();
                $('.compare-right-p3b').find('#id').hide();
              }
        });
      }
  };

  return false;
});

$(document).on("click", "#btn-en", function(event){
    $(this).parent('span').parent('.treaty-lang').siblings('#id').hide();
    $(this).parent('span').parent('.treaty-lang').siblings('#en').show();

    $(this).parent('span').addClass('active');
    $(this).parent('span').siblings('span').removeClass('active');

    return false;
});

$(document).on("click", "#btn-id", function(event){
    $(this).parent('span').parent('.treaty-lang').siblings('#en').hide();
    $(this).parent('span').parent('.treaty-lang').siblings('#id').show();

    $(this).parent('span').addClass('active');
    $(this).parent('span').siblings('span').removeClass('active');

    return false;
});

// $('.modalcaller-p3b').click(function(){
$(document).on('click', '.modalcaller-p3b', function(event, a){
  var p3b_id = $(this).attr('data-id');

  if(a)
  {
    var p3b_id = a;
  }
  else
  {
    var p3b_id = $(this).attr('data-id');
  }

  //set wrapper
  $('#nocompare-wrapper-p3b').show();
  $('#compare-wrapper-p3b').hide();

  //loading
  var loading = '<div id="loadingstate"><img src="'+base_url+'assets/themes/images/preloader.gif"><br>MEMUAT...</div>';
  $('.nocompare-content').html(loading);

  //get single content - p3b
  var get_single_content_url = base_url+'p3b/get_single_content';
  $.post(get_single_content_url, { p3b_id: p3b_id }, function() { $('#loadingstate').show() })
      .done(function( data ) {

        $('#loadingstate').fadeOut('fast');

        var json = $.parseJSON(data);

        if(json.st == 0)
        {
          // $('.doc-modal-p3b').modal('hide');
          // $('.modal-login').modal('show');

          $('#btn-sanding-p3b').show();
          $('#btn-favorit-p3b').show();

          $('.doc-modal-p3b').attr('cur-doc-1', p3b_id);

          $('.doc-modal-p3b').modal('show');
          $('.nocompare-content-p3b').html(json.full_content);
          $('.nocompare-content-p3b').find('#id').hide();

          if(json.favourite == 1) $('#btn-favorit-p3b').find('.glyphicon-heart').addClass('active-ico');
        }
        else
        {
          $('#btn-sanding-p3b').show();
          $('#btn-favorit-p3b').show();

          $('.doc-modal-p3b').attr('cur-doc-1', p3b_id);

          $('.doc-modal-p3b').modal('show');
          $('.nocompare-content-p3b').html(json.full_content);
          $('.nocompare-content-p3b').find('#id').hide();

          if(json.favourite == 1) $('#btn-favorit-p3b').find('.glyphicon-heart').addClass('active-ico');
        }
  });

  var get_social_url = base_url+'p3b/get_social';
  $.post(get_social_url, { id: p3b_id })
      .done(function( data ) {

        $('.list-social').html(data);
  });

  return false;
});

//PP
$('#btn-sanding-pp').click(function(e) {
  var id = $('.doc-modal-pp').attr('cur-doc-1');

  $.ajax({
      type: "POST",
      url: base_url+"putusan_pengadilan_pajak/sanding",
      data: {id : id},
      dataType: "html",
        success : function (response, textS, xhr) 
        {
          $('#doc-name-pp').html(response);
          $('.compare-notif-mainpage').find('span#doc-title').html(response);
        },
  });

  $('.compare-notif').show(200);
});

$('#compare-ico-pp').click(function(){
  if($('#compare-ico-pp').hasClass('glyphicon-transfer'))
  {
    var delete_cookie_sanding_url = base_url+'putusan_pengadilan_pajak/delete_cookie_sanding';
    $.post( delete_cookie_sanding_url );

    var pp_id1 = $('.doc-modal-pp').attr('cur-doc-2');
    var pp_id2 = $('.doc-modal-pp').attr('cur-doc-1');

    //get double content - pp
    var get_double_content_url = base_url+'putusan_pengadilan_pajak/get_double_content';
    $.post(get_double_content_url, { pp_id1: pp_id1, pp_id2: pp_id2 }, function() { $('#loadingstate').show() })
        .done(function( data ) {

          $('#loadingstate').fadeOut('fast');

          var json = $.parseJSON(data);

          if(json.st == 0)
          {
            $('.doc-modal-pp').modal('hide');
            $('.modal-login').modal('show');
          }
          else
          {
            $('#btn-favorit-pp').hide();
            $('#btn-sanding-pp').hide();
            $('#btn-cetak-pp').hide();
            $('#btn-salin-pp').hide();

            $('.doc-modal-pp').modal('show');

            $('.compare-left-pp .compare-content-wide').html(json.full_content_left);
            $('.compare-right-pp .compare-content-wide').html(json.full_content_right);

            $('.compare-left-pp').find('#id').hide();
            $('.compare-right-pp').find('#id').hide();
          }
		  
		  $('.doc-modal-pp td').wrapInner('<div class="wi"></div>');
		  $('.doc-modal-pp').find('table').each(function() { 
            if($(this).parents('table').length != '') {
				$(this).wrap('<div class="tablewrap"></div>');
			}
		  });
    });

    $('#nocompare-wrapper-pp').hide();
    $('#compare-wrapper-pp').show('fast');
    $('#compare-notifs').hide();    
    $('.compare-notif-mainpage').hide();
  }
  else
  {
    var doc_1 = $('.doc-modal-pp').attr('cur-doc-1');
    $('.doc-modal-pp').attr('cur-doc-2', doc_1);

    //create cookie pp
    var create_cookie_sanding_url = base_url+'putusan_pengadilan_pajak/create_cookie_sanding';
    $.post(create_cookie_sanding_url, { doc_1: doc_1 })
        .done(function() {
          $('#compare-wrapper-pp').hide();
          $('#modaldocument-pp').modal('hide');
          $('.compare-notif-mainpage').show();

          var controller = $('.doc-modal-pp').attr('data-current-controller');

          if(controller != 'putusan_pengadilan_pajak') window.location.href = base_url+'putusan-pengadilan-pajak';
          
    });
  }
});

$('#btn-favorit-pp').click(function(e) {
  var id = $('.doc-modal-pp').attr('cur-doc-1');

  var get_post_url = base_url+'putusan_pengadilan_pajak/favourite';
  var $this = $(this);

  $.post(get_post_url, { id: id })
      .done(function( data ) {

        if(data == 1)
        {
          $this.find('.glyphicon-heart').addClass('active-ico');
        }
        if(data == 2)
        {
          $this.find('.glyphicon-heart').removeClass('active-ico');
        }
  });
});

$('.doc-modal-pp').on('hidden.bs.modal', function (e) {
  //remove favourite
  $('#btn-favorit-pp').find('.glyphicon-heart').removeClass('active-ico');
});

// $('.modalcaller-pp').click(function(){
$(document).on('click', '.modalcaller-pp', function(event, a){

  if(a)
  {
    var pp_id = a;
  }
  else
  {
    var pp_id = $(this).attr('data-id');
  }

  //set wrapper
  $('#nocompare-wrapper-pp').show();
  $('#compare-wrapper-pp').hide();

  //loading
  var loading = '<div id="loadingstate"><img src="'+base_url+'assets/themes/images/preloader.gif"><br>MEMUAT...</div>';
  $('.nocompare-content').html(loading);

  //get single content - pp
  var get_single_content_url = base_url+'putusan_pengadilan_pajak/get_single_content';
  $.post(get_single_content_url, { pp_id: pp_id }, function() { $('#loadingstate').show() })
      .done(function( data ) {

        $('#loadingstate').fadeOut('fast');

        var json = $.parseJSON(data);

        if(json.st == 0)
        {
          // $('.doc-modal-pp').modal('hide');
          // $('.modal-login').modal('show');

          $('#btn-sanding-pp').show();
          $('#btn-favorit-pp').show();

          $('.doc-modal-pp').attr('cur-doc-1', pp_id);

          $('.doc-modal-pp').modal('show');
          $('.nocompare-content-pp').html(json.full_content);
          $('.nocompare-content-pp').find('#id').hide();

          if(json.favourite == 1) $('#btn-favorit-pp').find('.glyphicon-heart').addClass('active-ico');
        }
        else
        {
          $('#btn-sanding-pp').show();
          $('#btn-favorit-pp').show();

          $('.doc-modal-pp').attr('cur-doc-1', pp_id);

          $('.doc-modal-pp').modal('show');
          $('.nocompare-content-pp').html(json.full_content);
          $('.nocompare-content-pp').find('#id').hide();

          if(json.favourite == 1) $('#btn-favorit-pp').find('.glyphicon-heart').addClass('active-ico');
        }
		$('.doc-modal-pp td').wrapInner('<div class="wi"></div>');
        
//        $('.doc-modal-pp').on('shown.bs.modal', function (e) {
//            console.log($('.modal-content').width() );
//        })
      
		$('.doc-modal-pp').find('table').each(function() {             
			if($(this).parents('table').length != '') {
				$(this).wrap('<div class="tablewrap"></div>');
			}
		});
  });

  var get_social_url = base_url+'putusan_pengadilan_pajak/get_social';
  $.post(get_social_url, { id: pp_id })
      .done(function( data ) {

        $('.list-social').html(data);
  });

  return false;
});

//MA
$('#btn-sanding-ma').click(function(e) {
  var id = $('.doc-modal-ma').attr('cur-doc-1');

  $.ajax({
      type: "POST",
      url: base_url+"putusan_mahkamah_agung/sanding",
      data: {id : id},
      dataType: "html",
        success : function (response, textS, xhr) 
        {
          $('#doc-name-ma').html(response);
          $('.compare-notif-mainpage').find('span#doc-title').html(response);
        },
  });

  $('.compare-notif').show(200);
});

$('#compare-ico-ma').click(function(){
  if($('#compare-ico-ma').hasClass('glyphicon-transfer'))
  {
    var delete_cookie_sanding_url = base_url+'putusan_mahkamah_agung/delete_cookie_sanding';
    $.post( delete_cookie_sanding_url );

    var ma_id1 = $('.doc-modal-ma').attr('cur-doc-2');
    var ma_id2 = $('.doc-modal-ma').attr('cur-doc-1');

    //get double content - pp
    var get_double_content_url = base_url+'putusan_mahkamah_agung/get_double_content';
    $.post(get_double_content_url, { ma_id1: ma_id1, ma_id2: ma_id2 }, function() { $('#loadingstate').show() })
        .done(function( data ) {

          $('#loadingstate').fadeOut('fast');

          var json = $.parseJSON(data);

          if(json.st == 0)
          {
            $('.doc-modal-ma').modal('hide');
            $('.modal-login').modal('show');
          }
          else
          {
            $('#btn-favorit-ma').hide();
            $('#btn-sanding-ma').hide();
            $('#btn-cetak-ma').hide();
            $('#btn-salin-ma').hide();

            $('.doc-modal-ma').modal('show');

            $('.compare-left-ma .compare-content-wide').html(json.full_content_left);
            $('.compare-right-ma .compare-content-wide').html(json.full_content_right);

            $('.compare-left-ma').find('#id').hide();
            $('.compare-right-ma').find('#id').hide();
          }
    });

    $('#nocompare-wrapper-ma').hide();
    $('#compare-wrapper-ma').show('fast');
    $('#compare-notifs').hide();    
    $('.compare-notif-mainpage').hide();
  }
  else
  {
    var doc_1 = $('.doc-modal-ma').attr('cur-doc-1');
    $('.doc-modal-ma').attr('cur-doc-2', doc_1);

    //create cookie ma
    var create_cookie_sanding_url = base_url+'putusan_mahkamah_agung/create_cookie_sanding';
    $.post(create_cookie_sanding_url, { doc_1: doc_1 })
        .done(function() {
          $('#compare-wrapper-ma').hide();
          $('#modaldocument-ma').modal('hide');
          $('.compare-notif-mainpage').show();

          var controller = $('.doc-modal-ma').attr('data-current-controller');

          if(controller != 'putusan_mahkamah_agung') window.location.href = base_url+'putusan-mahkamah-agung';
          
    });
  }
});
    
    
$('#btn-favorit-ma').click(function(e) {
  var id = $('.doc-modal-ma').attr('cur-doc-1');

  var get_post_url = base_url+'putusan_mahkamah_agung/favourite';
  var $this = $(this);

  $.post(get_post_url, { id: id })
      .done(function( data ) {

        if(data == 1)
        {
          $this.find('.glyphicon-heart').addClass('active-ico');
        }
        if(data == 2)
        {
          $this.find('.glyphicon-heart').removeClass('active-ico');
        }
  });
});

$('.doc-modal-ma').on('hidden.bs.modal', function (e) {
  //remove favourite
  $('#btn-favorit-ma').find('.glyphicon-heart').removeClass('active-ico');
});

// $('.modalcaller-ma').click(function(){
$(document).on('click', '.modalcaller-ma', function(event, a){
  
  if(a)
  {
    var ma_id = a;
  }
  else
  {
    var ma_id = $(this).attr('data-id');
  }

  //set wrapper
  $('#nocompare-wrapper-ma').show();
  $('#compare-wrapper-ma').hide();

  //loading
  var loading = '<div id="loadingstate"><img src="'+base_url+'assets/themes/images/preloader.gif"><br>MEMUAT...</div>';
  $('.nocompare-content').html(loading);

  //get single content - pp
  var get_single_content_url = base_url+'putusan_mahkamah_agung/get_single_content';
  $.post(get_single_content_url, { ma_id: ma_id }, function() { $('#loadingstate').show() })
      .done(function( data ) {

        $('#loadingstate').fadeOut('fast');

        var json = $.parseJSON(data);

        if(json.st == 0)
        {
          // $('.doc-modal-ma').modal('hide');
          // $('.modal-login').modal('show');
          $('#btn-sanding-ma').show();
          $('#btn-favorit-ma').show();

          $('.doc-modal-ma').attr('cur-doc-1', ma_id);

          $('.doc-modal-ma').modal('show');
            
          var str = json.full_content;
          var isicontent = str.replace(/border="0"/g, 'border="1" align="center"');
          var isicontent = str.replace(/PUTUSAN/, "<strong>PUTUSAN</strong>");
          var isicontent = str.replace(/DEMI KEADILAN BERDASARKAN KETUHANAN YANG MAHA ESA MAHKAMAH AGUNG/, '<strong>DEMI KEADILAN BERDASARKAN KETUHANAN YANG MAHA ESA MAHKAMAH AGUNG</strong>');
          $('.nocompare-content-ma').html(isicontent);
          $('.nocompare-content-ma').find('#id').hide();

          if(json.favourite == 1) $('#btn-favorit-ma').find('.glyphicon-heart').addClass('active-ico');
        }
        else
        {
          $('#btn-sanding-ma').show();
          $('#btn-favorit-ma').show();

          $('.doc-modal-ma').attr('cur-doc-1', ma_id);

          $('.doc-modal-ma').modal('show');
            
          var str = json.full_content;
          var isicontent = str.replace(/border="0"/g, 'border="1" align="center"');
          var isicontent = str.replace(/PUTUSAN/, "<strong>PUTUSAN</strong>");
          var isicontent = str.replace(/DEMI KEADILAN BERDASARKAN KETUHANAN YANG MAHA ESA MAHKAMAH AGUNG/, '<strong>DEMI KEADILAN BERDASARKAN KETUHANAN YANG MAHA ESA MAHKAMAH AGUNG</strong>');
          $('.nocompare-content-ma').html(isicontent);
          $('.nocompare-content-ma').find('#id').hide();

          if(json.favourite == 1) $('#btn-favorit-ma').find('.glyphicon-heart').addClass('active-ico');
        }
  });

  var get_social_url = base_url+'putusan_mahkamah_agung/get_social';
  $.post(get_social_url, { id: ma_id })
      .done(function( data ) {

        $('.list-social').html(data);
  });

  return false;
});