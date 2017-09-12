webpackJsonp([1],{

/***/ "+Vn3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

(function ($) {
	'use strict';

	$.fn.loadingSearch = function () {
		var me = $(this);
		me.click(function (e) {
			e.preventDefault();
			console.log(me.text());
		});
	};
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("4kSj")))

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("Jy3m");
__webpack_require__("0kNx");
__webpack_require__("ftz8");
__webpack_require__("wwvh");
__webpack_require__("ngRY");
__webpack_require__("4eNS");
__webpack_require__("hnLy");
__webpack_require__("KM6q");
__webpack_require__("7u+k");
__webpack_require__("+Vn3");
__webpack_require__("d/r1");
__webpack_require__("xEpy");
__webpack_require__("MvE4");
__webpack_require__("hQN4");
__webpack_require__("5GZf");
__webpack_require__("iVo0");
__webpack_require__("hlre");
__webpack_require__("bvMI");
__webpack_require__("0FAX");
__webpack_require__("7vQ2");
__webpack_require__("OvPY");
__webpack_require__("Vfr2");
module.exports = __webpack_require__("8DRm");


/***/ }),

/***/ "0FAX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

(function ($) {
	'use strict';

	$.fn.selectBoxMenu = function () {
		$(this).each(function () {
			$(this).find('.chck-lbl').on('click', function () {
				if ($(this, '.node').hasClass('active')) {
					$(this, '.node').removeClass('active');
				} else {
					$(this, '.node').addClass('active');
				}
			});
		});
	};
	$.fn.selectBoxMenu1 = function () {
		$(this).each(function () {
			$(this).find('.circle-btn > label').click(function () {
				$('aside.leve-form ul li .circle-btn > label').removeClass('checked1');
				$(this).addClass('checked1');
			});
		});
	};

	$.fn.selectBoxMenu2 = function () {
		$(this).each(function () {
			$(this).find(' > li > .square-btn input[type=checkbox]').on('click', function () {
				if ($(this).parent().hasClass('checked2')) {
					if ($(this).parent().siblings('.sub-checkbox').find('.square-btn').hasClass('checked2')) {
						$(this).parent().removeClass('checked2');
						$(this).parent().siblings('.sub-checkbox').find('.square-btn').removeClass('checked2');
					} else {
						$(this).parent().removeClass('checked2');
						$(this).parent().siblings('.sub-checkbox').find('.square-btn').removeClass('checked2');
					}
				} else {
					$(this).parent().addClass('checked2');
					$(this).parent().siblings('.sub-checkbox').find('.square-btn').addClass('checked2');
				}
			});
		});
		$(this).each(function () {
			$(this).find(' > li > .sub-checkbox .square-btn input[type=checkbox]').on('click', function () {
				if ($(this).parent().hasClass('checked2')) {
					$(this).parent().removeClass('checked2');
					$(this).parent().parent().siblings('.square-btn').removeClass('checked2');
				} else {
					$(this).parent().addClass('checked2');
				}
			});
		});
	};
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("4kSj")))

/***/ }),

/***/ "0kNx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

