(function ($) {

    $.fn.showHide = function (options) {
        var isToggleClass = "isToggle";

        // Default Options
        var settings = {
            toggleLinkText : 'Show more, Show less',
			openByDefault : false
        };

        return this.each(function () {
            var toggleComponent = $(this),
				openByDefault = settings.open,
				toggleLinkText = settings.toggleLinkText.split(","),
				toggleSummary = $('.summary', toggleComponent), 
				toggleDetail = $('.detail', toggleComponent),
				inTransition = false; 
			
			toggleComponent.addClass('show-hide');
            $('<a class="toggle-link-txt" href="#">' + toggleLinkText[0] + '</a></p></div>').appendTo(toggleSummary);


            $('.toggle-link-txt', toggleComponent).on('click',function (e) {
				e.preventDefault();
				
				if(!inTransition) {
					inTransition = true
					toggleComponent.toggleClass('panel-open');
					toggleDetail.slideToggle(function() {
						inTransition = false;
					});
					$('.toggle-link-txt', toggleComponent).text(toggleElem.hasClass('.panel-open') ? toggleLinkText[1] : toggleLinkText[0]);
				}
                
            });
            if (openByDefault)
                $('.toggle-link-txt', toggleComponent).click();

        });

    };

})(jQuery);
