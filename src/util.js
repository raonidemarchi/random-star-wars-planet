const formatNumber = (number = 0) => {
  let formatedNumber = 0;

  if (isNaN(number)) {
    return number;
  }

  formatedNumber = new Intl.NumberFormat('en').format(number);

  return formatedNumber;
}

const getRandomNumber = (min = 0, max = 1) => {
  return Math.floor((Math.random() * max) + min);
}

export {
  formatNumber,
  getRandomNumber
}