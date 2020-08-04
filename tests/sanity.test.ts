import * as test from "tape"

test("setup", function (t: any) {
  t.end()
})

test("<Sanity Test>", async (t: any) => {
  const sample = true

  const expected = sample
  const actual = true
  t.deepEqual(actual, expected)
})

test("teardown", function (t: any) {
  // ...
  t.end()
})
