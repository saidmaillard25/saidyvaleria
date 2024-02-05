const confirmModal = document.getElementById("myModal");
const btnConfirmModal = document.getElementById("myBtn");
const btnConfirmClose = document.getElementById('btn-confirm-close')

const modalGift = document.getElementById("myModal2");
const btonGiftModal = document.getElementById("myBtn2");
const btnGiftClose = document.getElementById('btn-gift-close')

btnConfirmModal.onclick = function() {
    confirmModal.style.display = "block";
}

btnConfirmClose.onclick = function() {
    confirmModal.style.display = "none";
}

btonGiftModal.onclick = function() {
    modalGift.style.display = "block";
}

btnGiftClose.onclick = function() {
    modalGift.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modalGift) {
        modalGift.style.display = "none";
    }

    if (event.target == confirmModal) {
        confirmModal.style.display = "none";
    }
}