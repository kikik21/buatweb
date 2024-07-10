let currentHeroImageIndex = 0;
let currentBannerImageIndex = 0;

const heroImages = ["images/pexels-pavel-danilyuk-7120874-3376909408.webp", "images/pexels-photo-7120409.webp", "images/pexels-yan-krukau-8189630.jpg"];
const bannerImages = ["images/Beranda - Google Chrome 08_07_2024 11_03_57.png", "images/Beranda - Google Chrome 08_07_2024 11_30_10.png", "images/Beranda - Google Chrome 08_07_2024 11_30_19.png"];

const heroImage = document.getElementById("heroImage");
const bannerImage = document.getElementById("bannerImage");

function showNextHeroImage() {
    currentHeroImageIndex = (currentHeroImageIndex < heroImages.length - 1) ? currentHeroImageIndex + 1 : 0;
    heroImage.src = heroImages[currentHeroImageIndex];
}

function showPrevHeroImage() {
    currentHeroImageIndex = (currentHeroImageIndex > 0) ? currentHeroImageIndex - 1 : heroImages.length - 1;
    heroImage.src = heroImages[currentHeroImageIndex];
}

function showNextBannerImage() {
    currentBannerImageIndex = (currentBannerImageIndex < bannerImages.length - 1) ? currentBannerImageIndex + 1 : 0;
    bannerImage.src = bannerImages[currentBannerImageIndex];
}

document.querySelector(".prev-image-button").addEventListener("click", showPrevHeroImage);
document.querySelector(".next-image-button").addEventListener("click", showNextHeroImage);

// Auto-slide functionality
setInterval(showNextHeroImage, 5000); // Change hero image every 5 seconds
setInterval(showNextBannerImage, 7000); // Change banner image every 7 seconds

// Ambil elemen-elemen yang diperlukan
const searchToggle = document.getElementById('searchToggle');
const searchBox = document.getElementById('searchBox');
const closeSearch = document.getElementById('closeSearch');
const searchInput = document.getElementById('searchInput');

// Tambahkan event listener untuk tombol searchToggle
searchToggle.addEventListener('click', function() {
    searchBox.classList.add('open');
    searchInput.focus();
});

// Tambahkan event listener untuk tombol closeSearch
closeSearch.addEventListener('click', function() {
    searchBox.classList.remove('open');
});