(function ($) {
				'use strict';

				var defaults = {

								ctrlItem: true,
								pageItem: false,
								auto: false,
								auto_once_time: false,
								gallery: false,
								heightCRS: 'auto',
								zoomCRS: true,
								mobile: true

				};

				$.fn.maxtaCRS = function (options) {

								var maxtaCRS = $(this),
								    maxtaCRSWrap = maxtaCRS.find('ul'),
								    maxtaCRSItem = maxtaCRS.find('ul').find('li'),
								    settings = $.extend({}, defaults, options),
								    getWidtElem,
								    distanceMovingItem,
								    getNumbItem = maxtaCRSItem.length,
								    totalWidth = getWidtElem * getNumbItem;
								// maxtaCRS.find('ul').find('li').each(function(index){
								// 	$(this).css({
								// 		'top': 0,
								// 		'left': ''+((getWidtElem/3)*index+((getWidtElem/3/2)*index))+'px'
								// 	})
								// });

								// var setWidt = function(){

								// 	var widtOfCRS = getWidtElem*getNumbItem
								// 	maxtaCRSWrap.width(totalWidth)
								// 	if($(window).width() > 1024){
								// 		maxtaCRSItem.width(getWidtElem/3);
								// 	}
								// 	else{
								// 		maxtaCRSItem.width(getWidtElem);
								// 	}
								// 	return maxtaCRSItem.width();
								// }

								var constructor = function constructor() {
												getWidtElem = maxtaCRS.width();
												var widtOfCRS = getWidtElem * getNumbItem;
												maxtaCRSWrap.width(totalWidth);

												if ($(window).width() > 1025) {
																maxtaCRS.find('ul').find('li').each(function (index) {
																				$(this).css({
																								'top': 0,
																								'left': '' + (getWidtElem / 3 * index + getWidtElem / 3 / 2 * index) + 'px'
																				});
																});
																distanceMovingItem = getWidtElem / 3 / 2 + getWidtElem / 3;
																// Set width of item
																maxtaCRSItem.width(getWidtElem / 3);
												} else {
																maxtaCRS.find('ul').find('li').each(function (index) {
																				$(this).css({
																								'top': 0,
																								'left': '' + getWidtElem * index + 'px'
																				});
																});
																distanceMovingItem = getWidtElem;
																// Set width of item
																maxtaCRSItem.width(getWidtElem);
												}
								};
								constructor();

								$(window).resize(function () {
												// location.reload()
												constructor();
								});

								// maxtaCRS.find('ul').css({
								// 	'left': ''+(-(getWidtElem/3/2))+'px'
								// })


								var heightCRS = function heightCRS() {

												var setHeightCRS = settings.heightCRS;
												return maxtaCRS.height(setHeightCRS);
								};

								var moveLeft = function moveLeft() {

												var finalItem = maxtaCRSWrap.find('li:nth-child(' + getNumbItem + ')');
												var firstItem = maxtaCRSWrap.find('li:first-child');
												var getIndex = maxtaCRSWrap.find('li.active').index() + 1;
												var activeItem = maxtaCRSWrap.find('li.active');

												// Syn with pagination
												var page = maxtaCRS.find('ol');
												var pageItems = page.find('li');

												console.log(getIndex);

												if (firstItem.hasClass('active')) {

																if ($(window).width() > 1024) {
																				maxtaCRSWrap.stop().animate({

																								'margin-left': '-' + getWidtElem / 3 / 2 + 'px'

																				}, 1000);
																} else {
																				maxtaCRSWrap.stop().animate({

																								'margin-left': '-' + getWidtElem + 'px'

																				}, 1000);
																}

																activeItem.removeClass('active');
																maxtaCRSWrap.find('li:nth-child(2)').addClass('active');

																pageItems.removeClass('active');
																page.find('li:nth-child(2)').addClass('active');
												} else if (finalItem.hasClass('active')) {

																maxtaCRSWrap.stop().animate({

																				'margin-left': 0

																}, 1000);

																activeItem.removeClass('active');
																maxtaCRSWrap.find('li:nth-child(1)').addClass('active');

																// Syn with pagination
																pageItems.removeClass('active');
																page.find('li:nth-child(1)').addClass('active');
												} else {

																if ($(window).width() > 1024) {
																				maxtaCRSWrap.stop().animate({

																								'margin-left': '-' + (distanceMovingItem * (getIndex - 1) + getWidtElem / 3 / 2) + 'px' //add more left when moving first-child

																				}, 1000);
																} else {
																				maxtaCRSWrap.stop().animate({

																								'margin-left': '-' + distanceMovingItem * getIndex + 'px'

																				}, 1000);
																}

																activeItem.removeClass('active');
																maxtaCRSWrap.find('li:nth-child(' + (getIndex + 1) + ')').addClass('active');

																pageItems.removeClass('active');
																page.find('li:nth-child(' + (getIndex + 1) + ')').addClass('active');
												}
								};

								var moveRight = function moveRight() {

												var secondItem = maxtaCRSWrap.find('li:nth-child(2)');
												var firstItem = maxtaCRSWrap.find('li:nth-child(1)');
												var getIndex = maxtaCRSWrap.find('li.active').index() + 1;
												var activeItem = maxtaCRSWrap.find('li.active');

												// Syn with pagination
												var page = maxtaCRS.find('ol');
												var pageItems = page.find('li');

												console.log(getIndex);

												if (secondItem.hasClass('active')) {

																if ($(window).width() > 1024) {
																				maxtaCRSWrap.stop().animate({

																								'margin-left': '0'

																				}, 1000);
																} else {
																				maxtaCRSWrap.stop().animate({

																								// 'margin-left': '-'+(distanceMovingItem*(getNumbItem-1))+'px'
																								'margin-left': '0'

																				}, 1000);
																}

																activeItem.removeClass('active');
																maxtaCRSWrap.find('li:nth-child(1)').addClass('active');

																// Syn with pagination
																pageItems.removeClass('active');
																page.find('li:nth-child(1)').addClass('active');
												} else if (firstItem.hasClass('active')) {

																if ($(window).width() > 1024) {
																				maxtaCRSWrap.stop().animate({

																								'margin-left': '-' + (distanceMovingItem * (getNumbItem - 1) - getWidtElem / 3) + 'px'

																				}, 1000);
																} else {
																				maxtaCRSWrap.stop().animate({

																								'margin-left': '-' + distanceMovingItem * (getNumbItem - 1) + 'px'

																				}, 1000);
																}

																activeItem.removeClass('active');
																maxtaCRSWrap.find('li:nth-child(' + getNumbItem + ')').addClass('active');

																// Syn with pagination
																pageItems.removeClass('active');
																page.find('li:nth-child(' + getNumbItem + ')').addClass('active');
												} else {

																if ($(window).width() > 1024) {
																				maxtaCRSWrap.stop().animate({

																								'margin-left': '-' + (distanceMovingItem * (getIndex - 3) + getWidtElem / 3 / 2) + 'px'

																				}, 1000);
																} else {
																				maxtaCRSWrap.stop().animate({

																								'margin-left': '-' + distanceMovingItem * (getIndex - 2) + 'px'

																				}, 1000);
																}

																activeItem.removeClass('active');
																maxtaCRSWrap.find('li:nth-child(' + (getIndex - 1) + ')').addClass('active');

																// Syn with pagination
																pageItems.removeClass('active');
																page.find('li:nth-child(' + (getIndex - 1) + ')').addClass('active');
												}
								};

								var mobile = function mobile() {
												if (settings.mobile == true) {
																$(document).on('swipeleft', maxtaCRS, function () {
																				moveLeft();
																});
																$(document).on('swiperight', maxtaCRS, function () {
																				moveRight();
																});
												} else {
																console.log('Swipe was deactive mobile');
												}
								};

								var active = function active() {

												if (settings.ctrlItem == true) {

																maxtaCRSWrap.find('li:first-child').addClass('active');

																var nextBtn = maxtaCRS.find('.next-ctrl');
																nextBtn.on('click', function () {
																				moveLeft();
																});

																var prevBtn = maxtaCRS.find('.prev-ctrl');
																prevBtn.click(function () {
																				moveRight();
																});
												} else {

																maxtaCRS.find('ctrl-btn').remove();
												}
								};

								var auto = function auto() {

												if (settings.auto == true) {

																setInterval(function () {

																				moveLeft();
																}, 5000);
												} else {

																console.log('autorun was disabled');
												}
								};

								var auto_once_time = function auto_once_time() {

												if (settings.auto_once_time == true) {
																moveLeft();
												} else {

																console.log('auto_once_time was disabled');
												}
								};

								var pageItem = function pageItem() {

												if (settings.pageItem == true) {

																$('<ol></ol>').appendTo(maxtaCRS);
																for (var i = 0; i < getNumbItem; i++) {

																				$('<li></li>').appendTo(maxtaCRS.find('ol'));
																}

																var page = maxtaCRS.find('ol');
																var pageItems = page.find('li');

																$(document).ready(function () {

																				console.log("number item: " + getNumbItem);
																				console.log("number ol li:" + pageItems.length);
																});
																page.width(26 * pageItems.length);

																page.find('li:first-child').addClass('active');

																pageItems.click(function () {

																				var getPageIndex = $(this).index();
																				var firstPageItem = page.find('li:first-child');

																				var activeItem = maxtaCRSWrap.find('li.active');
																				console.log(getPageIndex);

																				if ($(window).width() > 1024) {
																								maxtaCRSWrap.animate({

																												'margin-left': '-' + distanceMovingItem * getPageIndex + 'px'

																								}, 1000);
																				} else {
																								maxtaCRSWrap.animate({

																												'margin-left': '-' + distanceMovingItem * getPageIndex + 'px'

																								}, 1000);
																				}

																				activeItem.removeClass('active');
																				maxtaCRSWrap.find('li:nth-child(' + (getPageIndex + 1) + ')').addClass('active');

																				pageItems.removeClass('active');
																				maxtaCRS.find('ol').find('li:nth-child(' + (getPageIndex + 1) + ')').addClass('active');

																				maxtaCRS.parent().siblings('.pareBUL').find('.relaSLD').find('ul li').removeClass('active');
																				maxtaCRS.parent().siblings('.pareBUL').find('.relaSLD').find('ul').find('li:nth-child(' + (getPageIndex + 1) + ')').addClass('active');
																});
												} else {

																console.log('disabled pagination');
												}
								};

								var gallery = function gallery() {

												if (settings.gallery == true) {

																var getURL = maxtaCRS.parent().siblings('.pareBUL').find('.relaSLD');
																console.log(getURL);
																var pageRelaSLD = getURL.find('ul');
																var itemRelaSLD = getURL.find('li');

																pageRelaSLD.find('li:first-child').addClass('active');

																itemRelaSLD.each(function () {

																				$(this).click(function () {

																								var activeItemCRS = maxtaCRSWrap.find('li.active');
																								var getIndexSelected = $(this).index();

																								maxtaCRSWrap.animate({

																												// 'margin-left':'-'+(getWidtElem*getIndexSelected)+'px'
																												'margin-left': '-' + (distanceMovingItem * getIndexSelected + getWidtElem / 3 / 2) + 'px'

																								}, 500);

																								activeItemCRS.removeClass('active');
																								maxtaCRSWrap.find('li:nth-child(' + (getIndexSelected + 1) + ')').addClass('active');

																								getURL.find('ul li').removeClass('active');
																								getURL.find('ul').find('li:nth-child(' + (getIndexSelected + 1) + ')').addClass('active');

																								maxtaCRS.find('ol li').removeClass('active');
																								maxtaCRS.find('ol').find('li:nth-child(' + (getIndexSelected + 1) + ')').addClass('active');
																				});
																});
												} else {

																console.log('gallery was disabled');
												}
								};

								var zoomCRS = function zoomCRS() {

												if (settings.zoom == true) {

																maxtaCRS.append('<div class="gall-zoom hide-elem"><div class="zoom-wrap"></div><button class="clos-btn"><i class="fa fa-close"></i></button></div>');
																maxtaCRS.closest('body').append('<div class="gall-zoom hide-elem"><div class="bg-dark"></div></div>');
																maxtaCRS.find('ul').clone().appendTo('.zoom-wrap');
																$('<button class="next-ctrl ctrl-btn"><i class="fa fa-angle-right"></i></button><button class="prev-ctrl ctrl-btn"><i class="fa fa-angle-left"></i></button>').appendTo($('.zoom-wrap'));
																$('.zoom-wrap').addClass('maxtaSLD');

																$('.zoom-wrap').maxtaCRS({

																				auto: false,
																				ctrlItem: true,
																				heightCRS: "500",
																				pageItem: false

																});

																maxtaCRS.find('.gall-zoom .clos-btn').click(function () {

																				$(this).parent().addClass('hide-elem');
																				$('body > .gall-zoom').addClass('hide-elem');
																});
																maxtaCRS.find('.zoom-btn').click(function () {

																				maxtaCRS.find('.gall-zoom').removeClass('hide-elem');
																				$('body > .gall-zoom').removeClass('hide-elem');
																});
												} else {

																console.log('zoom galley was disabled');
												}
								};

								var init = function init() {

												pageItem();
												active();
												mobile();
												// setWidt();
												auto();
												auto_once_time();
												gallery();
												heightCRS();
												zoomCRS();
								};

								init();
				};
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("4kSj")))

