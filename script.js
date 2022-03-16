let toggle = document.querySelector('.toggle');
let togglesharing = document.querySelector('.toggleSharing');
let body = document.querySelector('body');
let cowork = document.getElementById('cowork');
let hidden = document.querySelector('.hidden');
let chevron = document.querySelector('.fa-solid fa-chevron-right')

toggle.addEventListener('click', function() {
    body.classList.toggle('open');
})

cowork.addEventListener('mouseover', function () {
  hidden.style.display = "initial";
  chevron.style.transform = "rotate(180deg)";
})
cowork.addEventListener('mouseleave', function () {
  hidden.style.display = "none";
})
hidden.addEventListener('mouseover', function () {
  hidden.style.display = "initial"
})