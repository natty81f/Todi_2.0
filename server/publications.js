Meteor.publish('todis', function() {
  return Todis.find();
});