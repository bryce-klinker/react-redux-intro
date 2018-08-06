import { handleActions } from 'redux-actions';
import { createSelector } from 'reselect';

import { SocketActionTypes } from '../actions';

export const getAllSocketsSelector = createSelector(
  ({ sockets: { sockets = [] } = {} } = {}) => sockets,
  sockets => sockets
);

const newConnection = (state, action) => ({
  ...state,
  sockets: [...state.sockets, action.payload.socket],
});

const closeConnection = (state, action) => ({
  ...state,
  sockets: [...state.sockets.filter(s => s !== action.payload.socket)],
});

export const socketsInitialState = {
  sockets: [],
};

export const socketsReducer = handleActions(
  {
    [SocketActionTypes.NEW_CONNECTION]: newConnection,
    [SocketActionTypes.CLOSE_CONNECTION]: closeConnection,
  },
  socketsInitialState
);
