const lpad = (str, padString, length) => {
  while (str.length < length) {
    str = padString + str;
  }
  return str;
};

export default lpad;
