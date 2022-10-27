function filterData (data, field) {
	if (field === '-1') {
		return data;
	}

	return data.filter(item => item.field === field);
}

export {
	filterData
}