const categoryes = [
  {
    id: 1,
    title: 'для спорта, for sports, sport uchun',
    img: 'https://images.uzum.uz/d0cs058s9rf1gld5q1ug/main_page_banner.jpg',
  },
  {
    id: 2,
    title: 'apply, iphone, айфон',
    img: 'https://images.uzum.uz/d4n7c8dsp2tr82i86ubg/main_page_banner.jpg',
  },
  {
    id: 3,
    title: 'товары как в рынке малике, mahsulotlar huddi malika bozoridak, goods like in the Malika market',
    img: 'https://images.uzum.uz/d39p955r1spqpknjar4g/main_page_banner.jpg',
  },

]


const headContent = document.querySelector('.header_slide_show')
const categoryesHTML = categoryes.map(categorye => `<img class='header_catrgory_img' src="${categorye.img}" alt="">`).join('')
headContent.innerHTML = categoryesHTML

$(function () {
  $('.header_slide_show').slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {}
      }
    ]
  });

  $('.left_slide_show_arrow').on('click', (e) => {
    e.preventDefault()
    $('.header_slide_show').slick('slickPrev')
  })

  $('.right_slide_show_arrow').on('click', (e) => {
    e.preventDefault()
    $('.header_slide_show').slick('slickNext')
  })
});