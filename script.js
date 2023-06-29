

document.addEventListener('DOMContentLoaded', function() {
    console.log('Your web page is loaded and ready!');
});


function updateTimeInCaption() {
    // Get the current time in UTC
    let now = new Date();
    let options = { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    let formatter = new Intl.DateTimeFormat('en-US', options);
    let timeString = formatter.format(now) + ' EST';
    
    // Update the caption
    document.getElementById('time-caption').textContent = timeString;
}

updateTimeInCaption();
setInterval(updateTimeInCaption,1000);


function initializeCountdown(targetDateStr, elementId, caption) {
    // Set the target date for the countdown
    var targetDate = new Date(targetDateStr).getTime();
    
    // Update the countdown every 1 second
    var x = setInterval(function() {
        // Get the current date and time
        var now = new Date().getTime();
        
        // Find the interval between now and the target date
        var interval = targetDate - now;
        
        // Calculate days, hours, minutes and seconds
        var days = Math.floor(interval / (1000 * 60 * 60 * 24));
        var hours = Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((interval % (1000 * 60)) / 1000);
        
        // Output the result in the specified element
        document.getElementById(elementId).innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s " + caption;
        
        // If the countdown is finished, write some text
        if (interval < 0) {
            clearInterval(x);
            document.getElementById(elementId).innerHTML = "EXPIRED";
        }
    }, 1000);
}

document.addEventListener('DOMContentLoaded', function() {

    // Initialize  different countdown timers
    initializeCountdown('2023-07-01 00:00:00', 'month_countdown','of the month left');
    initializeCountdown('2023-08-28 00:00:00', 'summer_countdown','of summer break left');
    initializeCountdown('2024-01-01 00:00:00', 'year_countdown','of the year left');
    
});



/////

document.addEventListener("DOMContentLoaded", function () {
    const animatedTextElement = document.getElementById("animated-text");
    const text = animatedTextElement.textContent;
    animatedTextElement.textContent = ''; // Clear the original text content

    let index = 0;
    const interval = setInterval(() => {
        animatedTextElement.textContent += text.charAt(index);
        index++;

        if (index > text.length - 1) {
            clearInterval(interval);
        }
    }, 60); // 100ms delay between each character
});


