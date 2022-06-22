export const formatMoneyToK = (num) => {
  return Math.abs(num) > 999
    ? (Math.sign(num) * (Math.abs(num) / 1000).toFixed(1)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + 'k'
    : Math.sign(num) * Math.abs(num);
};
