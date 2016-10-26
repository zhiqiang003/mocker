import config from 'config';
import uuid from 'node-uuid';
import Controller from '../controller';
import Version from '../db/models/version';
import sequelize from '../db/index';
import queryString from 'query-string';


// !!! 还需要 copy 功能呢

export default class Main extends Controller {
    *list(projectId) {
      let list = yield Version.findAll({where: {
        project_id: projectId
      }});
      this.podata({
        data: list
      });
    }

    *get(projectId, versionId) {
      let version = yield Version.findOne({where: {
        id: versionId,
        project_id: projectId
      }})
      this.podata({data: version});
    }

    *create(projectId) {
      let query = queryString.parse(this.ctx.request.url.split('?')[1]);
      query.uid = uuid.v1();
      query.project_id = projectId - 0;

      try {
        let action = yield Version.create(query);
        this.podata({data: action});
      } catch(ex) {
        console.log(ex);
        this.podata(ex);
      }
    }

    *update(projectId, versionId) {
      let query = queryString.parse(this.ctx.request.url.split('?')[1]);

      try {
        let action = yield Version.update(query, { where: {
          id: versionId,
          project_id: projectId
        }});
        this.podata({data: action});
      } catch(ex) {
        console.log(ex);
        this.podata({data: ex});
      }
    }

    *delete(projectId, versionId) {
      try {
        let action = yield Version.destroy({ where: {
          id: versionId,
          project_id: projectId
        }});
        this.podata({data: action});
      } catch(ex) {
        console.log(ex);
        this.podata({data: ex});
      }
    }
}
