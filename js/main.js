//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//NProgress Start

  NProgress.start();
  NProgress.set(0.4);
  //Increment 
  var interval = setInterval(function() { NProgress.inc(); }, 1000);
  $(document).ready(function(){
      NProgress.done();
      clearInterval(interval);
  });

//NProgress End
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//Mobile Menu Start

  $(document).ready(function(){
    $("#openNav").click(function() {
      $("#myNav").css("width", "100%")
  });
  $("#closeNav").click(function() {
    $("#myNav").css("width", "0%")
  });
  $("#mMBtn1,#mMBtn2,#mMBtn3,#mMBtn4,#mMBtn5,#mMBtn6,#mMBtn7").click(function() {
    $("#myNav").css("width", "0%")
  });

//Mobile Menu End
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//Back To Top start

  $button = $.backToTop({
    // background color
    backgroundColor:'#34495e',
    // text color
    color:'#FFFFFF',
    // 'nonn', 'spin', 'fade', 'zoom', or 'spin-inverse'
    effect:'spin',
    // enable the back to top button
    enabled: true, 
    //height of the back to top button
    height: 50,
    width: 50,
    // icon
    icon:'fa fa-angle-double-up',
    // margins
    marginX: 30,
    marginY: 50,
    // bottom/top left/right
    position:'bottom right',
    // trigger position
    pxToTrigger: 900,
    // or 'fawesome'
    theme:'default',
    // z-index
    zIndex: 999
  });

//Back To Top End
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//Magnific Popup start

  $('.portfolio-item .item').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
  });

//Magnific Popup End
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//Isotope start

  // init Isotope
  var $grid = $('.portfolio-item').isotope({
  // options
  });
  // filter items on button click
  $('.portfolio-menu').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
$('.portfolio-menu ul li').on('click',function(){
  $('.portfolio-menu ul li').removeClass('mactive');
  $(this).addClass('mactive');
})

//Isotope End
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
// Scroll Spy Start

  var spy = new Gumshoe('#mainNav a');

// Scroll Spy End
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//Slick Slider Start

  $(".testimonial-slider").slick({
      autoplay: true,
      autoplaySpeed: 1000,
      dots: true,
      infinite: false,
      centerMode: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    });

//Slick Slider End
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//Waypoint Start

  var waypoint = new Waypoint({
      element: document.getElementById('about'),
      handler: function(direction) {
        $('nav').toggleClass("sticky");
      },
      offset: 30
    });

//Waypoint End
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
})
