import { compute } from '@/libs/utils';

function calculatorReducer (data) {
  function setNumber (field, value) {
    
    if (typeof(value) !== 'number') {
    	value = Number(value);
    }

  	data[field] = value;
  	return compute(
      data.curMethod,
      data.firstNumber,
      data.secondNumber
  	);
  }

  function changeMethod (method) {
  	data.curMethod = method;
  	return compute(
      data.curMethod,
      data.firstNumber,
      data.secondNumber
  	);
  }

  return {
  	setNumber,
  	changeMethod
  }
}

export default calculatorReducer;