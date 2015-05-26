Todis = new Mongo.Collection("todis");

Todis.allow({
	insert: function(userId, doc) {
		// only allow posting if you are logged in
		return !! userId;
	}
});