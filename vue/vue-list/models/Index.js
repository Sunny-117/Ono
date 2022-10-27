import HTTP from '@/utils/http';

export default class IndexModel extends HTTP {
	getCourseData () {
		return new Promise((resolve, reject) => {
      this.ajaxGet('/course/get_courses/all', true, {
        success (data) {
        	resolve(data.result);
        },
        error (err) {
          reject(err);
        }
      });
		});
	}

	getFieldData () {
		return new Promise((resolve, reject) => {
			this.ajaxGet('/course/get_course_fields', true, {
        success (data) {
        	resolve(data.result);
        },
        error (err) {
          reject(err);
        }
      });
		})
	}
}