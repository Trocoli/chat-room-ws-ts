import { WebSocketServer } from "ws";
import http from "http";
import express from "express";

const port = 1234;

const server = http.createServer(express);
const wss = new WebSocketServer({ server });

wss.on("connection", function connection(ws) {
  ws.on("message", function incoming(data) {
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });
});

server.listen(port, function () {
  console.log(`Server listening on port: ${port}`);
});
