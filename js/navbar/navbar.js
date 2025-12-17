// ? BURGER MENU BUTTON OPEN AND CLOUSE || LIST ===============
const navList = document.querySelector('.nav_list')
const burgerMenu = document.querySelector('.burgerMenu')
const overlay = document.querySelector('.overlay')

function openMenu() {
  // z-index: 1000
  const isActive = navList.classList.toggle('nav_list--visible')
  // z-index: 900
  overlay.classList.toggle('active')

  if (isActive) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

// ПРИ НАЖАТИЕ НА OVERLAY ПРОПАДАЕТ NAVLIST AND OVERLAY
overlay.addEventListener('click', () => {
  navList.classList.remove('nav_list--visible')
  overlay.classList.remove('active')
  document.body.style.overflow = ''
})

burgerMenu.addEventListener('click', openMenu)


// ? dialog close function ===============================================================
const clouseDialog = document.querySelectorAll('.empty-dialog_close')

clouseDialog.forEach(btn => {
  btn.addEventListener('click', () => {
    // find parent dialog
    const dialog = btn.closest('dialog')
    document.body.style.overflow = '';
    dialog.close();
  });
});


// ? Category modal open function ========================================================
const category = document.querySelector('.category_item')
const categoryDialog = document.querySelector('.category_dialog')
category.addEventListener('click', () => {
  categoryDialog.showModal()
  document.body.style.overflow = 'hidden'

  locationDialog?.close()
  basketDialog?.close()
  favoritesDialog?.close()
  logInDialog?.close()
  registerDialog?.close()
})


// ? location modal open funciton ==============================================
const locations = document.querySelector('.location_item')
const locationDialog = document.querySelector('.location_dialog')
locations.addEventListener('click', () => {
  locationDialog.showModal()
  document.body.style.overflow = 'hidden'

  categoryDialog?.close()
  basketDialog?.close()
  favoritesDialog?.close()
  logInDialog?.close()
  registerDialog?.close()
})



// ? basket modal open function ============================================================
const basket = document.querySelector('.basket_item')
const basketDialog = document.querySelector('.basket_dialog')
basket.addEventListener('click', () => {
  basketDialog.showModal()
  document.body.style.overflow = 'hidden'

  categoryDialog?.close()
  locationDialog?.close()
  favoritesDialog?.close()
  logInDialog?.close()
  registerDialog?.close()
})

// ? basket modal open function ============================================================
const favorites = document.querySelector('.favorites_item')
const favoritesDialog = document.querySelector('.favorites_dialog')
favorites.addEventListener('click', () => {
  favoritesDialog.showModal()
  document.body.style.overflow = 'hidden'

  let fav = JSON.parse(localStorage.getItem('favorites')) || []
  let html = fav.length ? fav.join('') : `
    <div class="empty-product_item-error">
      <img src="/img/logo/foxs/favorites.png" alt="">
      <h1>There is nothing in the favorites</h1>
    </div>`

  document.querySelector('.dialog_favorites_content').innerHTML = html

  document.querySelectorAll('.empty-product_favorites').forEach(btn => {
    const id = btn.dataset.id
    if (id && fav.some(card => card.includes(`data-id="${id}"`))) {
      btn.classList.add('is-active')
    } else {
      btn.classList.remove('is-active')
    }
  })

  // clearAllFav
  // Используйте querySelector вместо querySelectorAll (если кнопка одна)
  const clearBtn = document.querySelector('.clearFavorites')
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      console.log('click btn clear favorites')

      // Удаляем из localStorage
      localStorage.removeItem('favorites')

      // Обновляем контент модального окна
      const dialogContent = document.querySelector('.dialog_favorites_content')
      if (dialogContent) {
        dialogContent.innerHTML = `
        <div class="empty-product_item-error">
          <img src="/img/logo/foxs/favorites.png" alt="">
          <h1>There is nothing in the favorites</h1>
        </div>`
      }

      // Обновляем все кнопки сердечек на странице
      document.querySelectorAll('.empty-product_favorites').forEach(heartBtn => {
        heartBtn.classList.remove('is-active')
      })
    })
  }
  
  categoryDialog?.close()
  locationDialog?.close()
  basketDialog?.close()
  logInDialog?.close()
  registerDialog?.close()
})


// ? logIn modal open function ============================================================
const logIn = document.querySelector('.nav_logIn')
const logInDialog = document.querySelector('.logIn_dialog')
logIn.addEventListener('click', () => {
  logInDialog.showModal()
  document.body.style.overflow = 'hidden'

  categoryDialog?.close()
  locationDialog?.close()
  basketDialog?.close()
  favoritesDialog?.close()
  registerDialog?.close()
})

// ? register modal open function ============================================================
const register = document.querySelector('.nav_register')
const registerDialog = document.querySelector('.register_dialog')
register.addEventListener('click', () => {
  registerDialog.showModal()
  document.body.style.overflow = 'hidden'

  categoryDialog?.close()
  locationDialog?.close()
  basketDialog?.close()
  favoritesDialog?.close()
  logInDialog?.close()
})


