$( document ).ready(function() {


  var scrollToSignup = function() {
    $.smoothScroll({
      easing: 'swing',

      // speed can be a number or 'auto'
      // if 'auto', the speed will be calculated based on the formula:
      // (current scroll position - target scroll position) / autoCoeffic
      speed: 500,

      // autoCoefficent: Only used when speed set to "auto".
      // The higher this number, the faster the scroll speed
      autoCoefficient: 2,

      // $.fn.smoothScroll only: whether to prevent the default click action
      preventDefault: true,
      scrollTarget: '#homeSignUpSection'
    });
    return false;
  }

 $('.bizMenuSignUp').click(scrollToSignup);

 $('#signUpBtnHome').click(scrollToSignup);

});



function overlay() {
	el = document.getElementById("overlay");
	el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
}


//Features Scroll to Fixed Header
var element = document.getElementById('#pageLinks')
window.addEventListener('scroll', function() {
     element.getBoundingClientRect().top < 0 ? 
     element.classList.add('stuck') : 
     element.classList.remove('stuck');
});













