function todoReducer (data) {
	function addItem (newItem) {
		return data.concat(newItem);
	}

	function removeItem (id) {
		return data.filter(item => item.id !== id);
	}

	function changeCompleted (id) {
		return data.map((item) => {
			if (item.id === id) {
				item.completed = !item.completed;
			}

			return item;
		});
	}

	return {
		addItem,
		removeItem,
		changeCompleted
	}
}

export default todoReducer;