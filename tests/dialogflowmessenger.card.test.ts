import * as test from "tape"
import { dialogflowmessengerAdapter } from "./../src/df_messenger"

// const loud = (payload: any) => {
//   console.log("\n\n>>>>\n\n", JSON.stringify(payload), "\n\n<<<\n\n")
// }

test("setup", function (t: any) {
  t.end()
})

test("<Card w/ suggestions>", async (t: any) => {
  const narratory_payload = {
    text: "mandatory text",
    suggestions: ["a", "b", "c"],
    content: {
      title: "title",
      description: "optional description",
      subtitle: "optional subtitle",
      image: {
        type: "image",
        url: "https://example.com/images/logo.png",
        alt: "Example logo",
      },
      buttons: [
        {
          text: "Button label",
          url: "https://example.com/images/logo.png",
          type: "button",
        },
      ],
      type: "card",
    },
  }
  const expected = {
    fulfillmentText: "mandatory text",
    richContent: [
      {
        type: "info",
        title: "title",
        subtitle: "optional subtitle",
        image: { src: { rawUrl: "https://example.com/images/logo.png" } },
        actionLink: "https://example.com/images/logo.png",
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
