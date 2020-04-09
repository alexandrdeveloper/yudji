$(document).ready(function(){
	const winWidth = $(window).innerWidth();
/*********** Слайдеры  ************/
	if (winWidth < 992 && winWidth > 319) {
		const catSlider = $('.category__item-slider');		
			
			const catSlide = catSlider.find('.category-item');
			catSlider.removeClass('row');
			catSlide.removeClass('col-md-6').removeClass('col-lg-3').removeClass('col-sm-12');
			catSlide.css({
				'max-width' : 'none',
				'margin-top' : '20px',
				'margin-bottom' : '15px',
				'margin-right' : '5px',
				'margin-left' : '5px',

			});	
		
		catSlider.slick({
			settings: 'unslick',
			responsive: [{
				
			
			
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					centerMode: true

				}
			}, {
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					centerMode: true
					
				}
			}, {
				breakpoint: 319,
				settings: 'unslick'
			}]
		});
	}

	/*********** Перенос фильтра сайдбара в main *********/

	const mainFilter = $('.main__filter');

	let sbFilter = $('.sbfilter').html();		
	mainFilter.html(sbFilter);

	/*if (winWidth < 998) {
		

		const rangeSlider = $('.range-bar');
		const sliderMin = $('#minValue').data('min');
		const sliderMax = $('#maxValue').data('max');

		$('#minValue').val(sliderMin);
		$('#maxValue').val(sliderMax);
		
		rangeSlider.slider({
	      range: true,
	      min: sliderMin,
	      max: sliderMax,
	      values: [sliderMin, sliderMax],
	      slide: function( event, ui ) {
	        $( "#minValue" ).val(ui.values[ 0 ]);
	        $( "#maxValue" ).val(ui.values[ 1 ]);
	      }
	    });
	}*/
	
	/********** Слайдер главного баннера  **********/
	const headerBg = $('.header__slider');

	headerBg.slick({
		slidesToShow : 1,
		fade : true,
		autoplay : true,
		arrows : false,
		dots : true
	});

	/******* Открытие мобильного меню *********/

	const burger = $('.nav-toggle');
	const dropDown = $('.navbar__nav');


	 
		burger.click(function() {
			burger.toggleClass('nav-toggle_active');
			dropDown.slideToggle(300);			
		});
	

	/***** Фильтр 2 ****/ 



	
	

	/******* Фильтр *******

	const sbFilterInput = $('.sbfilter__list input');	

	sbFilterInput.on('click', function(e) {
		let filterClass = $(this).attr('filter-value');		
		filteredItem = $('.category__item-list').find('.' + filterClass);
		console.log(filteredItem);
		if( e.target.checked ) {
			filteredItem.show();
		} else {
			$(this).attr('checked');
			filteredItem.hide();
		} 


	});

	let sbFilterList = $('.sbfilter__list');

	let sbFilterReset = sbFilterList.find('.sbfilter__reset');
	sbFilterReset.on('click', function(e) {
		e.preventDefault();		
		$('.category-item').show();
		sbFilterInput.prop('checked', true);
	}); **/

	
	/******** Диапазон значений **********/
	
	const rangeSlider = $('.range-bar');
	const sliderMin = $('#minValue').data('min');
	const sliderMax = $('#maxValue').data('max');	

	$('#minValue').val(sliderMin);
	$('#maxValue').val(sliderMax);
	
	rangeSlider.slider({
      range: true,
      min: sliderMin,
      max: sliderMax,
      values: [sliderMin, sliderMax],
      slide: function( event, ui ) {
        $( "#minValue" ).val(ui.values[ 0 ]);
        $( "#maxValue" ).val(ui.values[ 1 ]);       

      }
    });  

	/******** Input Number ********/

	$(function() {

	(function quantityProducts() {
		var quantityArrowMinus = $(".quantity__minus");
		var quantityArrowPlus = $(".quantity__plus");
		var quantityNum = $(".quantity__input");

		quantityArrowMinus.click(quantityMinus);
		quantityArrowPlus.click(quantityPlus);

	function quantityMinus() {
      var $quantityNum = $(this).siblings('.quantity__input');
      if ($quantityNum.val() > 1) {
        $quantityNum.val(+$quantityNum.val() - 1);
      }
    }

    function quantityPlus() {
      var $quantityNum = $(this).siblings('.quantity__input');
      $quantityNum.val(+$quantityNum.val() + 1);
    }
  })();

  	

  	/********** Табы личного кабинета  *********/
  	const acTabToggle = $('.account__item-head');
  	const acTabContent = $('.account__item-content');
  	
  	acTabToggle.on('click', tabToggle);

  	function tabToggle() {  

  		if ($(this).hasClass('account__item-head_active')) {
  			$(this).removeClass('account__item-head_active');
			$(this).next().slideUp(600);
  		} else {
  			acTabContent.not($(this).next()).slideUp(300);
	  		$(this).next().slideToggle(600);
	  		acTabToggle.removeClass('account__item-head_active');
	  		$(this).toggleClass('account__item-head_active');
	  		};
  		}		
	  			
	});		
	

	/************ Всплывающее окно для входа или выхода с аккаунта ***********/
	const enterToggle = $('.account-drop');
	const enterPopup = $('.account-popup');

	enterToggle.on('click', function() {
		if ($('.account-popup').hasClass('account-popup_visible')){
			enterPopup.removeClass('account-popup_visible');
			enterPopup.fadeOut(300);
		} else {
			enterPopup.toggleClass('account-popup_visible');
			enterPopup.fadeIn(300);
		}
	});

		$(document).mouseup(function (e) {
	    var container = $(".account-popup");
	    if (container.has(e.target).length === 0){
	        container.hide();
	    }
	});
	/*********** Табы сайдбара **********/
	const sbTab = $('.sbfilter__section');
  	const sbTabToggle = sbTab.find('.sbfilter__title');
  	const sbTabContent = sbTabToggle.find('.sbfilter__list');

  	sbTabToggle.on('click', sbToggle);

  	function sbToggle() {
  		$(this).toggleClass('sbfilter__title_active');
  		sbTabContent.not($(this).next()).slideUp(200);
  		$(this).next().slideToggle(600);

  	};




});