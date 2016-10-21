import sequelize from '../index';

export const isUnique(model, key, instance) {
  return (value, next) => {
    let Model = rquire('../models/' + model);
    let query = {};

    query[key] = value;
    Model.find({where: query}).then(function(obj) {
      if (obj && obj.id !== instance.id) {
        next(key + ': ' + value + ' is in use');
      } else {
        nest();
      }
    });
  }
}
