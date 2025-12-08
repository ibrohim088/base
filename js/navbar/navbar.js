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
})


// ? location modal open funciton ==============================================
const locations = document.querySelector('.location_item')
const locationDialog = document.querySelector('.location_dialog')
locations.addEventListener('click', () => {
  locationDialog.showModal()
  document.body.style.overflow = 'hidden'
})


// ? logIn modal open function ============================================================
const logIn = document.querySelector('.nav_logIn')
const logInDialog = document.querySelector('.logIn_dialog')
logIn.addEventListener('click', () => {
  logInDialog.showModal()
  document.body.style.overflow = 'hidden'
})

// ? register modal open function ============================================================
const register = document.querySelector('.nav_register')
const registerDialog = document.querySelector('.register_dialog')
register.addEventListener('click', () => {
  registerDialog.showModal()
  document.body.style.overflow = 'hidden'
})