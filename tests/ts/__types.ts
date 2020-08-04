//@ts-nocheck

// | BasicCard | Image | BrowseCarousel | MediaObject | Table | List | Carousel

export interface RichSay {
  text: string | string[]
  ssml?: string | string[]
  cond?: ConditionMap
  suggestions?: string[]
  content?: Content | any
}

export declare class Content {
  type: string
}
export declare class Card extends Content {
  title: string
  description?: string
  subtitle?: string
  image?: Image
  buttons?: Button[]
  type: string
  constructor({
    title,
    subtitle,
    description,
    image,
    buttons,
  }: {
    title: string
    subtitle?: string
    description?: string
    image?: Image
    buttons?: Button[]
  })
}
export declare class Image extends Content {
  url: string
  alt: string
  type: string
  constructor(url: string, alt: string)
}
export declare class Button extends Content {
  text: string
  url: string
  type: string
  constructor(text: string, url: string)
}
export declare class List extends Content {
  items: Item[]
  title?: string
  image?: Image
  type: string
  constructor({
    items,
    title,
    image,
  }: {
    items: Item[]
    title?: string
    image?: Image
  })
}
export declare class CarouselSelect extends Content {
  items: Item[]
  type: string
  constructor(items: Item[])
}
export declare class Item extends Content {
  title: string
  url?: string
  description?: string
  image?: Image
  type: string
  constructor({
    url,
    title,
    description,
    image,
  }: {
    title: string
    url?: string
    description?: string
    image?: Image
  })
}

export declare type ConditionMap = {
  [key: string]: boolean | string | string[] | number | ConditionMap | undefined
  NOT?: ConditionMap
  OR?: ConditionMap
  AND?: ConditionMap
}
export declare type VariableMap = {
  [key: string]:
    | string
    | boolean
    | number
    | object
    | Array<string | boolean | number | object>
}

export class Content {
  type: string = "unknown"
}

export class Card extends Content {
  title: string
  description?: string
  subtitle?: string
  image?: Image
  buttons?: Button[]
  type: string = "card"

  constructor({
    title,
    subtitle,
    description,
    image,
    buttons,
  }: {
    title: string
    subtitle?: string
    description?: string
    image?: Image
    buttons?: Button[]
  }) {
    super()
    this.title = title
    this.subtitle = subtitle
    this.description = description
    this.image = image
    this.buttons = buttons
  }
}

export class Image extends Content {
  url: string
  alt: string
  type: string = "image"

  constructor(url: string, alt: string) {
    super()
    this.url = url
    this.alt = alt
  }
}

export class Button extends Content {
  text: string
  url: string
  type: string = "button"

  constructor(text: string, url: string) {
    super()
    this.text = text
    this.url = url
  }
}

export class List extends Content {
  items: Item[]
  title?: string
  image?: Image
  type: string = "list"

  constructor({
    items,
    title,
    image,
  }: {
    items: Item[]
    title?: string
    image?: Image
  }) {
    super()
    this.items = items
    this.title = title
    this.image = image
  }
}

export class CarouselSelect extends Content {
  items: Item[]
  type: string = "carousel"

  constructor(items: Item[]) {
    super()
    this.items = items
  }
}

export class Item extends Content {
  title: string
  url?: string
  description?: string
  image?: Image
  type: string = "item"

  constructor({
    url,
    title,
    description,
    image,
  }: {
    title: string
    url?: string
    description?: string
    image?: Image
  }) {
    super()
    this.url = url
    this.title = title
    this.description = description
    this.image = image
  }
}

/*
  "info": {
      object (SelectItemInfo)
    },
    "title": string,
    "description": string,
    "image": {
      object (Image)
    }
    */
