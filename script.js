document.getElementById('menu-icon').addEventListener('click', function () {
    this.classList.toggle('active');
});

window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});

const menuIcon1 = document.getElementById('menu-icon');
const circularMenuIcon1 = document.querySelector('.circular-menu-icon i');

const rotateEntireIcon = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const rotationAngle = scrollY / 7; // You can adjust the rotation speed here

    menuIcon1.style.transform = `rotate(${rotationAngle}deg)`;
    circularMenuIcon1.style.transform = `translate(-50%, -50%) rotate(${140 + rotationAngle}deg)`;
};

window.addEventListener('scroll', rotateEntireIcon);

const menuIcon = document.getElementById('menu-icon');
const circularMenuIcon = document.querySelector('.circular-menu-icon i');
const menuOptions = document.getElementById('menu-options');

menuIcon.addEventListener('click', function () {
    this.classList.toggle('active');

    if (menuOptions.style.display === 'none' || menuOptions.style.display === '') {
        menuOptions.style.display = 'block';
        circularMenuIcon.classList.remove('fa-bars');
        circularMenuIcon.classList.add('fa-times');
    } else {
        menuOptions.style.display = 'none';
        circularMenuIcon.classList.remove('fa-times');
        circularMenuIcon.classList.add('fa-bars');
    }
});

const videoContainer = document.getElementById('video-container');

window.addEventListener('scroll', function () {
    menuIcon.classList.toggle('scrolled', window.scrollY > 600);
});

function setVideoHeight() {
    const windowHeight = window.innerHeight;
    videoContainer.style.height = `${windowHeight}px`;
}

window.addEventListener('resize', setVideoHeight);
setVideoHeight();


let totalSlides=3;
let currentSlide=1;
function prevSlide(currentSlide, totalSlides) {
    document.getElementById(`carousel${currentSlide}`).style.display = 'none';
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides + 1;
    document.getElementById(`carousel${currentSlide}`).style.display = 'flex';
    document.getElementById(`totalSlides${currentSlide}`).innerText = `${currentSlide} / ${totalSlides}`;
}

function nextSlide(currentSlide, totalSlides) {
    document.getElementById(`carousel${currentSlide}`).style.display = 'none';
    currentSlide = (currentSlide % totalSlides) + 1;
    document.getElementById(`carousel${currentSlide}`).style.display = 'flex';
    document.getElementById(`totalSlides${currentSlide}`).innerText = `${currentSlide} / ${totalSlides}`;
}

 
let currentImage = 1;
const totalImages = 3;

function showImage(imageNumber) {
    document.querySelectorAll('.carousel-image').forEach((image, index) => {
        image.style.display = index + 1 === imageNumber ? 'block' : 'none';
    });

    document.getElementById('imageCounter').innerText = `${imageNumber} / ${totalImages}`;
}

function prevImage() {
    currentImage = (currentImage - 2 + totalImages) % totalImages + 1;
    showImage(currentImage);
}

function nextImage() {
    currentImage = (currentImage % totalImages) + 1;
    showImage(currentImage);
}


showImage(currentImage);
