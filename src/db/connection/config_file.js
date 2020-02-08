// Update with your config settings.
import dotenv from 'dotenv';

dotenv.config();
class ConnectionConfig {
  constructor() {
    this.environment = process.env.NODE_ENV || 'development';
    this.development = {
      connectionString: process.env.DEV_DATABASE_URL,
    };
    this.test = {
      connectionString: process.env.TEST_DATABASE_URL,
    };
    this.production = {
      connectionString: process.env.DATABASE_URL,
    };
    this.getConnectionConfig = () => (this.environment == 'development' ? this.development : this.environment == 'test' ? this.test : this.production);
  }
}
export default new ConnectionConfig();
