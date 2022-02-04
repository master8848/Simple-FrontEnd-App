'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const showModal = document.querySelectorAll('.show-modal');
const closeM = document.querySelector('.close-modal');
const showM = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const hideM = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < showModal.length; i++)
  showModal[i].addEventListener('click', showM);

closeM.addEventListener('click', hideM);
overlay.addEventListener('click', hideM);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) hideM();
});
