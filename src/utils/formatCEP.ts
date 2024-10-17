export const formatCEP = (cep: string) => {
  const justNumber = cep.replace(/\D/g, '');

  if (justNumber.length !== 8) return '00000-000'
  return `${justNumber.slice(0, 5)}-${justNumber.slice(5, 8)}`;
} 