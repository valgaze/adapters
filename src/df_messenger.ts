//@ts-nocheck
import { Content, RichSay, Card, List, Image, Button } from "narratory"

/**
 * DOCS
 * - https://cloud.google.com/dialogflow/docs/integrations/dialogflow-messenger
 * - https://cloud.google.com/dialogflow/docs/intents-rich-messages
 * - https://cloud.google.com/dialogflow/docs/integrations/dialogflow-messenger#combining_response_types
 */

// info
// https://cloud.google.com/dialogflow/docs/integrations/dialogflow-messenger#info_response_type
/**
  {
    "type": "info",
    "title": "Info item title",
    "subtitle": "Info item subtitle",
    "image": {
      "src": {
        "rawUrl": "https://example.com/images/logo.png"
      }
    },
    "actionLink": "https://example.com"
  }
 */

const info = (content: Card) => {
  const payload: any = {
    type: "info",
    title: content.title,
    subtitle: content.subtitle,
  }

  if (content.image && content.image.url) {
    payload.image = {}
    payload.image.src = {}
    payload.image.src.rawUrl = content.image.url
  }

  // We are not handling
  // actionLink/URL
  // Buttons

  return payload
}

// Description
// https://cloud.google.com/dialogflow/docs/integrations/dialogflow-messenger#description_response_type
/**
 * 
      {
        "type": "description",
        "title": "Description title",
        "text": [
          "This is text line 1.",
          "This is text line 2."
        ]
      }
 */

const description = () => {
  return {
    type: "description",
    title: "Description title",
    text: ["This is text line 1.", "This is text line 2."],
  }
}
// Image
/**
      {
        "type": "image",
        "rawUrl": "https://example.com/images/logo.png",
        "accessibilityText": "Example logo"
      }
 */
const image = () => {
  return {
    type: "image",
    rawUrl: "https://example.com/images/logo.png",
    accessibilityText: "Example logo",
  }
}

// Button

/**
 * 
{
  "type": "button",
  "icon": {
    "type": "chevron_right",
    "color": "#FF9800"
  },
  "text": "Button text",
  "link": "https://example.com",
  "event": {
    "name": "",
    "languageCode": "",
    "parameters": {}
  }
}

 */

const button = () => {
  return {
    type: "button",
    icon: {
      type: "chevron_right",
      color: "#FF9800",
    },
    text: "Button text",
    link: "https://example.com",
    event: {
      name: "",
      languageCode: "",
      parameters: {},
    },
  }
}

// List

/**
 * 
   {
        "type": "list",
        "title": "List item 1 title",
        "subtitle": "List item 1 subtitle",
        "event": {
          "name": "",
          "languageCode": "",
          "parameters": {}
        }
      },
      {
        "type": "divider"
      },
      {
        "type": "list",
        "title": "List item 2 title",
        "subtitle": "List item 2 subtitle",
        "event": {
          "name": "",
          "languageCode": "",
          "parameters": {}
        }
      }
 
 */
const list = () => {
  const listPayload = [
    {
      type: "list",
      title: "List item 1 title",
      subtitle: "List item 1 subtitle",
      event: {
        name: "",
        languageCode: "",
        parameters: {},
      },
    },
    {
      type: "divider",
    },
    {
      type: "list",
      title: "List item 2 title",
      subtitle: "List item 2 subtitle",
      event: {
        name: "",
        languageCode: "",
        parameters: {},
      },
    },
  ]
  return listPayload
  // Need to spread/return somehow
}

// Accordion
/**
 * 
{
       "type": "accordion",
        "title": "Accordion title",
        "subtitle": "Accordion subtitle",
        "image": {
          "src": {
            "rawUrl": "https://example.com/images/logo.png"
          }
        },
        "text": "Accordion text"
      }
 */

const accordion = () => {
  return {
    type: "accordion",
    title: "Accordion title",
    subtitle: "Accordion subtitle",
    image: {
      src: {
        rawUrl: "https://example.com/images/logo.png",
      },
    },
    text: "Accordion text",
  }
}

// Suggestion
/**
 * 
  {
        "type": "chips",
        "options": [
          {
            "text": "Chip 1",
            "image": {
              "src": {
                "rawUrl": "https://example.com/images/logo.png"
              }
            },
            "link": "https://example.com"
          },
          {
            "text": "Chip 2",
            "image": {
              "src": {
                "rawUrl": "https://example.com/images/logo.png"
              }
            },
            "link": "https://example.com"
          }
        ]
      }
 * 
 */

const suggestions = (suggestions: string[]) => {
  return {
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
}

// TODO: hanldle chips
const getContent = (content: Content) => {
  const suggestionPayload = []

  if (content.text && content.text.length) {
    // Do we need to pass this through somehow?
  }
  if (content.type === "card") {
  }
  if (content.type === "list") {
  }

  if (content.type === "image") {
  }

  if (content.type === "button") {
  }

  if (content.type === "carousel") {
  }

  if (content.suggestions && content.suggestions.length) {
    suggestionPayload.push(...content.suggestions)
  }
}
/**
 *
 * Decisions:
 *  >"carousel" is now accordion for df-messenger
 *
 */

const buildText = (textInput) => {
  return {
    text: {
      text: [textInput],
    },
  }
}
export const dialogflowmessengerAdapter = ({
  messages,
}: {
  messages: RichSay[]
}) => {
  // TODO: Plaintext
  // If content.text, add to fulfillmentText at root level
  const textNodes = []
  const payload = {
    richContent: messages.map((message) => {
      if (message.text && message.text.length) {
        textNodes.push(message.tex)
      }
      return getContent(message)
    }),
  }
  let fulfillmentText = ""
  // PlainText, need to attach to root level
  if (textNodes.length) {
    textNodes.forEach((msg) => {
      fulfillmentText = msg
    })
  }
  if (fulfillmentText) {
    payload.fulfillmentText = fulfillmentText
  }
  return payload
}

/**
Narratory's:
  card
  image
  button
  list
  carousel
  chip ??

Messenger:
info
description 
image
button
list
accordion
chips

Mapped:
info [card]
description [skip]
image [image]
button [button, Narratory would need extra fields for it to dispatch events]
list [list]
accordion [carousel]
chips [suggestions at top level]

Caveats:
> Chips in messenger have URL, narratory does not
>
*/
