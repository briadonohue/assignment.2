const toastImage = '<img src="https://dearmedia.com/wp-content/uploads/4AE8C5CA-64F5-4352-8118-268F41B1ADBF-scaled.jpeg" />'
const strictImage = '<img src="https://deow9bq0xqvbj.cloudfront.net/dir-logo/2448275/2448275_300x300.png" />'
const podImage = '<img src="https://res.cloudinary.com/crooked-media/image/upload/f_auto,q_auto/v1609169969/crooked/pod-save-america-episode-default-social-941747-FuPwgaxp.jpg" />'

$(document).ready(function(){
	$('.showbtn').click(function(){
   		$('.myimgdivshowhide').show();
	});
  	$('.hidebtn').click(function(){
   		$('.myimgdivshowhide').hide();
	});
});



function setImage(imageHtml) {
	$('#right').empty().prepend(imageHtml)
}

$('.toast').on('click', function() {
  setImage(toastImage)
})


$('.strict').on('click', function() {
  setImage(strictImage)
})

$('.pod').on('click', function() {
  setImage(podImage)
})