let s0 = document.getElementById('s0');
let s1 = document.getElementById('s1');
let s2 = document.getElementById('s2');
let s22 = document.getElementById('s22');
let s3 = document.getElementById('s3');
let s4 = document.getElementById('s4');
let s5 = document.getElementById('s5');

let foot = document.getElementById('home-footer');


function onScreen(element) {
    let rect = element.getBoundingClientRect();
    let viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }

window.onscroll = function(p){

    if(window.scrollY){
        if (onScreen(foot)){
            s1.style.height = "0px";
            s2.style.height = "0px";
            s22.style.height = "0px";
            s3.style.height = "0px";
            s4.style.height = "0px";
            s0.style.height = "0px";
        }
        else{
            s1.style.height = "130.5vh";
            s2.style.height = "130.5vh";
            s22.style.height = "130.5vh";
            s3.style.height = "130.5vh";
            s4.style.height = "130.5vh";
            s5.style.height = "130.5vh";
            s0.style.height = "130.5vh";
        }
    }
}

function thing(bool){
    bool ? console.log('yeet') : console.log(`not yeet'`);
}





/*window.onscroll = function(e) {
    if(window.scrollY) {
        if(window.pageYOffset > 50) {
            graphic.style.height = window.innerHeight * .8;
        } else {
            graphic.style.height = window.innerHeight;
        }
    }
}


/*
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-target]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})


closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModalButtons(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}
*/