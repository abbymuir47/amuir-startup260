// ChatNotifier.js
// import { WebSocketServer } from 'ws';
// import uuid from 'uuid';

const ChatEvent = {
  Message: 'message', // Chat message
  UserJoined: 'userJoined',
  UserLeft: 'userLeft',
  System: 'system', // System messages
};

class ChatEventMessage {
  constructor(from, type, value) {
    this.from = from;
    this.type = type;
    this.value = value;
  }
}

class ChatEventNotifier {
  events = [];
  handlers = [];

  constructor() {
    let port = window.location.port;
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
    this.socket.onopen = (event) => {
      this.receiveEvent(new ChatEventMessage('System', ChatEvent.System, { msg: 'connected' }));
    };
    this.socket.onclose = (event) => {
      this.receiveEvent(new ChatEventMessage('System', ChatEvent.System, { msg: 'disconnected' }));
    };
    this.socket.onmessage = async (msg) => {
      try {
        const event = JSON.parse(await msg.data.text());
        this.receiveEvent(event);
      } catch (e) {
        console.error('Error parsing message:', e);
      }
    };
  }

  broadcastEvent(from, type, value) {
    const event = new ChatEventMessage(from, type, value);
    this.socket.send(JSON.stringify(event));
  }

  addHandler(handler) {
    this.handlers.push(handler);
  }

  removeHandler(handler) {
    this.handlers = this.handlers.filter((h) => h !== handler);
  }

  receiveEvent(event) {
    this.events.push(event);
    this.handlers.forEach((handler) => handler(event));
  }
}

const ChatNotifierInstance = new ChatEventNotifier();

export { ChatEvent, ChatNotifierInstance };
