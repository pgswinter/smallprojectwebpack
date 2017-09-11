(function($){
	'use strict';

	var defaults = {
		click_button: null,
		active_class: null,
		icon_arrow: null
	}
	$.fn.expandDIV = function(options){
		var me = $(this);
		var settings = $.extend({},defaults,options);
		settings.click_button.click(function(e){
			e.preventDefault();
			settings.active_class.toggleClass('active');
			if(settings.icon_arrow.hasClass('fa-angle-down')){
				settings.icon_arrow.removeClass('fa-angle-down');
				settings.icon_arrow.addClass('fa-angle-right');
			}
			else{
				settings.icon_arrow.removeClass('fa-angle-right');
				settings.icon_arrow.addClass('fa-angle-down');
			}
		})
	}

	$.fn.expaVert = function(){
		var me = $(this);
		me.siblings('.img-wrap').find('.expa-fram-btn').click(function(){
				me.slideToggle();
				$(this).toggleClass('active');
		});
	}

	$.fn.expaVertSumm = function(){
		var me = $(this);
		me.siblings('.img-wrap').find('.expa-fram-btn').click(function(){
				me.find('p').slideToggle();
				$(this).toggleClass('active');
		});
	}
	$.fn.expaArti = function(e){
		var me = $(this);
		$('> figure', me).each(function(){
			var meFigu = $(this);
			$('.expa-fram-btn',meFigu).click(function(e){
				$('.expa-fram p',meFigu).slideToggle();
				$(this).toggleClass('active');
			});
			$('.titl1',meFigu).click(function(e){
				e.preventDefault();
				$('.expa-fram p',meFigu).slideToggle();
				$(this).toggleClass('active');
			});
		});
	};

	$.fn.expandDetail = function(){
		var me = $(this);
		me.find('.block').each(function(){
			$(this).click(function(){

				if($(this).hasClass('left')){
					if($(this).siblings('.detail-wrap.center').hasClass('active')){
						$(this).siblings('.detail-wrap.center').removeClass('active');
						$(this).parents('.wrapper').find('.block').removeClass('active');
					}
					if($(this).siblings('.detail-wrap.right').hasClass('active')){
						$(this).siblings('.detail-wrap.right').removeClass('active');
						$(this).parents('.wrapper').find('.block').removeClass('active');
					}
					if($(this).siblings('.detail-wrap.left').hasClass('active')){
						$(this).siblings('.detail-wrap.left').removeClass('active');
						$(this).parents('.wrapper').find('.block').removeClass('active');
					}
					else{
						$(this).siblings('.detail-wrap.left').addClass('active');
						$(this).addClass('active');
					}
				}
				else if($(this).hasClass('center')){
					if($(this).siblings('.detail-wrap.left').hasClass('active')){
						$(this).siblings('.detail-wrap.left').removeClass('active');
						$(this).parents('.wrapper').find('.block').removeClass('active');
					}
					if($(this).siblings('.detail-wrap.right').hasClass('active')){
						$(this).siblings('.detail-wrap.right').removeClass('active');
						$(this).parents('.wrapper').find('.block').removeClass('active');
					}
					if($(this).siblings('.detail-wrap.center').hasClass('active')){
						$(this).siblings('.detail-wrap.center').removeClass('active');
						$(this).parents('.wrapper').find('.block').removeClass('active');
					}
					else{
						$(this).siblings('.detail-wrap.center').addClass('active');
						$(this).addClass('active');
					}
				}
				else{
					if($(this).siblings('.detail-wrap.center').hasClass('active')){
						$(this).siblings('.detail-wrap.center').removeClass('active');
						$(this).parents('.wrapper').find('.block').removeClass('active');
					}
					if($(this).siblings('.detail-wrap.left').hasClass('active')){
						$(this).siblings('.detail-wrap.left').removeClass('active');
						$(this).parents('.wrapper').find('.block').removeClass('active');
					}
					if($(this).siblings('.detail-wrap.right').hasClass('active')){
						$(this).siblings('.detail-wrap.right').removeClass('active');
						$(this).parents('.wrapper').find('.block').removeClass('active');
					}
					else{
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
	function letMovingAndActive(movingDiv, needActiveDiv){
		if($(window).width() >= 1136){
			movingDiv.appendTo(needActiveDiv.parent()).addClass('wasMoved');
		} else{
			movingDiv.insertAfter(needActiveDiv).addClass('wasMoved');
		}
		needActiveDiv.addClass('active');
	}

	// Checking active if any "li" has alread "active" class
	function checkingActivedDivAndWasMovedDiv(activedDiv,wasMovedDiv){
		if(activedDiv.length > 0){
			// To return original position and remove "wasMoved" class
			wasMovedDiv.appendTo(activedDiv).removeClass('wasMoved');
			// To remove "active" class
			activedDiv.removeClass('active');
		}
	}
	
	$.fn.singleExpandDOD21 = function(){
		var me = $(this);

		me.find('.block2').each(function(){
			$(this).click(function(e){
				e.preventDefault();

				var activedDiv 	=	$(this).siblings('.active'),
					activeDiv 	= 	$(this),
					movingDiv 	= 	$(this).find('> .detail-wrap2'),
					movedDiv 	= 	$(this).siblings('.wasMoved')

				if(!$(this).hasClass('active')){
					// To return original position
					checkingActivedDivAndWasMovedDiv(activedDiv,movedDiv);
					// Add new class active
					letMovingAndActive(movingDiv, activeDiv);
					// Split width to balace
					$(this).siblings('.wasMoved').balanceItemOfBar({
						parent: $('.the_devide.lv3'),
						children: $('.item.block3')
					});
				}
				else{
					activedDiv = $(this);
					checkingActivedDivAndWasMovedDiv(activedDiv, movedDiv);
				}

			})
		})
	}

	$.fn.singleExpandDOD2 = function(){
		var me = $(this);

		me.find('.block').each(function(i){
			// Set active for first block. Just APPLY FOR DESKTOP
			if($(window).width() >= 1136){
				if(i==0){
					var firstDiv = $(this),
						moveOutDiv = $(this).find('> .detail-wrap');
					moveOutDiv.find('.block2').each(function(j){
						if(j==0){
							var firstSubDiv = $(this),
								moveOutSubDiv = $(this).find('> .detail-wrap2');
							letMovingAndActive(moveOutSubDiv,firstSubDiv)
						}
					})
					// Add new class active
					letMovingAndActive(moveOutDiv,firstDiv)

					// Split width to balace
					$('.wasMoved').balanceItemOfBar({
						parent: $('.the_devide.content'),
						children: $('.item.content')
					});
				}
			}

			$(this).click(function(e){
				e.preventDefault();
				// Naming item, sub item, content, sub content
				var needActiveDiv 	= 	$(this),
					movingDiv 		= 	$(this).find('> .detail-wrap'),
					wasMovedSubDiv 	= 	$(this).siblings('.wasMoved').find('.active').siblings('.wasMoved'),
					activedSubDiv 	= 	$(this).siblings('.wasMoved').find('.active'),
					wasMovedDiv 	= 	$(this).siblings('.wasMoved'),
					activedDiv 		= 	$(this).siblings(".active");

				if(!$(this).hasClass('active')){
					// Check SUB DIV: if already other div has .active. To return original position
					checkingActivedDivAndWasMovedDiv(activedSubDiv,wasMovedSubDiv)
					// Check MAIN DIV: if already other div has .active. To return original position
					checkingActivedDivAndWasMovedDiv(activedDiv,wasMovedDiv);
					// Add new class active
					letMovingAndActive(movingDiv, needActiveDiv);

					// Balance width item
					$(this).siblings('.wasMoved').balanceItemOfBar({
						parent: $('.the_devide.content'),
						children: $('.item.content')
					});
				}
				else{
					// Check SUB DIV: To return original position
					checkingActivedDivAndWasMovedDiv(activedSubDiv,wasMovedSubDiv);
					// Check MAIN DIV: To return original position
					activedDiv = $(this);
					checkingActivedDivAndWasMovedDiv(activedDiv,wasMovedDiv);
				}

			});
		});
	}
	// ***** END DOD PAGE ***** //
})(jQuery);