const confirmModal = document.getElementById("myModal");
const btnConfirmModal = document.getElementById("myBtn");
const btnConfirmClose = document.getElementById('btn-confirm-close')

const modalGift = document.getElementById("myModal2");
const btonGiftModal = document.getElementById("myBtn2");
const btnGiftClose = document.getElementById('btn-gift-close')
const btnCloseM1 = document.getElementById('btn-close-m1')
const btnCloseM2 = document.getElementById('btn-close-m2')

const restarConfirmForm = () => {
    document.getElementById("fname").value = ''
    document.getElementById('pass').textContent = '0'
}

btnConfirmModal.onclick = function() {
    confirmModal.style.display = "block";
}

btnConfirmClose.onclick = function() {
    confirmModal.style.display = "none";
    restarConfirmForm();
}

btonGiftModal.onclick = function() {
    modalGift.style.display = "block";
}

btnGiftClose.onclick = function() {
    modalGift.style.display = "none";
}

btnCloseM2.onclick = function() {
    modalGift.style.display = "none";
}

btnCloseM1.onclick = function() {
    confirmModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modalGift) {
        modalGift.style.display = "none";
    }

    if (event.target == confirmModal) {
        confirmModal.style.display = "none";
        restarConfirmForm();
    }
}

