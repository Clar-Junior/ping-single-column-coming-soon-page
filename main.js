const email = document.getElementById('inEmail')
const emailAlert = document.getElementById('emailAlert')
const btnSubmit = document.getElementById('btnSubmit')
const facebookFill = document.getElementById('facebookFill')
const facebookSvg = document.getElementById('facebookSvg')


btnSubmit.addEventListener('click', (e) => {
    e.preventDefault()

    const userEmail = email.value
    if (userEmail == "") {
        console.log('Invalid email address')
        email.classList.remove('outline-1', 'outline-green-500', 'bg-white', 'text-black')
        email.classList.add('outline-1', 'outline-light-red', 'bg-white', 'text-very-dark-blue')
        btnSubmit.classList.add('max-md:transition', 'max-md:delay-25', 'max-md:duration-200', 'max-md:ease-in', 'max-md:translate-y-5')
        const fragment = document.createDocumentFragment()
        const paragraph = document.createElement('p')
        paragraph.innerText = 'Whoops! It looks like you forgot to add your email'
        paragraph.classList.add('text-light-red', 'text-[12px]', 'italic', 'min-md:text-start', 'min-md:px-8')
        fragment.appendChild(paragraph)
        if (emailAlert.childElementCount > 0) {
            emailAlert.innerText = ""
        }
        emailAlert.appendChild(fragment)
    }
    else if (!validarEmail(userEmail)) {
        console.log('Invalid email address')
        email.classList.remove('outline-1', 'outline-green-500', 'bg-white', 'text-black')
        email.classList.add('outline-1', 'outline-light-red', 'bg-white', 'text-very-dark-blue')
        btnSubmit.classList.add('max-md:transition', 'max-md:delay-25', 'max-md:duration-200', 'max-md:ease-in', 'max-md:translate-y-5')
        const fragment = document.createDocumentFragment()
        const paragraph = document.createElement('p')
        paragraph.innerText = 'Please provide a valid email address'
        paragraph.classList.add('text-light-red', 'text-[12px]', 'italic', 'min-md:text-start', 'min-md:px-8')
        fragment.appendChild(paragraph)
        if (emailAlert.childElementCount > 0) {
            emailAlert.innerText = ""
        }
        emailAlert.appendChild(fragment)
    }
    else {
        console.log('Valid email address')
        email.classList.remove('outline-1', 'outline-light-red', 'bg-white', 'text-black')
        email.classList.add('outline-1', 'outline-green-500', 'bg-white', 'text-black')
        emailAlert.remove()
        btnSubmit.classList.remove('max-md:translate-y-5')
    }
})


// validacao de email via comparacao com expressao regular
function validarEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email)
}


// fazer hover nas redes sociais