

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



const box = document.getElementById('box');

        box.addEventListener('mousemove', (e) => {
            const { offsetX, offsetY, target } = e;
            const { offsetWidth: width, offsetHeight: height } = target;
            const xPos = (offsetX / width - 0.5) * 2;
            const yPos = -(offsetY / height - 0.5) * 2;
            const rotateX = 15 * yPos;
            const rotateY = 15 * xPos;
            box.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        box.addEventListener('mouseleave', () => {
            box.style.transform = 'rotateX(0) rotateY(0)';
        });







