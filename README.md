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

- The web/script.js file has examples of manipulating CSS and HTML with Javascript (DOM Manipulation)
- The styles.css has some good css examples. (Can find what classes are used in the script.js file?)
- The index.html contains our page scaffolding. (Can tell me what external css library I'm using?)

Backend
- ```main.go``` will show you how to set up a couple API endpoints. One for static file serving and one to handle the websocket connections.
- ```client.go``` will introduce you to an example of the "client" portion of the "client - server model" using websockets as the protocol. This will also lay the foundation for golang channels which is an important part of concurrent processing in golang. Because Websockets is bi-directional we need to be able to process messages as events not just step by step actions that happen one after the other.
- ```hub.go``` The hub and client will show you channels and go routines in action. The hub keeps track of all "client" connections and broadcasts messages sent by a single clients to all other clients.

