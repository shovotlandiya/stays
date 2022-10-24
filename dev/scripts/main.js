"use strict";

function _typeof2(obj) { "@babel/helpers - typeof"; return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof2(obj); }

/**
 * Swiper 3.3.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * 
 * http://www.idangero.us/swiper/
 * 
 * Copyright 2016, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 * 
 * Licensed under MIT
 * 
 * Released on: February 7, 2016
 */
(function () {
  'use strict';

  var $;
  /*===========================
  Swiper
  ===========================*/

  var Swiper = function Swiper(container, params) {
    if (!(this instanceof Swiper)) return new Swiper(container, params);
    var defaults = {
      direction: 'horizontal',
      touchEventsTarget: 'container',
      initialSlide: 0,
      speed: 300,
      // autoplay
      autoplay: false,
      autoplayDisableOnInteraction: true,
      autoplayStopOnLast: false,
      // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
      iOSEdgeSwipeDetection: false,
      iOSEdgeSwipeThreshold: 20,
      // Free mode
      freeMode: false,
      freeModeMomentum: true,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: true,
      freeModeMomentumBounceRatio: 1,
      freeModeSticky: false,
      freeModeMinimumVelocity: 0.02,
      // Autoheight
      autoHeight: false,
      // Set wrapper width
      setWrapperSize: false,
      // Virtual Translate
      virtualTranslate: false,
      // Effects
      effect: 'slide',
      // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
      coverflow: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      flip: {
        slideShadows: true,
        limitRotation: true
      },
      cube: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94
      },
      fade: {
        crossFade: false
      },
      // Parallax
      parallax: false,
      // Scrollbar
      scrollbar: null,
      scrollbarHide: true,
      scrollbarDraggable: false,
      scrollbarSnapOnRelease: false,
      // Keyboard Mousewheel
      keyboardControl: false,
      mousewheelControl: false,
      mousewheelReleaseOnEdges: false,
      mousewheelInvert: false,
      mousewheelForceToAxis: false,
      mousewheelSensitivity: 1,
      // Hash Navigation
      hashnav: false,
      // Breakpoints
      breakpoints: undefined,
      // Slides grid
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: 'column',
      slidesPerGroup: 1,
      centeredSlides: false,
      slidesOffsetBefore: 0,
      // in px
      slidesOffsetAfter: 0,
      // in px
      // Round length
      roundLengths: false,
      // Touches
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: true,
      shortSwipes: true,
      longSwipes: true,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: true,
      onlyExternal: false,
      threshold: 0,
      touchMoveStopPropagation: true,
      // Unique Navigation Elements
      uniqueNavElements: true,
      // Pagination
      pagination: null,
      paginationElement: 'span',
      paginationClickable: false,
      paginationHide: false,
      paginationBulletRender: null,
      paginationProgressRender: null,
      paginationFractionRender: null,
      paginationCustomRender: null,
      paginationType: 'bullets',
      // 'bullets' or 'progress' or 'fraction' or 'custom'
      // Resistance
      resistance: true,
      resistanceRatio: 0.85,
      // Next/prev buttons
      nextButton: null,
      prevButton: null,
      // Progress
      watchSlidesProgress: false,
      watchSlidesVisibility: false,
      // Cursor
      grabCursor: false,
      // Clicks
      preventClicks: true,
      preventClicksPropagation: true,
      slideToClickedSlide: false,
      // Lazy Loading
      lazyLoading: false,
      lazyLoadingInPrevNext: false,
      lazyLoadingInPrevNextAmount: 1,
      lazyLoadingOnTransitionStart: false,
      // Images
      preloadImages: true,
      updateOnImagesReady: true,
      // loop
      loop: false,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      // Control
      control: undefined,
      controlInverse: false,
      controlBy: 'slide',
      //or 'container'
      // Swiping/no swiping
      allowSwipeToPrev: true,
      allowSwipeToNext: true,
      swipeHandler: null,
      //'.swipe-handler',
      noSwiping: true,
      noSwipingClass: 'swiper-no-swiping',
      // NS
      slideClass: 'swiper-slide',
      slideActiveClass: 'swiper-slide-active',
      slideVisibleClass: 'swiper-slide-visible',
      slideDuplicateClass: 'swiper-slide-duplicate',
      slideNextClass: 'swiper-slide-next',
      slidePrevClass: 'swiper-slide-prev',
      wrapperClass: 'swiper-wrapper',
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active',
      buttonDisabledClass: 'swiper-button-disabled',
      paginationCurrentClass: 'swiper-pagination-current',
      paginationTotalClass: 'swiper-pagination-total',
      paginationHiddenClass: 'swiper-pagination-hidden',
      paginationProgressbarClass: 'swiper-pagination-progressbar',
      // Observer
      observer: false,
      observeParents: false,
      // Accessibility
      a11y: false,
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}',
      // Callbacks
      runCallbacksOnInit: true
      /*
      Callbacks:
      onInit: function (swiper)
      onDestroy: function (swiper)
      onClick: function (swiper, e)
      onTap: function (swiper, e)
      onDoubleTap: function (swiper, e)
      onSliderMove: function (swiper, e)
      onSlideChangeStart: function (swiper)
      onSlideChangeEnd: function (swiper)
      onTransitionStart: function (swiper)
      onTransitionEnd: function (swiper)
      onImagesReady: function (swiper)
      onProgress: function (swiper, progress)
      onTouchStart: function (swiper, e)
      onTouchMove: function (swiper, e)
      onTouchMoveOpposite: function (swiper, e)
      onTouchEnd: function (swiper, e)
      onReachBeginning: function (swiper)
      onReachEnd: function (swiper)
      onSetTransition: function (swiper, duration)
      onSetTranslate: function (swiper, translate)
      onAutoplayStart: function (swiper)
      onAutoplayStop: function (swiper),
      onLazyImageLoad: function (swiper, slide, image)
      onLazyImageReady: function (swiper, slide, image)
      */

    };
    var initialVirtualTranslate = params && params.virtualTranslate;
    params = params || {};
    var originalParams = {};

    for (var param in params) {
      if (_typeof2(params[param]) === 'object' && params[param] !== null && !(params[param].nodeType || params[param] === window || params[param] === document || typeof Dom7 !== 'undefined' && params[param] instanceof Dom7 || typeof jQuery !== 'undefined' && params[param] instanceof jQuery)) {
        originalParams[param] = {};

        for (var deepParam in params[param]) {
          originalParams[param][deepParam] = params[param][deepParam];
        }
      } else {
        originalParams[param] = params[param];
      }
    }

    for (var def in defaults) {
      if (typeof params[def] === 'undefined') {
        params[def] = defaults[def];
      } else if (_typeof2(params[def]) === 'object') {
        for (var deepDef in defaults[def]) {
          if (typeof params[def][deepDef] === 'undefined') {
            params[def][deepDef] = defaults[def][deepDef];
          }
        }
      }
    } // Swiper


    var s = this; // Params

    s.params = params;
    s.originalParams = originalParams; // Classname

    s.classNames = [];
    /*=========================
      Dom Library and plugins
      ===========================*/

    if (typeof $ !== 'undefined' && typeof Dom7 !== 'undefined') {
      $ = Dom7;
    }

    if (typeof $ === 'undefined') {
      if (typeof Dom7 === 'undefined') {
        $ = window.Dom7 || window.Zepto || window.jQuery;
      } else {
        $ = Dom7;
      }

      if (!$) return;
    } // Export it to Swiper instance


    s.$ = $;
    /*=========================
      Breakpoints
      ===========================*/

    s.currentBreakpoint = undefined;

    s.getActiveBreakpoint = function () {
      //Get breakpoint for window width
      if (!s.params.breakpoints) return false;
      var breakpoint = false;
      var points = [],
          point;

      for (point in s.params.breakpoints) {
        if (s.params.breakpoints.hasOwnProperty(point)) {
          points.push(point);
        }
      }

      points.sort(function (a, b) {
        return parseInt(a, 10) > parseInt(b, 10);
      });

      for (var i = 0; i < points.length; i++) {
        point = points[i];

        if (point >= window.innerWidth && !breakpoint) {
          breakpoint = point;
        }
      }

      return breakpoint || 'max';
    };

    s.setBreakpoint = function () {
      //Set breakpoint for window width and update parameters
      var breakpoint = s.getActiveBreakpoint();

      if (breakpoint && s.currentBreakpoint !== breakpoint) {
        var breakPointsParams = breakpoint in s.params.breakpoints ? s.params.breakpoints[breakpoint] : s.originalParams;
        var needsReLoop = s.params.loop && breakPointsParams.slidesPerView !== s.params.slidesPerView;

        for (var param in breakPointsParams) {
          s.params[param] = breakPointsParams[param];
        }

        s.currentBreakpoint = breakpoint;

        if (needsReLoop && s.destroyLoop) {
          s.reLoop(true);
        }
      }
    }; // Set breakpoint on load


    if (s.params.breakpoints) {
      s.setBreakpoint();
    }
    /*=========================
      Preparation - Define Container, Wrapper and Pagination
      ===========================*/


    s.container = $(container);
    if (s.container.length === 0) return;

    if (s.container.length > 1) {
      var swipers = [];
      s.container.each(function () {
        var container = this;
        swipers.push(new Swiper(this, params));
      });
      return swipers;
    } // Save instance in container HTML Element and in data


    s.container[0].swiper = s;
    s.container.data('swiper', s);
    s.classNames.push('swiper-container-' + s.params.direction);

    if (s.params.freeMode) {
      s.classNames.push('swiper-container-free-mode');
    }

    if (!s.support.flexbox) {
      s.classNames.push('swiper-container-no-flexbox');
      s.params.slidesPerColumn = 1;
    }

    if (s.params.autoHeight) {
      s.classNames.push('swiper-container-autoheight');
    } // Enable slides progress when required


    if (s.params.parallax || s.params.watchSlidesVisibility) {
      s.params.watchSlidesProgress = true;
    } // Coverflow / 3D


    if (['cube', 'coverflow', 'flip'].indexOf(s.params.effect) >= 0) {
      if (s.support.transforms3d) {
        s.params.watchSlidesProgress = true;
        s.classNames.push('swiper-container-3d');
      } else {
        s.params.effect = 'slide';
      }
    }

    if (s.params.effect !== 'slide') {
      s.classNames.push('swiper-container-' + s.params.effect);
    }

    if (s.params.effect === 'cube') {
      s.params.resistanceRatio = 0;
      s.params.slidesPerView = 1;
      s.params.slidesPerColumn = 1;
      s.params.slidesPerGroup = 1;
      s.params.centeredSlides = false;
      s.params.spaceBetween = 0;
      s.params.virtualTranslate = true;
      s.params.setWrapperSize = false;
    }

    if (s.params.effect === 'fade' || s.params.effect === 'flip') {
      s.params.slidesPerView = 1;
      s.params.slidesPerColumn = 1;
      s.params.slidesPerGroup = 1;
      s.params.watchSlidesProgress = true;
      s.params.spaceBetween = 0;
      s.params.setWrapperSize = false;

      if (typeof initialVirtualTranslate === 'undefined') {
        s.params.virtualTranslate = true;
      }
    } // Grab Cursor


    if (s.params.grabCursor && s.support.touch) {
      s.params.grabCursor = false;
    } // Wrapper


    s.wrapper = s.container.children('.' + s.params.wrapperClass); // Pagination

    if (s.params.pagination) {
      s.paginationContainer = $(s.params.pagination);

      if (s.params.uniqueNavElements && typeof s.params.pagination === 'string' && s.paginationContainer.length > 1 && s.container.find(s.params.pagination).length === 1) {
        s.paginationContainer = s.container.find(s.params.pagination);
      }

      if (s.params.paginationType === 'bullets' && s.params.paginationClickable) {
        s.paginationContainer.addClass('swiper-pagination-clickable');
      } else {
        s.params.paginationClickable = false;
      }

      s.paginationContainer.addClass('swiper-pagination-' + s.params.paginationType);
    } // Next/Prev Buttons


    if (s.params.nextButton || s.params.prevButton) {
      if (s.params.nextButton) {
        s.nextButton = $(s.params.nextButton);

        if (s.params.uniqueNavElements && typeof s.params.nextButton === 'string' && s.nextButton.length > 1 && s.container.find(s.params.nextButton).length === 1) {
          s.nextButton = s.container.find(s.params.nextButton);
        }
      }

      if (s.params.prevButton) {
        s.prevButton = $(s.params.prevButton);

        if (s.params.uniqueNavElements && typeof s.params.prevButton === 'string' && s.prevButton.length > 1 && s.container.find(s.params.prevButton).length === 1) {
          s.prevButton = s.container.find(s.params.prevButton);
        }
      }
    } // Is Horizontal


    s.isHorizontal = function () {
      return s.params.direction === 'horizontal';
    }; // s.isH = isH;
    // RTL


    s.rtl = s.isHorizontal() && (s.container[0].dir.toLowerCase() === 'rtl' || s.container.css('direction') === 'rtl');

    if (s.rtl) {
      s.classNames.push('swiper-container-rtl');
    } // Wrong RTL support


    if (s.rtl) {
      s.wrongRTL = s.wrapper.css('display') === '-webkit-box';
    } // Columns


    if (s.params.slidesPerColumn > 1) {
      s.classNames.push('swiper-container-multirow');
    } // Check for Android


    if (s.device.android) {
      s.classNames.push('swiper-container-android');
    } // Add classes


    s.container.addClass(s.classNames.join(' ')); // Translate

    s.translate = 0; // Progress

    s.progress = 0; // Velocity

    s.velocity = 0;
    /*=========================
      Locks, unlocks
      ===========================*/

    s.lockSwipeToNext = function () {
      s.params.allowSwipeToNext = false;
    };

    s.lockSwipeToPrev = function () {
      s.params.allowSwipeToPrev = false;
    };

    s.lockSwipes = function () {
      s.params.allowSwipeToNext = s.params.allowSwipeToPrev = false;
    };

    s.unlockSwipeToNext = function () {
      s.params.allowSwipeToNext = true;
    };

    s.unlockSwipeToPrev = function () {
      s.params.allowSwipeToPrev = true;
    };

    s.unlockSwipes = function () {
      s.params.allowSwipeToNext = s.params.allowSwipeToPrev = true;
    };
    /*=========================
      Round helper
      ===========================*/


    function round(a) {
      return Math.floor(a);
    }
    /*=========================
      Set grab cursor
      ===========================*/


    if (s.params.grabCursor) {
      s.container[0].style.cursor = 'move';
      s.container[0].style.cursor = '-webkit-grab';
      s.container[0].style.cursor = '-moz-grab';
      s.container[0].style.cursor = 'grab';
    }
    /*=========================
      Update on Images Ready
      ===========================*/


    s.imagesToLoad = [];
    s.imagesLoaded = 0;

    s.loadImage = function (imgElement, src, srcset, checkForComplete, callback) {
      var image;

      function onReady() {
        if (callback) callback();
      }

      if (!imgElement.complete || !checkForComplete) {
        if (src) {
          image = new window.Image();
          image.onload = onReady;
          image.onerror = onReady;

          if (srcset) {
            image.srcset = srcset;
          }

          if (src) {
            image.src = src;
          }
        } else {
          onReady();
        }
      } else {
        //image already loaded...
        onReady();
      }
    };

    s.preloadImages = function () {
      s.imagesToLoad = s.container.find('img');

      function _onReady() {
        if (typeof s === 'undefined' || s === null) return;
        if (s.imagesLoaded !== undefined) s.imagesLoaded++;

        if (s.imagesLoaded === s.imagesToLoad.length) {
          if (s.params.updateOnImagesReady) s.update();
          s.emit('onImagesReady', s);
        }
      }

      for (var i = 0; i < s.imagesToLoad.length; i++) {
        s.loadImage(s.imagesToLoad[i], s.imagesToLoad[i].currentSrc || s.imagesToLoad[i].getAttribute('src'), s.imagesToLoad[i].srcset || s.imagesToLoad[i].getAttribute('srcset'), true, _onReady);
      }
    };
    /*=========================
      Autoplay
      ===========================*/


    s.autoplayTimeoutId = undefined;
    s.autoplaying = false;
    s.autoplayPaused = false;

    function autoplay() {
      s.autoplayTimeoutId = setTimeout(function () {
        if (s.params.loop) {
          s.fixLoop();

          s._slideNext();

          s.emit('onAutoplay', s);
        } else {
          if (!s.isEnd) {
            s._slideNext();

            s.emit('onAutoplay', s);
          } else {
            if (!params.autoplayStopOnLast) {
              s._slideTo(0);

              s.emit('onAutoplay', s);
            } else {
              s.stopAutoplay();
            }
          }
        }
      }, s.params.autoplay);
    }

    s.startAutoplay = function () {
      if (typeof s.autoplayTimeoutId !== 'undefined') return false;
      if (!s.params.autoplay) return false;
      if (s.autoplaying) return false;
      s.autoplaying = true;
      s.emit('onAutoplayStart', s);
      autoplay();
    };

    s.stopAutoplay = function (internal) {
      if (!s.autoplayTimeoutId) return;
      if (s.autoplayTimeoutId) clearTimeout(s.autoplayTimeoutId);
      s.autoplaying = false;
      s.autoplayTimeoutId = undefined;
      s.emit('onAutoplayStop', s);
    };

    s.pauseAutoplay = function (speed) {
      if (s.autoplayPaused) return;
      if (s.autoplayTimeoutId) clearTimeout(s.autoplayTimeoutId);
      s.autoplayPaused = true;

      if (speed === 0) {
        s.autoplayPaused = false;
        autoplay();
      } else {
        s.wrapper.transitionEnd(function () {
          if (!s) return;
          s.autoplayPaused = false;

          if (!s.autoplaying) {
            s.stopAutoplay();
          } else {
            autoplay();
          }
        });
      }
    };
    /*=========================
      Min/Max Translate
      ===========================*/


    s.minTranslate = function () {
      return -s.snapGrid[0];
    };

    s.maxTranslate = function () {
      return -s.snapGrid[s.snapGrid.length - 1];
    };
    /*=========================
      Slider/slides sizes
      ===========================*/


    s.updateAutoHeight = function () {
      // Update Height
      var slide = s.slides.eq(s.activeIndex)[0];

      if (typeof slide !== 'undefined') {
        var newHeight = slide.offsetHeight;
        if (newHeight) s.wrapper.css('height', newHeight + 'px');
      }
    };

    s.updateContainerSize = function () {
      var width, height;

      if (typeof s.params.width !== 'undefined') {
        width = s.params.width;
      } else {
        width = s.container[0].clientWidth;
      }

      if (typeof s.params.height !== 'undefined') {
        height = s.params.height;
      } else {
        height = s.container[0].clientHeight;
      }

      if (width === 0 && s.isHorizontal() || height === 0 && !s.isHorizontal()) {
        return;
      } //Subtract paddings


      width = width - parseInt(s.container.css('padding-left'), 10) - parseInt(s.container.css('padding-right'), 10);
      height = height - parseInt(s.container.css('padding-top'), 10) - parseInt(s.container.css('padding-bottom'), 10); // Store values

      s.width = width;
      s.height = height;
      s.size = s.isHorizontal() ? s.width : s.height;
    };

    s.updateSlidesSize = function () {
      s.slides = s.wrapper.children('.' + s.params.slideClass);
      s.snapGrid = [];
      s.slidesGrid = [];
      s.slidesSizesGrid = [];
      var spaceBetween = s.params.spaceBetween,
          slidePosition = -s.params.slidesOffsetBefore,
          i,
          prevSlideSize = 0,
          index = 0;
      if (typeof s.size === 'undefined') return;

      if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
        spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * s.size;
      }

      s.virtualSize = -spaceBetween; // reset margins

      if (s.rtl) s.slides.css({
        marginLeft: '',
        marginTop: ''
      });else s.slides.css({
        marginRight: '',
        marginBottom: ''
      });
      var slidesNumberEvenToRows;

      if (s.params.slidesPerColumn > 1) {
        if (Math.floor(s.slides.length / s.params.slidesPerColumn) === s.slides.length / s.params.slidesPerColumn) {
          slidesNumberEvenToRows = s.slides.length;
        } else {
          slidesNumberEvenToRows = Math.ceil(s.slides.length / s.params.slidesPerColumn) * s.params.slidesPerColumn;
        }

        if (s.params.slidesPerView !== 'auto' && s.params.slidesPerColumnFill === 'row') {
          slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, s.params.slidesPerView * s.params.slidesPerColumn);
        }
      } // Calc slides


      var slideSize;
      var slidesPerColumn = s.params.slidesPerColumn;
      var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
      var numFullColumns = slidesPerRow - (s.params.slidesPerColumn * slidesPerRow - s.slides.length);

      for (i = 0; i < s.slides.length; i++) {
        slideSize = 0;
        var slide = s.slides.eq(i);

        if (s.params.slidesPerColumn > 1) {
          // Set slides order
          var newSlideOrderIndex;
          var column, row;

          if (s.params.slidesPerColumnFill === 'column') {
            column = Math.floor(i / slidesPerColumn);
            row = i - column * slidesPerColumn;

            if (column > numFullColumns || column === numFullColumns && row === slidesPerColumn - 1) {
              if (++row >= slidesPerColumn) {
                row = 0;
                column++;
              }
            }

            newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
            slide.css({
              '-webkit-box-ordinal-group': newSlideOrderIndex,
              '-moz-box-ordinal-group': newSlideOrderIndex,
              '-ms-flex-order': newSlideOrderIndex,
              '-webkit-order': newSlideOrderIndex,
              'order': newSlideOrderIndex
            });
          } else {
            row = Math.floor(i / slidesPerRow);
            column = i - row * slidesPerRow;
          }

          slide.css({
            'margin-top': row !== 0 && s.params.spaceBetween && s.params.spaceBetween + 'px'
          }).attr('data-swiper-column', column).attr('data-swiper-row', row);
        }

        if (slide.css('display') === 'none') continue;

        if (s.params.slidesPerView === 'auto') {
          slideSize = s.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
          if (s.params.roundLengths) slideSize = round(slideSize);
        } else {
          slideSize = (s.size - (s.params.slidesPerView - 1) * spaceBetween) / s.params.slidesPerView;
          if (s.params.roundLengths) slideSize = round(slideSize);

          if (s.isHorizontal()) {
            s.slides[i].style.width = slideSize + 'px';
          } else {
            s.slides[i].style.height = slideSize + 'px';
          }
        }

        s.slides[i].swiperSlideSize = slideSize;
        s.slidesSizesGrid.push(slideSize);

        if (s.params.centeredSlides) {
          slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
          if (i === 0) slidePosition = slidePosition - s.size / 2 - spaceBetween;
          if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
          if (index % s.params.slidesPerGroup === 0) s.snapGrid.push(slidePosition);
          s.slidesGrid.push(slidePosition);
        } else {
          if (index % s.params.slidesPerGroup === 0) s.snapGrid.push(slidePosition);
          s.slidesGrid.push(slidePosition);
          slidePosition = slidePosition + slideSize + spaceBetween;
        }

        s.virtualSize += slideSize + spaceBetween;
        prevSlideSize = slideSize;
        index++;
      }

      s.virtualSize = Math.max(s.virtualSize, s.size) + s.params.slidesOffsetAfter;
      var newSlidesGrid;

      if (s.rtl && s.wrongRTL && (s.params.effect === 'slide' || s.params.effect === 'coverflow')) {
        s.wrapper.css({
          width: s.virtualSize + s.params.spaceBetween + 'px'
        });
      }

      if (!s.support.flexbox || s.params.setWrapperSize) {
        if (s.isHorizontal()) s.wrapper.css({
          width: s.virtualSize + s.params.spaceBetween + 'px'
        });else s.wrapper.css({
          height: s.virtualSize + s.params.spaceBetween + 'px'
        });
      }

      if (s.params.slidesPerColumn > 1) {
        s.virtualSize = (slideSize + s.params.spaceBetween) * slidesNumberEvenToRows;
        s.virtualSize = Math.ceil(s.virtualSize / s.params.slidesPerColumn) - s.params.spaceBetween;
        s.wrapper.css({
          width: s.virtualSize + s.params.spaceBetween + 'px'
        });

        if (s.params.centeredSlides) {
          newSlidesGrid = [];

          for (i = 0; i < s.snapGrid.length; i++) {
            if (s.snapGrid[i] < s.virtualSize + s.snapGrid[0]) newSlidesGrid.push(s.snapGrid[i]);
          }

          s.snapGrid = newSlidesGrid;
        }
      } // Remove last grid elements depending on width


      if (!s.params.centeredSlides) {
        newSlidesGrid = [];

        for (i = 0; i < s.snapGrid.length; i++) {
          if (s.snapGrid[i] <= s.virtualSize - s.size) {
            newSlidesGrid.push(s.snapGrid[i]);
          }
        }

        s.snapGrid = newSlidesGrid;

        if (Math.floor(s.virtualSize - s.size) - Math.floor(s.snapGrid[s.snapGrid.length - 1]) > 1) {
          s.snapGrid.push(s.virtualSize - s.size);
        }
      }

      if (s.snapGrid.length === 0) s.snapGrid = [0];

      if (s.params.spaceBetween !== 0) {
        if (s.isHorizontal()) {
          if (s.rtl) s.slides.css({
            marginLeft: spaceBetween + 'px'
          });else s.slides.css({
            marginRight: spaceBetween + 'px'
          });
        } else s.slides.css({
          marginBottom: spaceBetween + 'px'
        });
      }

      if (s.params.watchSlidesProgress) {
        s.updateSlidesOffset();
      }
    };

    s.updateSlidesOffset = function () {
      for (var i = 0; i < s.slides.length; i++) {
        s.slides[i].swiperSlideOffset = s.isHorizontal() ? s.slides[i].offsetLeft : s.slides[i].offsetTop;
      }
    };
    /*=========================
      Slider/slides progress
      ===========================*/


    s.updateSlidesProgress = function (translate) {
      if (typeof translate === 'undefined') {
        translate = s.translate || 0;
      }

      if (s.slides.length === 0) return;
      if (typeof s.slides[0].swiperSlideOffset === 'undefined') s.updateSlidesOffset();
      var offsetCenter = -translate;
      if (s.rtl) offsetCenter = translate; // Visible Slides

      s.slides.removeClass(s.params.slideVisibleClass);

      for (var i = 0; i < s.slides.length; i++) {
        var slide = s.slides[i];
        var slideProgress = (offsetCenter - slide.swiperSlideOffset) / (slide.swiperSlideSize + s.params.spaceBetween);

        if (s.params.watchSlidesVisibility) {
          var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
          var slideAfter = slideBefore + s.slidesSizesGrid[i];
          var isVisible = slideBefore >= 0 && slideBefore < s.size || slideAfter > 0 && slideAfter <= s.size || slideBefore <= 0 && slideAfter >= s.size;

          if (isVisible) {
            s.slides.eq(i).addClass(s.params.slideVisibleClass);
          }
        }

        slide.progress = s.rtl ? -slideProgress : slideProgress;
      }
    };

    s.updateProgress = function (translate) {
      if (typeof translate === 'undefined') {
        translate = s.translate || 0;
      }

      var translatesDiff = s.maxTranslate() - s.minTranslate();
      var wasBeginning = s.isBeginning;
      var wasEnd = s.isEnd;

      if (translatesDiff === 0) {
        s.progress = 0;
        s.isBeginning = s.isEnd = true;
      } else {
        s.progress = (translate - s.minTranslate()) / translatesDiff;
        s.isBeginning = s.progress <= 0;
        s.isEnd = s.progress >= 1;
      }

      if (s.isBeginning && !wasBeginning) s.emit('onReachBeginning', s);
      if (s.isEnd && !wasEnd) s.emit('onReachEnd', s);
      if (s.params.watchSlidesProgress) s.updateSlidesProgress(translate);
      s.emit('onProgress', s, s.progress);
    };

    s.updateActiveIndex = function () {
      var translate = s.rtl ? s.translate : -s.translate;
      var newActiveIndex, i, snapIndex;

      for (i = 0; i < s.slidesGrid.length; i++) {
        if (typeof s.slidesGrid[i + 1] !== 'undefined') {
          if (translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1] - (s.slidesGrid[i + 1] - s.slidesGrid[i]) / 2) {
            newActiveIndex = i;
          } else if (translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1]) {
            newActiveIndex = i + 1;
          }
        } else {
          if (translate >= s.slidesGrid[i]) {
            newActiveIndex = i;
          }
        }
      } // Normalize slideIndex


      if (newActiveIndex < 0 || typeof newActiveIndex === 'undefined') newActiveIndex = 0; // for (i = 0; i < s.slidesGrid.length; i++) {
      // if (- translate >= s.slidesGrid[i]) {
      // newActiveIndex = i;
      // }
      // }

      snapIndex = Math.floor(newActiveIndex / s.params.slidesPerGroup);
      if (snapIndex >= s.snapGrid.length) snapIndex = s.snapGrid.length - 1;

      if (newActiveIndex === s.activeIndex) {
        return;
      }

      s.snapIndex = snapIndex;
      s.previousIndex = s.activeIndex;
      s.activeIndex = newActiveIndex;
      s.updateClasses();
    };
    /*=========================
      Classes
      ===========================*/


    s.updateClasses = function () {
      s.slides.removeClass(s.params.slideActiveClass + ' ' + s.params.slideNextClass + ' ' + s.params.slidePrevClass);
      var activeSlide = s.slides.eq(s.activeIndex); // Active classes

      activeSlide.addClass(s.params.slideActiveClass); // Next Slide

      var nextSlide = activeSlide.next('.' + s.params.slideClass).addClass(s.params.slideNextClass);

      if (s.params.loop && nextSlide.length === 0) {
        s.slides.eq(0).addClass(s.params.slideNextClass);
      } // Prev Slide


      var prevSlide = activeSlide.prev('.' + s.params.slideClass).addClass(s.params.slidePrevClass);

      if (s.params.loop && prevSlide.length === 0) {
        s.slides.eq(-1).addClass(s.params.slidePrevClass);
      } // Pagination


      if (s.paginationContainer && s.paginationContainer.length > 0) {
        // Current/Total
        var current,
            total = s.params.loop ? Math.ceil((s.slides.length - s.loopedSlides * 2) / s.params.slidesPerGroup) : s.snapGrid.length;

        if (s.params.loop) {
          current = Math.ceil((s.activeIndex - s.loopedSlides) / s.params.slidesPerGroup);

          if (current > s.slides.length - 1 - s.loopedSlides * 2) {
            current = current - (s.slides.length - s.loopedSlides * 2);
          }

          if (current > total - 1) current = current - total;
          if (current < 0 && s.params.paginationType !== 'bullets') current = total + current;
        } else {
          if (typeof s.snapIndex !== 'undefined') {
            current = s.snapIndex;
          } else {
            current = s.activeIndex || 0;
          }
        } // Types


        if (s.params.paginationType === 'bullets' && s.bullets && s.bullets.length > 0) {
          s.bullets.removeClass(s.params.bulletActiveClass);

          if (s.paginationContainer.length > 1) {
            s.bullets.each(function () {
              if ($(this).index() === current) $(this).addClass(s.params.bulletActiveClass);
            });
          } else {
            s.bullets.eq(current).addClass(s.params.bulletActiveClass);
          }
        }

        if (s.params.paginationType === 'fraction') {
          s.paginationContainer.find('.' + s.params.paginationCurrentClass).text(current + 1);
          s.paginationContainer.find('.' + s.params.paginationTotalClass).text(total);
        }

        if (s.params.paginationType === 'progress') {
          var scale = (current + 1) / total,
              scaleX = scale,
              scaleY = 1;

          if (!s.isHorizontal()) {
            scaleY = scale;
            scaleX = 1;
          }

          s.paginationContainer.find('.' + s.params.paginationProgressbarClass).transform('translate3d(0,0,0) scaleX(' + scaleX + ') scaleY(' + scaleY + ')').transition(s.params.speed);
        }

        if (s.params.paginationType === 'custom' && s.params.paginationCustomRender) {
          s.paginationContainer.html(s.params.paginationCustomRender(s, current + 1, total));
          s.emit('onPaginationRendered', s, s.paginationContainer[0]);
        }
      } // Next/active buttons


      if (!s.params.loop) {
        if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
          if (s.isBeginning) {
            s.prevButton.addClass(s.params.buttonDisabledClass);
            if (s.params.a11y && s.a11y) s.a11y.disable(s.prevButton);
          } else {
            s.prevButton.removeClass(s.params.buttonDisabledClass);
            if (s.params.a11y && s.a11y) s.a11y.enable(s.prevButton);
          }
        }

        if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
          if (s.isEnd) {
            s.nextButton.addClass(s.params.buttonDisabledClass);
            if (s.params.a11y && s.a11y) s.a11y.disable(s.nextButton);
          } else {
            s.nextButton.removeClass(s.params.buttonDisabledClass);
            if (s.params.a11y && s.a11y) s.a11y.enable(s.nextButton);
          }
        }
      }
    };
    /*=========================
      Pagination
      ===========================*/


    s.updatePagination = function () {
      if (!s.params.pagination) return;

      if (s.paginationContainer && s.paginationContainer.length > 0) {
        var paginationHTML = '';

        if (s.params.paginationType === 'bullets') {
          var numberOfBullets = s.params.loop ? Math.ceil((s.slides.length - s.loopedSlides * 2) / s.params.slidesPerGroup) : s.snapGrid.length;

          for (var i = 0; i < numberOfBullets; i++) {
            if (s.params.paginationBulletRender) {
              paginationHTML += s.params.paginationBulletRender(i, s.params.bulletClass);
            } else {
              paginationHTML += '<' + s.params.paginationElement + ' class="' + s.params.bulletClass + '"></' + s.params.paginationElement + '>';
            }
          }

          s.paginationContainer.html(paginationHTML);
          s.bullets = s.paginationContainer.find('.' + s.params.bulletClass);

          if (s.params.paginationClickable && s.params.a11y && s.a11y) {
            s.a11y.initPagination();
          }
        }

        if (s.params.paginationType === 'fraction') {
          if (s.params.paginationFractionRender) {
            paginationHTML = s.params.paginationFractionRender(s, s.params.paginationCurrentClass, s.params.paginationTotalClass);
          } else {
            paginationHTML = '<span class="' + s.params.paginationCurrentClass + '"></span>' + ' / ' + '<span class="' + s.params.paginationTotalClass + '"></span>';
          }

          s.paginationContainer.html(paginationHTML);
        }

        if (s.params.paginationType === 'progress') {
          if (s.params.paginationProgressRender) {
            paginationHTML = s.params.paginationProgressRender(s, s.params.paginationProgressbarClass);
          } else {
            paginationHTML = '<span class="' + s.params.paginationProgressbarClass + '"></span>';
          }

          s.paginationContainer.html(paginationHTML);
        }

        if (s.params.paginationType !== 'custom') {
          s.emit('onPaginationRendered', s, s.paginationContainer[0]);
        }
      }
    };
    /*=========================
      Common update method
      ===========================*/


    s.update = function (updateTranslate) {
      s.updateContainerSize();
      s.updateSlidesSize();
      s.updateProgress();
      s.updatePagination();
      s.updateClasses();

      if (s.params.scrollbar && s.scrollbar) {
        s.scrollbar.set();
      }

      function forceSetTranslate() {
        newTranslate = Math.min(Math.max(s.translate, s.maxTranslate()), s.minTranslate());
        s.setWrapperTranslate(newTranslate);
        s.updateActiveIndex();
        s.updateClasses();
      }

      if (updateTranslate) {
        var translated, newTranslate;

        if (s.controller && s.controller.spline) {
          s.controller.spline = undefined;
        }

        if (s.params.freeMode) {
          forceSetTranslate();

          if (s.params.autoHeight) {
            s.updateAutoHeight();
          }
        } else {
          if ((s.params.slidesPerView === 'auto' || s.params.slidesPerView > 1) && s.isEnd && !s.params.centeredSlides) {
            translated = s.slideTo(s.slides.length - 1, 0, false, true);
          } else {
            translated = s.slideTo(s.activeIndex, 0, false, true);
          }

          if (!translated) {
            forceSetTranslate();
          }
        }
      } else if (s.params.autoHeight) {
        s.updateAutoHeight();
      }
    };
    /*=========================
      Resize Handler
      ===========================*/


    s.onResize = function (forceUpdatePagination) {
      //Breakpoints
      if (s.params.breakpoints) {
        s.setBreakpoint();
      } // Disable locks on resize


      var allowSwipeToPrev = s.params.allowSwipeToPrev;
      var allowSwipeToNext = s.params.allowSwipeToNext;
      s.params.allowSwipeToPrev = s.params.allowSwipeToNext = true;
      s.updateContainerSize();
      s.updateSlidesSize();
      if (s.params.slidesPerView === 'auto' || s.params.freeMode || forceUpdatePagination) s.updatePagination();

      if (s.params.scrollbar && s.scrollbar) {
        s.scrollbar.set();
      }

      if (s.controller && s.controller.spline) {
        s.controller.spline = undefined;
      }

      var slideChangedBySlideTo = false;

      if (s.params.freeMode) {
        var newTranslate = Math.min(Math.max(s.translate, s.maxTranslate()), s.minTranslate());
        s.setWrapperTranslate(newTranslate);
        s.updateActiveIndex();
        s.updateClasses();

        if (s.params.autoHeight) {
          s.updateAutoHeight();
        }
      } else {
        s.updateClasses();

        if ((s.params.slidesPerView === 'auto' || s.params.slidesPerView > 1) && s.isEnd && !s.params.centeredSlides) {
          slideChangedBySlideTo = s.slideTo(s.slides.length - 1, 0, false, true);
        } else {
          slideChangedBySlideTo = s.slideTo(s.activeIndex, 0, false, true);
        }
      }

      if (s.params.lazyLoading && !slideChangedBySlideTo && s.lazy) {
        s.lazy.load();
      } // Return locks after resize


      s.params.allowSwipeToPrev = allowSwipeToPrev;
      s.params.allowSwipeToNext = allowSwipeToNext;
    };
    /*=========================
      Events
      ===========================*/
    //Define Touch Events


    var desktopEvents = ['mousedown', 'mousemove', 'mouseup'];
    if (window.navigator.pointerEnabled) desktopEvents = ['pointerdown', 'pointermove', 'pointerup'];else if (window.navigator.msPointerEnabled) desktopEvents = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp'];
    s.touchEvents = {
      start: s.support.touch || !s.params.simulateTouch ? 'touchstart' : desktopEvents[0],
      move: s.support.touch || !s.params.simulateTouch ? 'touchmove' : desktopEvents[1],
      end: s.support.touch || !s.params.simulateTouch ? 'touchend' : desktopEvents[2]
    }; // WP8 Touch Events Fix

    if (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) {
      (s.params.touchEventsTarget === 'container' ? s.container : s.wrapper).addClass('swiper-wp8-' + s.params.direction);
    } // Attach/detach events


    s.initEvents = function (detach) {
      var actionDom = detach ? 'off' : 'on';
      var action = detach ? 'removeEventListener' : 'addEventListener';
      var touchEventsTarget = s.params.touchEventsTarget === 'container' ? s.container[0] : s.wrapper[0];
      var target = s.support.touch ? touchEventsTarget : document;
      var moveCapture = s.params.nested ? true : false; //Touch Events

      if (s.browser.ie) {
        touchEventsTarget[action](s.touchEvents.start, s.onTouchStart, false);
        target[action](s.touchEvents.move, s.onTouchMove, moveCapture);
        target[action](s.touchEvents.end, s.onTouchEnd, false);
      } else {
        if (s.support.touch) {
          touchEventsTarget[action](s.touchEvents.start, s.onTouchStart, false);
          touchEventsTarget[action](s.touchEvents.move, s.onTouchMove, moveCapture);
          touchEventsTarget[action](s.touchEvents.end, s.onTouchEnd, false);
        }

        if (params.simulateTouch && !s.device.ios && !s.device.android) {
          touchEventsTarget[action]('mousedown', s.onTouchStart, false);
          document[action]('mousemove', s.onTouchMove, moveCapture);
          document[action]('mouseup', s.onTouchEnd, false);
        }
      }

      window[action]('resize', s.onResize); // Next, Prev, Index

      if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
        s.nextButton[actionDom]('click', s.onClickNext);
        if (s.params.a11y && s.a11y) s.nextButton[actionDom]('keydown', s.a11y.onEnterKey);
      }

      if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
        s.prevButton[actionDom]('click', s.onClickPrev);
        if (s.params.a11y && s.a11y) s.prevButton[actionDom]('keydown', s.a11y.onEnterKey);
      }

      if (s.params.pagination && s.params.paginationClickable) {
        s.paginationContainer[actionDom]('click', '.' + s.params.bulletClass, s.onClickIndex);
        if (s.params.a11y && s.a11y) s.paginationContainer[actionDom]('keydown', '.' + s.params.bulletClass, s.a11y.onEnterKey);
      } // Prevent Links Clicks


      if (s.params.preventClicks || s.params.preventClicksPropagation) touchEventsTarget[action]('click', s.preventClicks, true);
    };

    s.attachEvents = function () {
      s.initEvents();
    };

    s.detachEvents = function () {
      s.initEvents(true);
    };
    /*=========================
      Handle Clicks
      ===========================*/
    // Prevent Clicks


    s.allowClick = true;

    s.preventClicks = function (e) {
      if (!s.allowClick) {
        if (s.params.preventClicks) e.preventDefault();

        if (s.params.preventClicksPropagation && s.animating) {
          e.stopPropagation();
          e.stopImmediatePropagation();
        }
      }
    }; // Clicks


    s.onClickNext = function (e) {
      e.preventDefault();
      if (s.isEnd && !s.params.loop) return;
      s.slideNext();
    };

    s.onClickPrev = function (e) {
      e.preventDefault();
      if (s.isBeginning && !s.params.loop) return;
      s.slidePrev();
    };

    s.onClickIndex = function (e) {
      e.preventDefault();
      var index = $(this).index() * s.params.slidesPerGroup;
      if (s.params.loop) index = index + s.loopedSlides;
      s.slideTo(index);
    };
    /*=========================
      Handle Touches
      ===========================*/


    function findElementInEvent(e, selector) {
      var el = $(e.target);

      if (!el.is(selector)) {
        if (typeof selector === 'string') {
          el = el.parents(selector);
        } else if (selector.nodeType) {
          var found;
          el.parents().each(function (index, _el) {
            if (_el === selector) found = selector;
          });
          if (!found) return undefined;else return selector;
        }
      }

      if (el.length === 0) {
        return undefined;
      }

      return el[0];
    }

    s.updateClickedSlide = function (e) {
      var slide = findElementInEvent(e, '.' + s.params.slideClass);
      var slideFound = false;

      if (slide) {
        for (var i = 0; i < s.slides.length; i++) {
          if (s.slides[i] === slide) slideFound = true;
        }
      }

      if (slide && slideFound) {
        s.clickedSlide = slide;
        s.clickedIndex = $(slide).index();
      } else {
        s.clickedSlide = undefined;
        s.clickedIndex = undefined;
        return;
      }

      if (s.params.slideToClickedSlide && s.clickedIndex !== undefined && s.clickedIndex !== s.activeIndex) {
        var slideToIndex = s.clickedIndex,
            realIndex,
            duplicatedSlides;

        if (s.params.loop) {
          if (s.animating) return;
          realIndex = $(s.clickedSlide).attr('data-swiper-slide-index');

          if (s.params.centeredSlides) {
            if (slideToIndex < s.loopedSlides - s.params.slidesPerView / 2 || slideToIndex > s.slides.length - s.loopedSlides + s.params.slidesPerView / 2) {
              s.fixLoop();
              slideToIndex = s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.swiper-slide-duplicate)').eq(0).index();
              setTimeout(function () {
                s.slideTo(slideToIndex);
              }, 0);
            } else {
              s.slideTo(slideToIndex);
            }
          } else {
            if (slideToIndex > s.slides.length - s.params.slidesPerView) {
              s.fixLoop();
              slideToIndex = s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.swiper-slide-duplicate)').eq(0).index();
              setTimeout(function () {
                s.slideTo(slideToIndex);
              }, 0);
            } else {
              s.slideTo(slideToIndex);
            }
          }
        } else {
          s.slideTo(slideToIndex);
        }
      }
    };

    var isTouched,
        isMoved,
        allowTouchCallbacks,
        touchStartTime,
        isScrolling,
        currentTranslate,
        startTranslate,
        allowThresholdMove,
        // Form elements to match
    formElements = 'input, select, textarea, button',
        // Last click time
    lastClickTime = Date.now(),
        clickTimeout,
        //Velocities
    velocities = [],
        allowMomentumBounce; // Animating Flag

    s.animating = false; // Touches information

    s.touches = {
      startX: 0,
      startY: 0,
      currentX: 0,
      currentY: 0,
      diff: 0
    }; // Touch handlers

    var isTouchEvent, startMoving;

    s.onTouchStart = function (e) {
      if (e.originalEvent) e = e.originalEvent;
      isTouchEvent = e.type === 'touchstart';
      if (!isTouchEvent && 'which' in e && e.which === 3) return;

      if (s.params.noSwiping && findElementInEvent(e, '.' + s.params.noSwipingClass)) {
        s.allowClick = true;
        return;
      }

      if (s.params.swipeHandler) {
        if (!findElementInEvent(e, s.params.swipeHandler)) return;
      }

      var startX = s.touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
      var startY = s.touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore

      if (s.device.ios && s.params.iOSEdgeSwipeDetection && startX <= s.params.iOSEdgeSwipeThreshold) {
        return;
      }

      isTouched = true;
      isMoved = false;
      allowTouchCallbacks = true;
      isScrolling = undefined;
      startMoving = undefined;
      s.touches.startX = startX;
      s.touches.startY = startY;
      touchStartTime = Date.now();
      s.allowClick = true;
      s.updateContainerSize();
      s.swipeDirection = undefined;
      if (s.params.threshold > 0) allowThresholdMove = false;

      if (e.type !== 'touchstart') {
        var preventDefault = true;
        if ($(e.target).is(formElements)) preventDefault = false;

        if (document.activeElement && $(document.activeElement).is(formElements)) {
          document.activeElement.blur();
        }

        if (preventDefault) {
          e.preventDefault();
        }
      }

      s.emit('onTouchStart', s, e);
    };

    s.onTouchMove = function (e) {
      if (e.originalEvent) e = e.originalEvent;
      if (isTouchEvent && e.type === 'mousemove') return;

      if (e.preventedByNestedSwiper) {
        s.touches.startX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
        s.touches.startY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
        return;
      }

      if (s.params.onlyExternal) {
        // isMoved = true;
        s.allowClick = false;

        if (isTouched) {
          s.touches.startX = s.touches.currentX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
          s.touches.startY = s.touches.currentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
          touchStartTime = Date.now();
        }

        return;
      }

      if (isTouchEvent && document.activeElement) {
        if (e.target === document.activeElement && $(e.target).is(formElements)) {
          isMoved = true;
          s.allowClick = false;
          return;
        }
      }

      if (allowTouchCallbacks) {
        s.emit('onTouchMove', s, e);
      }

      if (e.targetTouches && e.targetTouches.length > 1) return;
      s.touches.currentX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
      s.touches.currentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

      if (typeof isScrolling === 'undefined') {
        var touchAngle = Math.atan2(Math.abs(s.touches.currentY - s.touches.startY), Math.abs(s.touches.currentX - s.touches.startX)) * 180 / Math.PI;
        isScrolling = s.isHorizontal() ? touchAngle > s.params.touchAngle : 90 - touchAngle > s.params.touchAngle;
      }

      if (isScrolling) {
        s.emit('onTouchMoveOpposite', s, e);
      }

      if (typeof startMoving === 'undefined' && s.browser.ieTouch) {
        if (s.touches.currentX !== s.touches.startX || s.touches.currentY !== s.touches.startY) {
          startMoving = true;
        }
      }

      if (!isTouched) return;

      if (isScrolling) {
        isTouched = false;
        return;
      }

      if (!startMoving && s.browser.ieTouch) {
        return;
      }

      s.allowClick = false;
      s.emit('onSliderMove', s, e);
      e.preventDefault();

      if (s.params.touchMoveStopPropagation && !s.params.nested) {
        e.stopPropagation();
      }

      if (!isMoved) {
        if (params.loop) {
          s.fixLoop();
        }

        startTranslate = s.getWrapperTranslate();
        s.setWrapperTransition(0);

        if (s.animating) {
          s.wrapper.trigger('webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd');
        }

        if (s.params.autoplay && s.autoplaying) {
          if (s.params.autoplayDisableOnInteraction) {
            s.stopAutoplay();
          } else {
            s.pauseAutoplay();
          }
        }

        allowMomentumBounce = false; //Grab Cursor

        if (s.params.grabCursor) {
          s.container[0].style.cursor = 'move';
          s.container[0].style.cursor = '-webkit-grabbing';
          s.container[0].style.cursor = '-moz-grabbin';
          s.container[0].style.cursor = 'grabbing';
        }
      }

      isMoved = true;
      var diff = s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY - s.touches.startY;
      diff = diff * s.params.touchRatio;
      if (s.rtl) diff = -diff;
      s.swipeDirection = diff > 0 ? 'prev' : 'next';
      currentTranslate = diff + startTranslate;
      var disableParentSwiper = true;

      if (diff > 0 && currentTranslate > s.minTranslate()) {
        disableParentSwiper = false;
        if (s.params.resistance) currentTranslate = s.minTranslate() - 1 + Math.pow(-s.minTranslate() + startTranslate + diff, s.params.resistanceRatio);
      } else if (diff < 0 && currentTranslate < s.maxTranslate()) {
        disableParentSwiper = false;
        if (s.params.resistance) currentTranslate = s.maxTranslate() + 1 - Math.pow(s.maxTranslate() - startTranslate - diff, s.params.resistanceRatio);
      }

      if (disableParentSwiper) {
        e.preventedByNestedSwiper = true;
      } // Directions locks


      if (!s.params.allowSwipeToNext && s.swipeDirection === 'next' && currentTranslate < startTranslate) {
        currentTranslate = startTranslate;
      }

      if (!s.params.allowSwipeToPrev && s.swipeDirection === 'prev' && currentTranslate > startTranslate) {
        currentTranslate = startTranslate;
      }

      if (!s.params.followFinger) return; // Threshold

      if (s.params.threshold > 0) {
        if (Math.abs(diff) > s.params.threshold || allowThresholdMove) {
          if (!allowThresholdMove) {
            allowThresholdMove = true;
            s.touches.startX = s.touches.currentX;
            s.touches.startY = s.touches.currentY;
            currentTranslate = startTranslate;
            s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY - s.touches.startY;
            return;
          }
        } else {
          currentTranslate = startTranslate;
          return;
        }
      } // Update active index in free mode


      if (s.params.freeMode || s.params.watchSlidesProgress) {
        s.updateActiveIndex();
      }

      if (s.params.freeMode) {
        //Velocity
        if (velocities.length === 0) {
          velocities.push({
            position: s.touches[s.isHorizontal() ? 'startX' : 'startY'],
            time: touchStartTime
          });
        }

        velocities.push({
          position: s.touches[s.isHorizontal() ? 'currentX' : 'currentY'],
          time: new window.Date().getTime()
        });
      } // Update progress


      s.updateProgress(currentTranslate); // Update translate

      s.setWrapperTranslate(currentTranslate);
    };

    s.onTouchEnd = function (e) {
      if (e.originalEvent) e = e.originalEvent;

      if (allowTouchCallbacks) {
        s.emit('onTouchEnd', s, e);
      }

      allowTouchCallbacks = false;
      if (!isTouched) return; //Return Grab Cursor

      if (s.params.grabCursor && isMoved && isTouched) {
        s.container[0].style.cursor = 'move';
        s.container[0].style.cursor = '-webkit-grab';
        s.container[0].style.cursor = '-moz-grab';
        s.container[0].style.cursor = 'grab';
      } // Time diff


      var touchEndTime = Date.now();
      var timeDiff = touchEndTime - touchStartTime; // Tap, doubleTap, Click

      if (s.allowClick) {
        s.updateClickedSlide(e);
        s.emit('onTap', s, e);

        if (timeDiff < 300 && touchEndTime - lastClickTime > 300) {
          if (clickTimeout) clearTimeout(clickTimeout);
          clickTimeout = setTimeout(function () {
            if (!s) return;

            if (s.params.paginationHide && s.paginationContainer.length > 0 && !$(e.target).hasClass(s.params.bulletClass)) {
              s.paginationContainer.toggleClass(s.params.paginationHiddenClass);
            }

            s.emit('onClick', s, e);
          }, 300);
        }

        if (timeDiff < 300 && touchEndTime - lastClickTime < 300) {
          if (clickTimeout) clearTimeout(clickTimeout);
          s.emit('onDoubleTap', s, e);
        }
      }

      lastClickTime = Date.now();
      setTimeout(function () {
        if (s) s.allowClick = true;
      }, 0);

      if (!isTouched || !isMoved || !s.swipeDirection || s.touches.diff === 0 || currentTranslate === startTranslate) {
        isTouched = isMoved = false;
        return;
      }

      isTouched = isMoved = false;
      var currentPos;

      if (s.params.followFinger) {
        currentPos = s.rtl ? s.translate : -s.translate;
      } else {
        currentPos = -currentTranslate;
      }

      if (s.params.freeMode) {
        if (currentPos < -s.minTranslate()) {
          s.slideTo(s.activeIndex);
          return;
        } else if (currentPos > -s.maxTranslate()) {
          if (s.slides.length < s.snapGrid.length) {
            s.slideTo(s.snapGrid.length - 1);
          } else {
            s.slideTo(s.slides.length - 1);
          }

          return;
        }

        if (s.params.freeModeMomentum) {
          if (velocities.length > 1) {
            var lastMoveEvent = velocities.pop(),
                velocityEvent = velocities.pop();
            var distance = lastMoveEvent.position - velocityEvent.position;
            var time = lastMoveEvent.time - velocityEvent.time;
            s.velocity = distance / time;
            s.velocity = s.velocity / 2;

            if (Math.abs(s.velocity) < s.params.freeModeMinimumVelocity) {
              s.velocity = 0;
            } // this implies that the user stopped moving a finger then released.
            // There would be no events with distance zero, so the last event is stale.


            if (time > 150 || new window.Date().getTime() - lastMoveEvent.time > 300) {
              s.velocity = 0;
            }
          } else {
            s.velocity = 0;
          }

          velocities.length = 0;
          var momentumDuration = 1000 * s.params.freeModeMomentumRatio;
          var momentumDistance = s.velocity * momentumDuration;
          var newPosition = s.translate + momentumDistance;
          if (s.rtl) newPosition = -newPosition;
          var doBounce = false;
          var afterBouncePosition;
          var bounceAmount = Math.abs(s.velocity) * 20 * s.params.freeModeMomentumBounceRatio;

          if (newPosition < s.maxTranslate()) {
            if (s.params.freeModeMomentumBounce) {
              if (newPosition + s.maxTranslate() < -bounceAmount) {
                newPosition = s.maxTranslate() - bounceAmount;
              }

              afterBouncePosition = s.maxTranslate();
              doBounce = true;
              allowMomentumBounce = true;
            } else {
              newPosition = s.maxTranslate();
            }
          } else if (newPosition > s.minTranslate()) {
            if (s.params.freeModeMomentumBounce) {
              if (newPosition - s.minTranslate() > bounceAmount) {
                newPosition = s.minTranslate() + bounceAmount;
              }

              afterBouncePosition = s.minTranslate();
              doBounce = true;
              allowMomentumBounce = true;
            } else {
              newPosition = s.minTranslate();
            }
          } else if (s.params.freeModeSticky) {
            var j = 0,
                nextSlide;

            for (j = 0; j < s.snapGrid.length; j += 1) {
              if (s.snapGrid[j] > -newPosition) {
                nextSlide = j;
                break;
              }
            }

            if (Math.abs(s.snapGrid[nextSlide] - newPosition) < Math.abs(s.snapGrid[nextSlide - 1] - newPosition) || s.swipeDirection === 'next') {
              newPosition = s.snapGrid[nextSlide];
            } else {
              newPosition = s.snapGrid[nextSlide - 1];
            }

            if (!s.rtl) newPosition = -newPosition;
          } //Fix duration


          if (s.velocity !== 0) {
            if (s.rtl) {
              momentumDuration = Math.abs((-newPosition - s.translate) / s.velocity);
            } else {
              momentumDuration = Math.abs((newPosition - s.translate) / s.velocity);
            }
          } else if (s.params.freeModeSticky) {
            s.slideReset();
            return;
          }

          if (s.params.freeModeMomentumBounce && doBounce) {
            s.updateProgress(afterBouncePosition);
            s.setWrapperTransition(momentumDuration);
            s.setWrapperTranslate(newPosition);
            s.onTransitionStart();
            s.animating = true;
            s.wrapper.transitionEnd(function () {
              if (!s || !allowMomentumBounce) return;
              s.emit('onMomentumBounce', s);
              s.setWrapperTransition(s.params.speed);
              s.setWrapperTranslate(afterBouncePosition);
              s.wrapper.transitionEnd(function () {
                if (!s) return;
                s.onTransitionEnd();
              });
            });
          } else if (s.velocity) {
            s.updateProgress(newPosition);
            s.setWrapperTransition(momentumDuration);
            s.setWrapperTranslate(newPosition);
            s.onTransitionStart();

            if (!s.animating) {
              s.animating = true;
              s.wrapper.transitionEnd(function () {
                if (!s) return;
                s.onTransitionEnd();
              });
            }
          } else {
            s.updateProgress(newPosition);
          }

          s.updateActiveIndex();
        }

        if (!s.params.freeModeMomentum || timeDiff >= s.params.longSwipesMs) {
          s.updateProgress();
          s.updateActiveIndex();
        }

        return;
      } // Find current slide


      var i,
          stopIndex = 0,
          groupSize = s.slidesSizesGrid[0];

      for (i = 0; i < s.slidesGrid.length; i += s.params.slidesPerGroup) {
        if (typeof s.slidesGrid[i + s.params.slidesPerGroup] !== 'undefined') {
          if (currentPos >= s.slidesGrid[i] && currentPos < s.slidesGrid[i + s.params.slidesPerGroup]) {
            stopIndex = i;
            groupSize = s.slidesGrid[i + s.params.slidesPerGroup] - s.slidesGrid[i];
          }
        } else {
          if (currentPos >= s.slidesGrid[i]) {
            stopIndex = i;
            groupSize = s.slidesGrid[s.slidesGrid.length - 1] - s.slidesGrid[s.slidesGrid.length - 2];
          }
        }
      } // Find current slide size


      var ratio = (currentPos - s.slidesGrid[stopIndex]) / groupSize;

      if (timeDiff > s.params.longSwipesMs) {
        // Long touches
        if (!s.params.longSwipes) {
          s.slideTo(s.activeIndex);
          return;
        }

        if (s.swipeDirection === 'next') {
          if (ratio >= s.params.longSwipesRatio) s.slideTo(stopIndex + s.params.slidesPerGroup);else s.slideTo(stopIndex);
        }

        if (s.swipeDirection === 'prev') {
          if (ratio > 1 - s.params.longSwipesRatio) s.slideTo(stopIndex + s.params.slidesPerGroup);else s.slideTo(stopIndex);
        }
      } else {
        // Short swipes
        if (!s.params.shortSwipes) {
          s.slideTo(s.activeIndex);
          return;
        }

        if (s.swipeDirection === 'next') {
          s.slideTo(stopIndex + s.params.slidesPerGroup);
        }

        if (s.swipeDirection === 'prev') {
          s.slideTo(stopIndex);
        }
      }
    };
    /*=========================
      Transitions
      ===========================*/


    s._slideTo = function (slideIndex, speed) {
      return s.slideTo(slideIndex, speed, true, true);
    };

    s.slideTo = function (slideIndex, speed, runCallbacks, internal) {
      if (typeof runCallbacks === 'undefined') runCallbacks = true;
      if (typeof slideIndex === 'undefined') slideIndex = 0;
      if (slideIndex < 0) slideIndex = 0;
      s.snapIndex = Math.floor(slideIndex / s.params.slidesPerGroup);
      if (s.snapIndex >= s.snapGrid.length) s.snapIndex = s.snapGrid.length - 1;
      var translate = -s.snapGrid[s.snapIndex]; // Stop autoplay

      if (s.params.autoplay && s.autoplaying) {
        if (internal || !s.params.autoplayDisableOnInteraction) {
          s.pauseAutoplay(speed);
        } else {
          s.stopAutoplay();
        }
      } // Update progress


      s.updateProgress(translate); // Normalize slideIndex

      for (var i = 0; i < s.slidesGrid.length; i++) {
        if (-Math.floor(translate * 100) >= Math.floor(s.slidesGrid[i] * 100)) {
          slideIndex = i;
        }
      } // Directions locks


      if (!s.params.allowSwipeToNext && translate < s.translate && translate < s.minTranslate()) {
        return false;
      }

      if (!s.params.allowSwipeToPrev && translate > s.translate && translate > s.maxTranslate()) {
        if ((s.activeIndex || 0) !== slideIndex) return false;
      } // Update Index


      if (typeof speed === 'undefined') speed = s.params.speed;
      s.previousIndex = s.activeIndex || 0;
      s.activeIndex = slideIndex;

      if (s.rtl && -translate === s.translate || !s.rtl && translate === s.translate) {
        // Update Height
        if (s.params.autoHeight) {
          s.updateAutoHeight();
        }

        s.updateClasses();

        if (s.params.effect !== 'slide') {
          s.setWrapperTranslate(translate);
        }

        return false;
      }

      s.updateClasses();
      s.onTransitionStart(runCallbacks);

      if (speed === 0) {
        s.setWrapperTranslate(translate);
        s.setWrapperTransition(0);
        s.onTransitionEnd(runCallbacks);
      } else {
        s.setWrapperTranslate(translate);
        s.setWrapperTransition(speed);

        if (!s.animating) {
          s.animating = true;
          s.wrapper.transitionEnd(function () {
            if (!s) return;
            s.onTransitionEnd(runCallbacks);
          });
        }
      }

      return true;
    };

    s.onTransitionStart = function (runCallbacks) {
      if (typeof runCallbacks === 'undefined') runCallbacks = true;

      if (s.params.autoHeight) {
        s.updateAutoHeight();
      }

      if (s.lazy) s.lazy.onTransitionStart();

      if (runCallbacks) {
        s.emit('onTransitionStart', s);

        if (s.activeIndex !== s.previousIndex) {
          s.emit('onSlideChangeStart', s);

          if (s.activeIndex > s.previousIndex) {
            s.emit('onSlideNextStart', s);
          } else {
            s.emit('onSlidePrevStart', s);
          }
        }
      }
    };

    s.onTransitionEnd = function (runCallbacks) {
      s.animating = false;
      s.setWrapperTransition(0);
      if (typeof runCallbacks === 'undefined') runCallbacks = true;
      if (s.lazy) s.lazy.onTransitionEnd();

      if (runCallbacks) {
        s.emit('onTransitionEnd', s);

        if (s.activeIndex !== s.previousIndex) {
          s.emit('onSlideChangeEnd', s);

          if (s.activeIndex > s.previousIndex) {
            s.emit('onSlideNextEnd', s);
          } else {
            s.emit('onSlidePrevEnd', s);
          }
        }
      }

      if (s.params.hashnav && s.hashnav) {
        s.hashnav.setHash();
      }
    };

    s.slideNext = function (runCallbacks, speed, internal) {
      if (s.params.loop) {
        if (s.animating) return false;
        s.fixLoop();
        var clientLeft = s.container[0].clientLeft;
        return s.slideTo(s.activeIndex + s.params.slidesPerGroup, speed, runCallbacks, internal);
      } else return s.slideTo(s.activeIndex + s.params.slidesPerGroup, speed, runCallbacks, internal);
    };

    s._slideNext = function (speed) {
      return s.slideNext(true, speed, true);
    };

    s.slidePrev = function (runCallbacks, speed, internal) {
      if (s.params.loop) {
        if (s.animating) return false;
        s.fixLoop();
        var clientLeft = s.container[0].clientLeft;
        return s.slideTo(s.activeIndex - 1, speed, runCallbacks, internal);
      } else return s.slideTo(s.activeIndex - 1, speed, runCallbacks, internal);
    };

    s._slidePrev = function (speed) {
      return s.slidePrev(true, speed, true);
    };

    s.slideReset = function (runCallbacks, speed, internal) {
      return s.slideTo(s.activeIndex, speed, runCallbacks);
    };
    /*=========================
      Translate/transition helpers
      ===========================*/


    s.setWrapperTransition = function (duration, byController) {
      s.wrapper.transition(duration);

      if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
        s.effects[s.params.effect].setTransition(duration);
      }

      if (s.params.parallax && s.parallax) {
        s.parallax.setTransition(duration);
      }

      if (s.params.scrollbar && s.scrollbar) {
        s.scrollbar.setTransition(duration);
      }

      if (s.params.control && s.controller) {
        s.controller.setTransition(duration, byController);
      }

      s.emit('onSetTransition', s, duration);
    };

    s.setWrapperTranslate = function (translate, updateActiveIndex, byController) {
      var x = 0,
          y = 0,
          z = 0;

      if (s.isHorizontal()) {
        x = s.rtl ? -translate : translate;
      } else {
        y = translate;
      }

      if (s.params.roundLengths) {
        x = round(x);
        y = round(y);
      }

      if (!s.params.virtualTranslate) {
        if (s.support.transforms3d) s.wrapper.transform('translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px)');else s.wrapper.transform('translate(' + x + 'px, ' + y + 'px)');
      }

      s.translate = s.isHorizontal() ? x : y; // Check if we need to update progress

      var progress;
      var translatesDiff = s.maxTranslate() - s.minTranslate();

      if (translatesDiff === 0) {
        progress = 0;
      } else {
        progress = (translate - s.minTranslate()) / translatesDiff;
      }

      if (progress !== s.progress) {
        s.updateProgress(translate);
      }

      if (updateActiveIndex) s.updateActiveIndex();

      if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
        s.effects[s.params.effect].setTranslate(s.translate);
      }

      if (s.params.parallax && s.parallax) {
        s.parallax.setTranslate(s.translate);
      }

      if (s.params.scrollbar && s.scrollbar) {
        s.scrollbar.setTranslate(s.translate);
      }

      if (s.params.control && s.controller) {
        s.controller.setTranslate(s.translate, byController);
      }

      s.emit('onSetTranslate', s, s.translate);
    };

    s.getTranslate = function (el, axis) {
      var matrix, curTransform, curStyle, transformMatrix; // automatic axis detection

      if (typeof axis === 'undefined') {
        axis = 'x';
      }

      if (s.params.virtualTranslate) {
        return s.rtl ? -s.translate : s.translate;
      }

      curStyle = window.getComputedStyle(el, null);

      if (window.WebKitCSSMatrix) {
        curTransform = curStyle.transform || curStyle.webkitTransform;

        if (curTransform.split(',').length > 6) {
          curTransform = curTransform.split(', ').map(function (a) {
            return a.replace(',', '.');
          }).join(', ');
        } // Some old versions of Webkit choke when 'none' is passed; pass
        // empty string instead in this case


        transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
      } else {
        transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
        matrix = transformMatrix.toString().split(',');
      }

      if (axis === 'x') {
        //Latest Chrome and webkits Fix
        if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; //Crazy IE10 Matrix
        else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); //Normal Browsers
        else curTransform = parseFloat(matrix[4]);
      }

      if (axis === 'y') {
        //Latest Chrome and webkits Fix
        if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; //Crazy IE10 Matrix
        else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); //Normal Browsers
        else curTransform = parseFloat(matrix[5]);
      }

      if (s.rtl && curTransform) curTransform = -curTransform;
      return curTransform || 0;
    };

    s.getWrapperTranslate = function (axis) {
      if (typeof axis === 'undefined') {
        axis = s.isHorizontal() ? 'x' : 'y';
      }

      return s.getTranslate(s.wrapper[0], axis);
    };
    /*=========================
      Observer
      ===========================*/


    s.observers = [];

    function initObserver(target, options) {
      options = options || {}; // create an observer instance

      var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
      var observer = new ObserverFunc(function (mutations) {
        mutations.forEach(function (mutation) {
          s.onResize(true);
          s.emit('onObserverUpdate', s, mutation);
        });
      });
      observer.observe(target, {
        attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
        childList: typeof options.childList === 'undefined' ? true : options.childList,
        characterData: typeof options.characterData === 'undefined' ? true : options.characterData
      });
      s.observers.push(observer);
    }

    s.initObservers = function () {
      if (s.params.observeParents) {
        var containerParents = s.container.parents();

        for (var i = 0; i < containerParents.length; i++) {
          initObserver(containerParents[i]);
        }
      } // Observe container


      initObserver(s.container[0], {
        childList: false
      }); // Observe wrapper

      initObserver(s.wrapper[0], {
        attributes: false
      });
    };

    s.disconnectObservers = function () {
      for (var i = 0; i < s.observers.length; i++) {
        s.observers[i].disconnect();
      }

      s.observers = [];
    };
    /*=========================
      Loop
      ===========================*/
    // Create looped slides


    s.createLoop = function () {
      // Remove duplicated slides
      s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();
      var slides = s.wrapper.children('.' + s.params.slideClass);
      if (s.params.slidesPerView === 'auto' && !s.params.loopedSlides) s.params.loopedSlides = slides.length;
      s.loopedSlides = parseInt(s.params.loopedSlides || s.params.slidesPerView, 10);
      s.loopedSlides = s.loopedSlides + s.params.loopAdditionalSlides;

      if (s.loopedSlides > slides.length) {
        s.loopedSlides = slides.length;
      }

      var prependSlides = [],
          appendSlides = [],
          i;
      slides.each(function (index, el) {
        var slide = $(this);
        if (index < s.loopedSlides) appendSlides.push(el);
        if (index < slides.length && index >= slides.length - s.loopedSlides) prependSlides.push(el);
        slide.attr('data-swiper-slide-index', index);
      });

      for (i = 0; i < appendSlides.length; i++) {
        s.wrapper.append($(appendSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));
      }

      for (i = prependSlides.length - 1; i >= 0; i--) {
        s.wrapper.prepend($(prependSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));
      }
    };

    s.destroyLoop = function () {
      s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();
      s.slides.removeAttr('data-swiper-slide-index');
    };

    s.reLoop = function (updatePosition) {
      var oldIndex = s.activeIndex - s.loopedSlides;
      s.destroyLoop();
      s.createLoop();
      s.updateSlidesSize();

      if (updatePosition) {
        s.slideTo(oldIndex + s.loopedSlides, 0, false);
      }
    };

    s.fixLoop = function () {
      var newIndex; //Fix For Negative Oversliding

      if (s.activeIndex < s.loopedSlides) {
        newIndex = s.slides.length - s.loopedSlides * 3 + s.activeIndex;
        newIndex = newIndex + s.loopedSlides;
        s.slideTo(newIndex, 0, false, true);
      } //Fix For Positive Oversliding
      else if (s.params.slidesPerView === 'auto' && s.activeIndex >= s.loopedSlides * 2 || s.activeIndex > s.slides.length - s.params.slidesPerView * 2) {
        newIndex = -s.slides.length + s.activeIndex + s.loopedSlides;
        newIndex = newIndex + s.loopedSlides;
        s.slideTo(newIndex, 0, false, true);
      }
    };
    /*=========================
      Append/Prepend/Remove Slides
      ===========================*/


    s.appendSlide = function (slides) {
      if (s.params.loop) {
        s.destroyLoop();
      }

      if (_typeof2(slides) === 'object' && slides.length) {
        for (var i = 0; i < slides.length; i++) {
          if (slides[i]) s.wrapper.append(slides[i]);
        }
      } else {
        s.wrapper.append(slides);
      }

      if (s.params.loop) {
        s.createLoop();
      }

      if (!(s.params.observer && s.support.observer)) {
        s.update(true);
      }
    };

    s.prependSlide = function (slides) {
      if (s.params.loop) {
        s.destroyLoop();
      }

      var newActiveIndex = s.activeIndex + 1;

      if (_typeof2(slides) === 'object' && slides.length) {
        for (var i = 0; i < slides.length; i++) {
          if (slides[i]) s.wrapper.prepend(slides[i]);
        }

        newActiveIndex = s.activeIndex + slides.length;
      } else {
        s.wrapper.prepend(slides);
      }

      if (s.params.loop) {
        s.createLoop();
      }

      if (!(s.params.observer && s.support.observer)) {
        s.update(true);
      }

      s.slideTo(newActiveIndex, 0, false);
    };

    s.removeSlide = function (slidesIndexes) {
      if (s.params.loop) {
        s.destroyLoop();
        s.slides = s.wrapper.children('.' + s.params.slideClass);
      }

      var newActiveIndex = s.activeIndex,
          indexToRemove;

      if (_typeof2(slidesIndexes) === 'object' && slidesIndexes.length) {
        for (var i = 0; i < slidesIndexes.length; i++) {
          indexToRemove = slidesIndexes[i];
          if (s.slides[indexToRemove]) s.slides.eq(indexToRemove).remove();
          if (indexToRemove < newActiveIndex) newActiveIndex--;
        }

        newActiveIndex = Math.max(newActiveIndex, 0);
      } else {
        indexToRemove = slidesIndexes;
        if (s.slides[indexToRemove]) s.slides.eq(indexToRemove).remove();
        if (indexToRemove < newActiveIndex) newActiveIndex--;
        newActiveIndex = Math.max(newActiveIndex, 0);
      }

      if (s.params.loop) {
        s.createLoop();
      }

      if (!(s.params.observer && s.support.observer)) {
        s.update(true);
      }

      if (s.params.loop) {
        s.slideTo(newActiveIndex + s.loopedSlides, 0, false);
      } else {
        s.slideTo(newActiveIndex, 0, false);
      }
    };

    s.removeAllSlides = function () {
      var slidesIndexes = [];

      for (var i = 0; i < s.slides.length; i++) {
        slidesIndexes.push(i);
      }

      s.removeSlide(slidesIndexes);
    };
    /*=========================
      Effects
      ===========================*/


    s.effects = {
      fade: {
        setTranslate: function setTranslate() {
          for (var i = 0; i < s.slides.length; i++) {
            var slide = s.slides.eq(i);
            var offset = slide[0].swiperSlideOffset;
            var tx = -offset;
            if (!s.params.virtualTranslate) tx = tx - s.translate;
            var ty = 0;

            if (!s.isHorizontal()) {
              ty = tx;
              tx = 0;
            }

            var slideOpacity = s.params.fade.crossFade ? Math.max(1 - Math.abs(slide[0].progress), 0) : 1 + Math.min(Math.max(slide[0].progress, -1), 0);
            slide.css({
              opacity: slideOpacity
            }).transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px)');
          }
        },
        setTransition: function setTransition(duration) {
          s.slides.transition(duration);

          if (s.params.virtualTranslate && duration !== 0) {
            var eventTriggered = false;
            s.slides.transitionEnd(function () {
              if (eventTriggered) return;
              if (!s) return;
              eventTriggered = true;
              s.animating = false;
              var triggerEvents = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'];

              for (var i = 0; i < triggerEvents.length; i++) {
                s.wrapper.trigger(triggerEvents[i]);
              }
            });
          }
        }
      },
      flip: {
        setTranslate: function setTranslate() {
          for (var i = 0; i < s.slides.length; i++) {
            var slide = s.slides.eq(i);
            var progress = slide[0].progress;

            if (s.params.flip.limitRotation) {
              progress = Math.max(Math.min(slide[0].progress, 1), -1);
            }

            var offset = slide[0].swiperSlideOffset;
            var rotate = -180 * progress,
                rotateY = rotate,
                rotateX = 0,
                tx = -offset,
                ty = 0;

            if (!s.isHorizontal()) {
              ty = tx;
              tx = 0;
              rotateX = -rotateY;
              rotateY = 0;
            } else if (s.rtl) {
              rotateY = -rotateY;
            }

            slide[0].style.zIndex = -Math.abs(Math.round(progress)) + s.slides.length;

            if (s.params.flip.slideShadows) {
              //Set shadows
              var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
              var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');

              if (shadowBefore.length === 0) {
                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
                slide.append(shadowBefore);
              }

              if (shadowAfter.length === 0) {
                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
                slide.append(shadowAfter);
              }

              if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
              if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
            }

            slide.transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)');
          }
        },
        setTransition: function setTransition(duration) {
          s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

          if (s.params.virtualTranslate && duration !== 0) {
            var eventTriggered = false;
            s.slides.eq(s.activeIndex).transitionEnd(function () {
              if (eventTriggered) return;
              if (!s) return;
              if (!$(this).hasClass(s.params.slideActiveClass)) return;
              eventTriggered = true;
              s.animating = false;
              var triggerEvents = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'];

              for (var i = 0; i < triggerEvents.length; i++) {
                s.wrapper.trigger(triggerEvents[i]);
              }
            });
          }
        }
      },
      cube: {
        setTranslate: function setTranslate() {
          var wrapperRotate = 0,
              cubeShadow;

          if (s.params.cube.shadow) {
            if (s.isHorizontal()) {
              cubeShadow = s.wrapper.find('.swiper-cube-shadow');

              if (cubeShadow.length === 0) {
                cubeShadow = $('<div class="swiper-cube-shadow"></div>');
                s.wrapper.append(cubeShadow);
              }

              cubeShadow.css({
                height: s.width + 'px'
              });
            } else {
              cubeShadow = s.container.find('.swiper-cube-shadow');

              if (cubeShadow.length === 0) {
                cubeShadow = $('<div class="swiper-cube-shadow"></div>');
                s.container.append(cubeShadow);
              }
            }
          }

          for (var i = 0; i < s.slides.length; i++) {
            var slide = s.slides.eq(i);
            var slideAngle = i * 90;
            var round = Math.floor(slideAngle / 360);

            if (s.rtl) {
              slideAngle = -slideAngle;
              round = Math.floor(-slideAngle / 360);
            }

            var progress = Math.max(Math.min(slide[0].progress, 1), -1);
            var tx = 0,
                ty = 0,
                tz = 0;

            if (i % 4 === 0) {
              tx = -round * 4 * s.size;
              tz = 0;
            } else if ((i - 1) % 4 === 0) {
              tx = 0;
              tz = -round * 4 * s.size;
            } else if ((i - 2) % 4 === 0) {
              tx = s.size + round * 4 * s.size;
              tz = s.size;
            } else if ((i - 3) % 4 === 0) {
              tx = -s.size;
              tz = 3 * s.size + s.size * 4 * round;
            }

            if (s.rtl) {
              tx = -tx;
            }

            if (!s.isHorizontal()) {
              ty = tx;
              tx = 0;
            }

            var transform = 'rotateX(' + (s.isHorizontal() ? 0 : -slideAngle) + 'deg) rotateY(' + (s.isHorizontal() ? slideAngle : 0) + 'deg) translate3d(' + tx + 'px, ' + ty + 'px, ' + tz + 'px)';

            if (progress <= 1 && progress > -1) {
              wrapperRotate = i * 90 + progress * 90;
              if (s.rtl) wrapperRotate = -i * 90 - progress * 90;
            }

            slide.transform(transform);

            if (s.params.cube.slideShadows) {
              //Set shadows
              var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
              var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');

              if (shadowBefore.length === 0) {
                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
                slide.append(shadowBefore);
              }

              if (shadowAfter.length === 0) {
                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
                slide.append(shadowAfter);
              }

              if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
              if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
            }
          }

          s.wrapper.css({
            '-webkit-transform-origin': '50% 50% -' + s.size / 2 + 'px',
            '-moz-transform-origin': '50% 50% -' + s.size / 2 + 'px',
            '-ms-transform-origin': '50% 50% -' + s.size / 2 + 'px',
            'transform-origin': '50% 50% -' + s.size / 2 + 'px'
          });

          if (s.params.cube.shadow) {
            if (s.isHorizontal()) {
              cubeShadow.transform('translate3d(0px, ' + (s.width / 2 + s.params.cube.shadowOffset) + 'px, ' + -s.width / 2 + 'px) rotateX(90deg) rotateZ(0deg) scale(' + s.params.cube.shadowScale + ')');
            } else {
              var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
              var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
              var scale1 = s.params.cube.shadowScale,
                  scale2 = s.params.cube.shadowScale / multiplier,
                  offset = s.params.cube.shadowOffset;
              cubeShadow.transform('scale3d(' + scale1 + ', 1, ' + scale2 + ') translate3d(0px, ' + (s.height / 2 + offset) + 'px, ' + -s.height / 2 / scale2 + 'px) rotateX(-90deg)');
            }
          }

          var zFactor = s.isSafari || s.isUiWebView ? -s.size / 2 : 0;
          s.wrapper.transform('translate3d(0px,0,' + zFactor + 'px) rotateX(' + (s.isHorizontal() ? 0 : wrapperRotate) + 'deg) rotateY(' + (s.isHorizontal() ? -wrapperRotate : 0) + 'deg)');
        },
        setTransition: function setTransition(duration) {
          s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

          if (s.params.cube.shadow && !s.isHorizontal()) {
            s.container.find('.swiper-cube-shadow').transition(duration);
          }
        }
      },
      coverflow: {
        setTranslate: function setTranslate() {
          var transform = s.translate;
          var center = s.isHorizontal() ? -transform + s.width / 2 : -transform + s.height / 2;
          var rotate = s.isHorizontal() ? s.params.coverflow.rotate : -s.params.coverflow.rotate;
          var translate = s.params.coverflow.depth; //Each slide offset from center

          for (var i = 0, length = s.slides.length; i < length; i++) {
            var slide = s.slides.eq(i);
            var slideSize = s.slidesSizesGrid[i];
            var slideOffset = slide[0].swiperSlideOffset;
            var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * s.params.coverflow.modifier;
            var rotateY = s.isHorizontal() ? rotate * offsetMultiplier : 0;
            var rotateX = s.isHorizontal() ? 0 : rotate * offsetMultiplier; // var rotateZ = 0

            var translateZ = -translate * Math.abs(offsetMultiplier);
            var translateY = s.isHorizontal() ? 0 : s.params.coverflow.stretch * offsetMultiplier;
            var translateX = s.isHorizontal() ? s.params.coverflow.stretch * offsetMultiplier : 0; //Fix for ultra small values

            if (Math.abs(translateX) < 0.001) translateX = 0;
            if (Math.abs(translateY) < 0.001) translateY = 0;
            if (Math.abs(translateZ) < 0.001) translateZ = 0;
            if (Math.abs(rotateY) < 0.001) rotateY = 0;
            if (Math.abs(rotateX) < 0.001) rotateX = 0;
            var slideTransform = 'translate3d(' + translateX + 'px,' + translateY + 'px,' + translateZ + 'px)  rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
            slide.transform(slideTransform);
            slide[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;

            if (s.params.coverflow.slideShadows) {
              //Set shadows
              var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
              var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');

              if (shadowBefore.length === 0) {
                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
                slide.append(shadowBefore);
              }

              if (shadowAfter.length === 0) {
                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
                slide.append(shadowAfter);
              }

              if (shadowBefore.length) shadowBefore[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
              if (shadowAfter.length) shadowAfter[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
            }
          } //Set correct perspective for IE10


          if (s.browser.ie) {
            var ws = s.wrapper[0].style;
            ws.perspectiveOrigin = center + 'px 50%';
          }
        },
        setTransition: function setTransition(duration) {
          s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
        }
      }
    };
    /*=========================
      Images Lazy Loading
      ===========================*/

    s.lazy = {
      initialImageLoaded: false,
      loadImageInSlide: function loadImageInSlide(index, loadInDuplicate) {
        if (typeof index === 'undefined') return;
        if (typeof loadInDuplicate === 'undefined') loadInDuplicate = true;
        if (s.slides.length === 0) return;
        var slide = s.slides.eq(index);
        var img = slide.find('.swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)');

        if (slide.hasClass('swiper-lazy') && !slide.hasClass('swiper-lazy-loaded') && !slide.hasClass('swiper-lazy-loading')) {
          img = img.add(slide[0]);
        }

        if (img.length === 0) return;
        img.each(function () {
          var _img = $(this);

          _img.addClass('swiper-lazy-loading');

          var background = _img.attr('data-background');

          var src = _img.attr('data-src'),
              srcset = _img.attr('data-srcset');

          s.loadImage(_img[0], src || background, srcset, false, function () {
            if (background) {
              _img.css('background-image', 'url("' + background + '")');

              _img.removeAttr('data-background');
            } else {
              if (srcset) {
                _img.attr('srcset', srcset);

                _img.removeAttr('data-srcset');
              }

              if (src) {
                _img.attr('src', src);

                _img.removeAttr('data-src');
              }
            }

            _img.addClass('swiper-lazy-loaded').removeClass('swiper-lazy-loading');

            slide.find('.swiper-lazy-preloader, .preloader').remove();

            if (s.params.loop && loadInDuplicate) {
              var slideOriginalIndex = slide.attr('data-swiper-slide-index');

              if (slide.hasClass(s.params.slideDuplicateClass)) {
                var originalSlide = s.wrapper.children('[data-swiper-slide-index="' + slideOriginalIndex + '"]:not(.' + s.params.slideDuplicateClass + ')');
                s.lazy.loadImageInSlide(originalSlide.index(), false);
              } else {
                var duplicatedSlide = s.wrapper.children('.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + slideOriginalIndex + '"]');
                s.lazy.loadImageInSlide(duplicatedSlide.index(), false);
              }
            }

            s.emit('onLazyImageReady', s, slide[0], _img[0]);
          });
          s.emit('onLazyImageLoad', s, slide[0], _img[0]);
        });
      },
      load: function load() {
        var i;

        if (s.params.watchSlidesVisibility) {
          s.wrapper.children('.' + s.params.slideVisibleClass).each(function () {
            s.lazy.loadImageInSlide($(this).index());
          });
        } else {
          if (s.params.slidesPerView > 1) {
            for (i = s.activeIndex; i < s.activeIndex + s.params.slidesPerView; i++) {
              if (s.slides[i]) s.lazy.loadImageInSlide(i);
            }
          } else {
            s.lazy.loadImageInSlide(s.activeIndex);
          }
        }

        if (s.params.lazyLoadingInPrevNext) {
          if (s.params.slidesPerView > 1 || s.params.lazyLoadingInPrevNextAmount && s.params.lazyLoadingInPrevNextAmount > 1) {
            var amount = s.params.lazyLoadingInPrevNextAmount;
            var spv = s.params.slidesPerView;
            var maxIndex = Math.min(s.activeIndex + spv + Math.max(amount, spv), s.slides.length);
            var minIndex = Math.max(s.activeIndex - Math.max(spv, amount), 0); // Next Slides

            for (i = s.activeIndex + s.params.slidesPerView; i < maxIndex; i++) {
              if (s.slides[i]) s.lazy.loadImageInSlide(i);
            } // Prev Slides


            for (i = minIndex; i < s.activeIndex; i++) {
              if (s.slides[i]) s.lazy.loadImageInSlide(i);
            }
          } else {
            var nextSlide = s.wrapper.children('.' + s.params.slideNextClass);
            if (nextSlide.length > 0) s.lazy.loadImageInSlide(nextSlide.index());
            var prevSlide = s.wrapper.children('.' + s.params.slidePrevClass);
            if (prevSlide.length > 0) s.lazy.loadImageInSlide(prevSlide.index());
          }
        }
      },
      onTransitionStart: function onTransitionStart() {
        if (s.params.lazyLoading) {
          if (s.params.lazyLoadingOnTransitionStart || !s.params.lazyLoadingOnTransitionStart && !s.lazy.initialImageLoaded) {
            s.lazy.load();
          }
        }
      },
      onTransitionEnd: function onTransitionEnd() {
        if (s.params.lazyLoading && !s.params.lazyLoadingOnTransitionStart) {
          s.lazy.load();
        }
      }
    };
    /*=========================
      Scrollbar
      ===========================*/

    s.scrollbar = {
      isTouched: false,
      setDragPosition: function setDragPosition(e) {
        var sb = s.scrollbar;
        var x = 0,
            y = 0;
        var translate;
        var pointerPosition = s.isHorizontal() ? e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX || e.clientX : e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY || e.clientY;
        var position = pointerPosition - sb.track.offset()[s.isHorizontal() ? 'left' : 'top'] - sb.dragSize / 2;
        var positionMin = -s.minTranslate() * sb.moveDivider;
        var positionMax = -s.maxTranslate() * sb.moveDivider;

        if (position < positionMin) {
          position = positionMin;
        } else if (position > positionMax) {
          position = positionMax;
        }

        position = -position / sb.moveDivider;
        s.updateProgress(position);
        s.setWrapperTranslate(position, true);
      },
      dragStart: function dragStart(e) {
        var sb = s.scrollbar;
        sb.isTouched = true;
        e.preventDefault();
        e.stopPropagation();
        sb.setDragPosition(e);
        clearTimeout(sb.dragTimeout);
        sb.track.transition(0);

        if (s.params.scrollbarHide) {
          sb.track.css('opacity', 1);
        }

        s.wrapper.transition(100);
        sb.drag.transition(100);
        s.emit('onScrollbarDragStart', s);
      },
      dragMove: function dragMove(e) {
        var sb = s.scrollbar;
        if (!sb.isTouched) return;
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
        sb.setDragPosition(e);
        s.wrapper.transition(0);
        sb.track.transition(0);
        sb.drag.transition(0);
        s.emit('onScrollbarDragMove', s);
      },
      dragEnd: function dragEnd(e) {
        var sb = s.scrollbar;
        if (!sb.isTouched) return;
        sb.isTouched = false;

        if (s.params.scrollbarHide) {
          clearTimeout(sb.dragTimeout);
          sb.dragTimeout = setTimeout(function () {
            sb.track.css('opacity', 0);
            sb.track.transition(400);
          }, 1000);
        }

        s.emit('onScrollbarDragEnd', s);

        if (s.params.scrollbarSnapOnRelease) {
          s.slideReset();
        }
      },
      enableDraggable: function enableDraggable() {
        var sb = s.scrollbar;
        var target = s.support.touch ? sb.track : document;
        $(sb.track).on(s.touchEvents.start, sb.dragStart);
        $(target).on(s.touchEvents.move, sb.dragMove);
        $(target).on(s.touchEvents.end, sb.dragEnd);
      },
      disableDraggable: function disableDraggable() {
        var sb = s.scrollbar;
        var target = s.support.touch ? sb.track : document;
        $(sb.track).off(s.touchEvents.start, sb.dragStart);
        $(target).off(s.touchEvents.move, sb.dragMove);
        $(target).off(s.touchEvents.end, sb.dragEnd);
      },
      set: function set() {
        if (!s.params.scrollbar) return;
        var sb = s.scrollbar;
        sb.track = $(s.params.scrollbar);

        if (s.params.uniqueNavElements && typeof s.params.scrollbar === 'string' && sb.track.length > 1 && s.container.find(s.params.scrollbar).length === 1) {
          sb.track = s.container.find(s.params.scrollbar);
        }

        sb.drag = sb.track.find('.swiper-scrollbar-drag');

        if (sb.drag.length === 0) {
          sb.drag = $('<div class="swiper-scrollbar-drag"></div>');
          sb.track.append(sb.drag);
        }

        sb.drag[0].style.width = '';
        sb.drag[0].style.height = '';
        sb.trackSize = s.isHorizontal() ? sb.track[0].offsetWidth : sb.track[0].offsetHeight;
        sb.divider = s.size / s.virtualSize;
        sb.moveDivider = sb.divider * (sb.trackSize / s.size);
        sb.dragSize = sb.trackSize * sb.divider;

        if (s.isHorizontal()) {
          sb.drag[0].style.width = sb.dragSize + 'px';
        } else {
          sb.drag[0].style.height = sb.dragSize + 'px';
        }

        if (sb.divider >= 1) {
          sb.track[0].style.display = 'none';
        } else {
          sb.track[0].style.display = '';
        }

        if (s.params.scrollbarHide) {
          sb.track[0].style.opacity = 0;
        }
      },
      setTranslate: function setTranslate() {
        if (!s.params.scrollbar) return;
        var diff;
        var sb = s.scrollbar;
        var translate = s.translate || 0;
        var newPos;
        var newSize = sb.dragSize;
        newPos = (sb.trackSize - sb.dragSize) * s.progress;

        if (s.rtl && s.isHorizontal()) {
          newPos = -newPos;

          if (newPos > 0) {
            newSize = sb.dragSize - newPos;
            newPos = 0;
          } else if (-newPos + sb.dragSize > sb.trackSize) {
            newSize = sb.trackSize + newPos;
          }
        } else {
          if (newPos < 0) {
            newSize = sb.dragSize + newPos;
            newPos = 0;
          } else if (newPos + sb.dragSize > sb.trackSize) {
            newSize = sb.trackSize - newPos;
          }
        }

        if (s.isHorizontal()) {
          if (s.support.transforms3d) {
            sb.drag.transform('translate3d(' + newPos + 'px, 0, 0)');
          } else {
            sb.drag.transform('translateX(' + newPos + 'px)');
          }

          sb.drag[0].style.width = newSize + 'px';
        } else {
          if (s.support.transforms3d) {
            sb.drag.transform('translate3d(0px, ' + newPos + 'px, 0)');
          } else {
            sb.drag.transform('translateY(' + newPos + 'px)');
          }

          sb.drag[0].style.height = newSize + 'px';
        }

        if (s.params.scrollbarHide) {
          clearTimeout(sb.timeout);
          sb.track[0].style.opacity = 1;
          sb.timeout = setTimeout(function () {
            sb.track[0].style.opacity = 0;
            sb.track.transition(400);
          }, 1000);
        }
      },
      setTransition: function setTransition(duration) {
        if (!s.params.scrollbar) return;
        s.scrollbar.drag.transition(duration);
      }
    };
    /*=========================
      Controller
      ===========================*/

    s.controller = {
      LinearSpline: function LinearSpline(x, y) {
        this.x = x;
        this.y = y;
        this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
        // (x1,y1) is the known point before given value,
        // (x3,y3) is the known point after given value.

        var i1, i3;
        var l = this.x.length;

        this.interpolate = function (x2) {
          if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):

          i3 = binarySearch(this.x, x2);
          i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
          // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1

          return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
        };

        var binarySearch = function () {
          var maxIndex, minIndex, guess;
          return function (array, val) {
            minIndex = -1;
            maxIndex = array.length;

            while (maxIndex - minIndex > 1) {
              if (array[guess = maxIndex + minIndex >> 1] <= val) {
                minIndex = guess;
              } else {
                maxIndex = guess;
              }
            }

            return maxIndex;
          };
        }();
      },
      //xxx: for now i will just save one spline function to to
      getInterpolateFunction: function getInterpolateFunction(c) {
        if (!s.controller.spline) s.controller.spline = s.params.loop ? new s.controller.LinearSpline(s.slidesGrid, c.slidesGrid) : new s.controller.LinearSpline(s.snapGrid, c.snapGrid);
      },
      setTranslate: function setTranslate(translate, byController) {
        var controlled = s.params.control;
        var multiplier, controlledTranslate;

        function setControlledTranslate(c) {
          // this will create an Interpolate function based on the snapGrids
          // x is the Grid of the scrolled scroller and y will be the controlled scroller
          // it makes sense to create this only once and recall it for the interpolation
          // the function does a lot of value caching for performance
          translate = c.rtl && c.params.direction === 'horizontal' ? -s.translate : s.translate;

          if (s.params.controlBy === 'slide') {
            s.controller.getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
            // but it did not work out

            controlledTranslate = -s.controller.spline.interpolate(-translate);
          }

          if (!controlledTranslate || s.params.controlBy === 'container') {
            multiplier = (c.maxTranslate() - c.minTranslate()) / (s.maxTranslate() - s.minTranslate());
            controlledTranslate = (translate - s.minTranslate()) * multiplier + c.minTranslate();
          }

          if (s.params.controlInverse) {
            controlledTranslate = c.maxTranslate() - controlledTranslate;
          }

          c.updateProgress(controlledTranslate);
          c.setWrapperTranslate(controlledTranslate, false, s);
          c.updateActiveIndex();
        }

        if (s.isArray(controlled)) {
          for (var i = 0; i < controlled.length; i++) {
            if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
              setControlledTranslate(controlled[i]);
            }
          }
        } else if (controlled instanceof Swiper && byController !== controlled) {
          setControlledTranslate(controlled);
        }
      },
      setTransition: function setTransition(duration, byController) {
        var controlled = s.params.control;
        var i;

        function setControlledTransition(c) {
          c.setWrapperTransition(duration, s);

          if (duration !== 0) {
            c.onTransitionStart();
            c.wrapper.transitionEnd(function () {
              if (!controlled) return;

              if (c.params.loop && s.params.controlBy === 'slide') {
                c.fixLoop();
              }

              c.onTransitionEnd();
            });
          }
        }

        if (s.isArray(controlled)) {
          for (i = 0; i < controlled.length; i++) {
            if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
              setControlledTransition(controlled[i]);
            }
          }
        } else if (controlled instanceof Swiper && byController !== controlled) {
          setControlledTransition(controlled);
        }
      }
    };
    /*=========================
      Hash Navigation
      ===========================*/

    s.hashnav = {
      init: function init() {
        if (!s.params.hashnav) return;
        s.hashnav.initialized = true;
        var hash = document.location.hash.replace('#', '');
        if (!hash) return;
        var speed = 0;

        for (var i = 0, length = s.slides.length; i < length; i++) {
          var slide = s.slides.eq(i);
          var slideHash = slide.attr('data-hash');

          if (slideHash === hash && !slide.hasClass(s.params.slideDuplicateClass)) {
            var index = slide.index();
            s.slideTo(index, speed, s.params.runCallbacksOnInit, true);
          }
        }
      },
      setHash: function setHash() {
        if (!s.hashnav.initialized || !s.params.hashnav) return;
        document.location.hash = s.slides.eq(s.activeIndex).attr('data-hash') || '';
      }
    };
    /*=========================
      Keyboard Control
      ===========================*/

    function handleKeyboard(e) {
      if (e.originalEvent) e = e.originalEvent; //jquery fix

      var kc = e.keyCode || e.charCode; // Directions locks

      if (!s.params.allowSwipeToNext && (s.isHorizontal() && kc === 39 || !s.isHorizontal() && kc === 40)) {
        return false;
      }

      if (!s.params.allowSwipeToPrev && (s.isHorizontal() && kc === 37 || !s.isHorizontal() && kc === 38)) {
        return false;
      }

      if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
        return;
      }

      if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
        return;
      }

      if (kc === 37 || kc === 39 || kc === 38 || kc === 40) {
        var inView = false; //Check that swiper should be inside of visible area of window

        if (s.container.parents('.swiper-slide').length > 0 && s.container.parents('.swiper-slide-active').length === 0) {
          return;
        }

        var windowScroll = {
          left: window.pageXOffset,
          top: window.pageYOffset
        };
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var swiperOffset = s.container.offset();
        if (s.rtl) swiperOffset.left = swiperOffset.left - s.container[0].scrollLeft;
        var swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + s.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + s.height], [swiperOffset.left + s.width, swiperOffset.top + s.height]];

        for (var i = 0; i < swiperCoord.length; i++) {
          var point = swiperCoord[i];

          if (point[0] >= windowScroll.left && point[0] <= windowScroll.left + windowWidth && point[1] >= windowScroll.top && point[1] <= windowScroll.top + windowHeight) {
            inView = true;
          }
        }

        if (!inView) return;
      }

      if (s.isHorizontal()) {
        if (kc === 37 || kc === 39) {
          if (e.preventDefault) e.preventDefault();else e.returnValue = false;
        }

        if (kc === 39 && !s.rtl || kc === 37 && s.rtl) s.slideNext();
        if (kc === 37 && !s.rtl || kc === 39 && s.rtl) s.slidePrev();
      } else {
        if (kc === 38 || kc === 40) {
          if (e.preventDefault) e.preventDefault();else e.returnValue = false;
        }

        if (kc === 40) s.slideNext();
        if (kc === 38) s.slidePrev();
      }
    }

    s.disableKeyboardControl = function () {
      s.params.keyboardControl = false;
      $(document).off('keydown', handleKeyboard);
    };

    s.enableKeyboardControl = function () {
      s.params.keyboardControl = true;
      $(document).on('keydown', handleKeyboard);
    };
    /*=========================
      Mousewheel Control
      ===========================*/


    s.mousewheel = {
      event: false,
      lastScrollTime: new window.Date().getTime()
    };

    if (s.params.mousewheelControl) {
      try {
        new window.WheelEvent('wheel');
        s.mousewheel.event = 'wheel';
      } catch (e) {
        if (window.WheelEvent || s.container[0] && 'wheel' in s.container[0]) {
          s.mousewheel.event = 'wheel';
        }
      }

      if (!s.mousewheel.event && window.WheelEvent) {}

      if (!s.mousewheel.event && document.onmousewheel !== undefined) {
        s.mousewheel.event = 'mousewheel';
      }

      if (!s.mousewheel.event) {
        s.mousewheel.event = 'DOMMouseScroll';
      }
    }

    function handleMousewheel(e) {
      if (e.originalEvent) e = e.originalEvent; //jquery fix

      var we = s.mousewheel.event;
      var delta = 0;
      var rtlFactor = s.rtl ? -1 : 1; //WebKits

      if (we === 'mousewheel') {
        if (s.params.mousewheelForceToAxis) {
          if (s.isHorizontal()) {
            if (Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY)) delta = e.wheelDeltaX * rtlFactor;else return;
          } else {
            if (Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX)) delta = e.wheelDeltaY;else return;
          }
        } else {
          delta = Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY) ? -e.wheelDeltaX * rtlFactor : -e.wheelDeltaY;
        }
      } //Old FireFox
      else if (we === 'DOMMouseScroll') delta = -e.detail; //New FireFox
      else if (we === 'wheel') {
        if (s.params.mousewheelForceToAxis) {
          if (s.isHorizontal()) {
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) delta = -e.deltaX * rtlFactor;else return;
          } else {
            if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) delta = -e.deltaY;else return;
          }
        } else {
          delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? -e.deltaX * rtlFactor : -e.deltaY;
        }
      }

      if (delta === 0) return;
      if (s.params.mousewheelInvert) delta = -delta;

      if (!s.params.freeMode) {
        if (new window.Date().getTime() - s.mousewheel.lastScrollTime > 60) {
          if (delta < 0) {
            if ((!s.isEnd || s.params.loop) && !s.animating) s.slideNext();else if (s.params.mousewheelReleaseOnEdges) return true;
          } else {
            if ((!s.isBeginning || s.params.loop) && !s.animating) s.slidePrev();else if (s.params.mousewheelReleaseOnEdges) return true;
          }
        }

        s.mousewheel.lastScrollTime = new window.Date().getTime();
      } else {
        //Freemode or scrollContainer:
        var position = s.getWrapperTranslate() + delta * s.params.mousewheelSensitivity;
        var wasBeginning = s.isBeginning,
            wasEnd = s.isEnd;
        if (position >= s.minTranslate()) position = s.minTranslate();
        if (position <= s.maxTranslate()) position = s.maxTranslate();
        s.setWrapperTransition(0);
        s.setWrapperTranslate(position);
        s.updateProgress();
        s.updateActiveIndex();

        if (!wasBeginning && s.isBeginning || !wasEnd && s.isEnd) {
          s.updateClasses();
        }

        if (s.params.freeModeSticky) {
          clearTimeout(s.mousewheel.timeout);
          s.mousewheel.timeout = setTimeout(function () {
            s.slideReset();
          }, 300);
        } else {
          if (s.params.lazyLoading && s.lazy) {
            s.lazy.load();
          }
        } // Return page scroll on edge positions


        if (position === 0 || position === s.maxTranslate()) return;
      }

      if (s.params.autoplay) s.stopAutoplay();
      if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      return false;
    }

    s.disableMousewheelControl = function () {
      if (!s.mousewheel.event) return false;
      s.container.off(s.mousewheel.event, handleMousewheel);
      return true;
    };

    s.enableMousewheelControl = function () {
      if (!s.mousewheel.event) return false;
      s.container.on(s.mousewheel.event, handleMousewheel);
      return true;
    };
    /*=========================
      Parallax
      ===========================*/


    function setParallaxTransform(el, progress) {
      el = $(el);
      var p, pX, pY;
      var rtlFactor = s.rtl ? -1 : 1;
      p = el.attr('data-swiper-parallax') || '0';
      pX = el.attr('data-swiper-parallax-x');
      pY = el.attr('data-swiper-parallax-y');

      if (pX || pY) {
        pX = pX || '0';
        pY = pY || '0';
      } else {
        if (s.isHorizontal()) {
          pX = p;
          pY = '0';
        } else {
          pY = p;
          pX = '0';
        }
      }

      if (pX.indexOf('%') >= 0) {
        pX = parseInt(pX, 10) * progress * rtlFactor + '%';
      } else {
        pX = pX * progress * rtlFactor + 'px';
      }

      if (pY.indexOf('%') >= 0) {
        pY = parseInt(pY, 10) * progress + '%';
      } else {
        pY = pY * progress + 'px';
      }

      el.transform('translate3d(' + pX + ', ' + pY + ',0px)');
    }

    s.parallax = {
      setTranslate: function setTranslate() {
        s.container.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function () {
          setParallaxTransform(this, s.progress);
        });
        s.slides.each(function () {
          var slide = $(this);
          slide.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function () {
            var progress = Math.min(Math.max(slide[0].progress, -1), 1);
            setParallaxTransform(this, progress);
          });
        });
      },
      setTransition: function setTransition(duration) {
        if (typeof duration === 'undefined') duration = s.params.speed;
        s.container.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function () {
          var el = $(this);
          var parallaxDuration = parseInt(el.attr('data-swiper-parallax-duration'), 10) || duration;
          if (duration === 0) parallaxDuration = 0;
          el.transition(parallaxDuration);
        });
      }
    };
    /*=========================
      Plugins API. Collect all and init all plugins
      ===========================*/

    s._plugins = [];

    for (var plugin in s.plugins) {
      var p = s.plugins[plugin](s, s.params[plugin]);
      if (p) s._plugins.push(p);
    } // Method to call all plugins event/method


    s.callPlugins = function (eventName) {
      for (var i = 0; i < s._plugins.length; i++) {
        if (eventName in s._plugins[i]) {
          s._plugins[i][eventName](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
        }
      }
    };
    /*=========================
      Events/Callbacks/Plugins Emitter
      ===========================*/


    function normalizeEventName(eventName) {
      if (eventName.indexOf('on') !== 0) {
        if (eventName[0] !== eventName[0].toUpperCase()) {
          eventName = 'on' + eventName[0].toUpperCase() + eventName.substring(1);
        } else {
          eventName = 'on' + eventName;
        }
      }

      return eventName;
    }

    s.emitterEventListeners = {};

    s.emit = function (eventName) {
      // Trigger callbacks
      if (s.params[eventName]) {
        s.params[eventName](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
      }

      var i; // Trigger events

      if (s.emitterEventListeners[eventName]) {
        for (i = 0; i < s.emitterEventListeners[eventName].length; i++) {
          s.emitterEventListeners[eventName][i](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
        }
      } // Trigger plugins


      if (s.callPlugins) s.callPlugins(eventName, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    };

    s.on = function (eventName, handler) {
      eventName = normalizeEventName(eventName);
      if (!s.emitterEventListeners[eventName]) s.emitterEventListeners[eventName] = [];
      s.emitterEventListeners[eventName].push(handler);
      return s;
    };

    s.off = function (eventName, handler) {
      var i;
      eventName = normalizeEventName(eventName);

      if (typeof handler === 'undefined') {
        // Remove all handlers for such event
        s.emitterEventListeners[eventName] = [];
        return s;
      }

      if (!s.emitterEventListeners[eventName] || s.emitterEventListeners[eventName].length === 0) return;

      for (i = 0; i < s.emitterEventListeners[eventName].length; i++) {
        if (s.emitterEventListeners[eventName][i] === handler) s.emitterEventListeners[eventName].splice(i, 1);
      }

      return s;
    };

    s.once = function (eventName, handler) {
      eventName = normalizeEventName(eventName);

      var _handler = function _handler() {
        handler(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
        s.off(eventName, _handler);
      };

      s.on(eventName, _handler);
      return s;
    }; // Accessibility tools


    s.a11y = {
      makeFocusable: function makeFocusable($el) {
        $el.attr('tabIndex', '0');
        return $el;
      },
      addRole: function addRole($el, role) {
        $el.attr('role', role);
        return $el;
      },
      addLabel: function addLabel($el, label) {
        $el.attr('aria-label', label);
        return $el;
      },
      disable: function disable($el) {
        $el.attr('aria-disabled', true);
        return $el;
      },
      enable: function enable($el) {
        $el.attr('aria-disabled', false);
        return $el;
      },
      onEnterKey: function onEnterKey(event) {
        if (event.keyCode !== 13) return;

        if ($(event.target).is(s.params.nextButton)) {
          s.onClickNext(event);

          if (s.isEnd) {
            s.a11y.notify(s.params.lastSlideMessage);
          } else {
            s.a11y.notify(s.params.nextSlideMessage);
          }
        } else if ($(event.target).is(s.params.prevButton)) {
          s.onClickPrev(event);

          if (s.isBeginning) {
            s.a11y.notify(s.params.firstSlideMessage);
          } else {
            s.a11y.notify(s.params.prevSlideMessage);
          }
        }

        if ($(event.target).is('.' + s.params.bulletClass)) {
          $(event.target)[0].click();
        }
      },
      liveRegion: $('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
      notify: function notify(message) {
        var notification = s.a11y.liveRegion;
        if (notification.length === 0) return;
        notification.html('');
        notification.html(message);
      },
      init: function init() {
        // Setup accessibility
        if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
          s.a11y.makeFocusable(s.nextButton);
          s.a11y.addRole(s.nextButton, 'button');
          s.a11y.addLabel(s.nextButton, s.params.nextSlideMessage);
        }

        if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
          s.a11y.makeFocusable(s.prevButton);
          s.a11y.addRole(s.prevButton, 'button');
          s.a11y.addLabel(s.prevButton, s.params.prevSlideMessage);
        }

        $(s.container).append(s.a11y.liveRegion);
      },
      initPagination: function initPagination() {
        if (s.params.pagination && s.params.paginationClickable && s.bullets && s.bullets.length) {
          s.bullets.each(function () {
            var bullet = $(this);
            s.a11y.makeFocusable(bullet);
            s.a11y.addRole(bullet, 'button');
            s.a11y.addLabel(bullet, s.params.paginationBulletMessage.replace(/{{index}}/, bullet.index() + 1));
          });
        }
      },
      destroy: function destroy() {
        if (s.a11y.liveRegion && s.a11y.liveRegion.length > 0) s.a11y.liveRegion.remove();
      }
    };
    /*=========================
      Init/Destroy
      ===========================*/

    s.init = function () {
      if (s.params.loop) s.createLoop();
      s.updateContainerSize();
      s.updateSlidesSize();
      s.updatePagination();

      if (s.params.scrollbar && s.scrollbar) {
        s.scrollbar.set();

        if (s.params.scrollbarDraggable) {
          s.scrollbar.enableDraggable();
        }
      }

      if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
        if (!s.params.loop) s.updateProgress();
        s.effects[s.params.effect].setTranslate();
      }

      if (s.params.loop) {
        s.slideTo(s.params.initialSlide + s.loopedSlides, 0, s.params.runCallbacksOnInit);
      } else {
        s.slideTo(s.params.initialSlide, 0, s.params.runCallbacksOnInit);

        if (s.params.initialSlide === 0) {
          if (s.parallax && s.params.parallax) s.parallax.setTranslate();

          if (s.lazy && s.params.lazyLoading) {
            s.lazy.load();
            s.lazy.initialImageLoaded = true;
          }
        }
      }

      s.attachEvents();

      if (s.params.observer && s.support.observer) {
        s.initObservers();
      }

      if (s.params.preloadImages && !s.params.lazyLoading) {
        s.preloadImages();
      }

      if (s.params.autoplay) {
        s.startAutoplay();
      }

      if (s.params.keyboardControl) {
        if (s.enableKeyboardControl) s.enableKeyboardControl();
      }

      if (s.params.mousewheelControl) {
        if (s.enableMousewheelControl) s.enableMousewheelControl();
      }

      if (s.params.hashnav) {
        if (s.hashnav) s.hashnav.init();
      }

      if (s.params.a11y && s.a11y) s.a11y.init();
      s.emit('onInit', s);
    }; // Cleanup dynamic styles


    s.cleanupStyles = function () {
      // Container
      s.container.removeClass(s.classNames.join(' ')).removeAttr('style'); // Wrapper

      s.wrapper.removeAttr('style'); // Slides

      if (s.slides && s.slides.length) {
        s.slides.removeClass([s.params.slideVisibleClass, s.params.slideActiveClass, s.params.slideNextClass, s.params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-column').removeAttr('data-swiper-row');
      } // Pagination/Bullets


      if (s.paginationContainer && s.paginationContainer.length) {
        s.paginationContainer.removeClass(s.params.paginationHiddenClass);
      }

      if (s.bullets && s.bullets.length) {
        s.bullets.removeClass(s.params.bulletActiveClass);
      } // Buttons


      if (s.params.prevButton) $(s.params.prevButton).removeClass(s.params.buttonDisabledClass);
      if (s.params.nextButton) $(s.params.nextButton).removeClass(s.params.buttonDisabledClass); // Scrollbar

      if (s.params.scrollbar && s.scrollbar) {
        if (s.scrollbar.track && s.scrollbar.track.length) s.scrollbar.track.removeAttr('style');
        if (s.scrollbar.drag && s.scrollbar.drag.length) s.scrollbar.drag.removeAttr('style');
      }
    }; // Destroy


    s.destroy = function (deleteInstance, cleanupStyles) {
      // Detach evebts
      s.detachEvents(); // Stop autoplay

      s.stopAutoplay(); // Disable draggable

      if (s.params.scrollbar && s.scrollbar) {
        if (s.params.scrollbarDraggable) {
          s.scrollbar.disableDraggable();
        }
      } // Destroy loop


      if (s.params.loop) {
        s.destroyLoop();
      } // Cleanup styles


      if (cleanupStyles) {
        s.cleanupStyles();
      } // Disconnect observer


      s.disconnectObservers(); // Disable keyboard/mousewheel

      if (s.params.keyboardControl) {
        if (s.disableKeyboardControl) s.disableKeyboardControl();
      }

      if (s.params.mousewheelControl) {
        if (s.disableMousewheelControl) s.disableMousewheelControl();
      } // Disable a11y


      if (s.params.a11y && s.a11y) s.a11y.destroy(); // Destroy callback

      s.emit('onDestroy'); // Delete instance

      if (deleteInstance !== false) s = null;
    };

    s.init(); // Return swiper instance

    return s;
  };
  /*==================================================
      Prototype
  ====================================================*/


  Swiper.prototype = {
    isSafari: function () {
      var ua = navigator.userAgent.toLowerCase();
      return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
    }(),
    isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
    isArray: function isArray(arr) {
      return Object.prototype.toString.apply(arr) === '[object Array]';
    },

    /*==================================================
    Browser
    ====================================================*/
    browser: {
      ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
      ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1
    },

    /*==================================================
    Devices
    ====================================================*/
    device: function () {
      var ua = navigator.userAgent;
      var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
      var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
      var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
      var iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
      return {
        ios: ipad || iphone || ipod,
        android: android
      };
    }(),

    /*==================================================
    Feature Detection
    ====================================================*/
    support: {
      touch: window.Modernizr && Modernizr.touch === true || function () {
        return !!('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch);
      }(),
      transforms3d: window.Modernizr && Modernizr.csstransforms3d === true || function () {
        var div = document.createElement('div').style;
        return 'webkitPerspective' in div || 'MozPerspective' in div || 'OPerspective' in div || 'MsPerspective' in div || 'perspective' in div;
      }(),
      flexbox: function () {
        var div = document.createElement('div').style;
        var styles = 'alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient'.split(' ');

        for (var i = 0; i < styles.length; i++) {
          if (styles[i] in div) return true;
        }
      }(),
      observer: function () {
        return 'MutationObserver' in window || 'WebkitMutationObserver' in window;
      }()
    },

    /*==================================================
    Plugins
    ====================================================*/
    plugins: {}
  };
  /*===========================
  Dom7 Library
  ===========================*/

  var Dom7 = function () {
    var Dom7 = function Dom7(arr) {
      var _this = this,
          i = 0; // Create array-like object


      for (i = 0; i < arr.length; i++) {
        _this[i] = arr[i];
      }

      _this.length = arr.length; // Return collection with methods

      return this;
    };

    var $ = function $(selector, context) {
      var arr = [],
          i = 0;

      if (selector && !context) {
        if (selector instanceof Dom7) {
          return selector;
        }
      }

      if (selector) {
        // String
        if (typeof selector === 'string') {
          var els,
              tempParent,
              html = selector.trim();

          if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
            var toCreate = 'div';
            if (html.indexOf('<li') === 0) toCreate = 'ul';
            if (html.indexOf('<tr') === 0) toCreate = 'tbody';
            if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
            if (html.indexOf('<tbody') === 0) toCreate = 'table';
            if (html.indexOf('<option') === 0) toCreate = 'select';
            tempParent = document.createElement(toCreate);
            tempParent.innerHTML = selector;

            for (i = 0; i < tempParent.childNodes.length; i++) {
              arr.push(tempParent.childNodes[i]);
            }
          } else {
            if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
              // Pure ID selector
              els = [document.getElementById(selector.split('#')[1])];
            } else {
              // Other selectors
              els = (context || document).querySelectorAll(selector);
            }

            for (i = 0; i < els.length; i++) {
              if (els[i]) arr.push(els[i]);
            }
          }
        } // Node/element
        else if (selector.nodeType || selector === window || selector === document) {
          arr.push(selector);
        } //Array of elements or instance of Dom
        else if (selector.length > 0 && selector[0].nodeType) {
          for (i = 0; i < selector.length; i++) {
            arr.push(selector[i]);
          }
        }
      }

      return new Dom7(arr);
    };

    Dom7.prototype = {
      // Classes and attriutes
      addClass: function addClass(className) {
        if (typeof className === 'undefined') {
          return this;
        }

        var classes = className.split(' ');

        for (var i = 0; i < classes.length; i++) {
          for (var j = 0; j < this.length; j++) {
            this[j].classList.add(classes[i]);
          }
        }

        return this;
      },
      removeClass: function removeClass(className) {
        var classes = className.split(' ');

        for (var i = 0; i < classes.length; i++) {
          for (var j = 0; j < this.length; j++) {
            this[j].classList.remove(classes[i]);
          }
        }

        return this;
      },
      hasClass: function hasClass(className) {
        if (!this[0]) return false;else return this[0].classList.contains(className);
      },
      toggleClass: function toggleClass(className) {
        var classes = className.split(' ');

        for (var i = 0; i < classes.length; i++) {
          for (var j = 0; j < this.length; j++) {
            this[j].classList.toggle(classes[i]);
          }
        }

        return this;
      },
      attr: function attr(attrs, value) {
        if (arguments.length === 1 && typeof attrs === 'string') {
          // Get attr
          if (this[0]) return this[0].getAttribute(attrs);else return undefined;
        } else {
          // Set attrs
          for (var i = 0; i < this.length; i++) {
            if (arguments.length === 2) {
              // String
              this[i].setAttribute(attrs, value);
            } else {
              // Object
              for (var attrName in attrs) {
                this[i][attrName] = attrs[attrName];
                this[i].setAttribute(attrName, attrs[attrName]);
              }
            }
          }

          return this;
        }
      },
      removeAttr: function removeAttr(attr) {
        for (var i = 0; i < this.length; i++) {
          this[i].removeAttribute(attr);
        }

        return this;
      },
      data: function data(key, value) {
        if (typeof value === 'undefined') {
          // Get value
          if (this[0]) {
            var dataKey = this[0].getAttribute('data-' + key);
            if (dataKey) return dataKey;else if (this[0].dom7ElementDataStorage && key in this[0].dom7ElementDataStorage) return this[0].dom7ElementDataStorage[key];else return undefined;
          } else return undefined;
        } else {
          // Set value
          for (var i = 0; i < this.length; i++) {
            var el = this[i];
            if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
            el.dom7ElementDataStorage[key] = value;
          }

          return this;
        }
      },
      // Transforms
      transform: function transform(_transform) {
        for (var i = 0; i < this.length; i++) {
          var elStyle = this[i].style;
          elStyle.webkitTransform = elStyle.MsTransform = elStyle.msTransform = elStyle.MozTransform = elStyle.OTransform = elStyle.transform = _transform;
        }

        return this;
      },
      transition: function transition(duration) {
        if (typeof duration !== 'string') {
          duration = duration + 'ms';
        }

        for (var i = 0; i < this.length; i++) {
          var elStyle = this[i].style;
          elStyle.webkitTransitionDuration = elStyle.MsTransitionDuration = elStyle.msTransitionDuration = elStyle.MozTransitionDuration = elStyle.OTransitionDuration = elStyle.transitionDuration = duration;
        }

        return this;
      },
      //Events
      on: function on(eventName, targetSelector, listener, capture) {
        function handleLiveEvent(e) {
          var target = e.target;
          if ($(target).is(targetSelector)) listener.call(target, e);else {
            var parents = $(target).parents();

            for (var k = 0; k < parents.length; k++) {
              if ($(parents[k]).is(targetSelector)) listener.call(parents[k], e);
            }
          }
        }

        var events = eventName.split(' ');
        var i, j;

        for (i = 0; i < this.length; i++) {
          if (typeof targetSelector === 'function' || targetSelector === false) {
            // Usual events
            if (typeof targetSelector === 'function') {
              listener = arguments[1];
              capture = arguments[2] || false;
            }

            for (j = 0; j < events.length; j++) {
              this[i].addEventListener(events[j], listener, capture);
            }
          } else {
            //Live events
            for (j = 0; j < events.length; j++) {
              if (!this[i].dom7LiveListeners) this[i].dom7LiveListeners = [];
              this[i].dom7LiveListeners.push({
                listener: listener,
                liveListener: handleLiveEvent
              });
              this[i].addEventListener(events[j], handleLiveEvent, capture);
            }
          }
        }

        return this;
      },
      off: function off(eventName, targetSelector, listener, capture) {
        var events = eventName.split(' ');

        for (var i = 0; i < events.length; i++) {
          for (var j = 0; j < this.length; j++) {
            if (typeof targetSelector === 'function' || targetSelector === false) {
              // Usual events
              if (typeof targetSelector === 'function') {
                listener = arguments[1];
                capture = arguments[2] || false;
              }

              this[j].removeEventListener(events[i], listener, capture);
            } else {
              // Live event
              if (this[j].dom7LiveListeners) {
                for (var k = 0; k < this[j].dom7LiveListeners.length; k++) {
                  if (this[j].dom7LiveListeners[k].listener === listener) {
                    this[j].removeEventListener(events[i], this[j].dom7LiveListeners[k].liveListener, capture);
                  }
                }
              }
            }
          }
        }

        return this;
      },
      once: function once(eventName, targetSelector, listener, capture) {
        var dom = this;

        if (typeof targetSelector === 'function') {
          targetSelector = false;
          listener = arguments[1];
          capture = arguments[2];
        }

        function proxy(e) {
          listener(e);
          dom.off(eventName, targetSelector, proxy, capture);
        }

        dom.on(eventName, targetSelector, proxy, capture);
      },
      trigger: function trigger(eventName, eventData) {
        for (var i = 0; i < this.length; i++) {
          var evt;

          try {
            evt = new window.CustomEvent(eventName, {
              detail: eventData,
              bubbles: true,
              cancelable: true
            });
          } catch (e) {
            evt = document.createEvent('Event');
            evt.initEvent(eventName, true, true);
            evt.detail = eventData;
          }

          this[i].dispatchEvent(evt);
        }

        return this;
      },
      transitionEnd: function transitionEnd(callback) {
        var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
            i,
            j,
            dom = this;

        function fireCallBack(e) {
          /*jshint validthis:true */
          if (e.target !== this) return;
          callback.call(this, e);

          for (i = 0; i < events.length; i++) {
            dom.off(events[i], fireCallBack);
          }
        }

        if (callback) {
          for (i = 0; i < events.length; i++) {
            dom.on(events[i], fireCallBack);
          }
        }

        return this;
      },
      // Sizing/Styles
      width: function width() {
        if (this[0] === window) {
          return window.innerWidth;
        } else {
          if (this.length > 0) {
            return parseFloat(this.css('width'));
          } else {
            return null;
          }
        }
      },
      outerWidth: function outerWidth(includeMargins) {
        if (this.length > 0) {
          if (includeMargins) return this[0].offsetWidth + parseFloat(this.css('margin-right')) + parseFloat(this.css('margin-left'));else return this[0].offsetWidth;
        } else return null;
      },
      height: function height() {
        if (this[0] === window) {
          return window.innerHeight;
        } else {
          if (this.length > 0) {
            return parseFloat(this.css('height'));
          } else {
            return null;
          }
        }
      },
      outerHeight: function outerHeight(includeMargins) {
        if (this.length > 0) {
          if (includeMargins) return this[0].offsetHeight + parseFloat(this.css('margin-top')) + parseFloat(this.css('margin-bottom'));else return this[0].offsetHeight;
        } else return null;
      },
      offset: function offset() {
        if (this.length > 0) {
          var el = this[0];
          var box = el.getBoundingClientRect();
          var body = document.body;
          var clientTop = el.clientTop || body.clientTop || 0;
          var clientLeft = el.clientLeft || body.clientLeft || 0;
          var scrollTop = window.pageYOffset || el.scrollTop;
          var scrollLeft = window.pageXOffset || el.scrollLeft;
          return {
            top: box.top + scrollTop - clientTop,
            left: box.left + scrollLeft - clientLeft
          };
        } else {
          return null;
        }
      },
      css: function css(props, value) {
        var i;

        if (arguments.length === 1) {
          if (typeof props === 'string') {
            if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
          } else {
            for (i = 0; i < this.length; i++) {
              for (var prop in props) {
                this[i].style[prop] = props[prop];
              }
            }

            return this;
          }
        }

        if (arguments.length === 2 && typeof props === 'string') {
          for (i = 0; i < this.length; i++) {
            this[i].style[props] = value;
          }

          return this;
        }

        return this;
      },
      //Dom manipulation
      each: function each(callback) {
        for (var i = 0; i < this.length; i++) {
          callback.call(this[i], i, this[i]);
        }

        return this;
      },
      html: function html(_html) {
        if (typeof _html === 'undefined') {
          return this[0] ? this[0].innerHTML : undefined;
        } else {
          for (var i = 0; i < this.length; i++) {
            this[i].innerHTML = _html;
          }

          return this;
        }
      },
      text: function text(_text) {
        if (typeof _text === 'undefined') {
          if (this[0]) {
            return this[0].textContent.trim();
          } else return null;
        } else {
          for (var i = 0; i < this.length; i++) {
            this[i].textContent = _text;
          }

          return this;
        }
      },
      is: function is(selector) {
        if (!this[0]) return false;
        var compareWith, i;

        if (typeof selector === 'string') {
          var el = this[0];
          if (el === document) return selector === document;
          if (el === window) return selector === window;
          if (el.matches) return el.matches(selector);else if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);else if (el.mozMatchesSelector) return el.mozMatchesSelector(selector);else if (el.msMatchesSelector) return el.msMatchesSelector(selector);else {
            compareWith = $(selector);

            for (i = 0; i < compareWith.length; i++) {
              if (compareWith[i] === this[0]) return true;
            }

            return false;
          }
        } else if (selector === document) return this[0] === document;else if (selector === window) return this[0] === window;else {
          if (selector.nodeType || selector instanceof Dom7) {
            compareWith = selector.nodeType ? [selector] : selector;

            for (i = 0; i < compareWith.length; i++) {
              if (compareWith[i] === this[0]) return true;
            }

            return false;
          }

          return false;
        }
      },
      index: function index() {
        if (this[0]) {
          var child = this[0];
          var i = 0;

          while ((child = child.previousSibling) !== null) {
            if (child.nodeType === 1) i++;
          }

          return i;
        } else return undefined;
      },
      eq: function eq(index) {
        if (typeof index === 'undefined') return this;
        var length = this.length;
        var returnIndex;

        if (index > length - 1) {
          return new Dom7([]);
        }

        if (index < 0) {
          returnIndex = length + index;
          if (returnIndex < 0) return new Dom7([]);else return new Dom7([this[returnIndex]]);
        }

        return new Dom7([this[index]]);
      },
      append: function append(newChild) {
        var i, j;

        for (i = 0; i < this.length; i++) {
          if (typeof newChild === 'string') {
            var tempDiv = document.createElement('div');
            tempDiv.innerHTML = newChild;

            while (tempDiv.firstChild) {
              this[i].appendChild(tempDiv.firstChild);
            }
          } else if (newChild instanceof Dom7) {
            for (j = 0; j < newChild.length; j++) {
              this[i].appendChild(newChild[j]);
            }
          } else {
            this[i].appendChild(newChild);
          }
        }

        return this;
      },
      prepend: function prepend(newChild) {
        var i, j;

        for (i = 0; i < this.length; i++) {
          if (typeof newChild === 'string') {
            var tempDiv = document.createElement('div');
            tempDiv.innerHTML = newChild;

            for (j = tempDiv.childNodes.length - 1; j >= 0; j--) {
              this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
            } // this[i].insertAdjacentHTML('afterbegin', newChild);

          } else if (newChild instanceof Dom7) {
            for (j = 0; j < newChild.length; j++) {
              this[i].insertBefore(newChild[j], this[i].childNodes[0]);
            }
          } else {
            this[i].insertBefore(newChild, this[i].childNodes[0]);
          }
        }

        return this;
      },
      insertBefore: function insertBefore(selector) {
        var before = $(selector);

        for (var i = 0; i < this.length; i++) {
          if (before.length === 1) {
            before[0].parentNode.insertBefore(this[i], before[0]);
          } else if (before.length > 1) {
            for (var j = 0; j < before.length; j++) {
              before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
            }
          }
        }
      },
      insertAfter: function insertAfter(selector) {
        var after = $(selector);

        for (var i = 0; i < this.length; i++) {
          if (after.length === 1) {
            after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
          } else if (after.length > 1) {
            for (var j = 0; j < after.length; j++) {
              after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
            }
          }
        }
      },
      next: function next(selector) {
        if (this.length > 0) {
          if (selector) {
            if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) return new Dom7([this[0].nextElementSibling]);else return new Dom7([]);
          } else {
            if (this[0].nextElementSibling) return new Dom7([this[0].nextElementSibling]);else return new Dom7([]);
          }
        } else return new Dom7([]);
      },
      nextAll: function nextAll(selector) {
        var nextEls = [];
        var el = this[0];
        if (!el) return new Dom7([]);

        while (el.nextElementSibling) {
          var next = el.nextElementSibling;

          if (selector) {
            if ($(next).is(selector)) nextEls.push(next);
          } else nextEls.push(next);

          el = next;
        }

        return new Dom7(nextEls);
      },
      prev: function prev(selector) {
        if (this.length > 0) {
          if (selector) {
            if (this[0].previousElementSibling && $(this[0].previousElementSibling).is(selector)) return new Dom7([this[0].previousElementSibling]);else return new Dom7([]);
          } else {
            if (this[0].previousElementSibling) return new Dom7([this[0].previousElementSibling]);else return new Dom7([]);
          }
        } else return new Dom7([]);
      },
      prevAll: function prevAll(selector) {
        var prevEls = [];
        var el = this[0];
        if (!el) return new Dom7([]);

        while (el.previousElementSibling) {
          var prev = el.previousElementSibling;

          if (selector) {
            if ($(prev).is(selector)) prevEls.push(prev);
          } else prevEls.push(prev);

          el = prev;
        }

        return new Dom7(prevEls);
      },
      parent: function parent(selector) {
        var parents = [];

        for (var i = 0; i < this.length; i++) {
          if (selector) {
            if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
          } else {
            parents.push(this[i].parentNode);
          }
        }

        return $($.unique(parents));
      },
      parents: function parents(selector) {
        var parents = [];

        for (var i = 0; i < this.length; i++) {
          var parent = this[i].parentNode;

          while (parent) {
            if (selector) {
              if ($(parent).is(selector)) parents.push(parent);
            } else {
              parents.push(parent);
            }

            parent = parent.parentNode;
          }
        }

        return $($.unique(parents));
      },
      find: function find(selector) {
        var foundElements = [];

        for (var i = 0; i < this.length; i++) {
          var found = this[i].querySelectorAll(selector);

          for (var j = 0; j < found.length; j++) {
            foundElements.push(found[j]);
          }
        }

        return new Dom7(foundElements);
      },
      children: function children(selector) {
        var children = [];

        for (var i = 0; i < this.length; i++) {
          var childNodes = this[i].childNodes;

          for (var j = 0; j < childNodes.length; j++) {
            if (!selector) {
              if (childNodes[j].nodeType === 1) children.push(childNodes[j]);
            } else {
              if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) children.push(childNodes[j]);
            }
          }
        }

        return new Dom7($.unique(children));
      },
      remove: function remove() {
        for (var i = 0; i < this.length; i++) {
          if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
        }

        return this;
      },
      add: function add() {
        var dom = this;
        var i, j;

        for (i = 0; i < arguments.length; i++) {
          var toAdd = $(arguments[i]);

          for (j = 0; j < toAdd.length; j++) {
            dom[dom.length] = toAdd[j];
            dom.length++;
          }
        }

        return dom;
      }
    };
    $.fn = Dom7.prototype;

    $.unique = function (arr) {
      var unique = [];

      for (var i = 0; i < arr.length; i++) {
        if (unique.indexOf(arr[i]) === -1) unique.push(arr[i]);
      }

      return unique;
    };

    return $;
  }();
  /*===========================
   Get Dom libraries
   ===========================*/


  var swiperDomPlugins = ['jQuery', 'Zepto', 'Dom7'];

  for (var i = 0; i < swiperDomPlugins.length; i++) {
    if (window[swiperDomPlugins[i]]) {
      addLibraryPlugin(window[swiperDomPlugins[i]]);
    }
  } // Required DOM Plugins


  var domLib;

  if (typeof Dom7 === 'undefined') {
    domLib = window.Dom7 || window.Zepto || window.jQuery;
  } else {
    domLib = Dom7;
  }
  /*===========================
  Add .swiper plugin from Dom libraries
  ===========================*/


  function addLibraryPlugin(lib) {
    lib.fn.swiper = function (params) {
      var firstInstance;
      lib(this).each(function () {
        var s = new Swiper(this, params);
        if (!firstInstance) firstInstance = s;
      });
      return firstInstance;
    };
  }

  if (domLib) {
    if (!('transitionEnd' in domLib.fn)) {
      domLib.fn.transitionEnd = function (callback) {
        var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
            i,
            j,
            dom = this;

        function fireCallBack(e) {
          /*jshint validthis:true */
          if (e.target !== this) return;
          callback.call(this, e);

          for (i = 0; i < events.length; i++) {
            dom.off(events[i], fireCallBack);
          }
        }

        if (callback) {
          for (i = 0; i < events.length; i++) {
            dom.on(events[i], fireCallBack);
          }
        }

        return this;
      };
    }

    if (!('transform' in domLib.fn)) {
      domLib.fn.transform = function (transform) {
        for (var i = 0; i < this.length; i++) {
          var elStyle = this[i].style;
          elStyle.webkitTransform = elStyle.MsTransform = elStyle.msTransform = elStyle.MozTransform = elStyle.OTransform = elStyle.transform = transform;
        }

        return this;
      };
    }

    if (!('transition' in domLib.fn)) {
      domLib.fn.transition = function (duration) {
        if (typeof duration !== 'string') {
          duration = duration + 'ms';
        }

        for (var i = 0; i < this.length; i++) {
          var elStyle = this[i].style;
          elStyle.webkitTransitionDuration = elStyle.MsTransitionDuration = elStyle.msTransitionDuration = elStyle.MozTransitionDuration = elStyle.OTransitionDuration = elStyle.transitionDuration = duration;
        }

        return this;
      };
    }
  }

  window.Swiper = Swiper;
})();
/*===========================
Swiper AMD Export
===========================*/


