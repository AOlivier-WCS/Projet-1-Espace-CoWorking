let toggle = document.querySelector('.toggle');
let togglesharing = document.querySelector('.toggleSharing');
let body = document.querySelector('body');
let cowork = document.getElementById('cowork');
let coworkingSpace = document.querySelector('.coworkingSpace ul');
let servicesDeroulant = document.querySelector('.servicesDeroulant ul');
let servicesMenu = document.querySelector('#servicesMenu');

toggle.addEventListener('click', function() {
    body.classList.toggle('open');
})
// version desktop 
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

// version mobile

// cowork.addEventListener('click', function () {
//   if (coworkingSpace.style.display === "none"){
//   coworkingSpace.style.display = "initial";} else {
//     coworkingSpace.style.display = "none"

//   }
// })
// cowork.addEventListener('click', function () {
//   coworkingSpace.style.display = "none";
// })
// coworkingSpace.addEventListener('click', function () {
//   coworkingSpace.style.display = "initial";
// })

// servicesMenu.addEventListener('click', function () {
//   if (servicesDeroulant.style.display === "initial") {
//     coworkingSpace.style.display = "none" } else {
//       coworkingSpace.style.display = "initial"
//     }
// })
// servicesMenu.addEventListener('click', function () {
//   servicesDeroulant.style.display = "none";
// })
// servicesDeroulant.addEventListener('click', function () {
//   servicesDeroulant.style.display = "initial";
// })
