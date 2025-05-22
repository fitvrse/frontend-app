export function sanitize(value: string) {
  return value.replace(/[^a-zA-Z0-9]/g, '');
}

export function onlyLetters(value: string): string {
  return value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
}
