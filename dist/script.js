

/* ----------------- Modal Js ----------------- */
const button = document.querySelector('.nav__btn a');
const modalWrapper = document.querySelector('.modal-wrapper');
const closeModalButton = document.querySelector('.close-modal');

button.addEventListener('click', function(event) {
  event.preventDefault();
  modalWrapper.style.display = 'block';
});

closeModalButton.addEventListener('click', function() {
  modalWrapper.style.display = 'none';
});


/* --------------- Modal Js Ends -------------- */



