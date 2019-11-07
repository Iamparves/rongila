NProgress.start();
NProgress.set(0.4);
//Increment 
var interval = setInterval(function() { NProgress.inc(); }, 1000);
$(document).ready(function(){
    NProgress.done();
    clearInterval(interval);
});
$(document).ready(function(){
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
    height: 60,
    width: 60,
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
  var spy = new Gumshoe('#mainNav a');
    $(".testimonial-slider").slick({
        autoplay: true,
        autoplaySpeed: 1000,
        dots: true,
        infinite: false,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      });
    var waypoint = new Waypoint({
        element: document.getElementById('about'),
        handler: function(direction) {
          $('nav').toggleClass("sticky");
        },
        offset: 30
      });
    var config = document.querySelector('.latest_projects');
    var mixer = mixitup(config);
})

/*
var $button = $.backToTop({
  // background color
  backgroundColor:'#34495e',
  // text color
  color:'#FFFFFF',
  // 'nonn', 'spin', 'fade', 'zoom', or 'spin-inverse'
  effect:'spin',
  // enable the back to top button
  enabled: /height of the back to top button
  height: 60,
  width: 60,
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

*/
 




/* NProgress.start(); // start    
NProgress.set(0.4); // To set a progress percentage, call .set(n), where n is a number between 0..1
NProgress.inc(); // To increment the progress bar, just use .inc(). This increments it with a random amount. This will never get to 100%: use it for every image load (or similar).If you want to increment by a specific value, you can pass that as a parameter
NProgress.configure({ ease: 'ease', speed: 500 }); // Adjust animation settings using easing (a CSS easing string) and speed (in ms). (default: ease and 200)
NProgress.configure({trickleSpeed: 800 }); //Adjust how often to trickle/increment, in ms.
NProgress.configure({ showSpinner: false });//Turn off loading spinner by setting it to false. (default: true)
NProgress.configure({ parent: 'container' });//specify this to change the parent container. (default: body)
NProgress.done(); // end */