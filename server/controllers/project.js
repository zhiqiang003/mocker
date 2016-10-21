import config from 'config';
import uuid from 'node-uuid';
import Controller from '../controller';
import Project from '../db/models/project';
import sequelize from '../db/index';

export default class Main extends Controller {
    *list(name) {
      let list = yield Project.findAll({});
      this.podata({
        data: list
      });
    }

    *get(id) {
      this.podata({data: 1});
    }

    *add() {
      let promise = yield Project.create({
        name: 'test002',
        uid: uuid.v1()
      });
      this.podata({data: promise});
    }

    *update() {
      this.podata({data: 1});
    }
}
