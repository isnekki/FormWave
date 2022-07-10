const emailInput = document.getElementById("email")
const passwordInput = document.getElementById("password")

const emailSpan = document.querySelector('.emailSpan')
const passwordSpan = document.querySelector('.passwordSpan')

const emailPlaceholder = 'Email'
const passwordPlaceholder = 'Password'

emailPlaceholder.split('').forEach(letter => {
    const emailLetter = document.createElement('span')
    emailLetter.textContent = letter
    emailLetter.classList.add(`emailLetter`)
    emailSpan.appendChild(emailLetter)
})

passwordPlaceholder.split('').forEach(letter => {
    const passwordLetter = document.createElement('span')
    passwordLetter.textContent = letter
    passwordLetter.classList.add(`passwordLetter`)
    passwordSpan.appendChild(passwordLetter)
})

const focusHandler = (e) => {
    if (e.target.type === 'email') {
        const letters = document.querySelectorAll('.emailLetter')
        let i = 0
        const interval = setInterval(() => {
            letters.item(i).classList.toggle('hovered')
            i++
            if (i >= emailPlaceholder.length) return clearInterval(interval)
        }, 100)
        return
    }
    const letters = document.querySelectorAll('.passwordLetter')
    let i = 0
    const interval = setInterval(() => {
        letters.item(i).classList.toggle('hovered')
        i++
        if (i >= passwordPlaceholder.length) return clearInterval(interval)
    }, 100)
}

emailInput.addEventListener('focusin', focusHandler)
passwordInput.addEventListener('focusin', focusHandler)
emailInput.addEventListener('focusout', focusHandler)
passwordInput.addEventListener('focusout', focusHandler)