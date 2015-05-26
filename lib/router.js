Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {return Meteor.subscribe('todis');}
});

Router.route('/', {name: 'todisList'});
//mapping URL paths of the form /posts/<ID> to the todiPage template
Router.route('/todis/:_id', {
	name: 'todiPage',
	data: function() {return Todis.findOne(this.params._id); }
});


Router.route('/submit', {name: 'todiSubmit'});

//check if the user is logged in, and if they're not render the accessDenied template
var requireLogin = function() {
  if (! Meteor.user()) {
    this.render('accessDenied');
  } else {
    this.next();
  }
}



// tells Iron Router to show the “not found” page not just for invalid routes but also for the postPage route, whenever the data function returns a “falsy”
Router.onBeforeAction('dataNotFound', {only: 'todiPage'});

Router.onBeforeAction(requireLogin, {only: 'todiSubmit'});

