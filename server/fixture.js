if (Todis.find().count() === 0) {
	Todis.insert({
		message: ' 1 2 3 testing...'
	});

	Todis.insert({
		message: 'Life is better with a glass on wine'
	});
}