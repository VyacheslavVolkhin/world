$(document).ready(function(){

	//phone masked
	$('input[type="tel"]').mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"});
	$('input[type="tel"]').on('click', function() {
		$(this).setCursorPosition(4);
	})
	$.fn.setCursorPosition = function(pos) {
	  this.each(function(index, elem) {
	    if (elem.setSelectionRange) {
	      elem.setSelectionRange(pos, pos);
	    } else if (elem.createTextRange) {
	      var range = elem.createTextRange();
	      range.collapse(true);
	      range.moveEnd('character', pos);
	      range.moveStart('character', pos);
	      range.select();
	    }
	  });
	  return this;
	};

    //swipebox
    if (!!$('[data-swipebox]').offset()) {
        $('[data-swipebox]').swipebox();
    }
    
    
    //header menu
    $('.header .action-menu .button-header').on('click', function() {
        $('.popup-menu-wrap .js-btn-toggle').addClass('active');
        return false;
    })
    
    
    //phone show
    $('.tile-info-row .tile-ico-link').on('click', function() {
        $(this).parents('.tile-info-row').addClass('active');
        return false;
    })


    //popup block
    $('.js-popup-wrap .js-btn-toggle').on('click', function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('body').removeClass('menu-show');
            $('.js-popup-wrap').removeClass('popup-right');
        } else {
            $('.js-popup-wrap:not(.no-close) .js-btn-toggle').removeClass('active');
            $(this).addClass('active');
            if ($(this).parent().hasClass('main-menu-wrap')) {
                $('body').addClass('menu-show');
            }
            pLeft = $(this).parent('.js-popup-wrap').find('.js-popup-block').offset().left;
            pWidth = $(this).parent('.js-popup-wrap').find('.js-popup-block').outerWidth();
            pMax = pLeft + pWidth;
            if ( pMax > $('.wrap').width() ) {
                $(this).parent('.js-popup-wrap').addClass('popup-right');
            } else {
                $('.js-popup-wrap').removeClass('popup-right');
            }
        }
        return false;
    })
    $('.js-popup-wrap .js-btn-close').on('click', function() {
        $(this).parents('.js-popup-wrap').children('.js-btn-toggle').removeClass('active');
        $('.js-popup-wrap').removeClass('popup-right');
        $('body').removeClass('menu-show');
        return false;
    })
    $(document).click(function(event) {
        if ($(event.target).closest(".js-popup-block").length) return;
        $('.js-popup-wrap:not(.no-close) .js-btn-toggle').removeClass('active');
        $('.js-popup-wrap').removeClass('popup-right');
        $('body').removeClass('menu-show');
        event.stopPropagation();
    });
    $('.js-popup-wrap').each(function() {
        if ($(this).hasClass('js-popup-select')) {
            if ($(this).find('.js-popup-block').find('.active').length>0) {
                $(this).find('.js-btn-toggle').addClass('selected');
                var currentSelect = $(this).find('.js-popup-block').find('.active').html();
                $(this).find('.js-btn-toggle').children('.button-title').html(currentSelect);
            } else {
                $(this).find('.js-btn-toggle').removeClass('selected');
            }
        }
    })
    $('.js-popup-wrap.js-popup-select .js-popup-block a').on('click', function() {
        if ($(this).hasClass('active')) {} else {
            $(this).parents('.js-popup-wrap').find('.js-popup-block').find('.active').removeClass('active');
            $(this).addClass('active');
            $('.js-tab-block').removeClass('active');
            $('.js-tabs-nav').each(function() {
                $('.js-tab-block[data-tab*="'+$(this).find('.js-popup-block').find('.active').attr('data-tab')+'"]').addClass('active');
            })
        }
        $('.js-popup-wrap').each(function() {
            if ($(this).hasClass('js-popup-select')) {
                if ($(this).find('.js-popup-block').find('.active').length>0) {
                    $(this).find('.js-btn-toggle').addClass('selected');
                    var currentSelect = $(this).find('.js-popup-block').find('.active').html();
                    $(this).find('.js-btn-toggle').children('.button-title').html(currentSelect);
                } else {
                    $(this).find('.js-btn-toggle').removeClass('selected');
                }
            }
        })
        $(this).parents('.js-popup-wrap').find('.js-btn-toggle').removeClass('active');
        return false;
    })

    //tabs
    $('.js-tabs-nav').each(function() {
        $('.js-tab-block[data-tab*="'+$(this).find('.active').attr('data-tab')+'"]').addClass('active');
    })
    $('.js-tab-title').each(function() {
        if ($(this).hasClass('active')) {
            $(this).next('.js-tab-content').show(0);
        }
    })
    $('.js-tabs-nav').on('click', 'a[data-tab]', function() {
        if ($(this).hasClass('active')) {} else {
            $('.js-tab-block').removeClass('active');
            $(this).parents('.js-tabs-nav').find('.active').removeClass('active');
            $(this).addClass('active');
            $('.js-tabs-nav').each(function() {
                $('.js-tab-block[data-tab*="'+$(this).find('.active').attr('data-tab')+'"]').addClass('active');
            })
        }
        return false;
    })
    $('.js-tab-title').on('click' , function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active').next('.js-tab-content').slideUp(200);
        } else {
            $(this).addClass('active').next('.js-tab-content').slideDown(200);
        }
    })


    //catalog-slider-box
    if (!!$('.catalog-slider-box').offset()) {
        $('.catalog-slider-box .slider').slick({
            dots: true,
            slidesToShow: 4,
            variableWidth: false,
            infinite: false,
            adaptiveHeight: true,
            rows: 1,
            swipeToSlide: true,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });
    }

    //item-tile-catalog
    if (!!$('.item-tile-catalog').offset()) {
        $('.item-tile-catalog .tile-slider').slick({
            dots: true,
            slidesToShow: 1,
            variableWidth: false,
            infinite: false,
            adaptiveHeight: false,
            rows: 1,
            swipeToSlide: true,
            prevArrow: false,
            nextArrow: false,
            autoplay: true,
            autoplaySpeed: 3000,
        });
    }


    //gallery-slider-box
    if (!!$('.gallery-slider-box.slider-full').offset()) {
        $('.gallery-slider-box.slider-full .slider').slick({
            dots: true,
            slidesToShow: 9,
            variableWidth: false,
            infinite: false,
            adaptiveHeight: false,
            rows: 1,
            swipeToSlide: true,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 8,
                    }
                },
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 7,
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 6,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                    }
                },
            ]
        });
    }
    //gallery-slider-box
    if (!!$('.gallery-slider-box.slider-content').offset()) {
        $('.gallery-slider-box.slider-content .slider').slick({
            dots: true,
            slidesToShow: 7,
            variableWidth: false,
            infinite: false,
            adaptiveHeight: false,
            rows: 1,
            swipeToSlide: true,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 6,
                    }
                },
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                        variableWidth: true,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4,
                        variableWidth: true,
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 3,
                        variableWidth: true,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        variableWidth: true,
                    }
                },
            ]
        });
    }


    //actions-tiles-box
    if (!!$('.actions-tiles-box').offset()) {
        $('.actions-tiles-box .slider').slick({
            dots: false,
            slidesToShow: 1,
            variableWidth: false,
            infinite: true,
            adaptiveHeight: false,
            rows: 1,
            swipeToSlide: true,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        dots: true,
                        infinite: false,
                    }
                },
            ]
        });
    }
    //actions-tiles-slider-box
    if (!!$('.actions-tiles-slider-box').offset()) {
        $('.actions-tiles-slider-box .slider').slick({
            dots: true,
            slidesToShow: 1,
            variableWidth: false,
            infinite: true,
            adaptiveHeight: true,
            rows: 1,
            swipeToSlide: true,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        dots: true,
                        infinite: false,
                    }
                },
            ]
        });
    }


    //tags-slider-box
    if (!!$('.tags-slider-box').offset()) {
        $('.tags-slider-box .slider').slick({
            dots: false,
            slidesToShow: 1,
            variableWidth: true,
            infinite: false,
            adaptiveHeight: false,
            rows: 1,
            swipeToSlide: true,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        dots: true,
                        slidesToShow: 10,
                        infinite: false,
                    }
                },
            ]
        });
    }


    //calendar-slider-box
    if (!!$('.calendar-slider-box').offset()) {
        $('.calendar-slider-box .slider').slick({
            dots: false,
            slidesToShow: 31,
            variableWidth: false,
            infinite: false,
            adaptiveHeight: false,
            rows: 1,
            swipeToSlide: true,
            prevArrow: false,
            nextArrow: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
                        nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
                    }
                },
            ]
        });
    }
	
});


