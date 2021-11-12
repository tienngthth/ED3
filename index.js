var socket = io();
socket.on('image', function(data) {
    const h1 = document.getElementsByTagName("h1")[0]
    const img = document.getElementsByTagName("img")[0]
    const img2 = document.getElementsByTagName("img")[1]
    h1.style.display = "none";
    img.style.display = "inline";
    img2.style.display = "inline";
    img.src = data
    img2.src = data
})

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

socket.on('checkInValidation', function(data) {
    const h1 = document.getElementsByTagName("h1")[0]
    const img = document.getElementsByTagName("img")[0]
    const img2 = document.getElementsByTagName("img")[1]
    h1.innerText = (data == "true") ? "Successfully check-in" : "Wrong QR Code"
    sleep(500).then(() => {
        h1.style.display = "block";
        img.style.display = "none";
        img2.style.display = "none";
    });

})

socket.on('temperature', function(data) {
    const temperature = document.getElementsByClassName("temperature")[0]
    temperature.innerText = data
})
socket.on('humidity', function(data) {
    const humidity = document.getElementsByClassName("humidity")[0]
    humidity.innerText = data
})
socket.on('moisture', function(data) {
    const moisture = document.getElementsByClassName("moisture")[0]
    moisture.innerText = data
})