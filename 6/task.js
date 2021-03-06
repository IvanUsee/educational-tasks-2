import { length, substr } from './strings';

const reverse = (str) => {
  let i = str.length - 1;
  let result = '';

  while (i >= 0) {
    result += str[i];
    i -= 1;
  }

  return result;
};

export default reverse;
