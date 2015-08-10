$(document).ready(function(){
	$('#ourUpdatesContent li a').click(function(e) {
	    $(this).closest('ul').find('.selectActive').removeClass('selectActive');
	    $(this).parent('li').addClass('selectActive');

	    $('#' + this.href.split('#')[1]).fadeIn('slow').siblings('.changingTextIconDiv').hide();
	    return false;
	});
});