/***/ }),

/***/ "4eNS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

(function ($) {
	'use strict';

	var defaults = {
		click_button: null,
		active_class: null,
		icon_arrow: null
	};
	$.fn.expandDIV = function (options) {
		var me = $(this);
		var settings = $.extend({}, defaults, options);
		settings.click_button.click(function (e) {
			e.preventDefault();
			settings.active_class.toggleClass('active');
			if (settings.icon_arrow.hasClass('fa-angle-down')) {
				settings.icon_arrow.removeClass('fa-angle-down');
				settings.icon_arrow.addClass('fa-angle-right');
			} else {
				settings.icon_arrow.removeClass('fa-angle-right');
				settings.icon_arrow.addClass('fa-angle-down');
			}
		});
	};

	$.fn.expaVert = function () {
		var me = $(this);
		me.siblings('.img-wrap').find('.expa-fram-btn').click(function () {
			me.slideToggle();
			$(this).toggleClass('active');
		});
	};

	$.fn.expaVertSumm = function () {
		var me = $(this);
		me.siblings('.img-wrap').find('.expa-fram-btn').click(function () {
			me.find('p').slideToggle();
			$(this).toggleClass('active');
		});
	};
	$.fn.expaArti = function (e) {
		var me = $(this);
		$('> figure', me).each(function () {
			var meFigu = $(this);
			$('.expa-fram-btn', meFigu).click(function (e) {
				$('.expa-fram p', meFigu).slideToggle();
				$(this).toggleClass('active');
			});
			$('.titl1', meFigu).click(function (e) {
				e.preventDefault();
				$('.expa-fram p', meFigu).slideToggle();
				$(this).toggleClass('active');
			});
		});
	};

	$.fn.expandDetail = function () {
		var me = $(this);
		me.find('.block').each(function () {
			$(this).click(function () {

				if ($(this).hasClass('left')) {
					if ($(this).siblings('.detail-wrap.center').hasClass('active')) {
						$(this).siblings('.detail-wrap.center').removeClass('active');
						$(this).parents('.wrapper').find('.block').removeClass('active');
					}
					if ($(this).siblings('.detail-wrap.right').hasClass('active')) {
						$(this).siblings('.detail-wrap.right').removeClass('active');
						$(this).parents('.wrapper').find('.block').removeClass('active');
					}
					if ($(this).siblings('.detail-wrap.left').hasClass('active')) {
						$(this).siblings('.detail-wrap.left').removeClass('active');
						$(this).parents('.wrapper').find('.block').removeClass('active');
					} else {
						$(this).siblings('.detail-wrap.left').addClass('active');
						$(this).addClass('active');
					}
				} else if ($(this).hasClass('center')) {
					if ($(this).siblings('.detail-wrap.left').hasClass('active')) {
						$(this).siblings('.detail-wrap.left').removeClass('active');
						$(this).parents('.wrapper').find('.block').removeClass('active');
					}
					if ($(this).siblings('.detail-wrap.right').hasClass('active')) {
						$(this).siblings('.detail-wrap.right').removeClass('active');
						$(this).parents('.wrapper').find('.block').removeClass('active');
					}
					if ($(this).siblings('.detail-wrap.center').hasClass('active')) {
						$(this).siblings('.detail-wrap.center').removeClass('active');
						$(this).parents('.wrapper').find('.block').removeClass('active');
					} else {
						$(this).siblings('.detail-wrap.center').addClass('active');
						$(this).addClass('active');
					}
				} else {
					if ($(this).siblings('.detail-wrap.center').hasClass('active')) {
						$(this).siblings('.detail-wrap.center').removeClass('active');
						$(this).parents('.wrapper').find('.block').removeClass('active');
					}
					if ($(this).siblings('.detail-wrap.left').hasClass('active')) {
						$(this).siblings('.detail-wrap.left').removeClass('active');
						$(this).parents('.wrapper').find('.block').removeClass('active');
					}
					if ($(this).siblings('.detail-wrap.right').hasClass('active')) {
						$(this).siblings('.detail-wrap.right').removeClass('active');
						$(this).parents('.wrapper').find('.block').removeClass('active');
					} else {
						$(this).siblings('.detail-wrap.right').addClass('active');
						$(this).addClass('active');
					}
				}
			});
		});
	};
	// ***** DOD PAGE ***** //
	// To expand content of "li" in "ul".
	// We need get width of content equal width screen
	// Solution: moving it and append to position siblings with "li"
	function letMovingAndActive(movingDiv, needActiveDiv) {
		if ($(window).width() >= 1136) {
			movingDiv.appendTo(needActiveDiv.parent()).addClass('wasMoved');
		} else {
			movingDiv.insertAfter(needActiveDiv).addClass('wasMoved');
		}
		needActiveDiv.addClass('active');
	}

	// Checking active if any "li" has alread "active" class
	function checkingActivedDivAndWasMovedDiv(activedDiv, wasMovedDiv) {
		if (activedDiv.length > 0) {
			// To return original position and remove "wasMoved" class
			wasMovedDiv.appendTo(activedDiv).removeClass('wasMoved');
			// To remove "active" class
			activedDiv.removeClass('active');
		}
	}

	$.fn.singleExpandDOD21 = function () {
		var me = $(this);

		me.find('.block2').each(function () {
			$(this).click(function (e) {
				e.preventDefault();

				var activedDiv = $(this).siblings('.active'),
				    activeDiv = $(this),
				    movingDiv = $(this).find('> .detail-wrap2'),
				    movedDiv = $(this).siblings('.wasMoved');

				if (!$(this).hasClass('active')) {
					// To return original position
					checkingActivedDivAndWasMovedDiv(activedDiv, movedDiv);
					// Add new class active
					letMovingAndActive(movingDiv, activeDiv);
					// Split width to balace
					$(this).siblings('.wasMoved').balanceItemOfBar({
						parent: $('.the_devide.lv3'),
						children: $('.item.block3')
					});
				} else {
					activedDiv = $(this);
					checkingActivedDivAndWasMovedDiv(activedDiv, movedDiv);
				}
			});
		});
	};

	$.fn.singleExpandDOD2 = function () {
		var me = $(this);

		me.find('.block').each(function (i) {
			// Set active for first block. Just APPLY FOR DESKTOP
			if ($(window).width() >= 1136) {
				if (i == 0) {
					var firstDiv = $(this),
					    moveOutDiv = $(this).find('> .detail-wrap');
					moveOutDiv.find('.block2').each(function (j) {
						if (j == 0) {
							var firstSubDiv = $(this),
							    moveOutSubDiv = $(this).find('> .detail-wrap2');
							letMovingAndActive(moveOutSubDiv, firstSubDiv);
						}
					});
					// Add new class active
					letMovingAndActive(moveOutDiv, firstDiv);

					// Split width to balace
					$('.wasMoved').balanceItemOfBar({
						parent: $('.the_devide.content'),
						children: $('.item.content')
					});
				}
			}

			$(this).click(function (e) {
				e.preventDefault();
				// Naming item, sub item, content, sub content
				var needActiveDiv = $(this),
				    movingDiv = $(this).find('> .detail-wrap'),
				    wasMovedSubDiv = $(this).siblings('.wasMoved').find('.active').siblings('.wasMoved'),
				    activedSubDiv = $(this).siblings('.wasMoved').find('.active'),
				    wasMovedDiv = $(this).siblings('.wasMoved'),
				    activedDiv = $(this).siblings(".active");

				if (!$(this).hasClass('active')) {
					// Check SUB DIV: if already other div has .active. To return original position
					checkingActivedDivAndWasMovedDiv(activedSubDiv, wasMovedSubDiv);
					// Check MAIN DIV: if already other div has .active. To return original position
					checkingActivedDivAndWasMovedDiv(activedDiv, wasMovedDiv);
					// Add new class active
					letMovingAndActive(movingDiv, needActiveDiv);

					// Balance width item
					$(this).siblings('.wasMoved').balanceItemOfBar({
						parent: $('.the_devide.content'),
						children: $('.item.content')
					});
				} else {
					// Check SUB DIV: To return original position
					checkingActivedDivAndWasMovedDiv(activedSubDiv, wasMovedSubDiv);
					// Check MAIN DIV: To return original position
					activedDiv = $(this);
					checkingActivedDivAndWasMovedDiv(activedDiv, wasMovedDiv);
				}
			});
		});
	};
	// ***** END DOD PAGE ***** //
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("4kSj")))

