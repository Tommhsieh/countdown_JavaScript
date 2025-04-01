let countdown;
let timeLeft = 0;

//開始
function startTimer() {
    let inputSeconds = document.getElementById("seconds").value;
    //防止輸入負數或0、非數字
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
ㄋ
        if (timeLeft <= 0) {
            clearInterval(countdown);
            document.getElementById("timer").textContent = "時間到！";
        }
    }, 1000);
}

//暫停
function stopTimer() {
    clearInterval(countdown);
}

//重設
function resetTimer() {
    clearInterval(countdown);
    document.getElementById("timer").textContent = "00:00";
    document.getElementById("seconds").value = 10;
}

//修改顯示內容
function updateDisplay(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;
    //.padStart(2, '0') 是 JavaScript 的字串方法，用來補齊字串長度。如果字串長度小於 2，則在前面補 0，直到長度達到 2。
    document.getElementById("timer").textContent =
        String(min).padStart(2, '0') + ":" + String(sec).padStart(2, '0');
}