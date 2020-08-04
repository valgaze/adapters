import * as test from "tape"
import { dialogflowmessengerAdapter } from "./../src/df_messenger"

// const loud = (payload: any) => {
//   console.log("\n\n>>>>\n\n", JSON.stringify(payload), "\n\n<<<\n\n")
// }

test("setup", function (t: any) {
  t.end()
})

test("<Carousel, discards images>", async (t: any) => {
  const narratory_payload = {
    text: "mandatory text",
    suggestions: ["a", "b", "c"],
    content: {
      items: [
        {
          title: "item title",
          url: "https://example.com/images/logo.png",
          description: "optional description",
          image: {
            type: "image",
            url: "https://example.com/images/logo.png",
            alt: "Example logo",
          },
          type: "item",
        },
        {
          title: "item title",
          url: "https://example.com/images/logo.png",
          description: "optional description",
          image: {
            type: "image",
            url: "https://example.com/images/logo.png",
            alt: "Example logo",
          },
          type: "item",
        },
      ],
      type: "carousel",
    },
  }

  const expected = {
    fulfillmentText: "mandatory text",
    richContent: [
      {
        type: "accordion",
        title: "item title",
        image: { src: { rawUrl: "https://example.com/images/logo.png" } },
        text: "optional description",
      },
      {
        type: "accordion",
        title: "item title",
        image: { src: { rawUrl: "https://example.com/images/logo.png" } },
        text: "optional description",
      },
      {
        type: "chips",
        options: [{ text: "a" }, { text: "b" }, { text: "c" }],
      },
    ],
  }

  const actual = dialogflowmessengerAdapter({ messages: [narratory_payload] })
  t.deepEqual(actual, expected)
})

test("teardown", function (t: any) {
  // ...
  t.end()
})