/***/ }),

/***/ "5GZf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

(function ($) {
  'use strict';

  $('.amc-parallax .block:first-child .half-lay.left').append("<div class='scro-down floating for-desk'></div> ");
  $(window).on('scroll', function () {

    // Determine postion when scroll window
    var page_top = $(window).scrollTop(),
        page_range = page_top + 600;

    // Determine position of .amc-parallax
    if ($('.amc-parallax').length > 0) {
      var item = $('.amc-parallax'),
          item_top = item.offset().top,
          item_bottom = item_top + item.height();

      // Detect position .amc-parallax
      if (page_top >= item_top && page_range <= item_bottom) {

        //  Determine postion each of right layout in .block class
        var number_item = item.find('.block').length;
        for (var i = 1; i <= number_item; i++) {
          var sub_item = $('.amc-parallax .block:nth-child(' + i + ') .right'),
              sub_item_top = sub_item.offset().top,
              sub_item_bottom = sub_item_top + 500;

          // Detect position each sub_item
          if (page_range >= sub_item_top && page_top <= sub_item_bottom) {
            sub_item.find('article').css({
              'top': '50%',
              'opacity': '1',
              'transition': 'all 1000ms ease',
              '-webkit-transition': 'all 1000ms ease',
              '-moz-transition': 'all 1000ms ease'
            });
            // Return to comfirm/make sure current .sub_item IS ACTIVE. This thing required.
            return true;
          } else {
            // Outside .right layout
          }
        }
      } else {
          // Outside amc_parallax
        }
    }
  });

  // Fix bug Safari
  var ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf('safari') != -1) {
    if (ua.indexOf('chrome') > -1) {} else {
      $('.amc-parallax .block .half-lay.left').height($(window).height() / 2);
      $('.amc-parallax .block:first-child .half-lay.left').height($(window).height());
    }
  }
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("4kSj")))

