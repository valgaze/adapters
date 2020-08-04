import * as test from "tape"
import { dialogflowmessengerAdapter } from "./../src/df_messenger"

// const loud = (payload: any) => {
//   console.log("\n\n>>>>\n\n", JSON.stringify(payload), "\n\n<<<\n\n")
// }

test("setup", function (t: any) {
  t.end()
})

test("<list w/ , renders root image and discard list-items' images>", async (t: any) => {
  const narratory_payload = {
    text: "mandatory text",
    suggestions: ["a", "b", "c"],
    content: {
      title: "List title",
      image: {
        type: "image",
        url: "https://example.com/images/logo.png",
        alt: "Example logo",
      },
      type: "list",
      items: [
        {
          title: "item title 1",
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
          title: "item title 2",
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
    },
  }
  const expected = {
    fulfillmentText: "mandatory text",
    richContent: [
      {
        type: "image",
        rawUrl: "https://example.com/images/logo.png",
        accessibilityText: "Example logo",
      },
      {
        type: "list",
        title: "item title 1",
        subtitle: "optional description",
        event: { name: "item title 1", languageCode: "en-US", parameters: {} },
      },
      { type: "divider" },
      {
        type: "list",
        title: "item title 2",
        subtitle: "optional description",
        event: { name: "item title 2", languageCode: "en-US", parameters: {} },
      },
      { type: "chips", options: [{ text: "a" }, { text: "b" }, { text: "c" }] },
    ],
  }

  const actual = dialogflowmessengerAdapter({ messages: [narratory_payload] })
  t.deepEqual(actual, expected)
})

test("teardown", function (t: any) {
  // ...
  t.end()
})
