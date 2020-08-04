import { Card, Button, Image, Item, CarouselSelect } from "narratory"

// [x] card
// image
// button
// list
// carousel

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

const narratory_payload_suggestions = {
  text: "abc def",
  suggestions: narratory_suggestions,
}

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
  narratory_suggestions,
  narratory_payload_suggestions,
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