/***/ }),

/***/ "7u+k":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

(function ($) {
	'use strict';

	$.fn.itemnav = function () {
		var me = $(this);
		//$(window).on('resize load',function(){
		var widt = $(window).width();
		if (widt > 1024) {
			var wrapItem = $('ul', me);
			var item = $('ul li', me);
			var numbItem = item.length;
			//item.width(wrapItem.width() / numbItem)
			item.width(parseFloat(wrapItem.width() / numbItem - 1).toFixed(2));
			wrapItem.height('auto');
			var wrapItemDiv = $('.devideMe', me);
			var itemDiv = $('.devideMe .item', me);
			var numbItemDiv = itemDiv.length;
			itemDiv.width(parseFloat(wrapItemDiv.width() / numbItemDiv - 1).toFixed(2));
			wrapItemDiv.height('auto');
		}
	};

	var defaults = {
		parent: null,
		children: null,
		columnMobile: 1
	};

	$.fn.balanceItemOfBar = function (options) {
		var settings = $.extend({}, defaults, options),
		    me = $(this),
		    parent = me.find(settings.parent),
		    child = me.find(settings.parent).find(settings.children),
		    widthParent = parent.width(),
		    numberChildren = child.length;
		console.log(numberChildren);
		function checkDevice() {
			if ($(window).width() >= 1136) {
				child.width(parseFloat(widthParent / numberChildren).toFixed(2));
			} else {
				child.width(Math.floor(me.width() / settings.columnMobile) - 1);
			}
		}
		checkDevice();

		$(window).resize(function () {
			// location.reload()
			checkDevice();
		});
	};
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("4kSj")))

/***/ }),

/***/ "7vQ2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

