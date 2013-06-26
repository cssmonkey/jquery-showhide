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
				toggleDetail = $('.detail', toggleComponent);
			
			toggleComponent.addClass('show-hide');
            $('<a class="toggle-link-txt" href="#">' + toggleLinkText[0] + '</a></p></div>').appendTo(toggleSummary);


            $('.toggle-link-txt', toggleComponent).on('click',function (e) {
				e.preventDefault();

					
				if(!toggleComponent.hasClass('panel-open')) {
					toggleComponent.addClass('panel-open');
					toggleDetail.slideDown(function() {
						$('.toggle-link-txt', toggleComponent).text(toggleLinkText[1]);
					});
				}
				else {
					toggleComponent.removeClass('panel-open');
					toggleDetail.slideUp(function() {
						$('.toggle-link-txt', toggleComponent).text(toggleLinkText[0]);
					});
				}
                
            });
            if (openByDefault)
                $('.toggle-link-txt', toggleComponent).click();

        });

    };

})(jQuery);
