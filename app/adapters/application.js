import DS from 'ember-data';

export default DS.RESTAdapter.extend({
		firebase: new window.firebase('https://mateoemberblog.firebaseio.com/')
});
