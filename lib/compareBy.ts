export function compareBy<X, Y>(a: X, b: X, fn: (a: X) => Y): -1 | 0 | 1 {
  const ax = fn(a);
  const bx = fn(b);
  if (ax < bx) return -1;
  if (ax > bx) return 1;
  return 0;
}
