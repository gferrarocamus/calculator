import operate from './operate';

const clear = (value) => {
  if (value === null) return '';

  const copy = value.slice();
  if (Number.isNaN(+copy)) return '';
  return copy;
};

const copyData = data => ({
  total: clear(data.total),
  next: clear(data.next),
  operation: data.operation,
});

const digits = (data, buttonName) => {
  const result = copyData(data);

  if (result.operation === '=') {
    result.total = '';
    result.operation = null;
  }

  if (result.operation === null) {
    result.total = result.total === '0' ? buttonName : (result.total += buttonName);
  } else {
    result.next += buttonName;
  }
  return result;
};

const pointChecks = (value) => {
  if (value.slice(-1) === '.') return value;
  if (value === '' || value.indexOf('.') !== -1) return '0.';
  return `${value}.`;
};

const point = (data) => {
  const result = copyData(data);

  if (result.operation === '=') {
    result.total = '';
    result.operation = null;
  }

  if (result.next === '' && result.operation === null) {
    result.total = pointChecks(result.total);
  } else {
    result.next = pointChecks(result.next);
  }
  return result;
};

const percentage = (data) => {
  const result = copyData(data);
  if (result.next === '' && result.operation === null) {
    result.total = operate(result.total, '100', '÷');
  } else {
    const secondValue = operate(result.next, '100', '÷');
    result.total = operate(result.total, secondValue, result.operation);
    result.next = null;
  }
  result.operation = '=';
  return result;
};

const basicOperators = (data, buttonName) => {
  const result = copyData(data);

  result.operation = buttonName;

  if (result.next !== '') {
    result.total = operate(result.total, result.next, buttonName);
    result.next = null;
  }

  return result;
};

const inverseChecks = (value) => {
  if (value === '' || value === '0') return '-';
  if (value === '-') return '0';
  return operate(value, '-1', '×');
};

const inverse = (data) => {
  const result = copyData(data);
  if (result.next === '' && !(/[+−×÷]/.test(result.operation))) {
    result.total = inverseChecks(result.total);
  } else {
    result.next = inverseChecks(result.next);
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
  if (/[+−×÷]/.test(result.operation)) {
    result.total = result.total === ''
      ? operate(0, result.next, result.operation)
      : operate(result.total, result.next, result.operation);
    result.next = null;
  } else if (result.total.slice(-1) === '.') result.total = result.total.slice(0, -1);
  result.operation = '=';
  return result;
};

const calculate = (data, buttonName) => {
  switch (buttonName) {
    case '0':
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
