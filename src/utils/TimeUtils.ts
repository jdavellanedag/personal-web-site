export const formatDate = (date: Date): string => {
  let newDate = new Date(date);
  return newDate.toLocaleDateString();
};
