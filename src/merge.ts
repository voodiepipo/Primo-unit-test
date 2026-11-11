/**
 * Merge two ascending arrays and one descending array into ascending order.
 * Inputs are not modified. Duplicate values are retained.
 */
export function merge(
  collection1: readonly number[],
  collection2: readonly number[],
  collection3: readonly number[],
): number[] {
  const result: number[] = [];
  let i = 0;
  let j = 0;
  let k = collection3.length - 1;

  while (i < collection1.length || j < collection2.length || k >= 0) {
    let value = Infinity;

    if (i < collection1.length && collection1[i] < value) value = collection1[i]!;
    if (j < collection2.length && collection2[j] < value) value = collection2[j]!;
    if (k >= 0 && collection3[k]! < value) value = collection3[k]!;

    result.push(value);
    if (i < collection1.length && collection1[i] === value) i++;
    if (j < collection2.length && collection2[j] === value) j++;
    if (k >= 0 && collection3[k] === value) k--;
  }

  return result;
}
