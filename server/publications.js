Meteor.publish('todis', function() {
  return Todis.find();
});

Meteor.publish('userProfile', function(username) {
  // simulate network latency
  Meteor._sleepForMs(500);
  // find the user by username
  var user = Meteor.users.findOne({
    username:username
  });
  // if we can't find it, mark the subscription as ready and quit
  if (!user) {
    this.ready();
    return;
  }
  // if the user we want to display the profile is the currently logged in user...
  if (this.userId == user._id) {
    // then we return the corresponding full document via cursor
    return Meteor.users.find(this.userId);
  }
  else {
    return Meteor.users.find(user._id, {
        fields: {
          'profile':0
        }
    });
  }
});