import { handleActions } from 'redux-actions';

import { SocketActionTypes } from '../actions';

const newConnection = (state, action) => ({
  ...state,
  sockets: [...state.sockets, action.payload.socket],
});

const closeConnection = (state, action) => ({
  ...state,
  sockets: [...state.sockets.filter(s => s !== action.payload.socket)],
});

const socketsInitialState = {
  sockets: [],
};

export const socketsReducer = handleActions(
  {
    [SocketActionTypes.NEW_CONNECTION]: newConnection,
    [SocketActionTypes.CLOSE_CONNECTION]: closeConnection,
  },
  socketsInitialState
);
