import { Card, Button, Image, Item, CarouselSelect } from "narratory"

// image
// button
// card
// list
// carousel
// chip

const narratory_image: Image = {
  type: "image",
  url: "https://example.com/images/logo.png",
  alt: "Example logo",
}

const narratory_button: Button = {
  text: "Button label",
  url: "https://example.com/images/logo.png",
  type: "button",
}

const narratory_card: Card = {
  title: "title",
  description: "optional description",
  subtitle: "optional subtitle",
  image: narratory_image,
  buttons: [narratory_button],
  type: "card",
}

const narratoryListItem: Item = {
  title: "item title",
  url: "https://example.com/images/logo.png",
  description: "optional description",
  image: narratory_image,
  type: "item",
}

const narratoryListItem2: Item = {
  title: "item title",
  url: "https://example.com/images/logo.png",
  description: "optional description",
  image: narratory_image,
  type: "item",
}

const narratory_list = {
  items: [narratoryListItem, narratoryListItem2],
  title: "List title",
  image: narratory_image,
  type: "list",
}

const narratory_carousel: CarouselSelect = {
  items: [narratoryListItem, narratoryListItem2],
  type: "carousel",
}

const narratory_suggestions = ["chip1", "chip2"]

const narratory_payload_list = {
  text: "abc def",
  suggestions: narratory_suggestions,
  content: narratory_list,
}

export {
  narratory_payload_list,
  narratory_carousel,
  narratory_list,
  narratory_card,
  narratory_button,
  narratory_image,
}
