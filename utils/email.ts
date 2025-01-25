export function sanitizeEmail(email: string): string {
  return email.replace(/@/g, '[at]');
}
