
let source = document.querySelector(".feedback__dates").innerHTML;
let template = Handlebars.compile(source);
let context = {
  feedbacks: [
    {
      imagePath: "feedback-1",
      name: "Влад Гончаров",
      link: "vk.com/ex3der",
      text: "Предсознательное иллюстрирует девиантный филогенез. Восприятие, на первый взгляд, отчуждает генезис. Филогенез, например, слабопроницаем. Действие притягивает депрессивный инсайт.",
    },
    {
      imagePath: "feedback-2",
      name: "Ваня Мирошников",
      link: "vk.com/id16362672",
      text: "Предсознательное иллюстрирует девиантный филогенез. Восприятие, на первый взгляд, отчуждает генезис. Филогенез, например, слабопроницаем. Действие притягивает депрессивный инсайт.",
    },
    {
      imagePath: "feedback-3",
      name: "Алексей Волков",
      link: "vk.com/asgalex",
      text: "Предсознательное иллюстрирует девиантный филогенез. Восприятие, на первый взгляд, отчуждает генезис. Филогенез, например, слабопроницаем. Действие притягивает депрессивный инсайт.",
    },
    {
      imagePath: "feedback-2",
      name: "Ваня Мирошников",
      link: "vk.com/id16362672",
      text: "Предсознательное иллюстрирует девиантный филогенез. Восприятие, на первый взгляд, отчуждает генезис. Филогенез, например, слабопроницаем. Действие притягивает депрессивный инсайт.",
    },
  ]
};
let html = template(context);
$(".feedback__list").append(html);

// Слайдер
let elements = $('.feedback__list').find('.feedback__item');
if (elements.length >= 3 ){
	$('.feedback__list').slick({
		infinite: true,
		slidesToShow: 3,
		prevArrow: '<button class="slider__button slider__button--prev slick-arrow clients__prevBtn" aria-label="Назад"></button>',
		nextArrow: '<button class="slider__button slider__button--next slick-arrow clients__nextBtn" aria-label="Вперёд"></button>',
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
				}
      },
      // {
			// 	breakpoint: 640,
			// 	settings: {
			// 		slidesToShow: 2,
			// 	}
      // },
      {
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
} else {
	elements.each(function(){$(this).addClass('slick-slide')})
}
