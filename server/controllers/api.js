import config from 'config';
import uuid from 'node-uuid';
import Controller from '../controller';
import Api from '../db/models/api';
import sequelize from '../db/index';
import queryString from 'query-string';

export default class Main extends Controller {
    *list(versionId) {
      let list = yield Api.findAll({where: {
        version_id: versionId
      }});
      this.podata({
        data: list
      });
    }

    *get(versionId, apiId) {
      let version = yield Api.findOne({where: {
        id: versionId,
        version_id: versionId
      }})
      this.podata({data: version});
    }

    *create(versionId) {
      let query = queryString.parse(this.ctx.request.url.split('?')[1]);
      query.uid = uuid.v1();
      query.version_id = versionId - 0;

      try {
        let action = yield Api.create(query);
        this.podata({data: action});
      } catch(ex) {
        console.log(ex);
        this.podata(ex);
      }
    }

    *update(versionId, apiId) {
      let query = queryString.parse(this.ctx.request.url.split('?')[1]);

      try {
        let action = yield Api.update(query, { where: {
          id: apiId,
          version_id: versionId
        }});
        this.podata({data: action});
      } catch(ex) {
        console.log(ex);
        this.podata({data: ex});
      }
    }

    *delete(versionId, apiId) {
      try {
        let action = yield Api.destroy({ where: {
          id: api,
          version_id: versionId
        }});
        this.podata({data: action});
      } catch(ex) {
        console.log(ex);
        this.podata({data: ex});
      }
    }
}
