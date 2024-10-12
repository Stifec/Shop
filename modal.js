
const modal = document.querySelector('.backdrop');
const modalOpen = document.querySelector('.card');
const modalClose = document.querySelector('.btn-modal-close');
const mod = document.querySelector(".body");

const toggleModal = () => {
    modal.classList.toggle('is-hidden')
    mod.classList.toggle('body-mod')
};



modalOpen.addEventListener('click', toggleModal);
modalClose.addEventListener('click', toggleModal);


let a = 0;
let sugar = 0.5, lemon = 0.5, syrup = 0.5;


let prices = document.getElementsByClassName("total-price");
document.getElementById("200ml").onclick = function (e) {
    a = +(prices[0].getAttribute('base-price') * 1);
    prices[0].innerText = "$" + a.toFixed(2);

}
prices = document.getElementsByClassName("total-price");
document.getElementById("300ml").onclick = function (e) {
    a = +(prices[0].getAttribute('base-price') * 0.5);
    prices[0].innerText = "$" + a.toFixed(2);
}
prices = document.getElementsByClassName("total-price");
document.getElementById("400ml").onclick = function (e) {

    a = +(prices[0].getAttribute('base-price') * 1.5);

    prices[0].innerText = "$" + a.toFixed(2);
}
prices = document.getElementsByClassName("total-price");
document.getElementById("sugar").onclick = function (e) {
    a += sugar;

    prices[0].innerText = "$" + a.toFixed(2);
}
prices = document.getElementsByClassName("total-price");
document.getElementById("lemon").onclick = function (e) {
    a += lemon;

    prices[0].innerText = "$" + a.toFixed(2);

}
prices = document.getElementsByClassName("total-price");
document.getElementById("syrup").onclick = function (e) {
    a += syrup;

    prices[0].innerText = "$" + a.toFixed(2);
}

//  Button SHOW ELSE =============================

let showElse = document.querySelector('.btn-else');