(function ($) {
  'use strict';

  var defaults = {
    attr_parallax: 'initial',
    attr_pos_x: 'center',
    attr_pos_y: 'center',
    attr_size: 'cover'
  };

  $('.amc-parallax .block').each(function (i) {
    var my_img = $(this).find('img');
    var url_my_img = my_img.attr('src');
    if ($(window).width() > 1024) {
      $(this).find('.left').css({ "background": "url('" + url_my_img + "')",
        "-o-background-size": "cover",
        "-moz-background-size": "cover",
        "-webkit-background-size": "cover",
        "-ms-background-size": "cover",
        "background-size": "cover",
        "background-repeat": "no-repeat",
        "background-position": "center center",
        "background-attachment": "fixed"
      });
    } else {
      $(this).find('.left').css({ "background": "url('" + url_my_img + "')",
        "-o-background-size": "cover",
        "-moz-background-size": "cover",
        "-webkit-background-size": "cover",
        "-ms-background-size": "cover",
        "background-size": "cover",
        "background-repeat": "no-repeat",
        "background-position": "center center"
      });
    }
  });

  $.fn.setIMG = function () {
    var me = $(this);
    me.find('.block').each(function (i) {
      var my_img = $(this).find('img');
      var url_my_img = my_img.attr('src');
      $(this).css({ "background-image": "url('" + url_my_img + "')",
        "background-size": "cover",
        "background-repeat": "no-repeat",
        "background-position": "center center"
      });
    });
  };

  $.fn.setAnimateIMG = function () {
    var me = $(this);
    me.find('.block').each(function (i) {
      var my_img = $(this).find('img');
      var url_my_img = my_img.attr('src');
      $(this).find('.img-wrap-vert').css({ "background-image": "url('" + url_my_img + "')",
        "background-size": "cover",
        "background-repeat": "no-repeat",
        "background-position": "0 0"
      });
    });
  };
  $.fn.parallaxIMG = function () {
    var me = $(this);
    var my_img = me.find('img');
    var url_my_img = my_img.attr('src');
    me.find('.cover-img').css({ "background-image": "url('" + url_my_img + "')",
      "background-size": "cover",
      "background-repeat": "no-repeat",
      "background-position": "center 78px",
      "background-attachment": "fixed"
    });
  };
  $.fn.amc_get_img = function (options) {
    var me = $(this);
    var settings = $.extend({}, defaults, options);

    var responsiveScreen = function responsiveScreen() {
      if ($(window).width() > 1024) {
        me.height($(window).height() * 4 / 5);
      } else {
        if (window.innerHeight > window.innerWidth) {
          me.height($(window).height());
        } else {
          me.height($(window).width() / 1.5);
        }
      }
    };

    var applyLoadIMG = function applyLoadIMG() {
      responsiveScreen();
      me.find('.block').each(function (i) {
        var my_img = $(this).find('img');
        var url_my_img = my_img.attr('src');
        $(this).css({
          "background-image": "url('" + url_my_img + "')",
          "background-size": "" + settings.attr_size + "",
          "background-repeat": "no-repeat",
          "background-position": "" + settings.attr_pos_x + " " + settings.attr_pos_y + "",
          "background-attachment": "" + settings.attr_attachment + ""
        });
      });
    };
    var init = function init() {
      applyLoadIMG();
    };
    init();
    return {
      loadImg: function loadImg() {
        if (me.length > 0) {
          applyLoadImg();
        }
      }
    };
  };
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("4kSj")))

/***/ }),

/***/ "8DRm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

(function ($) {
	'use strict';

	$(window).on('load resize', function () {
		if ($(window).width() >= 1600) {
			if ((window.outerWidth - 8) / window.innerWidth >= 0.7 && (window.outerWidth - 8) / window.innerWidth < 0.896) {
				$('body .menu-left').css({ 'width': '400px' });
			}
		}
	});
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("4kSj")))

/***/ }),

/***/ "Jy3m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

(function ($) {
	'use strict';

	$.fn.amc_step = function () {
		var me = $(this);

		function run_the_scenario(step_2, step_3, step_4, step_5, visual) {
			step_2.delay(0).queue(function (next) {
				$(this).addClass('active');
				next();
			});
			step_3.delay(300).queue(function (next) {
				$(this).addClass('active');
				next();
			});
			step_4.delay(600).queue(function (next) {
				$(this).addClass('active');
				next();
			});
			step_5.delay(900).queue(function (next) {
				$(this).addClass('active');
				next();
			});
			visual.delay(1200).queue(function (next) {
				$(this).addClass('active');
				next();
			});
		}
		function remove_scenario(step_2, step_3, step_4, step_5, visual, step) {
			step_2.dequeue();
			step_3.dequeue();
			step_4.dequeue();
			step_5.dequeue();
			visual.dequeue().removeClass('active');
			step.removeClass('active');
		}
		me.find('.block').each(function () {

			var visual = $(this).find('.visual'),
			    stage = visual.find('.stage'),
			    step = stage.find('.step'),
			    step_1 = stage.find('.step_1'),
			    step_2 = stage.find('.step_2'),
			    step_3 = stage.find('.step_3'),
			    step_4 = stage.find('.step_4'),
			    step_5 = stage.find('.step_5');

			$(this).find('.visual').hover(function () {
				run_the_scenario(step_2, step_3, step_4, step_5, visual);
			}, function () {
				remove_scenario(step_2, step_3, step_4, step_5, visual, step);
			});
		});
	};
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("4kSj")))

/***/ }),

/***/ "KM6q":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

(function ($) {
	'use strict';

	function randomEffect() {
		var animate_array = new Array();
		var hover_left_direction = function hover_left_direction() {
			return 'hover_left_direction';
		};
		var hover_right_direction = function hover_right_direction() {
			return 'hover_right_direction';
		};
		var hover_top_direction = function hover_top_direction() {
			return 'hover_top_direction';
		};
		var hover_bottom_direction = function hover_bottom_direction() {
			return 'hover_bottom_direction';
		};
		animate_array.push(hover_left_direction, hover_right_direction, hover_top_direction, hover_bottom_direction);

		//Get a random number from 0 to 4
		var randomNumber = Math.floor(Math.random() * 4);
		return animate_array[randomNumber];
	}
	$.fn.random_4_directions = function () {
		var get_name = randomEffect();
		$(this).addClass(get_name);
	};
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("4kSj")))

/***/ }),

/***/ "MvE4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

