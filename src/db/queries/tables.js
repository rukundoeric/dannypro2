// eslint-disable-next-line import/prefer-default-export
export const CREATE_USER_TABLE = `CREATE TABLE IF NOT EXISTS
    users(
      id UUID PRIMARY KEY,
      firstName VARCHAR(128) NOT NULL,
      lastNAme VARCHAR(128) NOT NULL,
      email VARCHAR(128) UNIQUE NOT NULL,
      password VARCHAR(128) NOT NULL,
      createdOn TIMESTAMP,
      modifiedOn TIMESTAMP,
      verified BOOLEAN  NOT NULL
    )`;
