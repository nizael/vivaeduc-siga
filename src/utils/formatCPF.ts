export const formatCPF = (cpf: string) => {
  const justNumber = cpf.replace(/\D/g, '');

  if (justNumber.length !== 11) return '000.000.000-00'
  return `${justNumber.slice(0, 3)}.${justNumber.slice(3, 6)}.${justNumber.slice(6, 9)}-${justNumber.slice(9, 11)}`;
} 