// form event  
const form = document.querySelector('form')
form.addEventListener('submit', (event) => {
    event.preventDefault();
    document.querySelector('.invalid').style.display = 'none';
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