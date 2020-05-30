## Benchmarks

> Below you will find benchmark results for [Node.js](#Node) and [multiple browser](#Browsers) engines.

## Node

These are the results while running this directory's benchmark suite in Node v10.13.0.

> **Note:** The `≠` denotes that the candidate has a different API and is not compatible with `classnames` usage.

```
# Strings
  classcat ≠    x  8,719,816 ops/sec ±0.69% (91 runs sampled)
  classnames    x  3,992,284 ops/sec ±1.64% (94 runs sampled)
  clsx          x 12,784,134 ops/sec ±0.42% (97 runs sampled)

# Objects
  classcat ≠    x 8,680,509 ops/sec ±0.36% (97 runs sampled)
  classnames    x 3,772,978 ops/sec ±0.46% (96 runs sampled)
  clsx          x 9,412,010 ops/sec ±0.42% (95 runs sampled)

# Arrays
  classcat ≠    x 7,589,602 ops/sec ±0.62% (95 runs sampled)
  classnames    x 1,665,275 ops/sec ±1.83% (93 runs sampled)
  clsx          x 9,141,916 ops/sec ±0.42% (95 runs sampled)

# Nested Arrays
  classcat ≠    x 6,411,409 ops/sec ±0.84% (93 runs sampled)
  classnames    x 1,164,706 ops/sec ±1.60% (95 runs sampled)
  clsx          x 7,165,151 ops/sec ±0.47% (91 runs sampled)

# Nested Arrays w/ Objects
  classcat ≠    x 6,447,346 ops/sec ±0.68% (92 runs sampled)
  classnames    x 1,597,180 ops/sec ±1.49% (93 runs sampled)
  clsx          x 7,651,411 ops/sec ±0.56% (95 runs sampled)

# Mixed
  classcat ≠    x 6,595,879 ops/sec ±0.42% (96 runs sampled)
  classnames    x 2,129,199 ops/sec ±1.46% (94 runs sampled)
  clsx          x 8,119,210 ops/sec ±0.42% (93 runs sampled)

# Mixed (Bad Data)
  classcat ≠    x 1,771,920 ops/sec ±0.41% (96 runs sampled)
  classnames    x 1,166,577 ops/sec ±0.84% (94 runs sampled)
  clsx          x 2,238,939 ops/sec ±0.34% (95 runs sampled)
```

## Browsers

Results are taken from the [benchmark suite](https://github.com/JedWatson/classnames/tree/master/benchmarks) within the `classnames` repository.

These were run in a clean environment and on 4GHz i7 with 32GB of RAM. As you can see, results _will_ vary from browser to browser – multiple results were included for quick viewing.

---

<p align="center">
  <img src="chrome.png" width="70%" alt="chrome" />
  <img src="firefox.png" width="70%" alt="firefox" />
  <img src="safari.png" width="70%" alt="safari" />
</p>
