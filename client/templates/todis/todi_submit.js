Template.todiSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var todi = {
      message: $(e.target).find('[name=message]').val()
    };

    todi._id = Todis.insert(todi);
    Router.go('todiPage', todi);
  }
});