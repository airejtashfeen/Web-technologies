document.getElementById('getTimeBtn').addEventListener('click', startUpdatingTime);

async function startUpdatingTime() {
    // Call getTime immediately when the button is clicked
    getTime();

    // Set up a setInterval to call getTime every 60 seconds (adjust as needed)
    setInterval(getTime, 1000);
}

async function getTime() {
    let cityInput = document.getElementById('cityInput').value;

    if (cityInput.trim() === '') {
        alert('Please enter a city name.');
        return;
    }

    const apiUrl = `https://worldtimeapi.org/api/timezone/${cityInput}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
            const timeResult = document.getElementById('timeResult');
            timeResult.innerHTML = `<p>Current time in ${cityInput}: ${data.datetime}</p>`;
        } else {
            console.error(`Error: ${data.error}`);
            alert(`Error: ${data.error}`);
        }
    } catch (error) {
        console.error('Error fetching time data:', error);
        alert('An error occurred while fetching time data. Please try again.');
    }
}
