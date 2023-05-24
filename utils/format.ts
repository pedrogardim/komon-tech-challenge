export const formatNumber = (input: number, cases = 2) => {
  if (input >= 1_000_000) {
    return (input / 1_000_000).toFixed(cases) + 'M';
  }
  if (input >= 1_000) {
    return (input / 1_000).toFixed(cases) + 'K';
  }
  return input;
};
