import { compareBy } from "./compareBy";

export function sortBy<X, Y>(data: X[], fn: (item: X) => Y): X[] {
  return Array.from(data).sort((a, b) => compareBy(a, b, fn));
}
