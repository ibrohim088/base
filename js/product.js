// ? choose color ============================================================================================================
// ? choose color ============================================================================================================

const colorItems = document.querySelectorAll('.selected_color_item')

const checkSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path
    d="M14.5306 5.03063L6.5306 13.0306C6.46092 13.1005 6.37813 13.156 6.28696 13.1939C6.1958 13.2317 6.09806 13.2512 5.99935 13.2512C5.90064 13.2512 5.8029 13.2317 5.71173 13.1939C5.62057 13.156 5.53778 13.1005 5.4681 13.0306L1.9681 9.53063C1.89833 9.46087 1.84299 9.37804 1.80524 9.28689C1.76748 9.19574 1.74805 9.09804 1.74805 8.99938C1.74805 8.90072 1.76748 8.80302 1.80524 8.71187C1.84299 8.62072 1.89833 8.53789 1.9681 8.46813C2.03786 8.39837 2.12069 8.34302 2.21184 8.30527C2.30299 8.26751 2.40069 8.24808 2.49935 8.24808C2.59801 8.24808 2.69571 8.26751 2.78686 8.30527C2.87801 8.34302 2.96083 8.39837 3.0306 8.46813L5.99997 11.4375L13.4693 3.96938C13.6102 3.82848 13.8013 3.74933 14.0006 3.74933C14.1999 3.74933 14.391 3.82848 14.5318 3.96938C14.6727 4.11028 14.7519 4.30137 14.7519 4.50063C14.7519 4.69989 14.6727 4.89098 14.5318 5.03188L14.5306 5.03063Z"
    fill="#fff" />
</svg>
`

colorItems.forEach(colorItem => {
  colorItem.addEventListener('click', () => {

    // если уже есть SVG — убираем
    if (colorItem.innerHTML.trim() !== '') {
      colorItem.innerHTML = ''
      return
    }

    // убираем SVG у остальных
    colorItems.forEach(item => item.innerHTML = '')

    // добавляем SVG текущему
    colorItem.innerHTML = checkSVG
  })
})

// ? choose size ============================================================================================================
// ? choose size ============================================================================================================

const sizeItems = document.querySelectorAll('.selected_Size_item')

sizeItems.forEach(sizeItem => sizeItem.addEventListener('click', () => {

  if (sizeItem.classList.contains('choose_size')) {
    sizeItem.classList.remove('choose_size')
    return
  }

  sizeItems.forEach(el => el.classList.remove('choose_size'))
  sizeItem.classList.add('choose_size')
}))


// ? one more And one minus =================================================================================================
// ? one more And one minus =================================================================================================

const minus = document.querySelector('.btn_oneMore-minus')
const count = document.querySelector('.btn_oneMore-count')
const plus = document.querySelector('.btn_oneMore-plus')

minus.addEventListener('click', () => {
  let value = Number(count.textContent)

  if (value > 1) {
    count.textContent = value - 1
  }
})

plus.addEventListener('click', () => {
  let value = Number(count.textContent)
  count.textContent = value + 1
})


// ? selected img ==========================================================================================================
// ? selected img ==========================================================================================================


const imgItems = document.querySelectorAll('.img_list_item')
const selectedImgBLock = document.querySelector('.selected_img-block')

const defaultSelectedImg = imgItems[0].querySelector('img')
selectedImgBLock.innerHTML = `<img src="${defaultSelectedImg.src}">`

imgItems.forEach(imgItem => imgItem.addEventListener('click', () => {
  if (imgItem.classList.contains('is-selected_img')) {
    imgItem.classList.remove('is-selected_img')
    return
  }

  imgItems.forEach(el => el.classList.remove('is-selected_img'))
  imgItem.classList.add('is-selected_img')

  const img = imgItem.querySelector('img')
  selectedImgBLock.innerHTML = `<img src="${img.src}">`
}))


// ? is-active_add-cart img ==========================================================================================================
// ? is-active_add-cart img ==========================================================================================================

const isActiveAddCart = document.querySelector('.add_cart')
isActiveAddCart.addEventListener('click', () => {
  if (isActiveAddCart.classList.contains('active_add-cart')) {
    isActiveAddCart.classList.remove('active_add-cart')
  } else { 
    isActiveAddCart.classList.add('active_add-cart')
  }
})
