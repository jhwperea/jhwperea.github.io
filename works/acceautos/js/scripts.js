'use strict';(function($){var header_placeholder=$('#header-placeholder'),header=$('#primary-navigation-container'),header_height=header.innerHeight(),header_offset=header.offset(),is_sticky=$('body').hasClass('sticky-header'),$header_background=$('.transparent-header #header-wrap .image-background img'),edge_limit=$('#page').width();function wbk_sticky(){if(is_sticky&&$(window).width()>='768'&&header.length){var window_scroll=$(window).scrollTop();if(window_scroll>=header_offset.top){header.addClass('is-sticky');header_placeholder.css('height',header_height);}else{header.removeClass('is-sticky');header_placeholder.css('height',0);}}}function wbk_resize_header(){if($header_background.length&&$(window).width()>='768'){$('.transparent-header #header-wrap').height($header_background.height());}else{$('#header-wrap').css('height','auto');}}function wbk_center_slider_caption(){var $caption=$('.slider-container .caption');var controllers_height=0;if($(window).width()>='992')controllers_height=parseInt($('.controllers-container').height()/2,10);if($caption.length){$caption.each(function(){$(this).css('margin-top','-'+parseInt($(this).height()/2+controllers_height,10)+'px');});}}$(window).on('load',function(){wbk_resize_header();wbk_center_slider_caption();wbk_sticky();});$(window).on('resize',function(){wbk_resize_header();wbk_center_slider_caption();edge_limit=$('#page').width();});$(window).on('scroll',function(){wbk_sticky();});function calculate_edge(who){var elm=$(who).find('ul').first();if(elm.length){var off=elm.offset(),l=off.left,w=elm.width(),isEntirelyVisible=(l+w<=edge_limit);if(!isEntirelyVisible){$(who).addClass('edge');}else{$(who).removeClass('edge');}}}$(".nav li").on('mouseenter',function(){var someElement=$(this),elm=$(this).find('ul').first();elm.addClass('opening');var timeoutId=setTimeout(function(){elm.addClass('opened');},600);someElement.data('timeoutId',timeoutId);calculate_edge(this);}).on('mouseleave',function(){clearTimeout($(this).data('timeoutId'));var elm=$(this).find('ul').first();elm.removeClass('opened');elm.removeClass('opening');calculate_edge(this);});$.stellar();new WOW().init();})(jQuery);
// Slider
    var $slider = $('#slider'),
        $title_content = $slider.find('.title-content');
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
        function changeTitle(elm, currentItem) {
            var title_container = elm.find(".item").eq(currentItem).find(".title-container");
            if(title_container.length)
                $title_content.html(title_container.html());
        }
        var carousel = $slider.find(".owl-carousel");
        carousel.owlCarousel({
            navigation : false,
            pagination: false,
            slideSpeed : 900,
            paginationSpeed : 900,
            singleItem:true,
            lazyLoad: true,
            autoPlay: 5000,
            stopOnHover: true,
            afterInit: function(elem){
                changeTitle(elem, this.currentItem);
                $title_content.css('opacity', 1);
            },
            beforeMove: function(){
                if ( !((this.currentItem==0 && this.owl.dragDirection=='right') || (this.currentItem==this.maximumItem && this.owl.dragDirection=='left')) )
                $title_content.fadeOut(0);
            },
            afterMove: function(elem){
                changeTitle(elem, this.currentItem);
                $title_content.fadeIn(300);
            },
            afterUpdate: function(){
                $title_content.css('opacity', 1);
            },
            afterLazyLoad: function(){
                $slider.find('.controllers-container').css('display', 'block');
                $slider.find('.caption').css('display', 'block');
            }
        });
        var owl = $slider.find('.owl-carousel').data('owlCarousel');
        $slider.find(".arrow-container .prev" ).click(function() {
            carousel.trigger("owl.prev");
        });
        $slider.find(".arrow-container .next" ).click(function() {
            carousel.trigger("owl.next");
        });
        // Our work carousel
            var $carousel = $(".our-works-carousel");
            var $temp = $('#projects-hidden');
            var args = {
                autoPlay: 4000,
                pagination: false,

                items : 8,
                itemsCustom: [[200,1],[300,2],[479,3],[892,4],[1199,6],[1960,7],[2390,8]]
                /*itemsDesktop : [1199,4],
                itemsDesktopSmall : [979,3],
                itemsTablet: [768,2],
                itemsMobile: [479,1]*/
            };
            $temp.html($carousel.html());
            $carousel.owlCarousel(args);
        //Filters
            $(".our-works-filters a").on('click', function(){
                var filter = $(this).attr('data-filter');
                $(".our-works-filters a").removeClass('active');
                $(this).addClass('active');
                $('.our-works-carousel-wrap').animate({
                    opacity: 0
                },'150', function(){
                    if(filter == '*') {
                        $('.our-works-carousel').html($temp.html());
                    } else {
                        $carousel.html('');
                        $temp.find('.item'+filter).each(function(){
                            $(this).clone().appendTo($carousel);
                        });
                    }
                    $carousel.data('owlCarousel').reinit(args);
                    $('.our-works-carousel-wrap').animate({opacity: 1}, '150');
                });
            });
    });
    $(window).on('resize', function() {
        setTimeout(function(){
            $title_content.css('display', 'block')
        }, 400);
    });
//Analytics
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-81002684-3', 'auto');
    ga('send', 'pageview');
// Activar Modal
    $('#MyModal').modal('show');
// Ok Zoom
    $(function(){
        $('#fotoIC').okzoom({
            width: 250,
            height: 250
        });
    });
function confirmSend(){        
    if ( !$('#checkbox1').is(":checked") && !$('#checkbox2').is(":checked")){
      	alert('Debe elegir in checkbox');
        return false;
  	}
}