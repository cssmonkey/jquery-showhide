(function ($) {

    $.fn.showHide = function (options) {
        var isToggleClass = "isToggle";

        // Default Options
        var settings = {
            toggleSummary: '.toggleHeading',
            toggleDetail: '.toggleContent',
            toggleLinkText: 'Show more, Show less',
            openByDefault: false
        };

        $.extend(settings, options);

        return this.each(function () {
            var toggleComponent = $(this),
				toggleLinkText = settings.toggleLinkText.split(","),
				toggleSummary = $(settings.toggleSummary, toggleComponent),
				toggleDetail = $(settings.toggleDetail, toggleComponent),
                openByDefault = settings.open || toggleDetail.is(':visible');

            var init = function () {
                toggleComponent.addClass('show-hide');
                var toggletxt = (openByDefault) ? toggleLinkText[1] : toggleLinkText[0];

                $('<a class="toggle-link-txt" href="#">' + toggletxt + '</a></p></div>').appendTo(toggleSummary);

                eventHandlers();
            }

            var eventHandlers = function () {
                $('.toggle-link-txt', toggleComponent).on('click', function (e) {
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
                    toggleDetail.slideDown(function () {
                        $('.toggle-link-txt', toggleComponent).text(toggleLinkText[1]);
                    });
                },
                close: function () {
                    toggleDetail.slideUp(function () {
                        $('.toggle-link-txt', toggleComponent).text(toggleLinkText[0]);
                    });
                }
            }

            init();

        });

    };

})(jQuery);