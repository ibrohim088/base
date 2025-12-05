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
  {
    id: 4,
    title: 'товары как в рынке малике, mahsulotlar huddi malika bozoridak, goods like in the Malika market',
    img: 'https://images.uzum.uz/d39p955r1spqpknjar4g/main_page_banner.jpg',
  },
]

const headContent = document.querySelector('.header_content')
const leftArrow = document.querySelector('.left_slide_show_arrow')
const rightArrow = document.querySelector('.right_slide_show_arrow')

let currentIndex = 0

const createImgTeg = document.createElement('img')
createImgTeg.className = 'header_catrgory_img'
headContent.appendChild(createImgTeg)

const uppdateImg = () => {
  createImgTeg.src = categoryes[currentIndex].img
  createImgTeg.alt = categoryes[currentIndex].title
}

uppdateImg()

leftArrow.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + categoryes.length) % categoryes.length
  uppdateImg()
})

rightArrow.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % categoryes.length
  uppdateImg()
})