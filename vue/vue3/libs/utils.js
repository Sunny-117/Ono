function compute (method, fNumber, sNumber) {
  switch (method) {
  	case 'plus':
  	  return fNumber + sNumber;
  	case 'minus':
  	  return fNumber - sNumber;
  	case 'mul':
  	  return fNumber * sNumber;
  	case 'div':
  	  return fNumber / sNumber;
  	default:
  	  break;
  }
}

export {
	compute
}