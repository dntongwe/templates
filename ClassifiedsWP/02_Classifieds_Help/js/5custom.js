jQuery(document).ready(function () {
    $('#sidebar').affix({
        offset: {
            top: $('header').height()
        }
    });

    $('.slideTo').click(function (e) {
        e.preventDefault();
        var $this = $(this);
        var el = $($this.attr('href'));
        if (el.length > 0) {
            var position = Math.round(el.offset().top);
            $("html, body").stop().animate(
                {
                    scrollTop: position
                },
                {
                    duration: 1200,
                    easing: 'easeInOutExpo'
                }
            );
        }
    });

    var allPanels = $('.inline .inline-content');
    var $first = $('.content .inline:first-of-type .inline-content');

    $('.top-title').click(function (e) {
        $(this).parent().find('.inline-content').slideToggle();
        $(this).toggleClass('open');
        $first.css('display', 'block');
    });

    $first.click(function() {
       allPanels().not($first).slideUp();
    });

    $('.meta ul li.pull-right.hidden-print a').click(function () {
        allPanels.slideDown();
        setTimeout(function() {
        window.print();
        },600 );
        return false;
    });

});