if (typeof module !== 'undefined') {
  module.exports = window.Swiper;
} else if (typeof define === 'function' && define.amd) {
  define([], function () {
    'use strict';

    return window.Swiper;
  });
}

(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof2(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.IMask = {}));
})(void 0, function (exports) {
  'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof2(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get() {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get.bind();
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(arguments.length < 3 ? target : receiver);
        }

        return desc.value;
      };
    }

    return _get.apply(this, arguments);
  }

  function set(target, property, value, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.set) {
      set = Reflect.set;
    } else {
      set = function set(target, property, value, receiver) {
        var base = _superPropBase(target, property);

        var desc;

        if (base) {
          desc = Object.getOwnPropertyDescriptor(base, property);

          if (desc.set) {
            desc.set.call(receiver, value);
            return true;
          } else if (!desc.writable) {
            return false;
          }
        }

        desc = Object.getOwnPropertyDescriptor(receiver, property);

        if (desc) {
          if (!desc.writable) {
            return false;
          }

          desc.value = value;
          Object.defineProperty(receiver, property, desc);
        } else {
          _defineProperty(receiver, property, value);
        }

        return true;
      };
    }

    return set(target, property, value, receiver);
  }

  function _set(target, property, value, receiver, isStrict) {
    var s = set(target, property, value, receiver || target);

    if (!s && isStrict) {
      throw new Error('failed to set property');
    }

    return value;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  /**
    Provides details of changing model value
    @param {Object} [details]
    @param {string} [details.inserted] - Inserted symbols
    @param {boolean} [details.skip] - Can skip chars
    @param {number} [details.removeCount] - Removed symbols count
    @param {number} [details.tailShift] - Additional offset if any changes occurred before tail
  */


  var ChangeDetails = /*#__PURE__*/function () {
    /** Inserted symbols */

    /** Can skip chars */

    /** Additional offset if any changes occurred before tail */

    /** Raw inserted is used by dynamic mask */
    function ChangeDetails(details) {
      _classCallCheck(this, ChangeDetails);

      Object.assign(this, {
        inserted: '',
        rawInserted: '',
        skip: false,
        tailShift: 0
      }, details);
    }
    /**
      Aggregate changes
      @returns {ChangeDetails} `this`
    */


    _createClass(ChangeDetails, [{
      key: "aggregate",
      value: function aggregate(details) {
        this.rawInserted += details.rawInserted;
        this.skip = this.skip || details.skip;
        this.inserted += details.inserted;
        this.tailShift += details.tailShift;
        return this;
      }
      /** Total offset considering all changes */

    }, {
      key: "offset",
      get: function get() {
        return this.tailShift + this.inserted.length;
      }
    }]);

    return ChangeDetails;
  }();
  /** Checks if value is string */


  function isString(str) {
    return typeof str === 'string' || str instanceof String;
  }
  /**
    Direction
    @prop {string} NONE
    @prop {string} LEFT
    @prop {string} FORCE_LEFT
    @prop {string} RIGHT
    @prop {string} FORCE_RIGHT
  */


  var DIRECTION = {
    NONE: 'NONE',
    LEFT: 'LEFT',
    FORCE_LEFT: 'FORCE_LEFT',
    RIGHT: 'RIGHT',
    FORCE_RIGHT: 'FORCE_RIGHT'
  };
  /** */

  function forceDirection(direction) {
    switch (direction) {
      case DIRECTION.LEFT:
        return DIRECTION.FORCE_LEFT;

      case DIRECTION.RIGHT:
        return DIRECTION.FORCE_RIGHT;

      default:
        return direction;
    }
  }
  /** Escapes regular expression control chars */


  function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
  }

  function normalizePrepare(prep) {
    return Array.isArray(prep) ? prep : [prep, new ChangeDetails()];
  } // cloned from https://github.com/epoberezkin/fast-deep-equal with small changes


  function objectIncludes(b, a) {
    if (a === b) return true;
    var arrA = Array.isArray(a),
        arrB = Array.isArray(b),
        i;

    if (arrA && arrB) {
      if (a.length != b.length) return false;

      for (i = 0; i < a.length; i++) {
        if (!objectIncludes(a[i], b[i])) return false;
      }

      return true;
    }

    if (arrA != arrB) return false;

    if (a && b && _typeof(a) === 'object' && _typeof(b) === 'object') {
      var dateA = a instanceof Date,
          dateB = b instanceof Date;
      if (dateA && dateB) return a.getTime() == b.getTime();
      if (dateA != dateB) return false;
      var regexpA = a instanceof RegExp,
          regexpB = b instanceof RegExp;
      if (regexpA && regexpB) return a.toString() == b.toString();
      if (regexpA != regexpB) return false;
      var keys = Object.keys(a); // if (keys.length !== Object.keys(b).length) return false;

      for (i = 0; i < keys.length; i++) {
        // $FlowFixMe ... ???
        if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
      }

      for (i = 0; i < keys.length; i++) {
        if (!objectIncludes(b[keys[i]], a[keys[i]])) return false;
      }

      return true;
    } else if (a && b && typeof a === 'function' && typeof b === 'function') {
      return a.toString() === b.toString();
    }

    return false;
  }
  /** Selection range */

  /** Provides details of changing input */


  var ActionDetails = /*#__PURE__*/function () {
    /** Current input value */

    /** Current cursor position */

    /** Old input value */

    /** Old selection */
    function ActionDetails(value, cursorPos, oldValue, oldSelection) {
      _classCallCheck(this, ActionDetails);

      this.value = value;
      this.cursorPos = cursorPos;
      this.oldValue = oldValue;
      this.oldSelection = oldSelection; // double check if left part was changed (autofilling, other non-standard input triggers)

      while (this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos)) {
        --this.oldSelection.start;
      }
    }
    /**
      Start changing position
      @readonly
    */


    _createClass(ActionDetails, [{
      key: "startChangePos",
      get: function get() {
        return Math.min(this.cursorPos, this.oldSelection.start);
      }
      /**
        Inserted symbols count
        @readonly
      */

    }, {
      key: "insertedCount",
      get: function get() {
        return this.cursorPos - this.startChangePos;
      }
      /**
        Inserted symbols
        @readonly
      */

    }, {
      key: "inserted",
      get: function get() {
        return this.value.substr(this.startChangePos, this.insertedCount);
      }
      /**
        Removed symbols count
        @readonly
      */

    }, {
      key: "removedCount",
      get: function get() {
        // Math.max for opposite operation
        return Math.max(this.oldSelection.end - this.startChangePos || // for Delete
        this.oldValue.length - this.value.length, 0);
      }
      /**
        Removed symbols
        @readonly
      */

    }, {
      key: "removed",
      get: function get() {
        return this.oldValue.substr(this.startChangePos, this.removedCount);
      }
      /**
        Unchanged head symbols
        @readonly
      */

    }, {
      key: "head",
      get: function get() {
        return this.value.substring(0, this.startChangePos);
      }
      /**
        Unchanged tail symbols
        @readonly
      */

    }, {
      key: "tail",
      get: function get() {
        return this.value.substring(this.startChangePos + this.insertedCount);
      }
      /**
        Remove direction
        @readonly
      */

    }, {
      key: "removeDirection",
      get: function get() {
        if (!this.removedCount || this.insertedCount) return DIRECTION.NONE; // align right if delete at right

        return (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && // if not range removed (event with backspace)
        this.oldSelection.end === this.oldSelection.start ? DIRECTION.RIGHT : DIRECTION.LEFT;
      }
    }]);

    return ActionDetails;
  }();
  /** Provides details of continuous extracted tail */


  var ContinuousTailDetails = /*#__PURE__*/function () {
    /** Tail value as string */

    /** Tail start position */

    /** Start position */
    function ContinuousTailDetails() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var stop = arguments.length > 2 ? arguments[2] : undefined;

      _classCallCheck(this, ContinuousTailDetails);

      this.value = value;
      this.from = from;
      this.stop = stop;
    }

    _createClass(ContinuousTailDetails, [{
      key: "toString",
      value: function toString() {
        return this.value;
      }
    }, {
      key: "extend",
      value: function extend(tail) {
        this.value += String(tail);
      }
    }, {
      key: "appendTo",
      value: function appendTo(masked) {
        return masked.append(this.toString(), {
          tail: true
        }).aggregate(masked._appendPlaceholder());
      }
    }, {
      key: "state",
      get: function get() {
        return {
          value: this.value,
          from: this.from,
          stop: this.stop
        };
      },
      set: function set(state) {
        Object.assign(this, state);
      }
    }, {
      key: "unshift",
      value: function unshift(beforePos) {
        if (!this.value.length || beforePos != null && this.from >= beforePos) return '';
        var shiftChar = this.value[0];
        this.value = this.value.slice(1);
        return shiftChar;
      }
    }, {
      key: "shift",
      value: function shift() {
        if (!this.value.length) return '';
        var shiftChar = this.value[this.value.length - 1];
        this.value = this.value.slice(0, -1);
        return shiftChar;
      }
    }]);

    return ContinuousTailDetails;
  }();
  /**
   * Applies mask on element.
   * @constructor
   * @param {HTMLInputElement|HTMLTextAreaElement|MaskElement} el - Element to apply mask
   * @param {Object} opts - Custom mask options
   * @return {InputMask}
   */


  function IMask(el) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; // currently available only for input-like elements

    return new IMask.InputMask(el, opts);
  }
  /** Supported mask type */

  /** Provides common masking stuff */


  var Masked = /*#__PURE__*/function () {
    // $Shape<MaskedOptions>; TODO after fix https://github.com/facebook/flow/issues/4773

    /** @type {Mask} */

    /** */
    // $FlowFixMe no ideas

    /** Transforms value before mask processing */

    /** Validates if value is acceptable */

    /** Does additional processing in the end of editing */

    /** Format typed value to string */

    /** Parse strgin to get typed value */

    /** Enable characters overwriting */

    /** */

    /** */
    function Masked(opts) {
      _classCallCheck(this, Masked);

      this._value = '';

      this._update(Object.assign({}, Masked.DEFAULTS, opts));

      this.isInitialized = true;
    }
    /** Sets and applies new options */


    _createClass(Masked, [{
      key: "updateOptions",
      value: function updateOptions(opts) {
        if (!Object.keys(opts).length) return; // $FlowFixMe

        this.withValueRefresh(this._update.bind(this, opts));
      }
      /**
        Sets new options
        @protected
      */

    }, {
      key: "_update",
      value: function _update(opts) {
        Object.assign(this, opts);
      }
      /** Mask state */

    }, {
      key: "state",
      get: function get() {
        return {
          _value: this.value
        };
      },
      set: function set(state) {
        this._value = state._value;
      }
      /** Resets value */

    }, {
      key: "reset",
      value: function reset() {
        this._value = '';
      }
      /** */

    }, {
      key: "value",
      get: function get() {
        return this._value;
      },
      set: function set(value) {
        this.resolve(value);
      }
      /** Resolve new value */

    }, {
      key: "resolve",
      value: function resolve(value) {
        this.reset();
        this.append(value, {
          input: true
        }, '');
        this.doCommit();
        return this.value;
      }
      /** */

    }, {
      key: "unmaskedValue",
      get: function get() {
        return this.value;
      },
      set: function set(value) {
        this.reset();
        this.append(value, {}, '');
        this.doCommit();
      }
      /** */

    }, {
      key: "typedValue",
      get: function get() {
        return this.doParse(this.value);
      },
      set: function set(value) {
        this.value = this.doFormat(value);
      }
      /** Value that includes raw user input */

    }, {
      key: "rawInputValue",
      get: function get() {
        return this.extractInput(0, this.value.length, {
          raw: true
        });
      },
      set: function set(value) {
        this.reset();
        this.append(value, {
          raw: true
        }, '');
        this.doCommit();
      }
      /** */

    }, {
      key: "isComplete",
      get: function get() {
        return true;
      }
      /** */

    }, {
      key: "isFilled",
      get: function get() {
        return this.isComplete;
      }
      /** Finds nearest input position in direction */

    }, {
      key: "nearestInputPos",
      value: function nearestInputPos(cursorPos, direction) {
        return cursorPos;
      }
      /** Extracts value in range considering flags */

    }, {
      key: "extractInput",
      value: function extractInput() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        return this.value.slice(fromPos, toPos);
      }
      /** Extracts tail in range */

    }, {
      key: "extractTail",
      value: function extractTail() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        return new ContinuousTailDetails(this.extractInput(fromPos, toPos), fromPos);
      }
      /** Appends tail */
      // $FlowFixMe no ideas

    }, {
      key: "appendTail",
      value: function appendTail(tail) {
        if (isString(tail)) tail = new ContinuousTailDetails(String(tail));
        return tail.appendTo(this);
      }
      /** Appends char */

    }, {
      key: "_appendCharRaw",
      value: function _appendCharRaw(ch) {
        if (!ch) return new ChangeDetails();
        this._value += ch;
        return new ChangeDetails({
          inserted: ch,
          rawInserted: ch
        });
      }
      /** Appends char */

    }, {
      key: "_appendChar",
      value: function _appendChar(ch) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var checkTail = arguments.length > 2 ? arguments[2] : undefined;
        var consistentState = this.state;
        var details;

        var _normalizePrepare = normalizePrepare(this.doPrepare(ch, flags));

        var _normalizePrepare2 = _slicedToArray(_normalizePrepare, 2);

        ch = _normalizePrepare2[0];
        details = _normalizePrepare2[1];
        details = details.aggregate(this._appendCharRaw(ch, flags));

        if (details.inserted) {
          var consistentTail;
          var appended = this.doValidate(flags) !== false;

          if (appended && checkTail != null) {
            // validation ok, check tail
            var beforeTailState = this.state;

            if (this.overwrite === true) {
              consistentTail = checkTail.state;
              checkTail.unshift(this.value.length);
            }

            var tailDetails = this.appendTail(checkTail);
            appended = tailDetails.rawInserted === checkTail.toString(); // not ok, try shift

            if (!(appended && tailDetails.inserted) && this.overwrite === 'shift') {
              this.state = beforeTailState;
              consistentTail = checkTail.state;
              checkTail.shift();
              tailDetails = this.appendTail(checkTail);
              appended = tailDetails.rawInserted === checkTail.toString();
            } // if ok, rollback state after tail


            if (appended && tailDetails.inserted) this.state = beforeTailState;
          } // revert all if something went wrong


          if (!appended) {
            details = new ChangeDetails();
            this.state = consistentState;
            if (checkTail && consistentTail) checkTail.state = consistentTail;
          }
        }

        return details;
      }
      /** Appends optional placeholder at end */

    }, {
      key: "_appendPlaceholder",
      value: function _appendPlaceholder() {
        return new ChangeDetails();
      }
      /** Appends optional eager placeholder at end */

    }, {
      key: "_appendEager",
      value: function _appendEager() {
        return new ChangeDetails();
      }
      /** Appends symbols considering flags */
      // $FlowFixMe no ideas

    }, {
      key: "append",
      value: function append(str, flags, tail) {
        if (!isString(str)) throw new Error('value should be string');
        var details = new ChangeDetails();
        var checkTail = isString(tail) ? new ContinuousTailDetails(String(tail)) : tail;
        if (flags !== null && flags !== void 0 && flags.tail) flags._beforeTailState = this.state;

        for (var ci = 0; ci < str.length; ++ci) {
          details.aggregate(this._appendChar(str[ci], flags, checkTail));
        } // append tail but aggregate only tailShift


        if (checkTail != null) {
          details.tailShift += this.appendTail(checkTail).tailShift; // TODO it's a good idea to clear state after appending ends
          // but it causes bugs when one append calls another (when dynamic dispatch set rawInputValue)
          // this._resetBeforeTailState();
        }

        if (this.eager && flags !== null && flags !== void 0 && flags.input && str) {
          details.aggregate(this._appendEager());
        }

        return details;
      }
      /** */

    }, {
      key: "remove",
      value: function remove() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        this._value = this.value.slice(0, fromPos) + this.value.slice(toPos);
        return new ChangeDetails();
      }
      /** Calls function and reapplies current value */

    }, {
      key: "withValueRefresh",
      value: function withValueRefresh(fn) {
        if (this._refreshing || !this.isInitialized) return fn();
        this._refreshing = true;
        var rawInput = this.rawInputValue;
        var value = this.value;
        var ret = fn();
        this.rawInputValue = rawInput; // append lost trailing chars at end

        if (this.value && this.value !== value && value.indexOf(this.value) === 0) {
          this.append(value.slice(this.value.length), {}, '');
        }

        delete this._refreshing;
        return ret;
      }
      /** */

    }, {
      key: "runIsolated",
      value: function runIsolated(fn) {
        if (this._isolated || !this.isInitialized) return fn(this);
        this._isolated = true;
        var state = this.state;
        var ret = fn(this);
        this.state = state;
        delete this._isolated;
        return ret;
      }
      /**
        Prepares string before mask processing
        @protected
      */

    }, {
      key: "doPrepare",
      value: function doPrepare(str) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return this.prepare ? this.prepare(str, this, flags) : str;
      }
      /**
        Validates if value is acceptable
        @protected
      */

    }, {
      key: "doValidate",
      value: function doValidate(flags) {
        return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
      }
      /**
        Does additional processing in the end of editing
        @protected
      */

    }, {
      key: "doCommit",
      value: function doCommit() {
        if (this.commit) this.commit(this.value, this);
      }
      /** */

    }, {
      key: "doFormat",
      value: function doFormat(value) {
        return this.format ? this.format(value, this) : value;
      }
      /** */

    }, {
      key: "doParse",
      value: function doParse(str) {
        return this.parse ? this.parse(str, this) : str;
      }
      /** */

    }, {
      key: "splice",
      value: function splice(start, deleteCount, inserted, removeDirection) {
        var flags = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
          input: true
        };
        var tailPos = start + deleteCount;
        var tail = this.extractTail(tailPos);
        var oldRawValue;

        if (this.eager) {
          removeDirection = forceDirection(removeDirection);
          oldRawValue = this.extractInput(0, tailPos, {
            raw: true
          });
        }

        var startChangePos = this.nearestInputPos(start, deleteCount > 1 && start !== 0 && !this.eager ? DIRECTION.NONE : removeDirection);
        var details = new ChangeDetails({
          tailShift: startChangePos - start // adjust tailShift if start was aligned

        }).aggregate(this.remove(startChangePos));

        if (this.eager && removeDirection !== DIRECTION.NONE && oldRawValue === this.rawInputValue) {
          if (removeDirection === DIRECTION.FORCE_LEFT) {
            var valLength;

            while (oldRawValue === this.rawInputValue && (valLength = this.value.length)) {
              details.aggregate(new ChangeDetails({
                tailShift: -1
              })).aggregate(this.remove(valLength - 1));
            }
          } else if (removeDirection === DIRECTION.FORCE_RIGHT) {
            tail.unshift();
          }
        }

        return details.aggregate(this.append(inserted, flags, tail));
      }
    }, {
      key: "maskEquals",
      value: function maskEquals(mask) {
        return this.mask === mask;
      }
    }, {
      key: "typedValueEquals",
      value: function typedValueEquals(value) {
        var tval = this.typedValue;
        return value === tval || Masked.EMPTY_VALUES.includes(value) && Masked.EMPTY_VALUES.includes(tval) || this.doFormat(value) === this.doFormat(this.typedValue);
      }
    }]);

    return Masked;
  }();

  Masked.DEFAULTS = {
    format: function format(v) {
      return v;
    },
    parse: function parse(v) {
      return v;
    }
  };
  Masked.EMPTY_VALUES = [undefined, null, ''];
  IMask.Masked = Masked;
  /** Get Masked class by mask type */

  function maskedClass(mask) {
    if (mask == null) {
      throw new Error('mask property should be defined');
    } // $FlowFixMe


    if (mask instanceof RegExp) return IMask.MaskedRegExp; // $FlowFixMe

    if (isString(mask)) return IMask.MaskedPattern; // $FlowFixMe

    if (mask instanceof Date || mask === Date) return IMask.MaskedDate; // $FlowFixMe

    if (mask instanceof Number || typeof mask === 'number' || mask === Number) return IMask.MaskedNumber; // $FlowFixMe

    if (Array.isArray(mask) || mask === Array) return IMask.MaskedDynamic; // $FlowFixMe

    if (IMask.Masked && mask.prototype instanceof IMask.Masked) return mask; // $FlowFixMe

    if (mask instanceof IMask.Masked) return mask.constructor; // $FlowFixMe

    if (mask instanceof Function) return IMask.MaskedFunction;
    console.warn('Mask not found for mask', mask); // eslint-disable-line no-console
    // $FlowFixMe

    return IMask.Masked;
  }
  /** Creates new {@link Masked} depending on mask type */


  function createMask(opts) {
    // $FlowFixMe
    if (IMask.Masked && opts instanceof IMask.Masked) return opts;
    opts = Object.assign({}, opts);
    var mask = opts.mask; // $FlowFixMe

    if (IMask.Masked && mask instanceof IMask.Masked) return mask;
    var MaskedClass = maskedClass(mask);
    if (!MaskedClass) throw new Error('Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.');
    return new MaskedClass(opts);
  }

  IMask.createMask = createMask;
  var _excluded$4 = ["mask"];
  var DEFAULT_INPUT_DEFINITIONS = {
    '0': /\d/,
    'a': /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
    // http://stackoverflow.com/a/22075070
    '*': /./
  };
  /** */

  var PatternInputDefinition = /*#__PURE__*/function () {
    /** */

    /** */

    /** */

    /** */

    /** */

    /** */

    /** */
    function PatternInputDefinition(opts) {
      _classCallCheck(this, PatternInputDefinition);

      var mask = opts.mask,
          blockOpts = _objectWithoutProperties(opts, _excluded$4);

      this.masked = createMask({
        mask: mask
      });
      Object.assign(this, blockOpts);
    }

    _createClass(PatternInputDefinition, [{
      key: "reset",
      value: function reset() {
        this.isFilled = false;
        this.masked.reset();
      }
    }, {
      key: "remove",
      value: function remove() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

        if (fromPos === 0 && toPos >= 1) {
          this.isFilled = false;
          return this.masked.remove(fromPos, toPos);
        }

        return new ChangeDetails();
      }
    }, {
      key: "value",
      get: function get() {
        return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : '');
      }
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this.masked.unmaskedValue;
      }
    }, {
      key: "isComplete",
      get: function get() {
        return Boolean(this.masked.value) || this.isOptional;
      }
    }, {
      key: "_appendChar",
      value: function _appendChar(ch) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (this.isFilled) return new ChangeDetails();
        var state = this.masked.state; // simulate input

        var details = this.masked._appendChar(ch, flags);

        if (details.inserted && this.doValidate(flags) === false) {
          details.inserted = details.rawInserted = '';
          this.masked.state = state;
        }

        if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) {
          details.inserted = this.placeholderChar;
        }

        details.skip = !details.inserted && !this.isOptional;
        this.isFilled = Boolean(details.inserted);
        return details;
      }
    }, {
      key: "append",
      value: function append() {
        var _this$masked; // TODO probably should be done via _appendChar


        return (_this$masked = this.masked).append.apply(_this$masked, arguments);
      }
    }, {
      key: "_appendPlaceholder",
      value: function _appendPlaceholder() {
        var details = new ChangeDetails();
        if (this.isFilled || this.isOptional) return details;
        this.isFilled = true;
        details.inserted = this.placeholderChar;
        return details;
      }
    }, {
      key: "_appendEager",
      value: function _appendEager() {
        return new ChangeDetails();
      }
    }, {
      key: "extractTail",
      value: function extractTail() {
        var _this$masked2;

        return (_this$masked2 = this.masked).extractTail.apply(_this$masked2, arguments);
      }
    }, {
      key: "appendTail",
      value: function appendTail() {
        var _this$masked3;

        return (_this$masked3 = this.masked).appendTail.apply(_this$masked3, arguments);
      }
    }, {
      key: "extractInput",
      value: function extractInput() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        var flags = arguments.length > 2 ? arguments[2] : undefined;
        return this.masked.extractInput(fromPos, toPos, flags);
      }
    }, {
      key: "nearestInputPos",
      value: function nearestInputPos(cursorPos) {
        var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
        var minPos = 0;
        var maxPos = this.value.length;
        var boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);

        switch (direction) {
          case DIRECTION.LEFT:
          case DIRECTION.FORCE_LEFT:
            return this.isComplete ? boundPos : minPos;

          case DIRECTION.RIGHT:
          case DIRECTION.FORCE_RIGHT:
            return this.isComplete ? boundPos : maxPos;

          case DIRECTION.NONE:
          default:
            return boundPos;
        }
      }
    }, {
      key: "doValidate",
      value: function doValidate() {
        var _this$masked4, _this$parent;

        return (_this$masked4 = this.masked).doValidate.apply(_this$masked4, arguments) && (!this.parent || (_this$parent = this.parent).doValidate.apply(_this$parent, arguments));
      }
    }, {
      key: "doCommit",
      value: function doCommit() {
        this.masked.doCommit();
      }
    }, {
      key: "state",
      get: function get() {
        return {
          masked: this.masked.state,
          isFilled: this.isFilled
        };
      },
      set: function set(state) {
        this.masked.state = state.masked;
        this.isFilled = state.isFilled;
      }
    }]);

    return PatternInputDefinition;
  }();

  var PatternFixedDefinition = /*#__PURE__*/function () {
    /** */

    /** */

    /** */

    /** */

    /** */

    /** */
    function PatternFixedDefinition(opts) {
      _classCallCheck(this, PatternFixedDefinition);

      Object.assign(this, opts);
      this._value = '';
      this.isFixed = true;
    }

    _createClass(PatternFixedDefinition, [{
      key: "value",
      get: function get() {
        return this._value;
      }
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this.isUnmasking ? this.value : '';
      }
    }, {
      key: "reset",
      value: function reset() {
        this._isRawInput = false;
        this._value = '';
      }
    }, {
      key: "remove",
      value: function remove() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
        this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
        if (!this._value) this._isRawInput = false;
        return new ChangeDetails();
      }
    }, {
      key: "nearestInputPos",
      value: function nearestInputPos(cursorPos) {
        var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
        var minPos = 0;
        var maxPos = this._value.length;

        switch (direction) {
          case DIRECTION.LEFT:
          case DIRECTION.FORCE_LEFT:
            return minPos;

          case DIRECTION.NONE:
          case DIRECTION.RIGHT:
          case DIRECTION.FORCE_RIGHT:
          default:
            return maxPos;
        }
      }
    }, {
      key: "extractInput",
      value: function extractInput() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
        var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return flags.raw && this._isRawInput && this._value.slice(fromPos, toPos) || '';
      }
    }, {
      key: "isComplete",
      get: function get() {
        return true;
      }
    }, {
      key: "isFilled",
      get: function get() {
        return Boolean(this._value);
      }
    }, {
      key: "_appendChar",
      value: function _appendChar(ch) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var details = new ChangeDetails();
        if (this._value) return details;
        var appended = this["char"] === ch;
        var isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && (!flags.raw || !this.eager) && !flags.tail;
        if (isResolved) details.rawInserted = this["char"];
        this._value = details.inserted = this["char"];
        this._isRawInput = isResolved && (flags.raw || flags.input);
        return details;
      }
    }, {
      key: "_appendEager",
      value: function _appendEager() {
        return this._appendChar(this["char"], {
          tail: true
        });
      }
    }, {
      key: "_appendPlaceholder",
      value: function _appendPlaceholder() {
        var details = new ChangeDetails();
        if (this._value) return details;
        this._value = details.inserted = this["char"];
        return details;
      }
    }, {
      key: "extractTail",
      value: function extractTail() {
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        return new ContinuousTailDetails('');
      } // $FlowFixMe no ideas

    }, {
      key: "appendTail",
      value: function appendTail(tail) {
        if (isString(tail)) tail = new ContinuousTailDetails(String(tail));
        return tail.appendTo(this);
      }
    }, {
      key: "append",
      value: function append(str, flags, tail) {
        var details = this._appendChar(str[0], flags);

        if (tail != null) {
          details.tailShift += this.appendTail(tail).tailShift;
        }

        return details;
      }
    }, {
      key: "doCommit",
      value: function doCommit() {}
    }, {
      key: "state",
      get: function get() {
        return {
          _value: this._value,
          _isRawInput: this._isRawInput
        };
      },
      set: function set(state) {
        Object.assign(this, state);
      }
    }]);

    return PatternFixedDefinition;
  }();

  var _excluded$3 = ["chunks"];

  var ChunksTailDetails = /*#__PURE__*/function () {
    /** */
    function ChunksTailDetails() {
      var chunks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      _classCallCheck(this, ChunksTailDetails);

      this.chunks = chunks;
      this.from = from;
    }

    _createClass(ChunksTailDetails, [{
      key: "toString",
      value: function toString() {
        return this.chunks.map(String).join('');
      } // $FlowFixMe no ideas

    }, {
      key: "extend",
      value: function extend(tailChunk) {
        if (!String(tailChunk)) return;
        if (isString(tailChunk)) tailChunk = new ContinuousTailDetails(String(tailChunk));
        var lastChunk = this.chunks[this.chunks.length - 1];
        var extendLast = lastChunk && ( // if stops are same or tail has no stop
        lastChunk.stop === tailChunk.stop || tailChunk.stop == null) && // if tail chunk goes just after last chunk
        tailChunk.from === lastChunk.from + lastChunk.toString().length;

        if (tailChunk instanceof ContinuousTailDetails) {
          // check the ability to extend previous chunk
          if (extendLast) {
            // extend previous chunk
            lastChunk.extend(tailChunk.toString());
          } else {
            // append new chunk
            this.chunks.push(tailChunk);
          }
        } else if (tailChunk instanceof ChunksTailDetails) {
          if (tailChunk.stop == null) {
            // unwrap floating chunks to parent, keeping `from` pos
            var firstTailChunk;

            while (tailChunk.chunks.length && tailChunk.chunks[0].stop == null) {
              firstTailChunk = tailChunk.chunks.shift();
              firstTailChunk.from += tailChunk.from;
              this.extend(firstTailChunk);
            }
          } // if tail chunk still has value


          if (tailChunk.toString()) {
            // if chunks contains stops, then popup stop to container
            tailChunk.stop = tailChunk.blockIndex;
            this.chunks.push(tailChunk);
          }
        }
      }
    }, {
      key: "appendTo",
      value: function appendTo(masked) {
        // $FlowFixMe
        if (!(masked instanceof IMask.MaskedPattern)) {
          var tail = new ContinuousTailDetails(this.toString());
          return tail.appendTo(masked);
        }

        var details = new ChangeDetails();

        for (var ci = 0; ci < this.chunks.length && !details.skip; ++ci) {
          var chunk = this.chunks[ci];

          var lastBlockIter = masked._mapPosToBlock(masked.value.length);

          var stop = chunk.stop;
          var chunkBlock = void 0;

          if (stop != null && ( // if block not found or stop is behind lastBlock
          !lastBlockIter || lastBlockIter.index <= stop)) {
            if (chunk instanceof ChunksTailDetails || // for continuous block also check if stop is exist
            masked._stops.indexOf(stop) >= 0) {
              details.aggregate(masked._appendPlaceholder(stop));
            }

            chunkBlock = chunk instanceof ChunksTailDetails && masked._blocks[stop];
          }

          if (chunkBlock) {
            var tailDetails = chunkBlock.appendTail(chunk);
            tailDetails.skip = false; // always ignore skip, it will be set on last

            details.aggregate(tailDetails);
            masked._value += tailDetails.inserted; // get not inserted chars

            var remainChars = chunk.toString().slice(tailDetails.rawInserted.length);
            if (remainChars) details.aggregate(masked.append(remainChars, {
              tail: true
            }));
          } else {
            details.aggregate(masked.append(chunk.toString(), {
              tail: true
            }));
          }
        }

        return details;
      }
    }, {
      key: "state",
      get: function get() {
        return {
          chunks: this.chunks.map(function (c) {
            return c.state;
          }),
          from: this.from,
          stop: this.stop,
          blockIndex: this.blockIndex
        };
      },
      set: function set(state) {
        var chunks = state.chunks,
            props = _objectWithoutProperties(state, _excluded$3);

        Object.assign(this, props);
        this.chunks = chunks.map(function (cstate) {
          var chunk = "chunks" in cstate ? new ChunksTailDetails() : new ContinuousTailDetails(); // $FlowFixMe already checked above

          chunk.state = cstate;
          return chunk;
        });
      }
    }, {
      key: "unshift",
      value: function unshift(beforePos) {
        if (!this.chunks.length || beforePos != null && this.from >= beforePos) return '';
        var chunkShiftPos = beforePos != null ? beforePos - this.from : beforePos;
        var ci = 0;

        while (ci < this.chunks.length) {
          var chunk = this.chunks[ci];
          var shiftChar = chunk.unshift(chunkShiftPos);

          if (chunk.toString()) {
            // chunk still contains value
            // but not shifted - means no more available chars to shift
            if (!shiftChar) break;
            ++ci;
          } else {
            // clean if chunk has no value
            this.chunks.splice(ci, 1);
          }

          if (shiftChar) return shiftChar;
        }

        return '';
      }
    }, {
      key: "shift",
      value: function shift() {
        if (!this.chunks.length) return '';
        var ci = this.chunks.length - 1;

        while (0 <= ci) {
          var chunk = this.chunks[ci];
          var shiftChar = chunk.shift();

          if (chunk.toString()) {
            // chunk still contains value
            // but not shifted - means no more available chars to shift
            if (!shiftChar) break;
            --ci;
          } else {
            // clean if chunk has no value
            this.chunks.splice(ci, 1);
          }

          if (shiftChar) return shiftChar;
        }

        return '';
      }
    }]);

    return ChunksTailDetails;
  }();

  var PatternCursor = /*#__PURE__*/function () {
    function PatternCursor(masked, pos) {
      _classCallCheck(this, PatternCursor);

      this.masked = masked;
      this._log = [];

      var _ref = masked._mapPosToBlock(pos) || (pos < 0 ? // first
      {
        index: 0,
        offset: 0
      } : // last
      {
        index: this.masked._blocks.length,
        offset: 0
      }),
          offset = _ref.offset,
          index = _ref.index;

      this.offset = offset;
      this.index = index;
      this.ok = false;
    }

    _createClass(PatternCursor, [{
      key: "block",
      get: function get() {
        return this.masked._blocks[this.index];
      }
    }, {
      key: "pos",
      get: function get() {
        return this.masked._blockStartPos(this.index) + this.offset;
      }
    }, {
      key: "state",
      get: function get() {
        return {
          index: this.index,
          offset: this.offset,
          ok: this.ok
        };
      },
      set: function set(s) {
        Object.assign(this, s);
      }
    }, {
      key: "pushState",
      value: function pushState() {
        this._log.push(this.state);
      }
    }, {
      key: "popState",
      value: function popState() {
        var s = this._log.pop();

        this.state = s;
        return s;
      }
    }, {
      key: "bindBlock",
      value: function bindBlock() {
        if (this.block) return;

        if (this.index < 0) {
          this.index = 0;
          this.offset = 0;
        }

        if (this.index >= this.masked._blocks.length) {
          this.index = this.masked._blocks.length - 1;
          this.offset = this.block.value.length;
        }
      }
    }, {
      key: "_pushLeft",
      value: function _pushLeft(fn) {
        this.pushState();

        for (this.bindBlock(); 0 <= this.index; --this.index, this.offset = ((_this$block = this.block) === null || _this$block === void 0 ? void 0 : _this$block.value.length) || 0) {
          var _this$block;

          if (fn()) return this.ok = true;
        }

        return this.ok = false;
      }
    }, {
      key: "_pushRight",
      value: function _pushRight(fn) {
        this.pushState();

        for (this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0) {
          if (fn()) return this.ok = true;
        }

        return this.ok = false;
      }
    }, {
      key: "pushLeftBeforeFilled",
      value: function pushLeftBeforeFilled() {
        var _this = this;

        return this._pushLeft(function () {
          if (_this.block.isFixed || !_this.block.value) return;
          _this.offset = _this.block.nearestInputPos(_this.offset, DIRECTION.FORCE_LEFT);
          if (_this.offset !== 0) return true;
        });
      }
    }, {
      key: "pushLeftBeforeInput",
      value: function pushLeftBeforeInput() {
        var _this2 = this; // cases:
        // filled input: 00|
        // optional empty input: 00[]|
        // nested block: XX<[]>|


        return this._pushLeft(function () {
          if (_this2.block.isFixed) return;
          _this2.offset = _this2.block.nearestInputPos(_this2.offset, DIRECTION.LEFT);
          return true;
        });
      }
    }, {
      key: "pushLeftBeforeRequired",
      value: function pushLeftBeforeRequired() {
        var _this3 = this;

        return this._pushLeft(function () {
          if (_this3.block.isFixed || _this3.block.isOptional && !_this3.block.value) return;
          _this3.offset = _this3.block.nearestInputPos(_this3.offset, DIRECTION.LEFT);
          return true;
        });
      }
    }, {
      key: "pushRightBeforeFilled",
      value: function pushRightBeforeFilled() {
        var _this4 = this;

        return this._pushRight(function () {
          if (_this4.block.isFixed || !_this4.block.value) return;
          _this4.offset = _this4.block.nearestInputPos(_this4.offset, DIRECTION.FORCE_RIGHT);
          if (_this4.offset !== _this4.block.value.length) return true;
        });
      }
    }, {
      key: "pushRightBeforeInput",
      value: function pushRightBeforeInput() {
        var _this5 = this;

        return this._pushRight(function () {
          if (_this5.block.isFixed) return; // const o = this.offset;

          _this5.offset = _this5.block.nearestInputPos(_this5.offset, DIRECTION.NONE); // HACK cases like (STILL DOES NOT WORK FOR NESTED)
          // aa|X
          // aa<X|[]>X_    - this will not work
          // if (o && o === this.offset && this.block instanceof PatternInputDefinition) continue;

          return true;
        });
      }
    }, {
      key: "pushRightBeforeRequired",
      value: function pushRightBeforeRequired() {
        var _this6 = this;

        return this._pushRight(function () {
          if (_this6.block.isFixed || _this6.block.isOptional && !_this6.block.value) return; // TODO check |[*]XX_

          _this6.offset = _this6.block.nearestInputPos(_this6.offset, DIRECTION.NONE);
          return true;
        });
      }
    }]);

    return PatternCursor;
  }();
  /** Masking by RegExp */


  var MaskedRegExp = /*#__PURE__*/function (_Masked) {
    _inherits(MaskedRegExp, _Masked);

    var _super = _createSuper(MaskedRegExp);

    function MaskedRegExp() {
      _classCallCheck(this, MaskedRegExp);

      return _super.apply(this, arguments);
    }

    _createClass(MaskedRegExp, [{
      key: "_update",
      value:
      /**
        @override
        @param {Object} opts
      */
      function _update(opts) {
        if (opts.mask) opts.validate = function (value) {
          return value.search(opts.mask) >= 0;
        };

        _get(_getPrototypeOf(MaskedRegExp.prototype), "_update", this).call(this, opts);
      }
    }]);

    return MaskedRegExp;
  }(Masked);

  IMask.MaskedRegExp = MaskedRegExp;
  var _excluded$2 = ["_blocks"];
  /**
    Pattern mask
    @param {Object} opts
    @param {Object} opts.blocks
    @param {Object} opts.definitions
    @param {string} opts.placeholderChar
    @param {boolean} opts.lazy
  */

  var MaskedPattern = /*#__PURE__*/function (_Masked) {
    _inherits(MaskedPattern, _Masked);

    var _super = _createSuper(MaskedPattern);
    /** */

    /** */

    /** Single char for empty input */

    /** Show placeholder only when needed */


    function MaskedPattern() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, MaskedPattern); // TODO type $Shape<MaskedPatternOptions>={} does not work


      opts.definitions = Object.assign({}, DEFAULT_INPUT_DEFINITIONS, opts.definitions);
      return _super.call(this, Object.assign({}, MaskedPattern.DEFAULTS, opts));
    }
    /**
      @override
      @param {Object} opts
    */


    _createClass(MaskedPattern, [{
      key: "_update",
      value: function _update() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        opts.definitions = Object.assign({}, this.definitions, opts.definitions);

        _get(_getPrototypeOf(MaskedPattern.prototype), "_update", this).call(this, opts);

        this._rebuildMask();
      }
      /** */

    }, {
      key: "_rebuildMask",
      value: function _rebuildMask() {
        var _this = this;

        var defs = this.definitions;
        this._blocks = [];
        this._stops = [];
        this._maskedBlocks = {};
        var pattern = this.mask;
        if (!pattern || !defs) return;
        var unmaskingBlock = false;
        var optionalBlock = false;

        for (var i = 0; i < pattern.length; ++i) {
          if (this.blocks) {
            var _ret = function () {
              var p = pattern.slice(i);
              var bNames = Object.keys(_this.blocks).filter(function (bName) {
                return p.indexOf(bName) === 0;
              }); // order by key length

              bNames.sort(function (a, b) {
                return b.length - a.length;
              }); // use block name with max length

              var bName = bNames[0];

              if (bName) {
                // $FlowFixMe no ideas
                var maskedBlock = createMask(Object.assign({
                  parent: _this,
                  lazy: _this.lazy,
                  eager: _this.eager,
                  placeholderChar: _this.placeholderChar,
                  overwrite: _this.overwrite
                }, _this.blocks[bName]));

                if (maskedBlock) {
                  _this._blocks.push(maskedBlock); // store block index


                  if (!_this._maskedBlocks[bName]) _this._maskedBlocks[bName] = [];

                  _this._maskedBlocks[bName].push(_this._blocks.length - 1);
                }

                i += bName.length - 1;
                return "continue";
              }
            }();

            if (_ret === "continue") continue;
          }

          var _char = pattern[i];
          var isInput = (_char in defs);

          if (_char === MaskedPattern.STOP_CHAR) {
            this._stops.push(this._blocks.length);

            continue;
          }

          if (_char === '{' || _char === '}') {
            unmaskingBlock = !unmaskingBlock;
            continue;
          }

          if (_char === '[' || _char === ']') {
            optionalBlock = !optionalBlock;
            continue;
          }

          if (_char === MaskedPattern.ESCAPE_CHAR) {
            ++i;
            _char = pattern[i];
            if (!_char) break;
            isInput = false;
          }

          var def = isInput ? new PatternInputDefinition({
            parent: this,
            lazy: this.lazy,
            eager: this.eager,
            placeholderChar: this.placeholderChar,
            mask: defs[_char],
            isOptional: optionalBlock
          }) : new PatternFixedDefinition({
            "char": _char,
            eager: this.eager,
            isUnmasking: unmaskingBlock
          });

          this._blocks.push(def);
        }
      }
      /**
        @override
      */

    }, {
      key: "state",
      get: function get() {
        return Object.assign({}, _get(_getPrototypeOf(MaskedPattern.prototype), "state", this), {
          _blocks: this._blocks.map(function (b) {
            return b.state;
          })
        });
      },
      set: function set(state) {
        var _blocks = state._blocks,
            maskedState = _objectWithoutProperties(state, _excluded$2);

        this._blocks.forEach(function (b, bi) {
          return b.state = _blocks[bi];
        });

        _set(_getPrototypeOf(MaskedPattern.prototype), "state", maskedState, this, true);
      }
      /**
        @override
      */

    }, {
      key: "reset",
      value: function reset() {
        _get(_getPrototypeOf(MaskedPattern.prototype), "reset", this).call(this);

        this._blocks.forEach(function (b) {
          return b.reset();
        });
      }
      /**
        @override
      */

    }, {
      key: "isComplete",
      get: function get() {
        return this._blocks.every(function (b) {
          return b.isComplete;
        });
      }
      /**
        @override
      */

    }, {
      key: "isFilled",
      get: function get() {
        return this._blocks.every(function (b) {
          return b.isFilled;
        });
      }
    }, {
      key: "isFixed",
      get: function get() {
        return this._blocks.every(function (b) {
          return b.isFixed;
        });
      }
    }, {
      key: "isOptional",
      get: function get() {
        return this._blocks.every(function (b) {
          return b.isOptional;
        });
      }
      /**
        @override
      */

    }, {
      key: "doCommit",
      value: function doCommit() {
        this._blocks.forEach(function (b) {
          return b.doCommit();
        });

        _get(_getPrototypeOf(MaskedPattern.prototype), "doCommit", this).call(this);
      }
      /**
        @override
      */

    }, {
      key: "unmaskedValue",
      get: function get() {
        return this._blocks.reduce(function (str, b) {
          return str += b.unmaskedValue;
        }, '');
      },
      set: function set(unmaskedValue) {
        _set(_getPrototypeOf(MaskedPattern.prototype), "unmaskedValue", unmaskedValue, this, true);
      }
      /**
        @override
      */

    }, {
      key: "value",
      get: function get() {
        // TODO return _value when not in change?
        return this._blocks.reduce(function (str, b) {
          return str += b.value;
        }, '');
      },
      set: function set(value) {
        _set(_getPrototypeOf(MaskedPattern.prototype), "value", value, this, true);
      }
      /**
        @override
      */

    }, {
      key: "appendTail",
      value: function appendTail(tail) {
        return _get(_getPrototypeOf(MaskedPattern.prototype), "appendTail", this).call(this, tail).aggregate(this._appendPlaceholder());
      }
      /**
        @override
      */

    }, {
      key: "_appendEager",
      value: function _appendEager() {
        var _this$_mapPosToBlock;

        var details = new ChangeDetails();
        var startBlockIndex = (_this$_mapPosToBlock = this._mapPosToBlock(this.value.length)) === null || _this$_mapPosToBlock === void 0 ? void 0 : _this$_mapPosToBlock.index;
        if (startBlockIndex == null) return details; // TODO test if it works for nested pattern masks

        if (this._blocks[startBlockIndex].isFilled) ++startBlockIndex;

        for (var bi = startBlockIndex; bi < this._blocks.length; ++bi) {
          var d = this._blocks[bi]._appendEager();

          if (!d.inserted) break;
          details.aggregate(d);
        }

        return details;
      }
      /**
        @override
      */

    }, {
      key: "_appendCharRaw",
      value: function _appendCharRaw(ch) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var blockIter = this._mapPosToBlock(this.value.length);

        var details = new ChangeDetails();
        if (!blockIter) return details;

        for (var bi = blockIter.index;; ++bi) {
          var _flags$_beforeTailSta, _flags$_beforeTailSta2;

          var _block = this._blocks[bi];
          if (!_block) break;

          var blockDetails = _block._appendChar(ch, Object.assign({}, flags, {
            _beforeTailState: (_flags$_beforeTailSta = flags._beforeTailState) === null || _flags$_beforeTailSta === void 0 ? void 0 : (_flags$_beforeTailSta2 = _flags$_beforeTailSta._blocks) === null || _flags$_beforeTailSta2 === void 0 ? void 0 : _flags$_beforeTailSta2[bi]
          }));

          var skip = blockDetails.skip;
          details.aggregate(blockDetails);
          if (skip || blockDetails.rawInserted) break; // go next char
        }

        return details;
      }
      /**
        @override
      */

    }, {
      key: "extractTail",
      value: function extractTail() {
        var _this2 = this;

        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        var chunkTail = new ChunksTailDetails();
        if (fromPos === toPos) return chunkTail;

        this._forEachBlocksInRange(fromPos, toPos, function (b, bi, bFromPos, bToPos) {
          var blockChunk = b.extractTail(bFromPos, bToPos);
          blockChunk.stop = _this2._findStopBefore(bi);
          blockChunk.from = _this2._blockStartPos(bi);
          if (blockChunk instanceof ChunksTailDetails) blockChunk.blockIndex = bi;
          chunkTail.extend(blockChunk);
        });

        return chunkTail;
      }
      /**
        @override
      */

    }, {
      key: "extractInput",
      value: function extractInput() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        if (fromPos === toPos) return '';
        var input = '';

        this._forEachBlocksInRange(fromPos, toPos, function (b, _, fromPos, toPos) {
          input += b.extractInput(fromPos, toPos, flags);
        });

        return input;
      }
    }, {
      key: "_findStopBefore",
      value: function _findStopBefore(blockIndex) {
        var stopBefore;

        for (var si = 0; si < this._stops.length; ++si) {
          var stop = this._stops[si];
          if (stop <= blockIndex) stopBefore = stop;else break;
        }

        return stopBefore;
      }
      /** Appends placeholder depending on laziness */

    }, {
      key: "_appendPlaceholder",
      value: function _appendPlaceholder(toBlockIndex) {
        var _this3 = this;

        var details = new ChangeDetails();
        if (this.lazy && toBlockIndex == null) return details;

        var startBlockIter = this._mapPosToBlock(this.value.length);

        if (!startBlockIter) return details;
        var startBlockIndex = startBlockIter.index;
        var endBlockIndex = toBlockIndex != null ? toBlockIndex : this._blocks.length;

        this._blocks.slice(startBlockIndex, endBlockIndex).forEach(function (b) {
          if (!b.lazy || toBlockIndex != null) {
            // $FlowFixMe `_blocks` may not be present
            var args = b._blocks != null ? [b._blocks.length] : [];

            var bDetails = b._appendPlaceholder.apply(b, args);

            _this3._value += bDetails.inserted;
            details.aggregate(bDetails);
          }
        });

        return details;
      }
      /** Finds block in pos */

    }, {
      key: "_mapPosToBlock",
      value: function _mapPosToBlock(pos) {
        var accVal = '';

        for (var bi = 0; bi < this._blocks.length; ++bi) {
          var _block2 = this._blocks[bi];
          var blockStartPos = accVal.length;
          accVal += _block2.value;

          if (pos <= accVal.length) {
            return {
              index: bi,
              offset: pos - blockStartPos
            };
          }
        }
      }
      /** */

    }, {
      key: "_blockStartPos",
      value: function _blockStartPos(blockIndex) {
        return this._blocks.slice(0, blockIndex).reduce(function (pos, b) {
          return pos += b.value.length;
        }, 0);
      }
      /** */

    }, {
      key: "_forEachBlocksInRange",
      value: function _forEachBlocksInRange(fromPos) {
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        var fn = arguments.length > 2 ? arguments[2] : undefined;

        var fromBlockIter = this._mapPosToBlock(fromPos);

        if (fromBlockIter) {
          var toBlockIter = this._mapPosToBlock(toPos); // process first block


          var isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index;
          var fromBlockStartPos = fromBlockIter.offset;
          var fromBlockEndPos = toBlockIter && isSameBlock ? toBlockIter.offset : this._blocks[fromBlockIter.index].value.length;
          fn(this._blocks[fromBlockIter.index], fromBlockIter.index, fromBlockStartPos, fromBlockEndPos);

          if (toBlockIter && !isSameBlock) {
            // process intermediate blocks
            for (var bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi) {
              fn(this._blocks[bi], bi, 0, this._blocks[bi].value.length);
            } // process last block


            fn(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset);
          }
        }
      }
      /**
        @override
      */

    }, {
      key: "remove",
      value: function remove() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

        var removeDetails = _get(_getPrototypeOf(MaskedPattern.prototype), "remove", this).call(this, fromPos, toPos);

        this._forEachBlocksInRange(fromPos, toPos, function (b, _, bFromPos, bToPos) {
          removeDetails.aggregate(b.remove(bFromPos, bToPos));
        });

        return removeDetails;
      }
      /**
        @override
      */

    }, {
      key: "nearestInputPos",
      value: function nearestInputPos(cursorPos) {
        var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
        if (!this._blocks.length) return 0;
        var cursor = new PatternCursor(this, cursorPos);

        if (direction === DIRECTION.NONE) {
          // -------------------------------------------------
          // NONE should only go out from fixed to the right!
          // -------------------------------------------------
          if (cursor.pushRightBeforeInput()) return cursor.pos;
          cursor.popState();
          if (cursor.pushLeftBeforeInput()) return cursor.pos;
          return this.value.length;
        } // FORCE is only about a|* otherwise is 0


        if (direction === DIRECTION.LEFT || direction === DIRECTION.FORCE_LEFT) {
          // try to break fast when *|a
          if (direction === DIRECTION.LEFT) {
            cursor.pushRightBeforeFilled();
            if (cursor.ok && cursor.pos === cursorPos) return cursorPos;
            cursor.popState();
          } // forward flow


          cursor.pushLeftBeforeInput();
          cursor.pushLeftBeforeRequired();
          cursor.pushLeftBeforeFilled(); // backward flow

          if (direction === DIRECTION.LEFT) {
            cursor.pushRightBeforeInput();
            cursor.pushRightBeforeRequired();
            if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
            cursor.popState();
            if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
            cursor.popState();
          }

          if (cursor.ok) return cursor.pos;
          if (direction === DIRECTION.FORCE_LEFT) return 0;
          cursor.popState();
          if (cursor.ok) return cursor.pos;
          cursor.popState();
          if (cursor.ok) return cursor.pos; // cursor.popState();
          // if (
          //   cursor.pushRightBeforeInput() &&
          //   // TODO HACK for lazy if has aligned left inside fixed and has came to the start - use start position
          //   (!this.lazy || this.extractInput())
          // ) return cursor.pos;

          return 0;
        }

        if (direction === DIRECTION.RIGHT || direction === DIRECTION.FORCE_RIGHT) {
          // forward flow
          cursor.pushRightBeforeInput();
          cursor.pushRightBeforeRequired();
          if (cursor.pushRightBeforeFilled()) return cursor.pos;
          if (direction === DIRECTION.FORCE_RIGHT) return this.value.length; // backward flow

          cursor.popState();
          if (cursor.ok) return cursor.pos;
          cursor.popState();
          if (cursor.ok) return cursor.pos;
          return this.nearestInputPos(cursorPos, DIRECTION.LEFT);
        }

        return cursorPos;
      }
      /** Get block by name */

    }, {
      key: "maskedBlock",
      value: function maskedBlock(name) {
        return this.maskedBlocks(name)[0];
      }
      /** Get all blocks by name */

    }, {
      key: "maskedBlocks",
      value: function maskedBlocks(name) {
        var _this4 = this;

        var indices = this._maskedBlocks[name];
        if (!indices) return [];
        return indices.map(function (gi) {
          return _this4._blocks[gi];
        });
      }
    }]);

    return MaskedPattern;
  }(Masked);

  MaskedPattern.DEFAULTS = {
    lazy: true,
    placeholderChar: '_'
  };
  MaskedPattern.STOP_CHAR = '`';
  MaskedPattern.ESCAPE_CHAR = '\\';
  MaskedPattern.InputDefinition = PatternInputDefinition;
  MaskedPattern.FixedDefinition = PatternFixedDefinition;
  IMask.MaskedPattern = MaskedPattern;
  /** Pattern which accepts ranges */

  var MaskedRange = /*#__PURE__*/function (_MaskedPattern) {
    _inherits(MaskedRange, _MaskedPattern);

    var _super = _createSuper(MaskedRange);

    function MaskedRange() {
      _classCallCheck(this, MaskedRange);

      return _super.apply(this, arguments);
    }

    _createClass(MaskedRange, [{
      key: "_matchFrom",
      get:
      /**
        Optionally sets max length of pattern.
        Used when pattern length is longer then `to` param length. Pads zeros at start in this case.
      */

      /** Min bound */

      /** Max bound */

      /** */
      function get() {
        return this.maxLength - String(this.from).length;
      }
      /**
        @override
      */

    }, {
      key: "_update",
      value: function _update(opts) {
        // TODO type
        opts = Object.assign({
          to: this.to || 0,
          from: this.from || 0,
          maxLength: this.maxLength || 0
        }, opts);
        var maxLength = String(opts.to).length;
        if (opts.maxLength != null) maxLength = Math.max(maxLength, opts.maxLength);
        opts.maxLength = maxLength;
        var fromStr = String(opts.from).padStart(maxLength, '0');
        var toStr = String(opts.to).padStart(maxLength, '0');
        var sameCharsCount = 0;

        while (sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount]) {
          ++sameCharsCount;
        }

        opts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, '\\0') + '0'.repeat(maxLength - sameCharsCount);

        _get(_getPrototypeOf(MaskedRange.prototype), "_update", this).call(this, opts);
      }
      /**
        @override
      */

    }, {
      key: "isComplete",
      get: function get() {
        return _get(_getPrototypeOf(MaskedRange.prototype), "isComplete", this) && Boolean(this.value);
      }
    }, {
      key: "boundaries",
      value: function boundaries(str) {
        var minstr = '';
        var maxstr = '';

        var _ref = str.match(/^(\D*)(\d*)(\D*)/) || [],
            _ref2 = _slicedToArray(_ref, 3),
            placeholder = _ref2[1],
            num = _ref2[2];

        if (num) {
          minstr = '0'.repeat(placeholder.length) + num;
          maxstr = '9'.repeat(placeholder.length) + num;
        }

        minstr = minstr.padEnd(this.maxLength, '0');
        maxstr = maxstr.padEnd(this.maxLength, '9');
        return [minstr, maxstr];
      } // TODO str is a single char everytime

      /**
        @override
      */

    }, {
      key: "doPrepare",
      value: function doPrepare(ch) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var details;

        var _normalizePrepare = normalizePrepare(_get(_getPrototypeOf(MaskedRange.prototype), "doPrepare", this).call(this, ch.replace(/\D/g, ''), flags));

        var _normalizePrepare2 = _slicedToArray(_normalizePrepare, 2);

        ch = _normalizePrepare2[0];
        details = _normalizePrepare2[1];
        if (!this.autofix || !ch) return ch;
        var fromStr = String(this.from).padStart(this.maxLength, '0');
        var toStr = String(this.to).padStart(this.maxLength, '0');
        var nextVal = this.value + ch;
        if (nextVal.length > this.maxLength) return '';

        var _this$boundaries = this.boundaries(nextVal),
            _this$boundaries2 = _slicedToArray(_this$boundaries, 2),
            minstr = _this$boundaries2[0],
            maxstr = _this$boundaries2[1];

        if (Number(maxstr) < this.from) return fromStr[nextVal.length - 1];

        if (Number(minstr) > this.to) {
          if (this.autofix === 'pad' && nextVal.length < this.maxLength) {
            return ['', details.aggregate(this.append(fromStr[nextVal.length - 1] + ch, flags))];
          }

          return toStr[nextVal.length - 1];
        }

        return ch;
      }
      /**
        @override
      */

    }, {
      key: "doValidate",
      value: function doValidate() {
        var _get2;

        var str = this.value;
        var firstNonZero = str.search(/[^0]/);
        if (firstNonZero === -1 && str.length <= this._matchFrom) return true;

        var _this$boundaries3 = this.boundaries(str),
            _this$boundaries4 = _slicedToArray(_this$boundaries3, 2),
            minstr = _this$boundaries4[0],
            maxstr = _this$boundaries4[1];

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return this.from <= Number(maxstr) && Number(minstr) <= this.to && (_get2 = _get(_getPrototypeOf(MaskedRange.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
      }
    }]);

    return MaskedRange;
  }(MaskedPattern);

  IMask.MaskedRange = MaskedRange;
  /** Date mask */

  var MaskedDate = /*#__PURE__*/function (_MaskedPattern) {
    _inherits(MaskedDate, _MaskedPattern);

    var _super = _createSuper(MaskedDate);
    /** Pattern mask for date according to {@link MaskedDate#format} */

    /** Start date */

    /** End date */

    /** */

    /**
      @param {Object} opts
    */


    function MaskedDate(opts) {
      _classCallCheck(this, MaskedDate);

      return _super.call(this, Object.assign({}, MaskedDate.DEFAULTS, opts));
    }
    /**
      @override
    */


    _createClass(MaskedDate, [{
      key: "_update",
      value: function _update(opts) {
        if (opts.mask === Date) delete opts.mask;
        if (opts.pattern) opts.mask = opts.pattern;
        var blocks = opts.blocks;
        opts.blocks = Object.assign({}, MaskedDate.GET_DEFAULT_BLOCKS()); // adjust year block

        if (opts.min) opts.blocks.Y.from = opts.min.getFullYear();
        if (opts.max) opts.blocks.Y.to = opts.max.getFullYear();

        if (opts.min && opts.max && opts.blocks.Y.from === opts.blocks.Y.to) {
          opts.blocks.m.from = opts.min.getMonth() + 1;
          opts.blocks.m.to = opts.max.getMonth() + 1;

          if (opts.blocks.m.from === opts.blocks.m.to) {
            opts.blocks.d.from = opts.min.getDate();
            opts.blocks.d.to = opts.max.getDate();
          }
        }

        Object.assign(opts.blocks, this.blocks, blocks); // add autofix

        Object.keys(opts.blocks).forEach(function (bk) {
          var b = opts.blocks[bk];
          if (!('autofix' in b) && 'autofix' in opts) b.autofix = opts.autofix;
        });

        _get(_getPrototypeOf(MaskedDate.prototype), "_update", this).call(this, opts);
      }
      /**
        @override
      */

    }, {
      key: "doValidate",
      value: function doValidate() {
        var _get2;

        var date = this.date;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return (_get2 = _get(_getPrototypeOf(MaskedDate.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.isComplete || this.isDateExist(this.value) && date != null && (this.min == null || this.min <= date) && (this.max == null || date <= this.max));
      }
      /** Checks if date is exists */

    }, {
      key: "isDateExist",
      value: function isDateExist(str) {
        return this.format(this.parse(str, this), this).indexOf(str) >= 0;
      }
      /** Parsed Date */

    }, {
      key: "date",
      get: function get() {
        return this.typedValue;
      },
      set: function set(date) {
        this.typedValue = date;
      }
      /**
        @override
      */

    }, {
      key: "typedValue",
      get: function get() {
        return this.isComplete ? _get(_getPrototypeOf(MaskedDate.prototype), "typedValue", this) : null;
      },
      set: function set(value) {
        _set(_getPrototypeOf(MaskedDate.prototype), "typedValue", value, this, true);
      }
      /**
        @override
      */

    }, {
      key: "maskEquals",
      value: function maskEquals(mask) {
        return mask === Date || _get(_getPrototypeOf(MaskedDate.prototype), "maskEquals", this).call(this, mask);
      }
    }]);

    return MaskedDate;
  }(MaskedPattern);

  MaskedDate.DEFAULTS = {
    pattern: 'd{.}`m{.}`Y',
    format: function format(date) {
      if (!date) return '';
      var day = String(date.getDate()).padStart(2, '0');
      var month = String(date.getMonth() + 1).padStart(2, '0');
      var year = date.getFullYear();
      return [day, month, year].join('.');
    },
    parse: function parse(str) {
      var _str$split = str.split('.'),
          _str$split2 = _slicedToArray(_str$split, 3),
          day = _str$split2[0],
          month = _str$split2[1],
          year = _str$split2[2];

      return new Date(year, month - 1, day);
    }
  };

  MaskedDate.GET_DEFAULT_BLOCKS = function () {
    return {
      d: {
        mask: MaskedRange,
        from: 1,
        to: 31,
        maxLength: 2
      },
      m: {
        mask: MaskedRange,
        from: 1,
        to: 12,
        maxLength: 2
      },
      Y: {
        mask: MaskedRange,
        from: 1900,
        to: 9999
      }
    };
  };

  IMask.MaskedDate = MaskedDate;
  /**
    Generic element API to use with mask
    @interface
  */

  var MaskElement = /*#__PURE__*/function () {
    function MaskElement() {
      _classCallCheck(this, MaskElement);
    }

    _createClass(MaskElement, [{
      key: "selectionStart",
      get:
      /** */

      /** */

      /** */

      /** Safely returns selection start */
      function get() {
        var start;

        try {
          start = this._unsafeSelectionStart;
        } catch (e) {}

        return start != null ? start : this.value.length;
      }
      /** Safely returns selection end */

    }, {
      key: "selectionEnd",
      get: function get() {
        var end;

        try {
          end = this._unsafeSelectionEnd;
        } catch (e) {}

        return end != null ? end : this.value.length;
      }
      /** Safely sets element selection */

    }, {
      key: "select",
      value: function select(start, end) {
        if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd) return;

        try {
          this._unsafeSelect(start, end);
        } catch (e) {}
      }
      /** Should be overriden in subclasses */

    }, {
      key: "_unsafeSelect",
      value: function _unsafeSelect(start, end) {}
      /** Should be overriden in subclasses */

    }, {
      key: "isActive",
      get: function get() {
        return false;
      }
      /** Should be overriden in subclasses */

    }, {
      key: "bindEvents",
      value: function bindEvents(handlers) {}
      /** Should be overriden in subclasses */

    }, {
      key: "unbindEvents",
      value: function unbindEvents() {}
    }]);

    return MaskElement;
  }();

  IMask.MaskElement = MaskElement;
  /** Bridge between HTMLElement and {@link Masked} */

  var HTMLMaskElement = /*#__PURE__*/function (_MaskElement) {
    _inherits(HTMLMaskElement, _MaskElement);

    var _super = _createSuper(HTMLMaskElement);
    /** Mapping between HTMLElement events and mask internal events */

    /** HTMLElement to use mask on */

    /**
      @param {HTMLInputElement|HTMLTextAreaElement} input
    */


    function HTMLMaskElement(input) {
      var _this;

      _classCallCheck(this, HTMLMaskElement);

      _this = _super.call(this);
      _this.input = input;
      _this._handlers = {};
      return _this;
    }
    /** */
    // $FlowFixMe https://github.com/facebook/flow/issues/2839


    _createClass(HTMLMaskElement, [{
      key: "rootElement",
      get: function get() {
        var _this$input$getRootNo, _this$input$getRootNo2, _this$input;

        return (_this$input$getRootNo = (_this$input$getRootNo2 = (_this$input = this.input).getRootNode) === null || _this$input$getRootNo2 === void 0 ? void 0 : _this$input$getRootNo2.call(_this$input)) !== null && _this$input$getRootNo !== void 0 ? _this$input$getRootNo : document;
      }
      /**
        Is element in focus
        @readonly
      */

    }, {
      key: "isActive",
      get: function get() {
        //$FlowFixMe
        return this.input === this.rootElement.activeElement;
      }
      /**
        Returns HTMLElement selection start
        @override
      */

    }, {
      key: "_unsafeSelectionStart",
      get: function get() {
        return this.input.selectionStart;
      }
      /**
        Returns HTMLElement selection end
        @override
      */

    }, {
      key: "_unsafeSelectionEnd",
      get: function get() {
        return this.input.selectionEnd;
      }
      /**
        Sets HTMLElement selection
        @override
      */

    }, {
      key: "_unsafeSelect",
      value: function _unsafeSelect(start, end) {
        this.input.setSelectionRange(start, end);
      }
      /**
        HTMLElement value
        @override
      */

    }, {
      key: "value",
      get: function get() {
        return this.input.value;
      },
      set: function set(value) {
        this.input.value = value;
      }
      /**
        Binds HTMLElement events to mask internal events
        @override
      */

    }, {
      key: "bindEvents",
      value: function bindEvents(handlers) {
        var _this2 = this;

        Object.keys(handlers).forEach(function (event) {
          return _this2._toggleEventHandler(HTMLMaskElement.EVENTS_MAP[event], handlers[event]);
        });
      }
      /**
        Unbinds HTMLElement events to mask internal events
        @override
      */

    }, {
      key: "unbindEvents",
      value: function unbindEvents() {
        var _this3 = this;

        Object.keys(this._handlers).forEach(function (event) {
          return _this3._toggleEventHandler(event);
        });
      }
      /** */

    }, {
      key: "_toggleEventHandler",
      value: function _toggleEventHandler(event, handler) {
        if (this._handlers[event]) {
          this.input.removeEventListener(event, this._handlers[event]);
          delete this._handlers[event];
        }

        if (handler) {
          this.input.addEventListener(event, handler);
          this._handlers[event] = handler;
        }
      }
    }]);

    return HTMLMaskElement;
  }(MaskElement);

  HTMLMaskElement.EVENTS_MAP = {
    selectionChange: 'keydown',
    input: 'input',
    drop: 'drop',
    click: 'click',
    focus: 'focus',
    commit: 'blur'
  };
  IMask.HTMLMaskElement = HTMLMaskElement;

  var HTMLContenteditableMaskElement = /*#__PURE__*/function (_HTMLMaskElement) {
    _inherits(HTMLContenteditableMaskElement, _HTMLMaskElement);

    var _super = _createSuper(HTMLContenteditableMaskElement);

    function HTMLContenteditableMaskElement() {
      _classCallCheck(this, HTMLContenteditableMaskElement);

      return _super.apply(this, arguments);
    }

    _createClass(HTMLContenteditableMaskElement, [{
      key: "_unsafeSelectionStart",
      get:
      /**
        Returns HTMLElement selection start
        @override
      */
      function get() {
        var root = this.rootElement;
        var selection = root.getSelection && root.getSelection();
        var anchorOffset = selection && selection.anchorOffset;
        var focusOffset = selection && selection.focusOffset;

        if (focusOffset == null || anchorOffset == null || anchorOffset < focusOffset) {
          return anchorOffset;
        }

        return focusOffset;
      }
      /**
        Returns HTMLElement selection end
        @override
      */

    }, {
      key: "_unsafeSelectionEnd",
      get: function get() {
        var root = this.rootElement;
        var selection = root.getSelection && root.getSelection();
        var anchorOffset = selection && selection.anchorOffset;
        var focusOffset = selection && selection.focusOffset;

        if (focusOffset == null || anchorOffset == null || anchorOffset > focusOffset) {
          return anchorOffset;
        }

        return focusOffset;
      }
      /**
        Sets HTMLElement selection
        @override
      */

    }, {
      key: "_unsafeSelect",
      value: function _unsafeSelect(start, end) {
        if (!this.rootElement.createRange) return;
        var range = this.rootElement.createRange();
        range.setStart(this.input.firstChild || this.input, start);
        range.setEnd(this.input.lastChild || this.input, end);
        var root = this.rootElement;
        var selection = root.getSelection && root.getSelection();

        if (selection) {
          selection.removeAllRanges();
          selection.addRange(range);
        }
      }
      /**
        HTMLElement value
        @override
      */

    }, {
      key: "value",
      get: function get() {
        // $FlowFixMe
        return this.input.textContent;
      },
      set: function set(value) {
        this.input.textContent = value;
      }
    }]);

    return HTMLContenteditableMaskElement;
  }(HTMLMaskElement);

  IMask.HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;
  var _excluded$1 = ["mask"];
  /** Listens to element events and controls changes between element and {@link Masked} */

  var InputMask = /*#__PURE__*/function () {
    /**
      View element
      @readonly
    */

    /**
      Internal {@link Masked} model
      @readonly
    */

    /**
      @param {MaskElement|HTMLInputElement|HTMLTextAreaElement} el
      @param {Object} opts
    */
    function InputMask(el, opts) {
      _classCallCheck(this, InputMask);

      this.el = el instanceof MaskElement ? el : el.isContentEditable && el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA' ? new HTMLContenteditableMaskElement(el) : new HTMLMaskElement(el);
      this.masked = createMask(opts);
      this._listeners = {};
      this._value = '';
      this._unmaskedValue = '';
      this._saveSelection = this._saveSelection.bind(this);
      this._onInput = this._onInput.bind(this);
      this._onChange = this._onChange.bind(this);
      this._onDrop = this._onDrop.bind(this);
      this._onFocus = this._onFocus.bind(this);
      this._onClick = this._onClick.bind(this);
      this.alignCursor = this.alignCursor.bind(this);
      this.alignCursorFriendly = this.alignCursorFriendly.bind(this);

      this._bindEvents(); // refresh


      this.updateValue();

      this._onChange();
    }
    /** Read or update mask */


    _createClass(InputMask, [{
      key: "mask",
      get: function get() {
        return this.masked.mask;
      },
      set: function set(mask) {
        if (this.maskEquals(mask)) return; // $FlowFixMe No ideas ... after update

        if (!(mask instanceof IMask.Masked) && this.masked.constructor === maskedClass(mask)) {
          this.masked.updateOptions({
            mask: mask
          });
          return;
        }

        var masked = createMask({
          mask: mask
        });
        masked.unmaskedValue = this.masked.unmaskedValue;
        this.masked = masked;
      }
      /** Raw value */

    }, {
      key: "maskEquals",
      value: function maskEquals(mask) {
        var _this$masked;

        return mask == null || ((_this$masked = this.masked) === null || _this$masked === void 0 ? void 0 : _this$masked.maskEquals(mask));
      }
    }, {
      key: "value",
      get: function get() {
        return this._value;
      },
      set: function set(str) {
        if (this.value === str) return;
        this.masked.value = str;
        this.updateControl();
        this.alignCursor();
      }
      /** Unmasked value */

    }, {
      key: "unmaskedValue",
      get: function get() {
        return this._unmaskedValue;
      },
      set: function set(str) {
        if (this.unmaskedValue === str) return;
        this.masked.unmaskedValue = str;
        this.updateControl();
        this.alignCursor();
      }
      /** Typed unmasked value */

    }, {
      key: "typedValue",
      get: function get() {
        return this.masked.typedValue;
      },
      set: function set(val) {
        if (this.masked.typedValueEquals(val)) return;
        this.masked.typedValue = val;
        this.updateControl();
        this.alignCursor();
      }
      /**
        Starts listening to element events
        @protected
      */

    }, {
      key: "_bindEvents",
      value: function _bindEvents() {
        this.el.bindEvents({
          selectionChange: this._saveSelection,
          input: this._onInput,
          drop: this._onDrop,
          click: this._onClick,
          focus: this._onFocus,
          commit: this._onChange
        });
      }
      /**
        Stops listening to element events
        @protected
       */

    }, {
      key: "_unbindEvents",
      value: function _unbindEvents() {
        if (this.el) this.el.unbindEvents();
      }
      /**
        Fires custom event
        @protected
       */

    }, {
      key: "_fireEvent",
      value: function _fireEvent(ev) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var listeners = this._listeners[ev];
        if (!listeners) return;
        listeners.forEach(function (l) {
          return l.apply(void 0, args);
        });
      }
      /**
        Current selection start
        @readonly
      */

    }, {
      key: "selectionStart",
      get: function get() {
        return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
      }
      /** Current cursor position */

    }, {
      key: "cursorPos",
      get: function get() {
        return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
      },
      set: function set(pos) {
        if (!this.el || !this.el.isActive) return;
        this.el.select(pos, pos);

        this._saveSelection();
      }
      /**
        Stores current selection
        @protected
      */

    }, {
      key: "_saveSelection",
      value: function
      /* ev */
      _saveSelection() {
        if (this.value !== this.el.value) {
          console.warn('Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.'); // eslint-disable-line no-console
        }

        this._selection = {
          start: this.selectionStart,
          end: this.cursorPos
        };
      }
      /** Syncronizes model value from view */

    }, {
      key: "updateValue",
      value: function updateValue() {
        this.masked.value = this.el.value;
        this._value = this.masked.value;
      }
      /** Syncronizes view from model value, fires change events */

    }, {
      key: "updateControl",
      value: function updateControl() {
        var newUnmaskedValue = this.masked.unmaskedValue;
        var newValue = this.masked.value;
        var isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue;
        this._unmaskedValue = newUnmaskedValue;
        this._value = newValue;
        if (this.el.value !== newValue) this.el.value = newValue;
        if (isChanged) this._fireChangeEvents();
      }
      /** Updates options with deep equal check, recreates @{link Masked} model if mask type changes */

    }, {
      key: "updateOptions",
      value: function updateOptions(opts) {
        var mask = opts.mask,
            restOpts = _objectWithoutProperties(opts, _excluded$1);

        var updateMask = !this.maskEquals(mask);
        var updateOpts = !objectIncludes(this.masked, restOpts);
        if (updateMask) this.mask = mask;
        if (updateOpts) this.masked.updateOptions(restOpts);
        if (updateMask || updateOpts) this.updateControl();
      }
      /** Updates cursor */

    }, {
      key: "updateCursor",
      value: function updateCursor(cursorPos) {
        if (cursorPos == null) return;
        this.cursorPos = cursorPos; // also queue change cursor for mobile browsers

        this._delayUpdateCursor(cursorPos);
      }
      /**
        Delays cursor update to support mobile browsers
        @private
      */

    }, {
      key: "_delayUpdateCursor",
      value: function _delayUpdateCursor(cursorPos) {
        var _this = this;

        this._abortUpdateCursor();

        this._changingCursorPos = cursorPos;
        this._cursorChanging = setTimeout(function () {
          if (!_this.el) return; // if was destroyed

          _this.cursorPos = _this._changingCursorPos;

          _this._abortUpdateCursor();
        }, 10);
      }
      /**
        Fires custom events
        @protected
      */

    }, {
      key: "_fireChangeEvents",
      value: function _fireChangeEvents() {
        this._fireEvent('accept', this._inputEvent);

        if (this.masked.isComplete) this._fireEvent('complete', this._inputEvent);
      }
      /**
        Aborts delayed cursor update
        @private
      */

    }, {
      key: "_abortUpdateCursor",
      value: function _abortUpdateCursor() {
        if (this._cursorChanging) {
          clearTimeout(this._cursorChanging);
          delete this._cursorChanging;
        }
      }
      /** Aligns cursor to nearest available position */

    }, {
      key: "alignCursor",
      value: function alignCursor() {
        this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, DIRECTION.LEFT));
      }
      /** Aligns cursor only if selection is empty */

    }, {
      key: "alignCursorFriendly",
      value: function alignCursorFriendly() {
        if (this.selectionStart !== this.cursorPos) return; // skip if range is selected

        this.alignCursor();
      }
      /** Adds listener on custom event */

    }, {
      key: "on",
      value: function on(ev, handler) {
        if (!this._listeners[ev]) this._listeners[ev] = [];

        this._listeners[ev].push(handler);

        return this;
      }
      /** Removes custom event listener */

    }, {
      key: "off",
      value: function off(ev, handler) {
        if (!this._listeners[ev]) return this;

        if (!handler) {
          delete this._listeners[ev];
          return this;
        }

        var hIndex = this._listeners[ev].indexOf(handler);

        if (hIndex >= 0) this._listeners[ev].splice(hIndex, 1);
        return this;
      }
      /** Handles view input event */

    }, {
      key: "_onInput",
      value: function _onInput(e) {
        this._inputEvent = e;

        this._abortUpdateCursor(); // fix strange IE behavior


        if (!this._selection) return this.updateValue();
        var details = new ActionDetails( // new state
        this.el.value, this.cursorPos, // old state
        this.value, this._selection);
        var oldRawValue = this.masked.rawInputValue;
        var offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection, {
          input: true,
          raw: true
        }).offset; // force align in remove direction only if no input chars were removed
        // otherwise we still need to align with NONE (to get out from fixed symbols for instance)

        var removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : DIRECTION.NONE;
        var cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection);
        if (removeDirection !== DIRECTION.NONE) cursorPos = this.masked.nearestInputPos(cursorPos, DIRECTION.NONE);
        this.updateControl();
        this.updateCursor(cursorPos);
        delete this._inputEvent;
      }
      /** Handles view change event and commits model value */

    }, {
      key: "_onChange",
      value: function _onChange() {
        if (this.value !== this.el.value) {
          this.updateValue();
        }

        this.masked.doCommit();
        this.updateControl();

        this._saveSelection();
      }
      /** Handles view drop event, prevents by default */

    }, {
      key: "_onDrop",
      value: function _onDrop(ev) {
        ev.preventDefault();
        ev.stopPropagation();
      }
      /** Restore last selection on focus */

    }, {
      key: "_onFocus",
      value: function _onFocus(ev) {
        this.alignCursorFriendly();
      }
      /** Restore last selection on focus */

    }, {
      key: "_onClick",
      value: function _onClick(ev) {
        this.alignCursorFriendly();
      }
      /** Unbind view events and removes element reference */

    }, {
      key: "destroy",
      value: function destroy() {
        this._unbindEvents(); // $FlowFixMe why not do so?


        this._listeners.length = 0; // $FlowFixMe

        delete this.el;
      }
    }]);

    return InputMask;
  }();

  IMask.InputMask = InputMask;
  /** Pattern which validates enum values */

  var MaskedEnum = /*#__PURE__*/function (_MaskedPattern) {
    _inherits(MaskedEnum, _MaskedPattern);

    var _super = _createSuper(MaskedEnum);

    function MaskedEnum() {
      _classCallCheck(this, MaskedEnum);

      return _super.apply(this, arguments);
    }

    _createClass(MaskedEnum, [{
      key: "_update",
      value:
      /**
        @override
        @param {Object} opts
      */
      function _update(opts) {
        // TODO type
        if (opts["enum"]) opts.mask = '*'.repeat(opts["enum"][0].length);

        _get(_getPrototypeOf(MaskedEnum.prototype), "_update", this).call(this, opts);
      }
      /**
        @override
      */

    }, {
      key: "doValidate",
      value: function doValidate() {
        var _this = this,
            _get2;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return this["enum"].some(function (e) {
          return e.indexOf(_this.unmaskedValue) >= 0;
        }) && (_get2 = _get(_getPrototypeOf(MaskedEnum.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
      }
    }]);

    return MaskedEnum;
  }(MaskedPattern);

  IMask.MaskedEnum = MaskedEnum;
  /**
    Number mask
    @param {Object} opts
    @param {string} opts.radix - Single char
    @param {string} opts.thousandsSeparator - Single char
    @param {Array<string>} opts.mapToRadix - Array of single chars
    @param {number} opts.min
    @param {number} opts.max
    @param {number} opts.scale - Digits after point
    @param {boolean} opts.signed - Allow negative
    @param {boolean} opts.normalizeZeros - Flag to remove leading and trailing zeros in the end of editing
    @param {boolean} opts.padFractionalZeros - Flag to pad trailing zeros after point in the end of editing
  */

  var MaskedNumber = /*#__PURE__*/function (_Masked) {
    _inherits(MaskedNumber, _Masked);

    var _super = _createSuper(MaskedNumber);
    /** Single char */

    /** Single char */

    /** Array of single chars */

    /** */

    /** */

    /** Digits after point */

    /** */

    /** Flag to remove leading and trailing zeros in the end of editing */

    /** Flag to pad trailing zeros after point in the end of editing */


    function MaskedNumber(opts) {
      _classCallCheck(this, MaskedNumber);

      return _super.call(this, Object.assign({}, MaskedNumber.DEFAULTS, opts));
    }
    /**
      @override
    */


    _createClass(MaskedNumber, [{
      key: "_update",
      value: function _update(opts) {
        _get(_getPrototypeOf(MaskedNumber.prototype), "_update", this).call(this, opts);

        this._updateRegExps();
      }
      /** */

    }, {
      key: "_updateRegExps",
      value: function _updateRegExps() {
        // use different regexp to process user input (more strict, input suffix) and tail shifting
        var start = '^' + (this.allowNegative ? '[+|\\-]?' : '');
        var midInput = '(0|([1-9]+\\d*))?';
        var mid = '\\d*';
        var end = (this.scale ? '(' + escapeRegExp(this.radix) + '\\d{0,' + this.scale + '})?' : '') + '$';
        this._numberRegExpInput = new RegExp(start + midInput + end);
        this._numberRegExp = new RegExp(start + mid + end);
        this._mapToRadixRegExp = new RegExp('[' + this.mapToRadix.map(escapeRegExp).join('') + ']', 'g');
        this._thousandsSeparatorRegExp = new RegExp(escapeRegExp(this.thousandsSeparator), 'g');
      }
      /** */

    }, {
      key: "_removeThousandsSeparators",
      value: function _removeThousandsSeparators(value) {
        return value.replace(this._thousandsSeparatorRegExp, '');
      }
      /** */

    }, {
      key: "_insertThousandsSeparators",
      value: function _insertThousandsSeparators(value) {
        // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
        var parts = value.split(this.radix);
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
        return parts.join(this.radix);
      }
      /**
        @override
      */

    }, {
      key: "doPrepare",
      value: function doPrepare(ch) {
        var _get2;

        ch = ch.replace(this._mapToRadixRegExp, this.radix);

        var noSepCh = this._removeThousandsSeparators(ch);

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var _normalizePrepare = normalizePrepare((_get2 = _get(_getPrototypeOf(MaskedNumber.prototype), "doPrepare", this)).call.apply(_get2, [this, noSepCh].concat(args))),
            _normalizePrepare2 = _slicedToArray(_normalizePrepare, 2),
            prepCh = _normalizePrepare2[0],
            details = _normalizePrepare2[1];

        if (ch && !noSepCh) details.skip = true;
        return [prepCh, details];
      }
      /** */

    }, {
      key: "_separatorsCount",
      value: function _separatorsCount(to) {
        var extendOnSeparators = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var count = 0;

        for (var pos = 0; pos < to; ++pos) {
          if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
            ++count;
            if (extendOnSeparators) to += this.thousandsSeparator.length;
          }
        }

        return count;
      }
      /** */

    }, {
      key: "_separatorsCountFromSlice",
      value: function _separatorsCountFromSlice() {
        var slice = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._value;
        return this._separatorsCount(this._removeThousandsSeparators(slice).length, true);
      }
      /**
        @override
      */

    }, {
      key: "extractInput",
      value: function extractInput() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        var flags = arguments.length > 2 ? arguments[2] : undefined;

        var _this$_adjustRangeWit = this._adjustRangeWithSeparators(fromPos, toPos);

        var _this$_adjustRangeWit2 = _slicedToArray(_this$_adjustRangeWit, 2);

        fromPos = _this$_adjustRangeWit2[0];
        toPos = _this$_adjustRangeWit2[1];
        return this._removeThousandsSeparators(_get(_getPrototypeOf(MaskedNumber.prototype), "extractInput", this).call(this, fromPos, toPos, flags));
      }
      /**
        @override
      */

    }, {
      key: "_appendCharRaw",
      value: function _appendCharRaw(ch) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (!this.thousandsSeparator) return _get(_getPrototypeOf(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);
        var prevBeforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;

        var prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(prevBeforeTailValue);

        this._value = this._removeThousandsSeparators(this.value);

        var appendDetails = _get(_getPrototypeOf(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);

        this._value = this._insertThousandsSeparators(this._value);
        var beforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;

        var beforeTailSeparatorsCount = this._separatorsCountFromSlice(beforeTailValue);

        appendDetails.tailShift += (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length;
        appendDetails.skip = !appendDetails.rawInserted && ch === this.thousandsSeparator;
        return appendDetails;
      }
      /** */

    }, {
      key: "_findSeparatorAround",
      value: function _findSeparatorAround(pos) {
        if (this.thousandsSeparator) {
          var searchFrom = pos - this.thousandsSeparator.length + 1;
          var separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom);
          if (separatorPos <= pos) return separatorPos;
        }

        return -1;
      }
    }, {
      key: "_adjustRangeWithSeparators",
      value: function _adjustRangeWithSeparators(from, to) {
        var separatorAroundFromPos = this._findSeparatorAround(from);

        if (separatorAroundFromPos >= 0) from = separatorAroundFromPos;

        var separatorAroundToPos = this._findSeparatorAround(to);

        if (separatorAroundToPos >= 0) to = separatorAroundToPos + this.thousandsSeparator.length;
        return [from, to];
      }
      /**
        @override
      */

    }, {
      key: "remove",
      value: function remove() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

        var _this$_adjustRangeWit3 = this._adjustRangeWithSeparators(fromPos, toPos);

        var _this$_adjustRangeWit4 = _slicedToArray(_this$_adjustRangeWit3, 2);

        fromPos = _this$_adjustRangeWit4[0];
        toPos = _this$_adjustRangeWit4[1];
        var valueBeforePos = this.value.slice(0, fromPos);
        var valueAfterPos = this.value.slice(toPos);

        var prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length);

        this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos));

        var beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos);

        return new ChangeDetails({
          tailShift: (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length
        });
      }
      /**
        @override
      */

    }, {
      key: "nearestInputPos",
      value: function nearestInputPos(cursorPos, direction) {
        if (!this.thousandsSeparator) return cursorPos;

        switch (direction) {
          case DIRECTION.NONE:
          case DIRECTION.LEFT:
          case DIRECTION.FORCE_LEFT:
            {
              var separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1);

              if (separatorAtLeftPos >= 0) {
                var separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length;

                if (cursorPos < separatorAtLeftEndPos || this.value.length <= separatorAtLeftEndPos || direction === DIRECTION.FORCE_LEFT) {
                  return separatorAtLeftPos;
                }
              }

              break;
            }

          case DIRECTION.RIGHT:
          case DIRECTION.FORCE_RIGHT:
            {
              var separatorAtRightPos = this._findSeparatorAround(cursorPos);

              if (separatorAtRightPos >= 0) {
                return separatorAtRightPos + this.thousandsSeparator.length;
              }
            }
        }

        return cursorPos;
      }
      /**
        @override
      */

    }, {
      key: "doValidate",
      value: function doValidate(flags) {
        var regexp = flags.input ? this._numberRegExpInput : this._numberRegExp; // validate as string

        var valid = regexp.test(this._removeThousandsSeparators(this.value));

        if (valid) {
          // validate as number
          var number = this.number;
          valid = valid && !isNaN(number) && ( // check min bound for negative values
          this.min == null || this.min >= 0 || this.min <= this.number) && ( // check max bound for positive values
          this.max == null || this.max <= 0 || this.number <= this.max);
        }

        return valid && _get(_getPrototypeOf(MaskedNumber.prototype), "doValidate", this).call(this, flags);
      }
      /**
        @override
      */

    }, {
      key: "doCommit",
      value: function doCommit() {
        if (this.value) {
          var number = this.number;
          var validnum = number; // check bounds

          if (this.min != null) validnum = Math.max(validnum, this.min);
          if (this.max != null) validnum = Math.min(validnum, this.max);
          if (validnum !== number) this.unmaskedValue = String(validnum);
          var formatted = this.value;
          if (this.normalizeZeros) formatted = this._normalizeZeros(formatted);
          if (this.padFractionalZeros && this.scale > 0) formatted = this._padFractionalZeros(formatted);
          this._value = formatted;
        }

        _get(_getPrototypeOf(MaskedNumber.prototype), "doCommit", this).call(this);
      }
      /** */

    }, {
      key: "_normalizeZeros",
      value: function _normalizeZeros(value) {
        var parts = this._removeThousandsSeparators(value).split(this.radix); // remove leading zeros


        parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, function (match, sign, zeros, num) {
          return sign + num;
        }); // add leading zero

        if (value.length && !/\d$/.test(parts[0])) parts[0] = parts[0] + '0';

        if (parts.length > 1) {
          parts[1] = parts[1].replace(/0*$/, ''); // remove trailing zeros

          if (!parts[1].length) parts.length = 1; // remove fractional
        }

        return this._insertThousandsSeparators(parts.join(this.radix));
      }
      /** */

    }, {
      key: "_padFractionalZeros",
      value: function _padFractionalZeros(value) {
        if (!value) return value;
        var parts = value.split(this.radix);
        if (parts.length < 2) parts.push('');
        parts[1] = parts[1].padEnd(this.scale, '0');
        return parts.join(this.radix);
      }
      /**
        @override
      */

    }, {
      key: "unmaskedValue",
      get: function get() {
        return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, '.');
      },
      set: function set(unmaskedValue) {
        _set(_getPrototypeOf(MaskedNumber.prototype), "unmaskedValue", unmaskedValue.replace('.', this.radix), this, true);
      }
      /**
        @override
      */

    }, {
      key: "typedValue",
      get: function get() {
        return Number(this.unmaskedValue);
      },
      set: function set(n) {
        _set(_getPrototypeOf(MaskedNumber.prototype), "unmaskedValue", String(n), this, true);
      }
      /** Parsed Number */

    }, {
      key: "number",
      get: function get() {
        return this.typedValue;
      },
      set: function set(number) {
        this.typedValue = number;
      }
      /**
        Is negative allowed
        @readonly
      */

    }, {
      key: "allowNegative",
      get: function get() {
        return this.signed || this.min != null && this.min < 0 || this.max != null && this.max < 0;
      }
      /**
        @override
      */

    }, {
      key: "typedValueEquals",
      value: function typedValueEquals(value) {
        // handle  0 -> '' case (typed = 0 even if value = '')
        // for details see https://github.com/uNmAnNeR/imaskjs/issues/134
        return (_get(_getPrototypeOf(MaskedNumber.prototype), "typedValueEquals", this).call(this, value) || MaskedNumber.EMPTY_VALUES.includes(value) && MaskedNumber.EMPTY_VALUES.includes(this.typedValue)) && !(value === 0 && this.value === '');
      }
    }]);

    return MaskedNumber;
  }(Masked);

  MaskedNumber.DEFAULTS = {
    radix: ',',
    thousandsSeparator: '',
    mapToRadix: ['.'],
    scale: 2,
    signed: false,
    normalizeZeros: true,
    padFractionalZeros: false
  };
  MaskedNumber.EMPTY_VALUES = [].concat(_toConsumableArray(Masked.EMPTY_VALUES), [0]);
  IMask.MaskedNumber = MaskedNumber;
  /** Masking by custom Function */

  var MaskedFunction = /*#__PURE__*/function (_Masked) {
    _inherits(MaskedFunction, _Masked);

    var _super = _createSuper(MaskedFunction);

    function MaskedFunction() {
      _classCallCheck(this, MaskedFunction);

      return _super.apply(this, arguments);
    }

    _createClass(MaskedFunction, [{
      key: "_update",
      value:
      /**
        @override
        @param {Object} opts
      */
      function _update(opts) {
        if (opts.mask) opts.validate = opts.mask;

        _get(_getPrototypeOf(MaskedFunction.prototype), "_update", this).call(this, opts);
      }
    }]);

    return MaskedFunction;
  }(Masked);

  IMask.MaskedFunction = MaskedFunction;
  var _excluded = ["compiledMasks", "currentMaskRef", "currentMask"];
  /** Dynamic mask for choosing apropriate mask in run-time */

  var MaskedDynamic = /*#__PURE__*/function (_Masked) {
    _inherits(MaskedDynamic, _Masked);

    var _super = _createSuper(MaskedDynamic);
    /** Currently chosen mask */

    /** Compliled {@link Masked} options */

    /** Chooses {@link Masked} depending on input value */

    /**
      @param {Object} opts
    */


    function MaskedDynamic(opts) {
      var _this;

      _classCallCheck(this, MaskedDynamic);

      _this = _super.call(this, Object.assign({}, MaskedDynamic.DEFAULTS, opts));
      _this.currentMask = null;
      return _this;
    }
    /**
      @override
    */


    _createClass(MaskedDynamic, [{
      key: "_update",
      value: function _update(opts) {
        _get(_getPrototypeOf(MaskedDynamic.prototype), "_update", this).call(this, opts);

        if ('mask' in opts) {
          // mask could be totally dynamic with only `dispatch` option
          this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map(function (m) {
            return createMask(m);
          }) : [];
        }
      }
      /**
        @override
      */

    }, {
      key: "_appendCharRaw",
      value: function _appendCharRaw(ch) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var details = this._applyDispatch(ch, flags);

        if (this.currentMask) {
          details.aggregate(this.currentMask._appendChar(ch, this.currentMaskFlags(flags)));
        }

        return details;
      }
    }, {
      key: "_applyDispatch",
      value: function _applyDispatch() {
        var appended = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var prevValueBeforeTail = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._value : this.value;
        var inputValue = this.rawInputValue;
        var insertValue = flags.tail && flags._beforeTailState != null ? // $FlowFixMe - tired to fight with type system
        flags._beforeTailState._rawInputValue : inputValue;
        var tailValue = inputValue.slice(insertValue.length);
        var prevMask = this.currentMask;
        var details = new ChangeDetails();
        var prevMaskState = prevMask === null || prevMask === void 0 ? void 0 : prevMask.state; // clone flags to prevent overwriting `_beforeTailState`

        this.currentMask = this.doDispatch(appended, Object.assign({}, flags)); // restore state after dispatch

        if (this.currentMask) {
          if (this.currentMask !== prevMask) {
            // if mask changed reapply input
            this.currentMask.reset();

            if (insertValue) {
              // $FlowFixMe - it's ok, we don't change current mask above
              var d = this.currentMask.append(insertValue, {
                raw: true
              });
              details.tailShift = d.inserted.length - prevValueBeforeTail.length;
            }

            if (tailValue) {
              // $FlowFixMe - it's ok, we don't change current mask above
              details.tailShift += this.currentMask.append(tailValue, {
                raw: true,
                tail: true
              }).tailShift;
            }
          } else {
            // Dispatch can do something bad with state, so
            // restore prev mask state
            this.currentMask.state = prevMaskState;
          }
        }

        return details;
      }
    }, {
      key: "_appendPlaceholder",
      value: function _appendPlaceholder() {
        var details = this._applyDispatch.apply(this, arguments);

        if (this.currentMask) {
          details.aggregate(this.currentMask._appendPlaceholder());
        }

        return details;
      }
      /**
       @override
      */

    }, {
      key: "_appendEager",
      value: function _appendEager() {
        var details = this._applyDispatch.apply(this, arguments);

        if (this.currentMask) {
          details.aggregate(this.currentMask._appendEager());
        }

        return details;
      }
    }, {
      key: "currentMaskFlags",
      value: function currentMaskFlags(flags) {
        var _flags$_beforeTailSta, _flags$_beforeTailSta2;

        return Object.assign({}, flags, {
          _beforeTailState: ((_flags$_beforeTailSta = flags._beforeTailState) === null || _flags$_beforeTailSta === void 0 ? void 0 : _flags$_beforeTailSta.currentMaskRef) === this.currentMask && ((_flags$_beforeTailSta2 = flags._beforeTailState) === null || _flags$_beforeTailSta2 === void 0 ? void 0 : _flags$_beforeTailSta2.currentMask) || flags._beforeTailState
        });
      }
      /**
        @override
      */

    }, {
      key: "doDispatch",
      value: function doDispatch(appended) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return this.dispatch(appended, this, flags);
      }
      /**
        @override
      */

    }, {
      key: "doValidate",
      value: function doValidate(flags) {
        return _get(_getPrototypeOf(MaskedDynamic.prototype), "doValidate", this).call(this, flags) && (!this.currentMask || this.currentMask.doValidate(this.currentMaskFlags(flags)));
      }
      /**
        @override
      */

    }, {
      key: "doPrepare",
      value: function doPrepare(str) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var _normalizePrepare = normalizePrepare(_get(_getPrototypeOf(MaskedDynamic.prototype), "doPrepare", this).call(this, str, flags)),
            _normalizePrepare2 = _slicedToArray(_normalizePrepare, 2),
            s = _normalizePrepare2[0],
            details = _normalizePrepare2[1];

        if (this.currentMask) {
          var currentDetails;

          var _normalizePrepare3 = normalizePrepare(_get(_getPrototypeOf(MaskedDynamic.prototype), "doPrepare", this).call(this, s, this.currentMaskFlags(flags)));

          var _normalizePrepare4 = _slicedToArray(_normalizePrepare3, 2);

          s = _normalizePrepare4[0];
          currentDetails = _normalizePrepare4[1];
          details = details.aggregate(currentDetails);
        }

        return [s, details];
      }
      /**
        @override
      */

    }, {
      key: "reset",
      value: function reset() {
        var _this$currentMask;

        (_this$currentMask = this.currentMask) === null || _this$currentMask === void 0 ? void 0 : _this$currentMask.reset();
        this.compiledMasks.forEach(function (m) {
          return m.reset();
        });
      }
      /**
        @override
      */

    }, {
      key: "value",
      get: function get() {
        return this.currentMask ? this.currentMask.value : '';
      },
      set: function set(value) {
        _set(_getPrototypeOf(MaskedDynamic.prototype), "value", value, this, true);
      }
      /**
        @override
      */

    }, {
      key: "unmaskedValue",
      get: function get() {
        return this.currentMask ? this.currentMask.unmaskedValue : '';
      },
      set: function set(unmaskedValue) {
        _set(_getPrototypeOf(MaskedDynamic.prototype), "unmaskedValue", unmaskedValue, this, true);
      }
      /**
        @override
      */

    }, {
      key: "typedValue",
      get: function get() {
        return this.currentMask ? this.currentMask.typedValue : '';
      } // probably typedValue should not be used with dynamic
      ,
      set: function set(value) {
        var unmaskedValue = String(value); // double check it

        if (this.currentMask) {
          this.currentMask.typedValue = value;
          unmaskedValue = this.currentMask.unmaskedValue;
        }

        this.unmaskedValue = unmaskedValue;
      }
      /**
        @override
      */

    }, {
      key: "isComplete",
      get: function get() {
        var _this$currentMask2;

        return Boolean((_this$currentMask2 = this.currentMask) === null || _this$currentMask2 === void 0 ? void 0 : _this$currentMask2.isComplete);
      }
      /**
        @override
      */

    }, {
      key: "isFilled",
      get: function get() {
        var _this$currentMask3;

        return Boolean((_this$currentMask3 = this.currentMask) === null || _this$currentMask3 === void 0 ? void 0 : _this$currentMask3.isFilled);
      }
      /**
        @override
      */

    }, {
      key: "remove",
      value: function remove() {
        var details = new ChangeDetails();

        if (this.currentMask) {
          var _this$currentMask4;

          details.aggregate((_this$currentMask4 = this.currentMask).remove.apply(_this$currentMask4, arguments)) // update with dispatch
          .aggregate(this._applyDispatch());
        }

        return details;
      }
      /**
        @override
      */

    }, {
      key: "state",
      get: function get() {
        var _this$currentMask5;

        return Object.assign({}, _get(_getPrototypeOf(MaskedDynamic.prototype), "state", this), {
          _rawInputValue: this.rawInputValue,
          compiledMasks: this.compiledMasks.map(function (m) {
            return m.state;
          }),
          currentMaskRef: this.currentMask,
          currentMask: (_this$currentMask5 = this.currentMask) === null || _this$currentMask5 === void 0 ? void 0 : _this$currentMask5.state
        });
      },
      set: function set(state) {
        var compiledMasks = state.compiledMasks,
            currentMaskRef = state.currentMaskRef,
            currentMask = state.currentMask,
            maskedState = _objectWithoutProperties(state, _excluded);

        this.compiledMasks.forEach(function (m, mi) {
          return m.state = compiledMasks[mi];
        });

        if (currentMaskRef != null) {
          this.currentMask = currentMaskRef;
          this.currentMask.state = currentMask;
        }

        _set(_getPrototypeOf(MaskedDynamic.prototype), "state", maskedState, this, true);
      }
      /**
        @override
      */

    }, {
      key: "extractInput",
      value: function extractInput() {
        var _this$currentMask6;

        return this.currentMask ? (_this$currentMask6 = this.currentMask).extractInput.apply(_this$currentMask6, arguments) : '';
      }
      /**
        @override
      */

    }, {
      key: "extractTail",
      value: function extractTail() {
        var _this$currentMask7, _get2;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return this.currentMask ? (_this$currentMask7 = this.currentMask).extractTail.apply(_this$currentMask7, args) : (_get2 = _get(_getPrototypeOf(MaskedDynamic.prototype), "extractTail", this)).call.apply(_get2, [this].concat(args));
      }
      /**
        @override
      */

    }, {
      key: "doCommit",
      value: function doCommit() {
        if (this.currentMask) this.currentMask.doCommit();

        _get(_getPrototypeOf(MaskedDynamic.prototype), "doCommit", this).call(this);
      }
      /**
        @override
      */

    }, {
      key: "nearestInputPos",
      value: function nearestInputPos() {
        var _this$currentMask8, _get3;

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return this.currentMask ? (_this$currentMask8 = this.currentMask).nearestInputPos.apply(_this$currentMask8, args) : (_get3 = _get(_getPrototypeOf(MaskedDynamic.prototype), "nearestInputPos", this)).call.apply(_get3, [this].concat(args));
      }
    }, {
      key: "overwrite",
      get: function get() {
        return this.currentMask ? this.currentMask.overwrite : _get(_getPrototypeOf(MaskedDynamic.prototype), "overwrite", this);
      },
      set: function set(overwrite) {
        console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings');
      }
    }, {
      key: "eager",
      get: function get() {
        return this.currentMask ? this.currentMask.eager : _get(_getPrototypeOf(MaskedDynamic.prototype), "eager", this);
      },
      set: function set(eager) {
        console.warn('"eager" option is not available in dynamic mask, use this option in siblings');
      }
      /**
        @override
      */

    }, {
      key: "maskEquals",
      value: function maskEquals(mask) {
        return Array.isArray(mask) && this.compiledMasks.every(function (m, mi) {
          var _mask$mi;

          return m.maskEquals((_mask$mi = mask[mi]) === null || _mask$mi === void 0 ? void 0 : _mask$mi.mask);
        });
      }
      /**
        @override
      */

    }, {
      key: "typedValueEquals",
      value: function typedValueEquals(value) {
        var _this$currentMask9;

        return Boolean((_this$currentMask9 = this.currentMask) === null || _this$currentMask9 === void 0 ? void 0 : _this$currentMask9.typedValueEquals(value));
      }
    }]);

    return MaskedDynamic;
  }(Masked);

  MaskedDynamic.DEFAULTS = {
    dispatch: function dispatch(appended, masked, flags) {
      if (!masked.compiledMasks.length) return;
      var inputValue = masked.rawInputValue; // simulate input

      var inputs = masked.compiledMasks.map(function (m, index) {
        m.reset();
        m.append(inputValue, {
          raw: true
        });
        m.append(appended, masked.currentMaskFlags(flags));
        var weight = m.rawInputValue.length;
        return {
          weight: weight,
          index: index
        };
      }); // pop masks with longer values first

      inputs.sort(function (i1, i2) {
        return i2.weight - i1.weight;
      });
      return masked.compiledMasks[inputs[0].index];
    }
  };
  IMask.MaskedDynamic = MaskedDynamic;
  /** Mask pipe source and destination types */

  var PIPE_TYPE = {
    MASKED: 'value',
    UNMASKED: 'unmaskedValue',
    TYPED: 'typedValue'
  };
  /** Creates new pipe function depending on mask type, source and destination options */

  function createPipe(mask) {
    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : PIPE_TYPE.MASKED;
    var to = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : PIPE_TYPE.MASKED;
    var masked = createMask(mask);
    return function (value) {
      return masked.runIsolated(function (m) {
        m[from] = value;
        return m[to];
      });
    };
  }
  /** Pipes value through mask depending on mask type, source and destination options */


  function pipe(value) {
    for (var _len = arguments.length, pipeArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      pipeArgs[_key - 1] = arguments[_key];
    }

    return createPipe.apply(void 0, pipeArgs)(value);
  }

  IMask.PIPE_TYPE = PIPE_TYPE;
  IMask.createPipe = createPipe;
  IMask.pipe = pipe;

  try {
    globalThis.IMask = IMask;
  } catch (e) {}

  exports.HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;
  exports.HTMLMaskElement = HTMLMaskElement;
  exports.InputMask = InputMask;
  exports.MaskElement = MaskElement;
  exports.Masked = Masked;
  exports.MaskedDate = MaskedDate;
  exports.MaskedDynamic = MaskedDynamic;
  exports.MaskedEnum = MaskedEnum;
  exports.MaskedFunction = MaskedFunction;
  exports.MaskedNumber = MaskedNumber;
  exports.MaskedPattern = MaskedPattern;
  exports.MaskedRange = MaskedRange;
  exports.MaskedRegExp = MaskedRegExp;
  exports.PIPE_TYPE = PIPE_TYPE;
  exports.createMask = createMask;
  exports.createPipe = createPipe;
  exports["default"] = IMask;
  exports.pipe = pipe;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

