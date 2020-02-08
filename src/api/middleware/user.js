import db from '../../db/connection/query';
import { GET_ONE_USER } from '../../db/queries/data_manipuration';

// eslint-disable-next-line import/prefer-default-export
export const isUserExist = (req, res, next) => {
  const values = [req.body.email];
  db.query(GET_ONE_USER, values).then((result) => {
    if (!result.rows[0]) {
      next();
    } else {
      res.status(400).send({
        status: 400,
        error: {
          message: 'User with that email alread exists',
        },
      });
    }
  });
};
