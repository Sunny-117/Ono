const URL = {
	BASE_URL: process.env.NODE_ENV === 'production'
	                                ? ''
	                                : 'http://localhost:3001'
}

const DEFAULT_NAV_ITEM = [
  {
  	field: '-1',
  	field_name: '全部'
  }
]

export {
	URL,
	DEFAULT_NAV_ITEM
}

