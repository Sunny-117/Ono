function counterReducer (data) {
	function plus () {
		return data.result + 1;
	}

	function minus () {
		return data.result - 1;
	}

	return {
		plus,
		minus
	}
}

export default counterReducer;

//jsppxiaoye   微信