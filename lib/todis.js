Todis = new Mongo.Collection("todis");

Meteor.methods({
  todiInsert: function(todiAttributes) {
    check(Meteor.userId(), String);
    check(todiAttributes, {
      message: String
    });
    var user = Meteor.user();
    var todi = _.extend(todiAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });
    var todiId = Todis.insert(todi);
    return {
      _id: todiId
    };
  }
});