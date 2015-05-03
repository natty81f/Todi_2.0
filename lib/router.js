Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {return Meteor.subscribe('todis');}
});

Router.route('/', {name: 'todisList'});
//mapping URL paths of the form /posts/<ID> to the todiPage template
Router.route('/todis/:_id', {
	name: 'todiPage',
	data: function() {return Todis.findOne(this.params._id); }
});