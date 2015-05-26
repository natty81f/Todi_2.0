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


// tells Iron Router to show the “not found” page not just for invalid routes but also for the postPage route, whenever the data function returns a “falsy”
Router.onBeforeAction('dataNotFound', {only: 'postPage'});