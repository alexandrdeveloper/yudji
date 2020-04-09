

document.addEventListener('DOMContentLoaded', () => {
var mainFilter = $('.main__filter');
var sbFilter = $('.sbfilter');		
sbFilter.clone().appendTo(mainFilter);
/*************************  Функция фильтра диапазона значений  ****************************/

	var rangeSlider = document.getElementById('rangebar'); // Блок в котором размещен слайдер
	noUiSlider.create(rangeSlider, {
		start: [100, 500], // Стартовые значения
		connect: true, 
		step: 1,
		range: {
			'min' : 100,
			'max' : 500
		},

		format: {
			to: function (value) {
				return parseInt(value);
			},
			from: function(value) {
				return parseInt(value);
			}
		}
	});

	var rangeMin = document.getElementById('minValue'); // Инпут минимального значения
	var rangeMax = document.getElementById('maxValue'); // Инпут максимального значения
	var rangeValues = [rangeMin, rangeMax];

	rangeSlider.noUiSlider.on('update', (values, handle) => { // Вставка значений в инпуты
		
		rangeValues[handle].value  = values[handle];
		console.log(rangeValues.value);
	});

	rangeMax.addEventListener('change', function () {// Получение значения при вводе с инпута максимального значения
	    rangeSlider.noUiSlider.set([null, this.value]);
	});
	rangeMin.addEventListener('change', function () {// Получение значения при вводе с инпута минимального значения
	    rangeSlider.noUiSlider.set([this.value, null]);
	});

	
});

$(document).ready(function(){	
	const winWidth = $(window).innerWidth();

	



	
 
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

		
	};

	

	

	
	
	
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
	
	/* Filter */
	var filterCont = $('.category__item-list');

	var sbfilterPoint = $('.sbfilter__point');
	var filterClass =  sbfilterPoint.attr('filter-data');

	sbfilterPoint.on('click', function(e) {

		e.preventDefault();
		var filterClass =  $(this).attr('filter-data');
		var filterItem = filterCont.find('.' + filterClass); 
		if ($(this).hasClass('sbfilter__point_active') && filterClass !== 'all') {
			$(this).removeClass('sbfilter__point_active');

			filterItem.fadeOut(300);
		} else {
			$(this).addClass('sbfilter__point_active');
			filterItem.fadeIn(300);
		};
		if (filterClass == 'all') {	
			$('.sbfilter__point').addClass('sbfilter__point_active');				
			filterCont.find('.category-item').fadeIn(100);
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





