import operate from './operate';

const calculate = (data, buttonName) => {
  const result = {
    total: data.total || '',
    next: data.next || '',
    operation: data.operation,
  };
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
      if (result.operation === '=') result.total = '';
      if (result.operation === null) {
        result.total += buttonName;
      } else {
        result.next += buttonName;
      }
      break;
    case '.':
      if (result.operation === null) {
        // eslint-disable-next-line no-unused-expressions
        result.total === '' ? (result.total += '0.') : (result.total += '.');
      } else {
        // eslint-disable-next-line no-unused-expressions
        result.next === '' ? (result.next += '0.') : (result.next += '.');
      }
      break;
    case '+':
    case '−':
    case '×':
    case '÷':
      result.operation = buttonName;
      if (result.total === '') result.total = 0;
      if (result.next !== '') {
        result.total = operate(result.total, result.next, result.operation);
        result.next = null;
        result.operation = null;
      }
      break;
    case '%':
      if (result.total === '') result.total = 0;
      if (result.next === '') {
        result.total = operate(result.total, '100', '÷');
        result.operation = buttonName;
      } else if (result.operation !== null) {
        const secondValue = operate(result.next, '100', '÷');
        result.total = operate(result.total, secondValue, result.operation);
        result.next = null;
        result.operation = null;
      }
      break;
    case '+/−':
      if (result.operation === null) {
        result.total = operate(result.total, '-1', '×');
      } else {
        result.next = operate(result.next, '-1', '×');
      }
      break;
    case 'AC':
      result.total = null;
      result.next = null;
      result.operation = null;
      break;
    case '=':
      if (result.total === '') result.total = 0;
      if (result.next !== '') {
        result.total = operate(result.total, result.next, result.operation);
        result.next = null;
      }
      result.operation = buttonName;
      break;
    default:
      return null;
  }
  return result;
};

export default calculate;
