$(document).ready(function () {

	$('#newstitleimage img').css('display', 'none');



	$('#news #row-1 #titles #nyt').hover(
		function () {
			$('#row-1 #newstitleimage #nyt').css('display', 'block');
		},
		function () {
			$('#row-1 #newstitleimage #nyt').css('display', 'none');
		})


	$('#news #row-1 #titles #tyt').hover(
		function () {
			$('#row-1 #newstitleimage #tyt').css('display', 'block');
		},
		function () {
			$('#row-1 #newstitleimage #tyt').css('display', 'none');
		})



	$('#news #row-2 #titles #nyt').hover(
		function () {
			$('#row-2 #newstitleimage #nyt').css('display', 'block');
		},
		function () {
			$('#row-2 #newstitleimage #nyt').css('display', 'none');
		})


	$('#news #row-2 #titles #tyt').hover(
		function () {
			$('#row-2 #newstitleimage #tyt').css('display', 'block');
		},
		function () {
			$('#row-2 #newstitleimage #tyt').css('display', 'none');
		})


	$('#featured-projects > div > div').hover(function () {
		$(this).css('color','#f63d12');
		var theimage = $(this).find('img');
		var overlay = $("<div>", {id: "foo", class: "a"});
		overlay.css({
			'background':'#f63d12',
			'width':theimage.width(),
			'height':theimage.height(),
			'position':'absolute',
			'top':'0',
			'left':'15px',
			'z-index':1000,
			'opacity':0.8
		})
		
		$(this).append(overlay);
	}, function () {
		$(this).css('color','#000');
		$('#foo').remove();
	});


});