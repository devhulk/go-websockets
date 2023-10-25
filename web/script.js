window.onload = function () {
    var conn;
    var msg = document.getElementById("msg");
    var log = document.getElementById("log");
    var sessionID = (Math.random() * 1000) + Date.now()
    var randomColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    sessionStorage.setItem("sessionID", sessionID)
    sessionStorage.setItem("randomColor", randomColor)


    function appendLog(item) {
        var doScroll = log.scrollTop > log.scrollHeight - log.clientHeight - 1;
        log.appendChild(item);
        if (doScroll) {
            log.scrollTop = log.scrollHeight - log.clientHeight;
        }
    }

    document.getElementById("form").onsubmit = function () {
        if (!conn) {
            return false;
        }
        if (!msg.value) {
            return false;
        }
        console.log(msg)
        msg.value = JSON.stringify({value: msg.value, id: sessionID, color: randomColor })
        
        conn.send(msg.value);

        msg.value = "";
        return false;
    };

    if (window["WebSocket"]) {
        conn = new WebSocket("ws://" + document.location.host + "/ws");
        conn.onclose = function (evt) {
            var item = document.createElement("div");
            item.innerHTML = "<b>Connection closed.</b>";
            appendLog(item);
        };
        conn.onmessage = function (evt) {
            console.log(evt)
            var messages = evt.data.split('\n');
            for (var i = 0; i < messages.length; i++) {
                finalMessage = JSON.parse(messages[i])
                var item = document.createElement("div");
                item.id = finalMessage.id
                //item.style.color = finalMessage.color
                if (sessionStorage.getItem("sessionID") == finalMessage.id ) {
                    item.classList.add("msg")
                    item.classList.add("sent")
                    item.style.background = sessionStorage.getItem("randomColor")
                } else {
                    item.classList.add("msg")
                    item.classList.add("rcvd")
                    item.style.background = finalMessage.color 
                }
                item.innerText = finalMessage.value;
                appendLog(item);
            }
        };
    } else {
        var item = document.createElement("div");
        item.innerHTML = "<b>Your browser does not support WebSockets.</b>";
        appendLog(item);
    }
};