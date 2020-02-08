import express from 'express';
import user from './user';

const api = express();

// Routers go here
api.use('/welcome', express.Router().get('/', (_, res) => {
  res.status(200).send({
    message: 'Welcome to bank app',
  });
}));
api.use('/v2/auth', user);

export default api;
