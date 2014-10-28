(function($) {

    'use strict';
    $(document).ready(function() {

        var header_height = $('.header').height();

        var helper = SkrollrUtilities.getHelper();

        var links = ['home', 'work', 'blog', 'resume'];

        links.forEach(function(element, index) {
            $('.intro-link.' + element).addKeyframe($('.intro-link.' + element).offset().top - header_height, {});
            helper.onKeyframeEvent($('.intro-link.' + element), 'data-' + ($('.intro-link.' + element).offset().top - header_height), function() {
                // console.log('hi');
                $('.nav-link.' + element).addClass('animate');
            });
        });

        $('.social-nav').addKeyframe($('.social-nav').offset().top - header_height - 15, {

        });

        $('.social-nav').addKeyframe($('.social-nav').offset().top - header_height - 16, {

        });

        helper.onKeyframeEvent($('.social-nav'), 'data-' + ($('.social-nav').offset().top - header_height - 15), function(element, name, direction) {
            $(element).addClass('fixed');
            console.log('hello');
        });
        helper.onKeyframeEvent($('.social-nav'), 'data-' + ($('.social-nav').offset().top - header_height - 16), function(element, name, direction) {
            $(element).removeClass('fixed');
            console.log('hello');
        });

        var s = skrollr.init({
            forceHeight: false,
            keyframe: helper.keyframeHandlerFn
        });
    });

})(jQuery);
