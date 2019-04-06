## Benchmarks

> Below you will find benchmark results for [Node.js](#Node) and [multiple browser](#Browsers) engines.

## Node

These are the results while running this directory's benchmark suite in Node v10.13.0.

> **Note:** The `≠` denotes that the candidate has a different API and is not compatible with `classnames` usage.

```
# Strings
  classcat ≠   x  8,590,994 ops/sec ±0.27% (94 runs sampled)
  classnames   x  3,987,311 ops/sec ±1.68% (94 runs sampled)
  clsx         x 11,066,632 ops/sec ±0.23% (96 runs sampled)

# Objects
  classcat ≠   x 8,566,516 ops/sec ±0.42% (97 runs sampled)
  classnames   x 3,697,182 ops/sec ±1.31% (98 runs sampled)
  clsx         x 7,147,168 ops/sec ±0.30% (95 runs sampled)

# Arrays
  classcat ≠   x 7,538,840 ops/sec ±0.56% (95 runs sampled)
  classnames   x 1,697,776 ops/sec ±1.41% (97 runs sampled)
  clsx         x 7,922,225 ops/sec ±0.18% (95 runs sampled)

# Nested Arrays
  classcat ≠   x 6,462,158 ops/sec ±0.22% (97 runs sampled)
  classnames   x 1,201,570 ops/sec ±0.22% (96 runs sampled)
  clsx         x 6,132,222 ops/sec ±0.49% (95 runs sampled)

# Nested Arrays w/ Objects
  classcat ≠   x 6,277,187 ops/sec ±0.62% (93 runs sampled)
  classnames   x 1,613,328 ops/sec ±1.69% (96 runs sampled)
  clsx         x 5,156,844 ops/sec ±0.22% (95 runs sampled)

# Mixed
  classcat ≠   x 7,073,536 ops/sec ±0.26% (95 runs sampled)
  classnames   x 2,149,952 ops/sec ±1.24% (95 runs sampled)
  clsx         x 5,577,715 ops/sec ±0.20% (93 runs sampled)

# Mixed (Bad Data)
  classcat ≠   x 1,770,852 ops/sec ±0.14% (97 runs sampled)
  classnames   x 1,148,353 ops/sec ±0.54% (97 runs sampled)
  clsx         x 1,887,010 ops/sec ±0.14% (96 runs sampled)
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
