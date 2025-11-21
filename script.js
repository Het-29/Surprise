// Function to handle the countdown logic
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    
    // Update the timer every 1000ms (1 second)
    const intervalId = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        // Add leading zero if less than 10
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        // Check if timer has finished
        if (--timer < 0) {
            clearInterval(intervalId);
            display.textContent = "00:00";
            display.style.color = "#d32f2f"; // Change text to red on expire
        }
    }, 1000);
}

// Initialize timer when the window loads
window.onload = function () {
    // Set timer for 1 minute and 19 seconds (79 seconds total)
    const timeInSeconds = 60 * 29 + 59;
    const display = document.querySelector('#timer');
    
    startTimer(timeInSeconds, display);
};