import * as test from "tape"
import { suggestions } from "./../src/df_messenger"

test("setup", function (t: any) {
  t.end()
})

test("<Suggestions>", async (t: any) => {
  const res = suggestions(["a", "b"])
  const expected = {
    type: "chips",
    options: [
      {
        text: "Chip 1",
        image: {
          src: {
            rawUrl: "https://example.com/images/logo.png",
          },
        },
        link: "https://example.com",
      },
      {
        text: "Chip 2",
        image: {
          src: {
            rawUrl: "https://example.com/images/logo.png",
          },
        },
        link: "https://example.com",
      },
    ],
  }
  const actual = res
  t.deepEqual(actual, expected)
})

test("teardown", function (t: any) {
  // ...
  t.end()
})
