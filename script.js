function openLetter() {
    document.querySelector('.notification').classList.add('hidden');
    document.getElementById('letterPage').classList.remove('hidden');
}

function playMusic() {
    document.getElementById('music').play();
}

function nextPage() {
    document.getElementById('letterPage').classList.add('hidden');
    document.getElementById('questionPage').classList.remove('hidden');
}

function answerYes() {
    document.getElementById('questionPage').classList.add('hidden');
    document.getElementById('finalPage').classList.remove('hidden');
}

function answerNo() {
    document.getElementById('response').textContent = "Kamu ga tega nolak aku? Padahal aku udah se-effort ini. Kamu ga berhak nolak sih.";
    document.getElementById('response').classList.remove('hidden');
}
