var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');

       window.addEventListener("batterystatus", onBatteryStatus, false);
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        var batteryStatus = status.batterystatus;
        document.getElementById("battery-status").innerHTML = "Battery Level: " + status.level + "<br>" +
         "Is Plugged: " + status.isPlugged;



       // document.getElementById('battery-status').innerHTML = "Battery Status: " + batteryStatus;
        // document.getElementById("battery-status").innerText = batteryStatus;
        // document.write("Battery Level: " + status.level + " isPlugged: " + status.isPlugged);
        // console.log(batteryStatus);
    }
}

function onBatteryStatus(status) {
    document.getElementById("battery-status").innerHTML = "Battery Level: " + status.level + "<br>" + "Is Plugged: " + status.isPlugged;
    console.log("Level: " + status.level + " isPlugged: " + status.isPlugged);
}