const statusColors = ['#0055aa', '#2c8e00', '#d32f2f', '#7b1fa2', '#f57c00'];
let colorIndex = 0;

function cycleColor() {
    const button = document.getElementById('toggleBtn');
    button.style.backgroundColor = statusColors[colorIndex];
    colorIndex = (colorIndex + 1) % statusColors.length;
}

function showGreeting() {
    const hour = new Date().getHours();
    let message;

    if (hour < 12) {
        message = "Good Morning! Let's plan your train day!";
    } else if (hour < 18) {
        message = "Good Afternoon! Track your train progress!";
    } else {
        message = "Good Evening! Check your train schedules!";
    }

    document.getElementById('greetingText').innerText = message;
    document.getElementById('greetingPopup').style.display = 'flex';
}

function hideGreeting() {
    document.getElementById('greetingPopup').style.display = 'none';
}

function addDistances() {
    const d1 = parseFloat(document.getElementById('distance1').value);
    const d2 = parseFloat(document.getElementById('distance2').value);

    if (isNaN(d1) || isNaN(d2)) {
        alert("Please enter both distances.");
        return;
    }

    const total = d1 + d2;
    document.getElementById('distanceResult').innerText = `Total Distance: ${total} km`;
}
