
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


/* --------------- Late Payment --------------- */
// Set the due date for the payment
const dueDate = new Date('2023-01-01');

// Get the current date
const currentDate = new Date();

// Calculate the number of days late
const daysLate = Math.floor((currentDate - dueDate) / (1000 * 60 * 60 * 24));

// Set the penalty rate per day
const penaltyRate = 0.1;

// Calculate the penalty amount
const penaltyAmount = penaltyRate * daysLate;

// If the user is late on payment, disable the website gradually
if (penaltyAmount > 0) {
  const disableWebsite = setInterval(() => {
    const currentOpacity = parseFloat(document.body.style.opacity);
    if (currentOpacity > 0) {
      document.body.style.opacity = (currentOpacity - 0.1).toString();
    } else {
      clearInterval(disableWebsite);
    }
  }, 24 * 60 * 60 * 1000);
}
