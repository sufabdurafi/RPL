/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.photography_pro = {
    attach: function (context, settings) {
    // CODE_BLOCK JS
          var $code_block =  $("pre").attr("class");
          // console.log($code_block);
          if($code_block == "language-markup")
          {
              var elementCopy = document.getElementsByClassName("language-markup");
              if(typeof(elementCopy) != 'undefined' && elementCopy != null){ 
                  var clipboard = new ClipboardJS('.clipboard');   
                  clipboard.on('success', function (e) {
                  e.trigger.textContent = 'Copied';
                  window.setTimeout(function() {
                      e.trigger.textContent = 'Copy to Clipboard';
                  }, 8000);
                  console.log(e);
                  });
                  clipboard.on('error', function (e) {
                  console.log(e);
                  });
              }
          }

        // Comment Form Validation
          function validate(){
            var cnv = $('form.comment-form textarea').val();
            if (!$.trim(cnv)) {
              $(once("comment_validate",'form.comment-form textarea')).after('<span class="error">Add Comment before Submission</span>');
                return false;
            } else { return true; }
          }
          $(once('form_validate','form.comment-form')).submit(validate);

          var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
          var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
          })
        
          $(function () {
            $(document).scroll(function () {
              var $height = $("#header-2");
              $height.toggleClass("margin-top-0", $(this).scrollTop() > $height.height());
            });
          });
          $(function () {
            $(document).scroll(function () {
              var $height = $("#header-1");
              $height.toggleClass("margin-top-0", $(this).scrollTop() > $height.height());
            });
          });
          $(function () {
            $(document).scroll(function () {
              var $height = $("#header-3");
              $height.toggleClass("margin-top-0", $(this).scrollTop() > $height.height());
            });
          });
          $(function () {
            $(document).scroll(function () {
              var $height = $("#header-4");
              $height.toggleClass("margin-top-0", $(this).scrollTop() > $height.height());
             
            });
          });
          $(function () {
            $(document).scroll(function () {
              var $height = $("#header-5");
              $height.toggleClass("margin-top-0", $(this).scrollTop() > $height.height());
             
            });
          });
        
          $(function () {
            $(document).scroll(function () {
            $(".home-5 #header-1").removeClass('margin-top-0')
            $(".home-5 #header-2").removeClass('margin-top-0')
            $(".home-5 #header-3").removeClass('margin-top-0')
            $(".home-5 #header-4").removeClass('margin-top-0')
            $(".home-5 #header-5").removeClass('margin-top-0')
          });
        });

        $(function () {
          $(document).scroll(function () {
            var $height = $(".lang-dropdown-menu .dropdown-menu");
            $height.removeClass("show", $(this).scrollTop() > 100) 
          });
        });
        
          $('.home-1-slider').owlCarousel({
            loop:false,
            margin:0,
            autoplay:false,
            autoplayTimeout:5000,
            nav:false,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            },
            onInitialized  : counter, //When the plugin has initialized.
            onTranslated : counter //When the translation of the stage has finished.
          });
          function counter(event) {
            //  var element   = event.target;         // DOM element, in this example .owl-carousel
            //   var items     = event.item.index + 2;     // Number of items
              var items = event.item.count;
              var item      = event.item.index+1
              var count =    // Position of the current item
              // var las = event.item.index.lastChild;
              // var pre = event.item.index - 1;
              $('.home-slider-1 .slider-counter .first-of-type span').html(item);
              $('.home-slider-1 .slider-counter .last-of-type span').html(items);
          }
        
          $('.home-2-slider').owlCarousel({
            loop:true,
            margin:0,
            autoplay:true,
            autoplayTimeout:5000,
            nav:false,
            dots:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            },
          })
          
          $('.home-3-slider').owlCarousel({
            loop:true,
            margin:0,
            autoplay:true,
            autoplayTimeout:5000,
            nav:false,
            dots:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            },
          })
          var owl5 = $(".home-3-slider");
          owl5.owlCarousel();
          $(".home-slider-3 .arrows .next").click(function () {
            owl5.trigger("next.owl.carousel");
          });
          $(".home-slider-3 .arrows .prev").click(function () {
            owl5.trigger("prev.owl.carousel");
          });
        
          $('.home-4-slider').owlCarousel({
            loop:true ,
            margin:0,
            autoplay:false,
            autoplayTimeout:5000,
            nav:false,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
              }
          })
          $('.event-slider').owlCarousel({
            loop:true ,
            margin:0,
            autoplay:false,
            autoplayTimeout:5000,
            nav:false,
            dots:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
              }
          })
        
          $('.testimonials-4-slider').owlCarousel({
            loop:true ,
            margin:0,
            autoplay:false,
            autoplayTimeout:5000,
            nav:false,
            dots:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
              }
          })
        
        
          $('.style-1-slider').owlCarousel({
            loop:true,
            margin:43,
            autoplay:true,
            autoplayTimeout:5000,
            nav:false,
            responsive:{
                0:{
                    items:1,
                    margin:0
                },
                600:{
                    items:1,
                    margin:0
                },
                1000:{
                    items:2
                }
            },
        })
        
        $('.style-2-slider').owlCarousel({
          loop:true,
          margin:0,
          autoplay:true,
          autoplayTimeout:5000,
          nav:false,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:2
              },
              1000:{
                  items:4
              }
          }
        })
        
        $('.style-3-slider').owlCarousel({
          loop:true,
          margin:0,
          autoplay:true,
          autoplayTimeout:5000,
          nav:false,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              1000:{
                  items:1
              }
          }
        })
        
        $('.style-4-slider').owlCarousel({
          loop:true,
          margin:15,
          autoplay:false,
          autoplayTimeout:5000,
          nav:false,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:3
              },
              1000:{
                  items:4
              }
          }
        })
        
        $('.style-5-slider').owlCarousel({
          loop:true,
          margin:30,
          autoplay:false,
          center:true,
          autoplayTimeout:5000,
          nav:false,
          responsive:{
              0:{
                  items:1,
                  center:false
              },
              700:{
                  center:false,
                  items:2
              },
              1000:{
                  items:3
              }
          }
        })
        
        $('.style-6-slider').owlCarousel({
          loop:true,
          margin:50,
          autoplay:false,
          autoplayTimeout:5000,
          nav:false,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:2
              },
              1000:{
                  items:5
              }
          }
        })
        
        $('.style-7-slider').owlCarousel({
          loop:true,
          margin:-10,
          center:true,
          autoplay:false,
          autoplayTimeout:5000,
          nav:false,
          responsive:{
              0:{
                  items:1,
                  center:false,
              },
              600:{
                  center:false,
                  items:2
              },
              1000:{
                  items:3
              }
          }
        })
        
        $('.style-8-slider').owlCarousel({
          loop:true,
          margin:30,
          autoplay:false,
          autoplayTimeout:5000,
          nav:false,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:2
              },
              1000:{
                  items:5
              }
          }
        })
        
        $('.style-10-slider').owlCarousel({
          loop:true,
          margin:30,
          autoplay:false,
          autoplayTimeout:5000,
          nav:false,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:2
              },
              1000:{
                  items:4
              }
          }
        })
        
        var owl = $(".style-1-slider");
        owl.owlCarousel();
        $(".carousel-style-1 .arrows .next").click(function () {
          owl.trigger("next.owl.carousel");
        });
        $(".carousel-style-1 .arrows .prev").click(function () {
          owl.trigger("prev.owl.carousel");
        });
        
        var owl2= $(".style-3-slider")
        owl2.owlCarousel();
        $(".carousel-style-3 .arrows .next").click(function () {
          owl2.trigger("next.owl.carousel");
        });
        $(".carousel-style-3 .arrows .prev").click(function () {
          owl2.trigger("prev.owl.carousel");
        });
        
        var owl3= $(".style-7-slider")
        owl3.owlCarousel();
        $(".carousel-style-7 .arrows .next").click(function () {
          owl3.trigger("next.owl.carousel");
        });
        $(".carousel-style-7 .arrows .prev").click(function () {
          owl3.trigger("prev.owl.carousel");
        });
        
        var owl4 = $(".home-1-slider");
        owl4.owlCarousel();
        $(".home-slider-1 .arrows .next").click(function () {
          owl4.trigger("next.owl.carousel");
        });
        $(".home-slider-1 .arrows .prev").click(function () {
          owl4.trigger("prev.owl.carousel");
        });
        
        var owl6 = $(".testimonials-4-slider");
        owl6.owlCarousel();
        $(".testimonials-style-home-4 .arrows .next").click(function () {
          owl6.trigger("next.owl.carousel");
        });
        $(".testimonials-style-home-4 .arrows .prev").click(function () {
          owl6.trigger("prev.owl.carousel");
        });
        
        
        
        
        $(".carousel-style-1 .owl-dots").addClass("owl-dots-1");
        $(".carousel-style-2 .owl-dots").addClass("owl-dots-1");
        $(".carousel-style-3 .owl-dots").addClass("owl-dots-2");
        $(".carousel-style-4 .owl-dots").addClass("owl-dots-2");
        $(".carousel-style-5 .owl-dots").addClass("owl-dots-3");
        $(".carousel-style-6 .owl-dots").addClass("owl-dots-3");
        $(".carousel-style-7 .owl-dots").addClass("owl-dots-4");
        $(".carousel-style-8 .owl-dots").addClass("owl-dots-4");
        $(".carousel-style-10 .owl-dots").addClass("owl-dots-1");
        $(".testimonials-4-slider .owl-dots").addClass("owl-dots-1");
        $(".home-slider-2 .owl-dots").addClass("owl-dots-1");
        
        // Portfolio isotope
        $('.portfolio-tab .portfolio-lists').isotope({
          itemSelector: '.item',
          layoutMode: 'fitRows'
        });
        $(".portfolio-tab .portfolio-tabs-menu ul li").click(function () {
          $(".portfolio-tab .portfolio-tabs-menu ul li").removeClass("active");
          $(this).addClass("active");
          var selector;
          selector = $(this).attr("data-filter");
          $(".portfolio-tab .portfolio-lists").isotope({
            filter: selector,
          });
          return false;
        });
        
        //portfolio-masonry
        $('.portfolio-tab-masonry .portfolio-lists').isotope({
          itemSelector: '.item',
          masonry: {
            columnWidth: 1
         }  
        });
        
        $(".portfolio-tab-masonry .portfolio-tabs-menu ul li").click(function () {
          $(".portfolio-tab-masonry .portfolio-tabs-menu ul li").removeClass("active");
          $(this).addClass("active");
          var selector;
          selector = $(this).attr("data-filter");
          $(".portfolio-tab-masonry .portfolio-lists").isotope({
            filter: selector,
          });
          return false;
        });
        
        
        // magnifin-popup
        $('.portfolio-lists .icon').magnificPopup({
          // delegate: 'a',
          type: 'image',
          tLoading: 'Loading image #%curr%...',
          mainClass: 'mfp-img-mobile',
          gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1]
          }
        });

        function getTimeRemaining(endtime) {
          var t = Date.parse(settings.custom_date) - Date.parse(new Date());
          var seconds = Math.floor((t / 1000) % 60);
          var minutes = Math.floor((t / 1000 / 60) % 60);
          var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
          var days = Math.floor(t / (1000 * 60 * 60 * 24));
          return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
            };
              }
            function initializeClock(id, endtime) {
            var clock = document.getElementById(id);
            var daysSpan = clock.querySelector('.days');
            var hoursSpan = clock.querySelector('.hours');
            var minutesSpan = clock.querySelector('.minutes');
            var secondsSpan = clock.querySelector('.seconds');
            function updateClock() {
              var t = getTimeRemaining(endtime);
              daysSpan.innerHTML = t.days;
              hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
              minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
              secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
              if (t.total <= 0) {
                clearInterval(timeinterval);
                document.getElementById("clockdiv").innerHTML = settings.custom_message_dateExpired;
              }
            }
            updateClock();
            var timeinterval = setInterval(updateClock, 1000);
          }
          var deadline = new Date(Date.parse(new Date()));
          if($("#clockdiv").length){
            initializeClock('clockdiv', deadline);
          }

          $(window).on('load', () => {
            $('#loading').fadeOut();
            $('.canvas').delay(350).fadeOut('slow', function() {
              $(this).remove();
            });
            $('body').delay(350).css({'overflow':'visible'});
          });

        // Back to Top
        $(function () {
          $(document).scroll(function () {
            var $nav = $(".back-to-top");
            $nav.toggleClass("back-to-top-hide", $(this).scrollTop() < 500);
          });
        })

        $('.portfolio-home-style .view-filters form .d-flex.flex-wrap').addClass('row');

        }
        
    };


})(jQuery, Drupal);
