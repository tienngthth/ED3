var socket = io();

const h1 = document.getElementsByTagName("h1")[0]
const button = document.getElementsByTagName("button")[0]
const img = document.getElementsByTagName("img")[0]
const img2 = document.getElementsByTagName("img")[1]
const temperature = document.getElementsByClassName("temperature")[0]
const humidity = document.getElementsByClassName("humidity")[0]
const moisture = document.getElementsByClassName("moisture")[0]
const people = document.getElementsByClassName("people")[0]
const check_in_result = {
    "FAILS_AUTHENTICATION": "Wrong QR Code",
    "EXCEEDS_CAPACITY": "Maximum capacity reached",
    "SUCCESSFUL": "Successfully check-in"
}

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

socket.on('image', function(data) {
    h1.style.display = "none";
    button.style.display = "none";
    img.style.display = "inline";
    img2.style.display = "inline";
    img.src = data
    img2.src = data
})

socket.on('checkInValidation', function(data) {
    h1.innerText = check_in_result[data]
    sleep(500).then(() => {
        if (data != "SUCCESSFUL") {
            button.style.display = "block";
        }
        h1.style.display = "block";
        img.style.display = "none";
        img2.style.display = "none";
    });

})

socket.on('temperature', function(data) {
    temperature.innerText = data
})

socket.on('humidity', function(data) {
    humidity.innerText = data
})

socket.on('moisture', function(data) {
    moisture.innerText = data
})

socket.on('people', function(data) {
    people.innerText = data
})

function reauthenticate() {
    socket.emit('reauthenticate');
}