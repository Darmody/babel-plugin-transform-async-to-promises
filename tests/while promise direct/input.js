async function() {
	while (Promise.resolve(false)) {
		await 1;
		return true;
	}
	return false;
}
