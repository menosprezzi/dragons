export const sortBy = (key) =>
  (a, b) => {
    const aValue = a[key].toUpperCase();
    const bValue = b[key].toUpperCase();
    return (aValue < bValue) ? -1 : (aValue > bValue) ? 1 : 0;
  };
