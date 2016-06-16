import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
    author: DS.attr(),
    comment: DS.attr(),
    rating: DS.attr(),
    car: DS.belongsTo('car', {async:true})
});
