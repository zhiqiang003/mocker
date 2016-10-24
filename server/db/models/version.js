import Sequelize from 'sequelize';
import sequelize from '../index';
import Project from './project';

const Version = sequelize().define('version', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      notEmpty: true
    }
  },
  desc: {
    type: Sequelize.STRING
  },
  enable_cache: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  project_id: {
    type: Sequelize.INTEGER
  },
  uid: {
    type: Sequelize.UUID
  },
  create_by: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true
});

Project.hasMany(Version, {
  foreignKey: 'project_id',
  constraints: false
});

Version.belongsTo(Project, {
  foreignKey: 'project_id',
  constraints: false,
  as: 'project'
});

Version.sync();

export default Version;
