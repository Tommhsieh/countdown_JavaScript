let countdown;
let timeLeft = 0;

function startTimer() {
    let inputSeconds = document.getElementById("seconds").value;
    if (isNaN(inputSeconds) || inputSeconds <= 0) {
        alert("請輸入有效的秒數！");
        return;
    }

    clearInterval(countdown); // 避免重複計時
    timeLeft = parseInt(inputSeconds);
    updateDisplay(timeLeft);

    countdown = setInterval(() => {
        timeLeft--;
        updateDisplay(timeLeft);

        if (timeLeft <= 0) {
            clearInterval(countdown);
            document.getElementById("timer").textContent = "時間到！";
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(countdown);
}

function resetTimer() {
    clearInterval(countdown);
    document.getElementById("timer").textContent = "00:00";
    document.getElementById("seconds").value = 10;
}

function updateDisplay(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;
    document.getElementById("timer").textContent =
        String(min).padStart(2, '0') + ":" + String(sec).padStart(2, '0');
}