var socket = io();
socket.on('image', function(data) {
    const h1 = document.getElementsByTagName("h1")[0]
    h1.text = "connected"
    const img = document.getElementsByTagName("img")[0]
    const img2 = document.getElementsByTagName("img")[1]
    img.src = data
    img2.src = data
})
socket.on('result', function(data) {
    const h1 = document.getElementsByTagName("h1")[0]
    h1.innerText = data
    const img = document.getElementsByTagName("img")[0]
    img.hidden(true)
})