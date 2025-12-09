const logInInputs = document.querySelectorAll('.logInInput')
const logInBtn = document.querySelector('.logIn_btn')

logInInputs.forEach(logInInput => {

  logInInput.addEventListener('input', () => {
    const value = logInInput.value.replace(/\D/g, '')
    let res = '+'

    for (let i = 0; i < value.length; i++) {
      if (i <= 2) {
        res += value[i]

        if (i === 2) res += ' '

      } else if (i <= 4) {
        res += value[i]

        if (i === 4) res += ' '
      } else if (i < 14) {
        res += value[i]

        if (i === 7 || i === 9) res += '-'
      }
    }

    logInInput.value = res
  })

})