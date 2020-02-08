import uuidv4 from 'uuid/v4';
import moment from 'moment';
import db from '../../db/connection/query';
import { CREATE_USER } from '../../db/queries/data_manipuration';

class User {
  async signup(req, res) {
    const values = [
      uuidv4(),
      req.body.firstName,
      req.body.lastName,
      req.body.email,
      req.body.password,
      moment(new Date()),
      moment(new Date()),
      false,
    ];
    db.query(CREATE_USER, values).then((user) => {
      res.status(201).send({
        status: 201,
        data: user.rows[0],
      });
    }).catch((err) => {
      res.status(400).send({
        status: 400,
        error: err,
      });
    });
  }
}
export default new User();
