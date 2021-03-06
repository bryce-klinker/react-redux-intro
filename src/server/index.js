import morgan from 'morgan';
import express from 'express';
import socketIo from 'socket.io';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';

import { createApiRouter } from './api';
import { SocketActions } from './actions';
import { configureStore } from './configure-store';

const port = 3000;
const app = express();
const server = http.Server(app);
const io = socketIo(server);

const store = configureStore();
app.use(
  cors({
    allowedHeaders: '*',
    exposedHeaders: '*',
  })
);
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', createApiRouter(store));

io.on('connection', function(socket) {
  console.log('New socket connection...');

  store.dispatch(SocketActions.newConnection(socket));

  socket.on('action', action => store.dispatch(SocketActions.receivedAction(action, socket)));
  socket.on('disconnect', () => store.dispatch(SocketActions.closeConnection(socket)));
});

server.listen(port, '0.0.0.0', () => console.log(`Now listening on ${port}...`));
