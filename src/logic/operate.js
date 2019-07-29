const Big = require('big.js');

const operate = (firstValue, secondValue, operator) => {
  if (firstValue === '' || secondValue === '') return 'Malformed expression';

  try {
    let total = '';
    const x = Big(+firstValue);
    const y = Big(+secondValue);

    switch (operator) {
      case '+':
        total = x.plus(y);
        break;
      case '−':
        total = x.minus(y);
        break;
      case '×':
        total = x.times(y);
        break;
      case '÷':
        total = x.div(y);
        break;
      default:
        return 'Malformed expression';
    }
    return total.toString();
  } catch (e) {
    return e.toString().split('[big.js]').join('');
  }
};

export default operate;
