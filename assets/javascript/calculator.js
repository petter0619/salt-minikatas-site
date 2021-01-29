export const evaluate = (string) => {
  if (typeof string !== 'string') return 'invalid expression';

  const expression = string.replace(/\s/g, '').replace(/,/g, '.');
  
  const regex = /^(-?\d+[,\.]?\d*)[-\/\*+](-?\d+[,\.]?\d*)$/;
  if (!regex.test(expression)) return 'invalid expression';

  const a = [];
  const operator = [];
  const b = [];
  let firstNumber = true;

  [...expression].forEach((item, i) => {
    if (i === 0) {
      a.push(item);
    } else if (firstNumber && /\+|\*|\/|-/.test(item)) {
      operator.push(item);
      firstNumber = false;
    } else if (firstNumber) {
      a.push(item);
    } else {
      b.push(item);
    }
  });

  switch (operator.join('')) {
    case '+':
      return parseFloat(a.join('')) + parseFloat(b.join(''));
      break;
    case '-':
      return parseFloat(a.join('')) - parseFloat(b.join(''));
      break;
    case '/':
      if (b.join('') === '0') {
        return 'invalid expression';
      } else {
        return parseFloat(a.join('')) / parseFloat(b.join(''));
      }
      break;
    case '*':
      return parseFloat(a.join('')) * parseFloat(b.join(''));
      break;
    default:
      return 'invalid expression';
      break;
  }
};
