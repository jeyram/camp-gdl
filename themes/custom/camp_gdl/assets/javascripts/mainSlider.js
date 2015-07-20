(function ($, Drupal) {

    "use strict";

    /**
     * Initialise the flexnav
     */
    Drupal.behaviors.mainSlider = {
        attach: function (context, settings) {
            $('.view-main-slider .view-content').royalSlider({
                arrowsNav: false,
                controlsInside: false,
                imageScaleMode: 'fill',
                arrowsNavAutoHide: false,
                autoScaleSlider: true,
                autoScaleSliderWidth: 1200,
                autoScaleSliderHeight: 350,
                controlNavigation: 'bullets',
                thumbsFitInViewport: false,
                navigateByClick: false,
                startSlideId: 0,
                sliderDrag: false,
                sliderTouch: true,
                transitionType: 'move',
                autoPlay: {
                    enabled: true,
                    delay: 8000,
                },
                globalCaption: true,
                deeplinking: {
                    enabled: true,
                    change: false,
                }
            });
        }
    };

})(jQuery, Drupal);
