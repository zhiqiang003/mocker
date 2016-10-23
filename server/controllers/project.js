import config from 'config';
import uuid from 'node-uuid';
import Controller from '../controller';
import Project from '../db/models/project';
import sequelize from '../db/index';
import queryString from 'query-string';

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

    *create() {
      let query = queryString.parse(this.ctx.request.url.split('?')[1]);
      query.uid = uuid.v1();

      try {
        let action = yield Project.create(query);
        this.podata({data: action});
      } catch(ex) {
        console.log(ex);
        this.podata(ex);
      }
    }

    *update() {
      let query = queryString.parse(this.ctx.request.url.split('?')[1]);
      let project = yield Project.findOne({ where: {
        id: query.id
      }});

      try {
        let action = yield Project.update(query, { where: {
          id: query.id
        }});
        this.podata({data: action});
      } catch(ex) {
        console.log(ex);
        this.podata({data: ex});
      }
    }
}
