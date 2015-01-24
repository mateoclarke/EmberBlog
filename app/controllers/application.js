 import Ember from 'ember';

export default Ember.Controller.extend({  
        needs: ['posts/edit'],
        actions: {
        login: function() {

        var route = this;
        (this.get('auth').authClient.login('twitter')).then(function(){
                this.get('auth').set('authed', true);
                return route.transitionTo('posts');
                }


                );
        },
        logout: function() {
                this.get('auth').logout();
                this.set('controllers.posts/edit.isEditing', false);
                this.transitionToRoute('posts');

        }
        }

});