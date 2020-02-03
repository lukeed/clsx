## Benchmarks

> Below you will find benchmark results for [Node.js](#Node) and [multiple browser](#Browsers) engines.

## Node

These are the results while running this directory's benchmark suite in Node v10.13.0.

> **Note:** The `≠` denotes that the candidate has a different API and is not compatible with `classnames` usage.

```
# Strings
  classcat ≠   x  8,701,496 ops/sec ±0.34% (95 runs sampled)
  classnames   x  3,938,281 ops/sec ±1.60% (92 runs sampled)
  clsx         x 11,253,372 ops/sec ±0.35% (96 runs sampled)

# Objects
  classcat ≠   x 8,594,500 ops/sec ±0.26% (98 runs sampled)
  classnames   x 3,741,576 ops/sec ±0.21% (94 runs sampled)
  clsx         x 7,288,178 ops/sec ±0.31% (96 runs sampled)

# Arrays
  classcat ≠   x 7,461,741 ops/sec ±1.04% (88 runs sampled)
  classnames   x 1,649,404 ops/sec ±1.79% (93 runs sampled)
  clsx         x 8,340,174 ops/sec ±0.53% (96 runs sampled)

# Nested Arrays
  classcat ≠   x 6,347,127 ops/sec ±0.30% (93 runs sampled)
  classnames   x 1,154,165 ops/sec ±1.63% (93 runs sampled)
  clsx         x 6,284,485 ops/sec ±0.58% (90 runs sampled)

# Nested Arrays w/ Objects
  classcat ≠   x 6,422,622 ops/sec ±0.36% (95 runs sampled)
  classnames   x 1,614,032 ops/sec ±0.44% (96 runs sampled)
  clsx         x 6,345,248 ops/sec ±0.21% (95 runs sampled)

# Mixed
  classcat ≠   x 7,071,223 ops/sec ±0.36% (95 runs sampled)
  classnames   x 2,093,250 ops/sec ±1.38% (93 runs sampled)
  clsx         x 6,557,515 ops/sec ±0.73% (91 runs sampled)

# Mixed (Bad Data)
  classcat ≠   x 1,761,143 ops/sec ±0.21% (96 runs sampled)
  classnames   x 1,132,549 ops/sec ±0.91% (95 runs sampled)
  clsx         x 2,018,654 ops/sec ±0.15% (98 runs sampled)
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
