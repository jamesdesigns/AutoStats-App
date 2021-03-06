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
       window.addEventListener("deviceready", onDeviceReady, false);
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
         var deviceVersion = device.version;
        document.getElementById("device").innerHTML = "Device: " + device.version;
   
    

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

function onDeviceReady() {
    document.getElementById("device").innerHTML = "Device: " + device.version;
    console.log("Device: " + device.version);
}


function callApi() {
    $.ajax({
        url: 'https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes&year=2000&sold_in_us=1',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            $("#div1").html(data[0].name);
            console.log(data);
        },
        error: function (request, data) {
            alert("Request: " + JSON.stringify(request));
        }
    });
}