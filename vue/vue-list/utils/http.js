import $ from 'jquery';

import { URL } from '@/config/config';

export default class HTTP {
	ajaxGet (url, isJSONP, options) {
		$.ajax({
			url: URL.BASE_URL + url,
			dataType: isJSONP ? 'JSONP' : 'JSON',
			success (data) {
        options.success(data);
			},
			error (err) {
        options.error(err);
			}
		})
	}
}