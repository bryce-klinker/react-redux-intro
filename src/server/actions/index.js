import { createAction } from 'redux-actions';

export const SocketActionTypes = {
  NEW_CONNECTION: 'NEW_CONNECTION',
  CLOSE_CONNECTION: 'CLOSE_CONNECTION',
};

export const MovieActionTypes = {
  ADD_MOVIE: 'ADD_MOVIE',
};

const newConnection = createAction(SocketActionTypes.NEW_CONNECTION, socket => ({ socket }));
const closeConnection = createAction(SocketActionTypes.CLOSE_CONNECTION, socket => ({ socket }));
const addMovie = createAction(MovieActionTypes.ADD_MOVIE, movie => ({ movie }));

const receivedAction = ({ type, payload }, socket) => ({
  type,
  payload,
  socket,
});

export const SocketActions = {
  newConnection,
  closeConnection,
  receivedAction,
};

export const MovieActions = {
  addMovie,
};
