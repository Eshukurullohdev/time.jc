let timer;
let seconds = 0;
let running = false;

function updateDisplay() {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    document.getElementById('display').textContent = `${hrs}:${mins}:${secs}`;
}

document.getElementById('startStopBtn').onclick = () => {
    if (running) {
        clearInterval(timer);
        document.getElementById('startStopBtn').textContent = "Boshlash";
    } else {
        timer = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 10);
        document.getElementById('startStopBtn').textContent = "To'xtatish";
    }
    running = !running;
};

document.getElementById('resetBtn').onclick = () => {
    clearInterval(timer);
    seconds = 0;
    running = false;
    updateDisplay();
    document.getElementById('startStopBtn').textContent = "Boshlash";
};

updateDisplay();
