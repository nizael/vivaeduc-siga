export const formatPhone = (phone: string) => {
  const justNumber = phone.replace(/\D/g, '');

  // if (justNumber.length !== 11) return '000.000.000-00'
  return `(${justNumber.slice(2, 4)}) ${justNumber.slice(4, 5)} ${justNumber.slice(5, 9)}-${justNumber.slice(9, 13)}`;
} 