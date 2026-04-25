
//Demo vfx
const modalEl = document.getElementById('videoModal');
const iframe = modalEl.querySelector('iframe');
const src = iframe.getAttribute('src');

modalEl.addEventListener('hide.bs.modal', () => {
    iframe.setAttribute('src', ''); // Vide le src → stoppe la vidéo
});

modalEl.addEventListener('show.bs.modal', () => {
    iframe.setAttribute('src', src); // Recharge la vidéo quand la modal s'ouvre
});

//Mike-a-Rona
const modalEl2 = document.getElementById('mikearonaModal');
const iframe2 = modalEl2.querySelector('iframe');
const src2 = iframe2.getAttribute('src');

modalEl2.addEventListener('hide.bs.modal', () => {
    iframe2.setAttribute('src', ''); // Vide le src → stoppe la vidéo
});

modalEl2.addEventListener('show.bs.modal', () => {
    iframe2.setAttribute('src', src2); // Recharge la vidéo quand la modal s'ouvre
});

//Rona Laval
const modalEl3 = document.getElementById('ronalavalModal');
const iframe3 = modalEl3.querySelector('iframe');
const src3 = iframe3.getAttribute('src');

modalEl3.addEventListener('hide.bs.modal', () => {
    iframe3.setAttribute('src', ''); // Vide le src → stoppe la vidéo
});

modalEl3.addEventListener('show.bs.modal', () => {
    iframe3.setAttribute('src', src3); // Recharge la vidéo quand la modal s'ouvre
});

//MESS
const modalEl4 = document.getElementById('messModal');
const iframe4 = modalEl4.querySelector('iframe');
const src4 = iframe4.getAttribute('src');

modalEl4.addEventListener('hide.bs.modal', () => {
    iframe4.setAttribute('src', ''); // Vide le src → stoppe la vidéo
});

modalEl4.addEventListener('show.bs.modal', () => {
    iframe4.setAttribute('src', src4); // Recharge la vidéo quand la modal s'ouvre
});