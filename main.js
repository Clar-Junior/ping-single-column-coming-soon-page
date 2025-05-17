const email = document.getElementById('inEmail')
const emailAlert = document.getElementById('emailAlert')
const btnSubmit = document.getElementById('btnSubmit')
const facebookFill = document.getElementById('facebookFill')
const facebookSvg = document.getElementById('facebookSvg')


btnSubmit.addEventListener('click', (e) => {
    e.preventDefault()

    const userEmail = email.value
    if (!validarEmail(userEmail)) {
        console.log('Invalid email address')
        email.classList.remove('outline-1', 'outline-green-500', 'bg-white', 'text-black')
        email.classList.add('outline-1', 'outline-red-500', 'bg-white', 'text-black')
        btnSubmit.classList.add('transition', 'delay-25', 'duration-200', 'ease-in', 'translate-y-5')
        const fragment = document.createDocumentFragment()
        const paragraph = document.createElement('p')
        paragraph.innerText = 'Please provide a valid email address'
        paragraph.classList.add('text-red-500', 'text-[11px]', 'italic')
        fragment.appendChild(paragraph)
        emailAlert.appendChild(fragment)
    }
    else {
        console.log('Valid email address')
        email.classList.remove('outline-1', 'outline-red-500', 'bg-white', 'text-black')
        email.classList.add('outline-1', 'outline-green-500', 'bg-white', 'text-black')
        emailAlert.remove()
        btnSubmit.classList.remove('translate-y-5')
    }


})


// validacao de email via comparacao com expressao regular
function validarEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email)
}


// fazer hover nas redes sociais