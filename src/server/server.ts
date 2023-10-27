import { WebSocketServer } from "ws";

const port = 1234;
const wss = new WebSocketServer({ port });

wss.on('connection', (ws) => {
    ws.on('message', (data) => {
        console.log(`Received message form client: ${data}`)
    })
    
    ws.send(`Hello this is the websocket server`)
})

console.log(`listening on port ${port}`)