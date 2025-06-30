const modalEl = document.getElementById('videoModal');
const iframe = modalEl.querySelector('iframe');
const src = iframe.getAttribute('src');

modalEl.addEventListener('hide.bs.modal', () => {
    iframe.setAttribute('src', ''); // Vide le src → stoppe la vidéo
});

modalEl.addEventListener('show.bs.modal', () => {
    iframe.setAttribute('src', src); // Recharge la vidéo quand la modal s'ouvre
});

const modalEl1 = document.getElementById('clipModal');
const iframe1 = modalEl1.querySelector('iframe');
const src1 = iframe1.getAttribute('src');

modalEl1.addEventListener('hide.bs.modal', () => {
    iframe1.setAttribute('src', ''); // Vide le src → stoppe la vidéo
});

modalEl1.addEventListener('show.bs.modal', () => {
    iframe1.setAttribute('src', src1); // Recharge la vidéo quand la modal s'ouvre
});