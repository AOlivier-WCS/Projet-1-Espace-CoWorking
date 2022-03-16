let toggle = document.querySelector('.toggle');
let togglesharing = document.querySelector('.toggleSharing');
let body = document.querySelector('body');
let cowork = document.getElementById('cowork');
let coworkingSpace = document.querySelector('.coworkingSpace');
let servicesDeroulant = document.querySelector('.servicesDeroulant');
let servicesMenu = document.querySelector('#servicesMenu');

toggle.addEventListener('click', function() {
    body.classList.toggle('open');
})

cowork.addEventListener('mouseover', function () {
  coworkingSpace.style.display = "initial";
})
cowork.addEventListener('mouseleave', function () {
  coworkingSpace.style.display = "none";
})
coworkingSpace.addEventListener('mouseover', function () {
  coworkingSpace.style.display = "initial";
})
servicesMenu.addEventListener('mouseover', function () {
  servicesDeroulant.style.display = "initial";
})
servicesMenu.addEventListener('mouseleave', function () {
  servicesDeroulant.style.display = "none";
})
servicesDeroulant.addEventListener('mouseover', function () {
  servicesDeroulant.style.display = "initial";
})