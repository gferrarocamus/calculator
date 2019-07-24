import operate from './operate';

const calculate = (data, buttonName) => {
  let result = {
    total: data.total,
    next: data.next,
    operation: data.operation,
  };
  let expression = '';
  switch (buttonName) {
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      expression += buttonName;
      if(result.operation === null){
        result.total = expression;
      } else {
        result.next = expression;
      }
      break;
    case '.':
      expression === '' ? expression += '0.' : expression += '.';
      if(result.operation === null){
        result.total = expression;
      } else {
        result.next = expression;
      }
      break;
    case '+':
    case '−':
    case '×':
    case '÷':
    case '%':
      result.operation = buttonName;
      if(result.next !== null){
        result.total = operate(result.total, result.next, result.operation);
        result.next = null;
      }
      break;
    case '+/−':
      if(result.operation === null){
        expression = result.total * -1;
        result.total = ''+expression;
      } else {
        expression = result.total * -1;
        result.next = ''+expression;
      }
      break;
    case 'AC':
      result.total = null;
      result.next = null;
      result.operation = null;
      break;
    case '=':
      if(result.operation !== null && result.next !== null){
        result.total = operate(result.total, result.next, result.operation);
        result.next = null;
      }
      break;
    default:
      break;
  }
  return result;
};

export default calculate;
