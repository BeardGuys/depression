// leadpages_input_data variables come from the template.json "variables" section
var leadpages_input_data = {};

$(function () {

	function updatePageForTopImg(){
        // this is for setting the background image using size cover
        // top background image
        $('.headline-wrap').css('background-image', 'url('+$(".headline-bg").attr("src")+')').css('background-size' , 'cover').css('background-position' , 'top center');
    }
    function updatePageForLwrImg() {
    	// lower background image
    	$('.download-wrap').css('background-image', 'url('+$(".download__wrap__bg").attr("src")+')').css('background-size' , 'cover').css('background-position' , 'top center');
    }

    // Either run the DOM update functions once for a published page or continuously for within the builder. 
    if ( typeof window.top.App === 'undefined' ) {
        // Published page
        
        $(window).on('load', function(){

            updatePageForTopImg();
            updatePageForLwrImg();

        });
    } else {
        // within the builder
        setInterval( function(){

            if ( $( '.headline-bg' ).css( 'display' ) == "none" ) {
                $( '.headline-wrap' ).css( 'background-image' , 'none' );
            }
            else {
                updatePageForTopImg();
            }
            if ( $( '.download__wrap__bg' ).css( 'display' ) == "none" ) {
                $( '.download-wrap' ).css( 'background-image' , 'none' );
            }
            else {
                updatePageForLwrImg();
            }

        }, 500);
    }



	$('.share__btn').click(function(event){
		event.preventDefault();
		var service = $(this).data('service');
		switch(service) {
			case 'facebook':
				url = ( LeadPageData['facebookurl']['value'] ? LeadPageData['facebookurl']['value'] : document.URL);
				window_size = "width=585,height=368";
				go = 'http://www.facebook.com/sharer/sharer.php?u=' + url;
				break;
			case 'twitter':
				url = ( LeadPageData['twitterurl']['value'] ? LeadPageData['twitterurl']['value'] : document.URL);
				window_size = "width=585,height=261";
				go = 'http://www.twitter.com/intent/tweet?url=' + url;
				break;
			case 'google':
				url = ( LeadPageData['googleurl']['value'] ? LeadPageData['googleurl']['value'] : document.URL);
				window_size = "width=517,height=511";
				go = 'http://plus.google.com/share?url=' + url;
				break;
			default:
				return false;
		}
		window.open(go, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,' + window_size);
	});


});
