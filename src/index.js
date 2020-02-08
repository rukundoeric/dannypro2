/* eslint-disable no-console */
import express from 'express';
import bodyParcer from 'body-parser';
import db from './db/migration/db';
import api from './api/router';

const PORT = process.env.PORT || 7979;

const app = express();
db.createTables();
app.use(bodyParcer.json());
app.use(bodyParcer.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', (req, res) => {
  res.redirect('/api/welcome');
});
app.use('/api', api);
app.use((req, res) => {
  res.status(404).send({
    status: 404,
    error: {
      message: 'Page Not found',
    },
  });
});

const run = (port = '') => {
  const server = app.listen(port || PORT, () => {
    console.log(`\n Server is running on PORT  ${port || PORT}...`);
  });
  return server;
};
run();
export default run;
