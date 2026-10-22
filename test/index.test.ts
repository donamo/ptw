import assert from "node:assert/strict";
import { test } from "node:test";
import { hello } from "../src/index.js";

test("hello alapértelmezetten World-nek köszön", () => {
  assert.equal(hello(), "Hello, World!");
});

test("hello a megadott névnek köszön", () => {
  assert.equal(hello("Ambrus"), "Hello, Ambrus!");
});
