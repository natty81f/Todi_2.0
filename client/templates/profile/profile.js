ProfileController = RouteController.extend({
  template:"profile",
  waitOn: function(){
    return Meteor.subscribe('userProfile', this.params.username);
  },
  data: function(){
    var username = Router.current().params.username;
    return Meteor.users.findOne({
      username:username
    });
  }
});