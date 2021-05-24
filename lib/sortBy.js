import { compareBy } from "./compareBy";

export function sortBy(data, fn) {
  return Array.from(data).sort((a, b) => compareBy(a, b, fn));
}
