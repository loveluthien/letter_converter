function convertLetters() {
    var input = document.getElementById("input1").value;

    // Create a WebSocket connection
    const socket = new WebSocket("ws://localhost:9002");

    // Send the input to the backend
    socket.onopen = function () {
        socket.send(input);
    };

    // Receive the output from the backend
    socket.onmessage = function (event) {
        var output = event.data;
        document.getElementById("result").textContent = output;

        // Close the WebSocket connection
        socket.close();
    };
}