Template.todisList.helpers({
  todis: function() {
    return Todis.find({}, {sort: {submitted: -1}});
  }
});