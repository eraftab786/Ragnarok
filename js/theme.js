




$(window).scroll(function () {
            if ($(this).scrollTop() > 250) {
                $('.main-header').addClass("sticky");
            }
            else {
                $('.main-header').removeClass("sticky");
            }
        });







$('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        dots:true,
        //fade: true,
        autoplay: true,
        //autoplaySpeed:4000,
        asNavFor: '.slider-nav'
    });
$('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrows: true,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '10px',
        prevArrow: '<span class="icon-angle-left"></span>',
        nextArrow: '<span class="icon-angle-right"></span>',
        responsive: [
            {
              breakpoint: 991,
              settings: {
                dots: false,
                slidesToShow: 3,  
                centerPadding: '0px',
                }
            },
            
            {
              breakpoint: 767,
              settings: {
                autoplay: true,
                dots: false,
                slidesToShow: 1,
                centerMode: false,
                }
            }
        ]
    });








var cc = $('#product');
cc.owlCarousel({
	autoplay:true,
    loop:true,	
	margin:30,
    nav:true,
	dots:true,
	smartSpeed:3000,
	//animateOut: 'fadeOut',
    items: 4,
	navText: [ '<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>' ],
	
	responsive : {
    // breakpoint from 0 up
   0:{
            items:1,
        },
    // breakpoint from 480 up
   480:{
            items:2,
        },
    // breakpoint from 768 up
    768:{
            items:2,
        },
		// breakpoint from 768 up
    992:{
            items:4,
        }
}
});




var cc = $('#product1');
cc.owlCarousel({
	autoplay:true,
    loop:true,	
	margin:15,
    nav:true,
	dots:false,
	smartSpeed:3000,
	//animateOut: 'fadeOut',
    items: 3,
	navText: [ '<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>' ],
	
	responsive : {
    // breakpoint from 0 up
   0:{
            items:1,
        },
    // breakpoint from 480 up
   480:{
            items:2,
        },
    // breakpoint from 768 up
    768:{
            items:2,
        },
		// breakpoint from 768 up
    992:{
            items:3,
        }
}
});

//tab
$('.tab-a').click(function(e){  
      e.preventDefault();
      $(".tab").removeClass('tab-active');
      $(".tab[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
      $(".tab-a").removeClass('active-a');
      $(this).parent().find(".tab-a").addClass('active-a');
     });


