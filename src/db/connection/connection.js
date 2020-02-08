import { Pool } from 'pg';
import dotenv from 'dotenv';
import con from './config_file';

dotenv.config();
const config = con.getConnectionConfig();
class Connection {
  constructor() {
    this.getPoolConnection = () => new Pool(config);
  }
}
export default new Connection();