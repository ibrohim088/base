const fullName = document.querySelector('.fullname')
fullName.addEventListener('input', () => {
  const name = fullName.value.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')

  return fullName.value = name
})

