Template.todiSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var todi = {
      message: $(e.target).find('[name=message]').val()
    };

    Meteor.call('todiInsert', todi, function(error, result) {
      // display the error to the user and abort
      if (error)
        return alert(error.reason);
      Router.go('todiPage', {_id: result._id});
    });
  }
});