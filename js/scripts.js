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


    //file input 
    $('.js-field-file .js-file-button').on('click', function () {
        $(this).parent().find('input').click();
        return false;
    })
    $('.js-field-file input[type=file]').on('change', function () {
        let fileName = ('' + $(this).val());
        if (fileName == "") {
            fileName = $(this).parent().find('.js-file-button').attr('data-title');
            $(this).parent().removeClass('active').find('.js-file-button').find('.button-title').html(fileName);
        } else {
            $(this).parent().addClass('active').find('.js-file-button').find('.button-title').html(fileName);
        }
    });

    //field-password
    $('.button-password-toggle').on('click', function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).parent('.frm-field-input').find('.form-input').prop('type', 'password');
        } else {
            $(this).addClass('active');
            $(this).parent('.frm-field-input').find('.form-input').prop('type', 'text');
        }
        return false;
    })


    //btn tgl
    $('.js-btn-tgl:not(.tgl-one)').on('click', function () {
        $(this).toggleClass('active');
        return false;
    })
    $('.js-btn-tgl.tgl-one').on('click', function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).parents('.tgl-wrap').find('.js-btn-tgl.active').removeClass('active');
            $(this).addClass('active');
        }
        return false;
    })

    //content toggle action
    $('input[data-content]').each(function () {
        if ($(this).is(':checked')) {
            let selectContent = $(this).attr('data-content');
            $('.frm-content[data-content="' + selectContent + '"]').addClass('active');
        }
    })
    $('input[data-content]').on('click', function () {
        $('.frm-content.active').removeClass('active');
        $('input[data-content]').each(function () {
            if ($(this).is(':checked')) {
                let selectContent = $(this).attr('data-content');
                $('.frm-content[data-content="' + selectContent + '"]').addClass('active');
            }
        })
    })
    $('.btn[data-content]').on('click', function () {
        let dataContent = $(this).attr('data-content');
        $(this).attr('disabled', 'disabled');
        $('.frm-content[data-content="' + dataContent + '"]').slideDown(200);
        return false;
    })
    
    
    //side menu
    $('.side-menu-box .btn-menu-toggle').on('click', function() {
        $(this).toggleClass('active-menu');
        return false;
    })

    
    //filter
    $('.js-filter-toggle').on('click', function() {
        $('body').toggleClass('filter-show');
        return false;
    })
    
    
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


    //side-tiles-box
    if (!!$('.side-tiles-box').offset()) {
        $('.side-tiles-box .slider').slick({
            dots: true,
            slidesToShow: 2,
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
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 2,
                    }
                },
            ]
        });
    }


    //#price
    if (!!$('#price-slider').offset()) {
        $('#price-slider').slider({
            range: true,
            min: 20000,
            max: 350000,
            values: [20000, 200000],
            slide: function (event, ui) {
                $('#price-min').val(ui.values[0]);
                $('#price-max').val(ui.values[1]);
            }
        })
        $('#price-min').val($('#price-slider').slider('values', 0));
        $('#price-max').val($('#price-slider').slider('values', 1));
        $('#price-min').bind('focusout', function () {
            if ($(this).val() > $('#price-slider').slider('values', 1)) {
                $(this).val($('#price-slider').slider('values', 0));
            }
            $('#price-slider').slider('values', 0, $(this).val());
        })
        $('#price-max').bind('focusout', function () {
            if ($(this).val() < $('#price-slider').slider('values', 0)) {
                $(this).val($('#price-slider').slider('values', 1));
            }
            $('#price-slider').slider('values', 1, $(this).val());
        })
        $('#price-min').bind('keypress', function (e) {
            if (e.keyCode == 13) {
                if ($(this).val() > $('#price-slider').slider('values', 1)) {
                    $(this).val($('#price-slider').slider('values', 0));
                }
                $('#price-slider').slider('values', 0, $(this).val());
            }
        })
        $('#price-max').bind('keypress', function (e) {
            if (e.keyCode == 13) {
                if ($(this).val() < $('#price-slider').slider('values', 0)) {
                    $(this).val($('#price-slider').slider('values', 1));
                }
                $('#price-slider').slider('values', 1, $(this).val());
            }
        })
        $('#widget').draggable();
    }
    //#period-slider
    if (!!$('#period-slider').offset()) {
        $('#period-slider').slider({
            range: true,
            min: 2,
            max: 30,
            values: [2, 10],
            slide: function (event, ui) {
                $('#period-min').val(ui.values[0]);
                $('#period-max').val(ui.values[1]);
            }
        })
        $('#period-min').val($('#period-slider').slider('values', 0));
        $('#period-max').val($('#period-slider').slider('values', 1));
        $('#period-min').bind('focusout', function () {
            if ($(this).val() > $('#period-slider').slider('values', 1)) {
                $(this).val($('#period-slider').slider('values', 0));
            }
            $('#period-slider').slider('values', 0, $(this).val());
        })
        $('#period-max').bind('focusout', function () {
            if ($(this).val() < $('#period-slider').slider('values', 0)) {
                $(this).val($('#period-slider').slider('values', 1));
            }
            $('#period-slider').slider('values', 1, $(this).val());
        })
        $('#period-min').bind('keypress', function (e) {
            if (e.keyCode == 13) {
                if ($(this).val() > $('#period-slider').slider('values', 1)) {
                    $(this).val($('#period-slider').slider('values', 0));
                }
                $('#period-slider').slider('values', 0, $(this).val());
            }
        })
        $('#period-max').bind('keypress', function (e) {
            if (e.keyCode == 13) {
                if ($(this).val() < $('#period-slider').slider('values', 0)) {
                    $(this).val($('#period-slider').slider('values', 1));
                }
                $('#period-slider').slider('values', 1, $(this).val());
            }
        })
        $('#widget').draggable();
    }


	//popups
	let popupCurrent;
	$('.js-popup-open').on('click', function () {
		$('.popup-outer-box').removeClass('active');
		$('body').addClass('popup-open');
		popupCurrent = $(this).attr('data-popup');
		$('.popup-outer-box[id="' + popupCurrent + '"]').addClass('active');
		return false;
	})
	$('.js-popup-close').on('click', function () {
		$('body').removeClass('popup-open');
		$('.popup-outer-box').removeClass('active');
		return false;
	})
	$('.popup-outer-box').on('click', function (event) {
		if (!event.target.closest('.popup-box')) {
			$('body').removeClass('popup-open');
			$('body').removeClass('popup-open-scroll');
			$('.popup-outer-box').removeClass('active');
			return false;
		}
	})
	
});


