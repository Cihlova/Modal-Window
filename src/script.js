"use strict";

const modal = document.querySelector(".modal");
const showButtons = document.querySelectorAll(".show-modal");
const closeButtons = document.querySelectorAll(".close-modal");
const overlay = document.querySelector(".overlay");

////// Opening modals with For Loop
// for (let i = 0; i < showButtons.length; i++) {
//   showButtons[i].addEventListener("click", function () {
//     modal.classList.toggle("hidden");
//     overlay.classList.toggle("hidden");
//   });
// }

// Defining the Hidden-toggle function
const hiddenToggle = function () {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

///// Showing modals with For Each
// By clicking the show button
showButtons.forEach((button) => button.addEventListener("click", hiddenToggle));

///// Closing modals with For Each
// I. By clicking the close button
closeButtons.forEach((button) =>
  button.addEventListener("click", hiddenToggle)
);
// II. By clicking anywhere on the overlay background
overlay.addEventListener("click", hiddenToggle);
// III. By clicking anywhere on the overlay background
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});
