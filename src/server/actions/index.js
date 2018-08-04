import { createAction } from 'redux-actions';

export const SocketActionTypes = {
  NEW_CONNECTION: 'NEW_CONNECTION',
  CLOSE_CONNECTION: 'CLOSE_CONNECTION',
};

const newConnection = createAction(SocketActionTypes.NEW_CONNECTION, socket => ({ socket }));
const closeConnection = createAction(SocketActionTypes.CLOSE_CONNECTION, socket => ({ socket }));

const receivedAction = (action, socket) => ({
  type: action.type,
  payload: action.payload,
  socket,
});

export const SocketActions = {
  newConnection,
  closeConnection,
  receivedAction,
};
