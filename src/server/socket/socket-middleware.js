export const socketMiddleware = store => next => action => {
  const { socket } = action;
  if (!socket) return;
  const { sockets } = store.getState().sockets;
  console.log(`Received action: ${action.type}`);

  const otherSockets = sockets.filter(s => s !== socket);
  otherSockets.forEach(s => s.emit('action', { type: action.type, payload: action.payload }));
  return next(action);
};
