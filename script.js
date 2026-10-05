// Typing Effect
const text = "Explore Nearby Places";
let index = 0;

function typeEffect() {

    const typingText = document.getElementById("typingText");

    if (index < text.length) {

        typingText.textContent += text.charAt(index);
        index++;

        setTimeout(typeEffect, 100);
    }
}

window.addEventListener("load", typeEffect);


// Search Hotels Using Current Location
function searchHotels() {

    if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser.");
        return;
    }

    navigator.geolocation.getCurrentPosition(
        position => {

            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            const url =
                `https://www.google.com/maps/search/hotels/@${lat},${lon},15z`;

            window.open(url, "_blank");
        },

        () => {
            alert("Location access denied or unavailable.");
        }
    );
}


// Search Tourist Places Using Current Location
function searchTourist() {

    if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser.");
        return;
    }

    navigator.geolocation.getCurrentPosition(
        position => {

            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            const url =
                `https://www.google.com/maps/search/tourist+places/@${lat},${lon},15z`;

            window.open(url, "_blank");
        },

        () => {
            alert("Location access denied or unavailable.");
        }
    );
}


// Search Using Manually Entered Location
function searchByType() {

    const location =
        document.getElementById("locationInput").value.trim();

    const type =
        document.getElementById("searchType").value;

    if (location === "") {
        alert("Please enter a location.");
        return;
    }

    let query = "";

    if (type === "hotels") {
        query = `hotels in ${location}`;
    }
    else if (type === "tourist") {
        query = `tourist places in ${location}`;
    }

    const url =
        `https://www.google.com/maps/search/${encodeURIComponent(query)}`;

    window.open(url, "_blank");
}
