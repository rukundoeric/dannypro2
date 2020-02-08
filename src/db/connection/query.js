import dotenv from 'dotenv';
import connection from './connection';

const pool = connection.getPoolConnection();
dotenv.config();
class ExecuteQuery {
  constructor() {
    this.query = (text, params) => new Promise((resolve, reject) => {
      pool.query(text, params)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
export default new ExecuteQuery();
