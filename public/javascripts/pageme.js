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

            //message object to be sent to the /page endpoint.
            var messageObj = {
                Body : document.querySelector('#message-input').value,
                From : 'web client',
            };
            
            var request = new XMLHttpRequest();
            request.open('POST', '/page', true);
            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
            request.send(JSON.stringify(messageObj));

        });
    });
}());