(function ($) {

	// Was been clear return false
	$.fn.navMobi = function (options) {
		// Declare button click, the menu and div container menu
		var me = $(this),
		    meClick = me.find('.nav-btn'),
		    meTitle = me.find('.title-page');

		// Create action toggle click to moving menu from ltr
		if ($(window).width() <= 1024) {
			var loadValue = function loadValue() {
				if (meCurrentPage.find('a').length > 0) {
					var meCurrentIMG = meCurrentPage.find('a').attr('style');
					meTitle.find('.the-img').attr("style", "" + meCurrentIMG + ";background-size: cover;");
				}
				if (meCurrentPage.find('span').length > 0) {
					var meCurrentValueSpan = meCurrentPage.find('span').text();
					meTitle.find('label').text("" + meCurrentValueSpan + "");
				}
				if (meCurrentPage.find('label').length > 0) {
					var meCurrentValueLabel = meCurrentPage.find('label').text();
					meTitle.find('label').text("" + meCurrentValueLabel + "");
				}
			};

			me.find('ul').find('li:first-child').addClass('current');
			var meCurrentPage = me.find('.current');

			loadValue();
			meClick.click(function (e) {
				e.preventDefault();
				me.stop().toggleClass('active');
				var changeIcon = meClick.find('i');
				if (changeIcon.hasClass('fa-angle-down')) {
					changeIcon.removeClass('fa-angle-down');
					changeIcon.addClass('fa-angle-up');
				} else {
					changeIcon.removeClass('fa-angle-up');
					changeIcon.addClass('fa-angle-down');
				}
			});
			me.find('ul').find('li').click(function (e) {
				e.preventDefault();
				me.find('ul').find('li').removeClass('current');
				$(this).addClass('current');
				meCurrentPage = me.find('.current');
				loadValue();
				me.removeClass('active');
			});
		}
	};
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("4kSj")))

/***/ }),

/***/ "OvPY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

(function ($) {
	'use strict';

	$.fn.clickOpen = function () {
		var me = $(this);
		var meOpen = $('.selector-div', me);
		var meClose = $('.cls-btn', me);
		var meItem = $('.list .item', me);
		meOpen.click(function () {
			meOpen.addClass('active');
		});
		meClose.click(function () {
			meOpen.removeClass('active');
		});
		meItem.each(function () {
			$(this).click(function () {
				$(this).toggleClass('active');
			});
		});
	};
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("4kSj")))

/***/ }),

/***/ "Vfr2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

(function ($) {
	'use strict';

	$.fn.vertScrl = function () {
		var me = $(this);
		$(window).scroll(function () {
			if ($(window).scrollTop() > 0) {
				me.addClass('transition-effect').addClass('set-bg-white1');
			} else {
				me.addClass('transition-effect').removeClass('set-bg-white1');
			}
		});
	};
	$.fn.menuLeftScroll = function () {
		$(window).scroll(function () {
			if ($(window).scrollTop() > $(window).height()) {
				$('body .menu-btn').find('span.menu-symb').removeClass('hide-element');
				$('body .menu-btn').find('span.welc-symb').addClass('hide-element');
			} else {
				$('body .menu-btn').find('span.welc-symb').removeClass('hide-element');
				$('body .menu-btn').find('span.menu-symb').addClass('hide-element');
			}
		});
	};
	$.fn.mainNav = function () {

		var me = $(this);
		var numItem = $('section', me);
		$('.main-nav ul li:first-child').addClass('active');
		$(window).scroll(function () {
			if ($(window).scrollTop() == 0) {
				$('.main-nav ul li').removeClass('active');
				$('.main-nav ul li:first-child').addClass('active');
			}
			if ($(window).scrollTop() > $('section:nth-child(1)', me).offset().top) {
				$('.main-nav ul li').removeClass('active');
				$('.main-nav ul li:nth-child(2)').addClass('active');
			}
			if ($(window).scrollTop() > $('section:nth-child(2)', me).offset().top) {
				$('.main-nav ul li').removeClass('active');
				$('.main-nav ul li:nth-child(3)').addClass('active');
			}
			if ($(window).scrollTop() > $('section:nth-child(3)', me).offset().top) {
				$('.main-nav ul li').removeClass('active');
				$('.main-nav ul li:nth-child(4)').addClass('active');
			}
			if ($(window).scrollTop() > $('section:nth-child(4)', me).offset().top) {
				$('.main-nav ul li').removeClass('active');
				$('.main-nav ul li:nth-child(5)').addClass('active');
			}
		});
	};

	$.fn.logoScroll = function () {
		var me = $(this);
		$(window).scroll(function () {
			if ($(window).scrollTop() > 0) {
				me.addClass('transition-effect');
				me.removeClass('defa-logo');
				me.addClass('transition-effect').addClass('mini-logo');
				if ($(window).width() > 1024) {
					$('body .menu-btn').height('67px');
				}
			} else {
				me.removeClass('set-bg-dark');
				me.removeClass('mini-logo');
				me.addClass('transition-effect').addClass('defa-logo');
				if ($(window).width() > 1024) {
					$('body .menu-btn').height('78px');
				}
			}
		});
	};
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("4kSj")))

/***/ }),

/***/ "bvMI":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

(function ($) {
  'use strict';

  $.fn.scrollandfix = function () {
    var me = $(this);
    $(window).on('scroll', function () {
      var pageTop = $(window).scrollTop();
      var pageBot = pageTop + $(window).height();
      var elementTop = me.offset() ? me.offset().top : 0;
      var elementBot = elementTop + me.height();
      if (pageBot >= elementTop) {
        $('.scroll-fixed').css({ 'display': 'block' });
      } else {
        $('.scroll-fixed').css({ 'display': 'none' });
      }
    });
  };
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("4kSj")))

/***/ }),

/***/ "d/r1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

