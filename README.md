# Golang Websockets Front-End Starter Project (Chat App)

- I'm not using any framework for the front end just pure HTML, CSS, and Javascript.
- Golang is being used to serve the 'web' directory which contains all our front-end code.
- The web socket portion of the app is using Gorilla Websockets (yay for them being maintained again!)


Front-End Code -> ```/web```

Backend Code -> ```*.go``` files

Run the project with:
```go run *.go```

Then go to ```localhost:8080/wechat/``` in your browser of choice.


## What you can learn from this project

Frontend

- The ```web/script.js``` file has examples of manipulating CSS and HTML with Javascript (DOM Manipulation)
- The ```web/styles.css``` has some good css examples. (Can find what classes are used in the script.js file?)
- The ```web/index.html``` contains our page scaffolding. (Can tell me what external css library I'm using?)

Backend
- ```main.go``` will show you how to set up a couple API endpoints. One for static file serving and one to handle the websocket connections.
- ```client.go``` will introduce you to an example of the "client" portion of the "client - server model" using websockets as the protocol. This will also lay the foundation for golang channels which is an important part of concurrent processing in golang. Because Websockets is bi-directional we need to be able to process messages as events not just step by step actions that happen one after the other.
- ```hub.go``` The hub and client will show you channels and go routines in action. The hub keeps track of all "client" connections and broadcasts messages sent by a single clients to all other clients.

## Resources

- [What are Websockets?](https://datatracker.ietf.org/doc/html/rfc6455)
    "Historically, creating web applications that need bidirectional
    communication between a client and a server (e.g., instant messaging
    and gaming applications) has required an abuse of HTTP to poll the
    server for updates while sending upstream notifications as distinct
    HTTP calls [RFC6202].

    This results in a variety of problems:

    o  The server is forced to use a number of different underlying TCP
        connections for each client: one for sending information to the
        client and a new one for each incoming message.

    o  The wire protocol has a high overhead, with each client-to-server
        message having an HTTP header.

    o  The client-side script is forced to maintain a mapping from the
        outgoing connections to the incoming connection to track replies."

