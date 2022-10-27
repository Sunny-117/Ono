import { API } from '../utils/config';
import HTTP from '../utils/http';

export default class IndexModel extends HTTP {
	getCourseDatas () {
		return new Promise((resolve) => {
      this.fetchGet({
      	url: API.getCourseDatas,
      	success (data) {
      		resolve(data);
      	},
      	error (error) {
      		console.error('error:' + error);
      	}
      });
		});
	}
}