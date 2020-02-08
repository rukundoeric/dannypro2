import { CREATE_USER_TABLE } from '../queries/tables';
import connection from '../connection/connection';

const pool = connection.getPoolConnection();
class CREATABLE {
  constructor() {
    this.createTables = async () => {
      pool.connect((err) => {
        if (!err) {
          pool.query(CREATE_USER_TABLE);
        }
      });
      return true;
    };
  }
}
export default new CREATABLE();
