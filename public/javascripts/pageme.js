(function () {
    'use strict';
    document.addEventListener('DOMContentLoaded', function(){
        var socket = io.connect(window.location.hostname);

        //when we receive a message
        socket.on('message:new', function (data) {
          console.log(data);
        });

        //add buton click.
        document.querySelector('#send-button').addEventListener('click', function () {

            //our text
            var textField = document.querySelector('#message-input');

            //message object to be sent to the /page endpoint.
            var messageObj = {
                Body : textField.value,
                From : 'web client',
            };

            var request = new XMLHttpRequest();
            request.open('POST', '/page', true);
            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
            request.send(JSON.stringify(messageObj));

            //reset the page.
            textField.value = "";
        });
    });
}());
