var cont=document.querySelector(".cont");
var tact=document.querySelector(".tact");

cont.onmouseover=function(){
    tact.style.display=('block');
}

cont.onmouseout=function(){
    tact.style.display=('none')
}







 // navbar an aicon

  var icon = document.querySelector(".menu-bar");
  var menue = document.querySelector(".nav-1");
  icon.onclick = function burgermenue(){
    if(menue.style.display=="none"){
      menue.style.display="block";
    }
    else{
      menue.style.display="none";
    }
}



$('.loginBtn').click(function(){
    $('.login').show();
    $('.signUp').hide();
    /* border bottom on button click */
    $('.loginBtn').css({'border-bottom' : '2px solid #ff4141'});
    /* remove border after click */
    $('.signUpBtn').css({'border-style' : 'none'});
  });
   
   
  /* Show sign Up form on button click */
   
  $('.signUpBtn').click(function(){
    $('.login').hide();
    $('.signUp').show();
    /* border bottom on button click */
    $('.signUpBtn').css({'border-bottom' : '2px solid #ff4141'});
     /* remove border after click */
     $('.loginBtn').css({'border-style' : 'none'});
  });