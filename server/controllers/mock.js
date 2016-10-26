import config from 'config';
import uuid from 'node-uuid';
import Controller from '../controller';
import Project from '../db/models/project';
import Version from '../db/models/version';
import Api from '../db/models/api';
import sequelize from '../db/index';
import queryString from 'query-string';

export default class Main extends Controller {
  *index() {
    this.podata({
      data: '123'
    }); 
  }
}
