(function ($) {

    $.fn.showHide = function (options) {
        var isToggleClass = "isToggle";

        // Default Options
        var settings = {
            toggleSummary: '.toggleHeading',
            toggleDetail: '.toggleContent',
            toggleLinkText: 'Show more, Show less',
            openByDefault: false,
            clickableSummary: false
        };

        $.extend(settings, options); 

        return this.each(function () {
            var toggleComponent = $(this),
				toggleLinkText = settings.toggleLinkText.split(","),
				toggleSummary = $(settings.toggleSummary, toggleComponent),
				toggleDetail = $(settings.toggleDetail, toggleComponent),
                openByDefault = settings.open || toggleDetail.is(':visible'),
                clickableSummary = settings.clickableSummary;



            var init = function () {
                toggleComponent.addClass('show-hide');
                var toggletxt = (openByDefault) ? toggleLinkText[1] : toggleLinkText[0];

                $('<div class="toggleTxt"><a class="toggleLink" href="#">' + toggletxt + '</a></div>').appendTo(toggleSummary);

                eventHandlers();
            }

            var eventHandlers = function () {
                var toggleElement = (clickableSummary) ? toggleSummary : $('.toggleLink', toggleComponent);


                toggleElement.on('click', function (e) {
                    e.preventDefault();

                    if (!toggleDetail.is(':visible')) {
                        bindEvent.open();
                    }
                    else {
                        bindEvent.close();
                    }

                });
            }

            var bindEvent = {
                open: function () {
                    toggleSummary.addClass('open');
                    toggleDetail.slideDown(function () {
                        $('.toggleLink', toggleComponent).text(toggleLinkText[1]);
                    });
                },
                close: function () {
                    toggleSummary.removeClass('open');
                    toggleDetail.slideUp(function () {
                        $('.toggleLink', toggleComponent).text(toggleLinkText[0]);
                    });
                }
            }

            init();

        });

    };

})(jQuery);