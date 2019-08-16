function formatNumber(number) {
  let formatedNumber = 0;

  if (isNaN(number)) {
    return number;
  }

  formatedNumber = new Intl.NumberFormat('en').format(number);

  return formatedNumber;
}

export {
  formatNumber
}