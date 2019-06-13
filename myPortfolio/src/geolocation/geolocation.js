// console.log("test")

function findMe() {
    const displayLoc = document.querySelector('#find-location');
    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
    // below - need to establish these elements currently have nothing in them until we put them in a function later
    mapLink.href = '';
    status.textContent = '';

    function showPosition(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const latlon = `${lat},${lon}`
        // const latlon = lat + ", " + lon; ----- easier way to do this above
        status.textContent = `Latitude: ${lat}, Longitude: ${lon}`;
        // above are template literals inside text
    }

    function error() {
        status.textContent = "Geolocation is not supported by your browser."
    }

    if (navigator.geolocation) {
        status.textContent = "Creeping on your current location. Standby..."
        navigator.geolocation.getCurrentPosition(showPosition, error);
    } else {
        status.textContent = "Your browser does not support geolocation."
    }
    
}



// code from class below
document.querySelector('#find-location').addEventListener('click', findMe)