document.addEventListener('DOMContentLoaded', (event) => {
    let timeSpent = 0;
    const timer = document.getElementById('time');

    const updateTimer = () =>{
        timeSpent++;
        let minutes = Math.floor(timeSpent / 60);
        let seconds = timeSpent % 60;

        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        timer.textContent = minutes + ':' + seconds;
    }
    setInterval(updateTimer, 1000)
});