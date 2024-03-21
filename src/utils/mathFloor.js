export const mathFloor = (num, sub, mul, divisor) => {
  return mul === 0 ? Math.floor((num - sub) / divisor) : Math.floor(((num * mul) - sub) / divisor);
}