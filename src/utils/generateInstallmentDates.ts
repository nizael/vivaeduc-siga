export function generateInstallmentDates(
  amount: number,
  installments: number,
  dueDay: number
): { dueDate: Date, amount: number, number: number }[] {
  const dates: { dueDate: Date, amount: number, number: number }[] = [];
  const installmentAmount = Number((amount / installments).toFixed(2));
  const today = new Date();

  let installmentDate = new Date(today);
  installmentDate.setDate(installmentDate.getDate() + 1);

  let dayOfWeek = installmentDate.getDay();
  if (dayOfWeek === 6) {
    installmentDate.setDate(installmentDate.getDate() + 2);
  } else if (dayOfWeek === 0) {
    installmentDate.setDate(installmentDate.getDate() + 1);
  }

  for (let i = 0; i < installments; i++) {
    if (i > 0) {
      installmentDate = new Date(installmentDate);
      installmentDate.setMonth(installmentDate.getMonth() + 1);
      installmentDate.setDate(dueDay);

      if (installmentDate.getDate() !== dueDay) {
        installmentDate.setDate(0);
      }

      dayOfWeek = installmentDate.getDay();
      if (dayOfWeek === 6) {
        installmentDate.setDate(installmentDate.getDate() + 2)
      } else if (dayOfWeek === 0) {
        installmentDate.setDate(installmentDate.getDate() + 1)
      }
    }

    dates.push({
      dueDate: installmentDate,
      amount: installmentAmount,
      number: i + 1,
    });
  }

  return dates
}