var navBackground = document.getElementById("nav__back");
var btn = document.getElementById("nav__btn");
var clientsDiv = document.getElementById("clients__div");
var ownersDiv = document.getElementById("owners__div");
var about = document.getElementById("nav__about");
var sectionAbout = document.getElementById("about");
var work = document.getElementById("nav__work");
var sectionWork = document.getElementById("work");
var review = document.getElementById("nav__review");
var sectionReview = document.getElementById("review");
var workBtn = document.getElementById("work__btn");
var workSecondBtn = document.getElementById("work__second__btn");
var span = document.getElementById("span");
var mainContainer = document.getElementById("main-container"); // navbar backgound to white on scrool

window.onscroll = function (event) {
  var windowTop = event.target.documentElement.scrollTop;

  if (windowTop > 10) {
    navBackground.style.backgroundColor = "#fff";
    navBackground.style.boxShadow = "0px 5px 20px rgba(45, 45, 45, 0.1)";
  } else {
    navBackground.style.backgroundColor = "transparent";
    navBackground.style.boxShadow = "0px 0px 0px transparent";
  }
};

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}; // Click to the links


var navHeight = document.getElementById("nav__back").clientHeight;
about.addEventListener("click", function () {
  scrollTop(sectionAbout);
});
work.addEventListener("click", function () {
  scrollTop(sectionWork);
});
review.addEventListener("click", function () {
  scrollTop(sectionReview);
}); // main function scrollTo

function scrollTop(height) {
  window.scrollTo({
    behavior: "smooth",
    top: height.offsetTop - navHeight
  });
} // work gifs event


workSecondBtn.addEventListener("click", function () {
  span.style.left = "49%";
  span.style.width = "50%";
  ownersDiv.style.display = "flex";
  clientsDiv.style.display = "none";
  mainContainer.classList.remove("first");
  mainContainer.classList.add("second");
});
workBtn.addEventListener("click", function () {
  span.style.left = "1%";
  span.style.width = "43%";
  ownersDiv.style.display = "none";
  clientsDiv.style.display = "flex";
  mainContainer.classList.remove("second");
  mainContainer.classList.add("first");
}); // event btn to top

btn.addEventListener("click", function () {
  window.scroll({
    behavior: "smooth",
    top: 0
  });
});