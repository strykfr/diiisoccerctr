// form event  
const form = document.querySelector('form')
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const fullName = document.querySelector('#full-name').value;
    const email = document.querySelector('#email').value;
    console.log(fullName);
    console.log(email);

    if (fullName.length >= 6 && email.length >= 6) {
        alert('Thanks for subscribing to our newsletter!')
    } else {
        document.querySelector('.invalid').style.display = 'block';
    }
})

// //nav work
// const hamburgerIcon = document.querySelector('#hamburger-icon')

// form.addEventListener('click', (event) => {
//     console.log(hamburgerIcon);
// })
