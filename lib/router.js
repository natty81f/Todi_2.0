Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {return Meteor.subscribe('todis');}
});

Router.route('/', {name: 'todisList'});