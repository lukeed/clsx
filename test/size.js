// @ts-check
import { test } from "uvu";
import * as assert from "uvu/assert";
const fs = require("fs");
const zlib = require("zlib");
const { minify } = require("terser");
const pkg = require("../package.json");

function getClaimedSize(text) {
	// Get number from (123B) in any string
	const match = text.match(/\((\d+)B\)/);

	return parseInt(match[1]);
}

test("size", () => {
	const readme = fs.readFileSync("readme.md", "utf8");

	const readmeSize = getClaimedSize(readme);
	const pkgSize = getClaimedSize(pkg.description);

	assert.is(
		readmeSize,
		pkgSize,
		"size is the same in package.json and readme.md"
	);

	const input = fs.readFileSync("src/index.js", "utf8");

	const result = minify(input, {
		module: true,
		compress: true,
	});

	const size = zlib.gzipSync(result.code).byteLength;

	assert.is(size, readmeSize, "size is what claimed");
});

test.run();
