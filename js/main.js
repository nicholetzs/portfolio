//Declarando Variáveis
var btnContact = document.querySelector('.nn-btn-contact');
var toggleModal = document.querySelectorAll('.nn-toggle-modal');
var toggleMenu = document.querySelectorAll('.nn-toggle-menu');
var menuMobile = document.querySelector('.nn-menu-mob');
var btnMenuMobIcon = document.querySelector('.nn-btn-menu-mob ion-icon');

//Page Preloader
window.addEventListener('load', function () {
    var pagePreloder = document.querySelector('.nn-preloader');
    
    setTimeout(function () {
        pagePreloder.style.display = 'none';
        pagePreloder.classList.add('nn-fade-out');
    }, 3000);
});

//Abrindo e Fechando Informações de Contato
btnContact.addEventListener('click', function () {
    var boxContact = document.querySelector('.nn-contact-info');
    boxContact.classList.toggle('nn-is-open');
    this.classList.toggle('nn-change-icon');
});

//Abrindo e Fechando o Menu Mobile
for (var m = 0; m < toggleMenu.length; m++) {
    toggleMenu[m].addEventListener('click', function () {
        var overlay = document.querySelector('.nn-menu-overlay');
        overlay.classList.toggle('nn-is-open');
        menuMobile.classList.toggle('nn-menu-is-closed');
        menuMobile.classList.toggle('nn-menu-is-open');

        var icon = btnMenuMobIcon.getAttribute('name');

        if (icon === 'menu') {
            btnMenuMobIcon.setAttribute('name', 'close');
        } else {
            btnMenuMobIcon.setAttribute('name', 'menu');
        }

    });
}



//Abrindo e Fechando o Modal de Orcamento
for (var i = 0; i < toggleModal.length; i++) {
    toggleModal[i].addEventListener('click', function () {
        var modalOrcamento = document.querySelector('#nn-modal-orcamento');
        var overlay = document.querySelector('.nn-overlay');
        overlay.classList.toggle('nn-is-open');
        modalOrcamento.classList.toggle('nn-is-open');
        modalOrcamento.classList.toggle('nn-slide-top-in');
    });
}


// Animando Elementos da Topbar
var triggerTopbar = document.querySelector('.nn-trigger-topbar');
var topbar = document.querySelector('.nn-topbar');
var logo = document.querySelector('.nn-logo');
var waypoint = new Waypoint({
    element: triggerTopbar,
    handler: function () {
        topbar.classList.toggle('nn-topbar-bg');
        logo.classList.toggle('nn-logo-shorten');
        logo.classList.toggle('nn-logo-big');
    },
    offset: '50px'
});
