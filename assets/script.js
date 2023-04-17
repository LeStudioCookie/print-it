const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


const banner = document.getElementById('banner');
const bannerImg = document.querySelector('.banner-img');
const dotContainer = document.querySelector('.dots');

let slideIndex = 0;
let timer;

//Affiche la slide courante
function showSlide() {
    bannerImg.setAttribute('src', `./assets/images/slideshow/${slides[slideIndex].image}`);
    banner.querySelector('p').innerHTML = slides[slideIndex].tagLine;
    
    //Mise à jour des dots
    dotContainer.querySelectorAll('.dot').forEach((dot, index) => {
        if (index === slideIndex) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    });
}

//Fonction pour avancer ou reculer d'une slide
function changeSlide(n) {
    slideIndex += n;

    //Gestion du défilement infini
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlide();
}

//Initialisation du carrousel
function initCarousel() {
    //Création des dots
    slides.forEach(() => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dotContainer.appendChild(dot);
    });

    //Affichage de la première slide
    showSlide();

    //Ajout des EventListener sur les flèches
    document.querySelectorAll('.arrow_left').forEach(occurence => {
        occurence.addEventListener('click', () => {
            console.log('arrow_left');
			clearInterval(timer);
            changeSlide(-1);
            timer = setInterval(() => {
                changeSlide(1);
            }, 5000);
        });
    });

    document.querySelectorAll('.arrow_right').forEach(occurence => {
        occurence.addEventListener('click', () => {
            console.log('arrow_right');
			clearInterval(timer);
            changeSlide(1);
            timer = setInterval(() => {
                changeSlide(1);
            }, 5000);
        });
    });

    //Défilement automatique toutes les 5 secondes
    timer = setInterval(() => {
        changeSlide(1);
    }, 5000);
}

initCarousel();