(function ($) {
	'use strict';
	// Was been clear return false

	$.fn.menuAMR = function (options) {
		// Declare button click, the menu and div container menu
		var me = $(this),
		    meClick = me.find('.menu-btn');
		// Create action toggle click to moving menu from ltr
		meClick.click(function (e) {
			e.preventDefault();
			me.stop().toggleClass('active');
			$(document).one('click', function closeMenu(e) {
				if (me.has(e.target).length === 0) {
					me.removeClass('active');
				} else {
					$(document).one('click', closeMenu);
				}
			});
		});
	};
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("4kSj")))

/***/ }),

/***/ "ftz8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

(function ($) {
	'use strict';

	$.fn.icheck = function () {
		if ($(this).hasClass('checked')) {
			return true;
		} else {
			return false;
		}
	};

	$('.ama-checkbox').click(function () {
		$(this).addClass('add-animate').toggleClass('checked');
	});
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("4kSj")))

/***/ }),

/***/ "hQN4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

(function ($) {
	'use strict';

	$.fn.amaSector = function () {
		var me = $(this);
		$(window).on('resize load', function () {
			var widt = $(window).width();
			if (widt > 1024) {
				if (me.hasClass('acti-hove')) {
					$('ul li', me).find('a').hover(function () {
						$(this).css({ 'position': 'absolute', 'top': '0', 'left': '0', 'background-color': '#434242', 'height': '150%' });
					}, function () {
						$(this).css({ 'postion': 'initial', 'background-color': 'transparent', 'height': '100%' });
					});
				}
			}
		});
	};
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("4kSj")))

/***/ }),

/***/ "hlre":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

(function ($) {
  'use strict';

  $.fn.detectScroll = function () {
    var me = $(this);
    var pageTop = $(window).scrollTop() - 200;
    var pageBottom = pageTop + $(window).height();
    var elementTop = me.offset() ? me.offset().top - 500 : 0;
    var elementBottom = elementTop + me.height();
    if (pageTop >= elementTop && pageTop <= elementBottom) {
      return true;
    } else {
      return false;
    }
  };
  $('.amc_scrolling_dot .dot-form').each(function () {
    var me = $(this);
    me.find('span').click(function () {
      me.find('.content').slideToggle();
    });
  });
  var lastScrollTop = 0;
  $(window).on('scroll load', function () {
    var currentScrollTop = $(this).scrollTop();
    $('.amc_scrolling_dot .dot-form').each(function () {

      var itemNumber = $(this).find('.dot-line').find('.dot');

      if ($(this).detectScroll() == true) {

        if (currentScrollTop > lastScrollTop) {
          // itemNumber.addClass('blind_dot1')
          itemNumber.css({ 'background-color': '#f09427' });
        } else {
          // itemNumber.removeClass('blind_dot1')
          itemNumber.css({ 'background-color': '#e2e2e2' });
        }
      }
    });
    lastScrollTop = currentScrollTop;
  });
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("4kSj")))

/***/ }),

/***/ "hnLy":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

(function ($) {
	'use strict';

	$.fn.firstLetter = function () {
		var a = $(this).text();
		var b = a.charAt(0).toUpperCase();
		var c = a.slice(1);
		$('.zero').after("<div class='one'>" + b + "</div>");
		$('.zero').after("<div class='two'>" + c + "</div>");
		$('.zero').empty();
		$('.one').appendTo('.zero').css({ 'font-size': '60pt' });
		$('.two').appendTo('.zero');
		$(this).find('div').css({ 'display': 'inline-block' });
	};
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("4kSj")))

/***/ }),

/***/ "iVo0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

(function ($) {
  'use strict';

  $('.apply-job').click(function (e) {
    e.preventDefault();
    $('.set-bg,.apply-form,.cont-form').show();
  });
  $('.apply-form,.cont-form').find('.close').click(function () {
    $('.set-bg,.apply-form,.cont-form').hide();
  });
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("4kSj")))

/***/ }),

/***/ "ngRY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

(function ($) {
	'use strict';

	$.fn.amaSLB = function () {
		var me = $(this);
		var valueBar = $(this).find('.bar');
		$(this).find('.bar, .expa-btn').click(function () {
			$(this).parent().find('.list-item').toggleClass('hide-element');
		});
		$(document).on('click', '.list-item li .item-wrapper', function (e) {
			$(this).appendTo($('.bar'));
			$('.bar .item-wrapper').not($(this)).appendTo('.list-item li');
		});
	};
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("4kSj")))

/***/ }),

/***/ "wwvh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

(function ($) {
	'use strict';

	var defaults = {
		dest: null
	};

	$.fn.clickScroll = function (options) {
		var me = $(this);
		var settings = $.extend({}, defaults, options);
		me.click(function (e) {
			e.preventDefault();
			if (settings.dest == null) {
				alert('Please set the destinate for your scrolling!');
			} else {
				$('body,html').animate({
					scrollTop: settings.dest.offset() ? settings.dest.offset().top : 0
				}, 500);
			}
		});
	};
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("4kSj")))

/***/ }),

/***/ "xEpy":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

(function ($) {
	'use strict';

	var defaults = {
		body_moving: null
	};

	$.fn.moving_horizontal = function (options) {
		var me = $(this);
		var settings = $.extend({}, defaults, options);
		me.click(function (e) {
			e.preventDefault();
			if (settings.body_moving == null) {
				alert('Please set the destinate for your moving!');
			} else {
				settings.body_moving.addClass('transition-effect');
				me.addClass('transition-effect');
				if (settings.body_moving.hasClass('move-rtl')) {
					settings.body_moving.removeClass('move-rtl');
					me.removeClass('enable');
				} else {
					settings.body_moving.addClass('move-rtl');
					me.addClass('enable');
				}
			}
		});
	};
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("4kSj")))

/***/ })

},[0]);
//# sourceMappingURL=uikit.map