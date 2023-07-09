

document.addEventListener('DOMContentLoaded', function() {
    console.log('Your web page is loaded and ready!');
});


function updateTimeInCaption() {
    // Get the current time in UTC
    let now = new Date();
    let options = { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    let formatter = new Intl.DateTimeFormat('en-US', options);
    let timeString = formatter.format(now);
    
    // Update the caption
    document.getElementById('time-caption').textContent = timeString;
}

updateTimeInCaption();
setInterval(updateTimeInCaption,1000);




/////






