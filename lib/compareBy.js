export function compareBy(a, b, fn) {
  const ax = fn(a);
  const bx = fn(b);
  if (ax < bx) return -1;
  if (ax > bx) return 1;
  return 0;
}
