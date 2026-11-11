# Three-way sorted merge (TypeScript)

`merge(collection1, collection2, collection3)` returns a new ascending `number[]`. The first two inputs must already be sorted ascending; the third must already be sorted descending. Duplicate values are kept, inputs are not modified, and **no sorting function is used**.

The implementation tracks one current position in each input. It repeatedly appends the smallest current value, reading the descending input from its end. This takes `O(n)` time and `O(n)` output space, where `n` is the total number of input elements.

## Requirements

- Node.js 20 or newer
- npm

## Install and run

From the project directory:

```sh
npm install
npm test
npm run build
```

`npm test` runs the unit tests with Vitest. `npm run build` type-checks the project with TypeScript.

## Use

```ts
import { merge } from "./src/merge.js";

const result = merge([1, 4, 7], [2, 5, 8], [9, 6, 3]);
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
```
