import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
    make: DS.attr(),
    model: DS.attr(),
    price: DS.attr(),
    range: DS.attr(),
    description: DS.attr(),
    power: DS.attr(),
    type: DS.attr(),
    image: DS.attr()
});
