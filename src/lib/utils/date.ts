export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('us', { dateStyle: 'medium' }).format(date);
}
