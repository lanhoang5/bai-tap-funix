"use strict";
// Project Cửa sổ modal
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal =
  document.querySelector(".close-modal");
const btnsOpenModal =
  document.querySelectorAll(".show-modal");

// làm việc với class
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
// Xử lý "Esc" Keypress Event
document.addEventListener("keydown", function (e) {
  if (
    e.key === "Escape" &&
    !modal.classList.contains("hidden")
  ) {
    closeModal();
  }
});
