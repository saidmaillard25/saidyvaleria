const buildModal = (modalId, btnId, btnCloseId) => {
  const modal = document.querySelector(modalId);
  const btn = document.querySelector(btnId);
  const btnClose = document.querySelector(btnCloseId);

  btn.addEventListener("click", () => {
    modal.showModal();
  });

  btnClose.addEventListener("click", () => {
    modal.close();
  });
}


buildModal('#modal-confirm', "#btn-confirm-open", "#btn-confirm-close")
buildModal('#modal-gift', "#btn-gitf-open", "#btn-gift-close")