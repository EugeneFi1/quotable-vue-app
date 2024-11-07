export interface Qoute {
  author: string
  content: string
}

export interface QouteComponentProps {
  author?: string
  content?: string
  loading?: boolean
}

export interface QouteBE {
  _id: string
  // The quotation text
  content: string
  // The full name of the author
  author: string
  // The `slug` of the quote author
  authorSlug: string
  // The length of quote (number of characters)
  length: number
  // An array of tag names for this quote
  tags: string[]
}
