import io from 'socket.io-client';

const socket = io('ws://localhost:3000');
export const socketMiddleware = store => next => action => {
  socket.emit('action', action);
  next(action);
};
