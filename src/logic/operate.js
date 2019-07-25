const Big = require('big.js');

const operate = (firstValue, secondValue, operator) => {
  if (firstValue === '' || secondValue === '') return;
  console.log(firstValue)
  console.log(secondValue)
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
      return null;
  }

  return total.toString();
};

export default operate;
