import Ember from 'ember';

// function formatDate(value) {
//   return value;
// }

var formatDate = Ember.Handlebars.makeBoundHelper(function(date) {
		return moment(date).fromNow();
});

export {
  formatDate
};

export default Ember.Handlebars.makeBoundHelper(formatDate);
