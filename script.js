$(document).ready(function(){
	$('.navItem').on('click',function(){
		$('.navItem').removeClass('selected');
		$(this).addClass('selected');
	});
});