const inputDate = document.querySelector('.inputDate')

inputDate.addEventListener('input', () => {
  let res = ''
  const value = inputDate.value.replace(/\D/g, '')

  for (let i = 0; i < value.length; i++) {
    if (i < 8) {
      res += value[i]

      if(i === 1 || i === 3) res += '.'
    }
  }

  return inputDate.value = res
})