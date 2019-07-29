import operate from './operate';

const copyData = data => ({
  total: data.total || '',
  next: data.next || '',
  operation: data.operation,
});

const digits = (data, buttonName) => {
  const result = copyData(data);

  if (result.operation === '=') {
    result.total = '';
    result.operation = null;
  }

  if (result.operation === null) {
    result.total += buttonName;
  } else {
    result.next += buttonName;
  }
  return result;
};

const point = (data) => {
  const result = copyData(data);
  if (result.operation === null) {
    result.total += result.total === '' ? '0.' : '.';
  } else {
    result.next += result.next === '' ? '0.' : result.next += '.';
  }
  return result;
};

const percentage = (data) => {
  const result = copyData(data);
  if (result.next === '') {
    result.total = operate(result.total, '100', '÷');
  } else if (result.operation !== null) {
    const secondValue = operate(result.next, '100', '÷');
    result.total = operate(result.total, secondValue, result.operation);
    result.next = null;
    result.operation = null;
  }
  return result;
};

const basicOperators = (data, buttonName) => {
  const result = copyData(data);

  if (result.total === '') result.total = 0;

  if (result.next !== '') {
    result.total = operate(result.total, result.next, buttonName);
    result.next = null;
    result.operation = null;
  } else {
    result.operation = buttonName;
  }
  return result;
};

const inverse = (data) => {
  const result = copyData(data);
  if (result.operation === null) {
    result.total = operate(result.total, '-1', '×');
  } else {
    result.next = operate(result.next, '-1', '×');
  }
  return result;
};

const allClear = () => ({
  total: null,
  next: null,
  operation: null,
});

const equal = (data) => {
  const result = copyData(data);
  if (result.next !== '') {
    result.total = result.total === ''
      ? operate(0, result.next, result.operation)
      : operate(result.total, result.next, result.operation);
    result.next = null;
  }
  result.operation = '=';
  return result;
};

const calculate = (data, buttonName) => {
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
      return digits(data, buttonName);
    case '.':
      return point(data);
    case '+':
    case '−':
    case '×':
    case '÷':
      return basicOperators(data, buttonName);
    case '%':
      return percentage(data);
    case '+/−':
      return inverse(data);
    case 'AC':
      return allClear();
    case '=':
      return equal(data);
    default:
      return null;
  }
};

export default calculate;
