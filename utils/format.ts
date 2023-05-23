export const formatNumber = (input: number) => {
  if (input >= 1_000_000) {
    return (input / 1_000_000).toFixed(2) + 'M';
  }
  if (input >= 10_000) {
    return (input / 1_000).toFixed(2) + 'K';
  }
  return input;
};
