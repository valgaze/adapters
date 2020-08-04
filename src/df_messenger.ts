//@ts-nocheck
import { Content, RichSay, Card, List, Image, Button } from "narratory"
import { cardinal } from "narratory/out/data/systemEntities"
const checkArr = (arr) => arr && arr.length
/**Notes
 * - suggestions do not have URL (narratory suggestions dont have them, so discarded)
 *
 *
 *
 */

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

const info = (content: RichSay) => {
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

  if (content.buttons && content.buttons.length) {
    content.buttons.forEach((button) => {
      if (button.url) {
        payload.actionLink = button.url
      }
    })
  }
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
  const options = suggestions.map((text) => {
    return {
      text,
    }
  })
  return {
    type: "chips",
    options,
  }
}

// TODO: hanldle chips
const getContent = (input: RichSay) => {
  const { content } = input

  if (content.type === "card") {
    return info(content)
  }

  if (content.type === "list") {
  }

  if (content.type === "image") {
    return image(content)
  }

  if (content.type === "button") {
  }

  if (content.type === "carousel") {
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
  const suggestionsPayload = []
  const payload = messages.map((message) => {
    if (message.text && message.text.length) {
      textNodes.push(message.text)
    }

    if (message.suggestions && message.suggestions.length) {
      suggestionsPayload.push(...message.suggestions)
    }

    return getContent(message)
  })

  let fulfillmentText = ""
  // PlainText, need to attach to root level
  if (textNodes.length) {
    textNodes.forEach((msg) => {
      fulfillmentText = msg
    })
  }

  if (suggestionsPayload && suggestionsPayload.length) {
    payload.push(suggestions(suggestionsPayload))
  }

  if (fulfillmentText) {
    // Decision: If multiple, allow one plaintext rather than concat
    // payload.fulfillmentText = fulfillmentText
    return {
      fulfillmentText,
      richContent: payload,
    }
  } else {
    return {
      richContent: payload,
    }
  }
}
