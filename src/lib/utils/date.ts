export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat('us', { dateStyle: 'medium' }).format(
    date instanceof Date ? date : new Date(date)
  );
}
