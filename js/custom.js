function responsive_player(){

  if( $(window).width()<768 ) {
    $("#mediaspace").empty(); 
  }
  else if( $(window).width()>768 ) {
    $("#mediaspace").empty(); 
    var so = new SWFObject('http://vandaagvrouwenversieren.s3.amazonaws.com/optin/player.swf','jwplayer','100%','290px','8');
    so.addParam('allowfullscreen','true');
    so.addParam('allowscriptaccess','always');
    so.addParam('wmode','opaque');
    so.addVariable('file','https://s3-eu-west-1.amazonaws.com/vandaagvrouwenversieren/optin/pp-optin-animation-new.mp4');  so.addVariable('image','img/placeholder.png');
    so.addVariable('controlbar','false');
    so.addVariable('autostart','false');
    so.addVariable('stretching','fill');
    so.addVariable('backcolor','ffffff');
    so.addVariable('frontcolor','ffffff');
    so.write('mediaspace'); 
  }
 
}


$(document).ready(function(){  
  
    responsive_player();
    $(window).bind('resize', function () { 
      setTimeout(
        responsive_player(), 500
      );  
    });
  

    $(".bg-6").anystretch('img/bg-6.jpg');
    $(".bg-5").anystretch('img/bg-5.jpg');
    $(".bg-4").anystretch('img/bg-4.jpg');
    $(".bg-3").anystretch('img/bg-3.jpg');
    $(".bg-2").anystretch('img/bg-2.jpg');
    $(".bg-1").anystretch('img/bg-1.jpg');


    $('form.submit-form').validate({
        rules: { 
          name: {
            minlength: 2,
            required: true
          },
          email: {
            minlength: 2,
            required: true,
            email: true
          } 
        },
        highlight: function(label) {
            $(label).closest('.form-group').addClass('has-error');
        },
        success: function(label) {
            label
                .text('OK!').addClass('valid')
                .closest('.form-group').addClass('has-success');
        }
    });
 
  
});