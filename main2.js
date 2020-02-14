let password = prompt('Please enter a password');
let correctPassword = 'Logos2019';
let attempt = 3;

if (password === correctPassword) {
    document.write(`<h2>Ласкаво просимо на сайт!</h2>`);
} else if (password !== correctPassword) {
    while (password !== correctPassword && attempt>=1) {
        alert(`Пароль невірний. У вас залишилося ${attempt} спроб`);
        attempt -= 1
        password = prompt('Please enter a password');
} 
if (password === correctPassword) {
    document.write(`<h2>Ласкаво просимо на сайт!</h2>`)
        } else {document.write(`<h2>Будь ласка, спробуйте пізніше</h2>`)
} 
} 

