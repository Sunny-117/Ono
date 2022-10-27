import reducer from '@/reducers/calculator';
import { SET_NUMBER, CHANGE_METHOD } from '@/actions/calculator';

export default (ctx) => {
	const {
		setNumber,
		changeMethod
	} = reducer(ctx.$data);

	return function (type, ...args) {
		switch (type) {
			case SET_NUMBER:
			  ctx.result = setNumber(...args);
			  break;
			case CHANGE_METHOD:
			  ctx.result = changeMethod(...args);
			  break;
			default:
			  break;
		}
	}
}