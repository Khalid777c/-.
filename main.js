let btnplus = document.querySelector('.btnplus');
let count = document.querySelector('.count');
let btnReset = document.querySelector('.btnreset');
let number = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;

count.innerHTML = number;

function reset() {
    number = 0;
    count.innerHTML = number;
    localStorage.setItem('counter', number);
}

function counter() {
    number++;
    count.innerHTML = number;
    localStorage.setItem('counter', number);
}
