import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberBlogENV.locationType
});

Router.map(function() {
  this.resource('posts', function() { 
  		this.route("new");
  		this.route("edit",{
  					path: ":post_id"
  		});
  });
  this.route('application');
});

export default Router;
