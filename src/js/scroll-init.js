(function($, Modernizr) {

    'use strict';
    $(document).ready(function() {

        var header_height = $('.header').height();
        var helper = SkrollrUtilities.getHelper();

        var links = ['home', 'work', 'blog', 'resume'];

        links.forEach(function(element, index) {
            var intro_link = Math.floor($('.intro-link.' + element).offset().top - header_height);
            $('.intro-link.' + element).addKeyframe(intro_link, {});
            helper.onKeyframeEvent($('.intro-link.' + element), 'data-' + intro_link, function() {
                // console.log('hi');
                $('.nav-link.' + element).addClass('animate');
            });
        });

        var social_nav = Math.floor($('.social-nav').offset().top - header_height);

        $('.social-nav').addKeyframe(social_nav- 15, {

        });

        $('.social-nav').addKeyframe(social_nav - 16, {

        });

        helper.onKeyframeEvent($('.social-nav'), 'data-' + (social_nav - 15), function(element, name, direction) {
            $(element).addClass('fixed');
        });
        helper.onKeyframeEvent($('.social-nav'), 'data-' + (social_nav - 16), function(element, name, direction) {
            $(element).removeClass('fixed');
        });

        if(Modernizr && Modernizr.touch) {
            console.log('modernizr touch');
            return;
        }


        var s = skrollr.init({
            forceHeight: false,
            keyframe: helper.keyframeHandlerFn
        });
    });

})(jQuery, Modernizr);
