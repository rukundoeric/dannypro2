// eslint-disable-next-line import/prefer-default-export
export const CREATE_USER = `INSERT INTO
      users(id, firstName, lastName, email, password, createdOn, modifiedOn, verified)
      VALUES($1, $2, $3, $4, $5,$6, $7, $8)
      returning *`;
