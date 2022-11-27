export const valueWithDiscount = (value: any, discount: any) => value - Math.floor(value * discount) / 100;

export const addReceiptNumber = (number: any) => {
  const numberLength = number.toString().length;

  switch (numberLength) {
    case 1:
      return `00${number}`;
    case 2:
      return `0${number}`;
    default:
      return number;
  }
};

export const numberWithCommas = (x: any) => {
  x = x.toString();
  const pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x)) x = x.replace(pattern, '$1.$2');
  return x;
};
