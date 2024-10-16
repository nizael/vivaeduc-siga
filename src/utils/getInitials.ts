export function getInitials(fullName: string): string {
  const names = fullName.trim().split(' ');

  if (names.length === 1) {
    return names[0].charAt(0).toUpperCase();
  }

  const firstInitial = names[0].charAt(0).toUpperCase();
  const lastInitial = names[names.length - 1].charAt(0).toUpperCase();

  return firstInitial + lastInitial;
}
