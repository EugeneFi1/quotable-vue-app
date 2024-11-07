export interface Qoute {
  author?: string
  content?: string
}

export interface QouteComponentProps extends Qoute {
  loading?: boolean
}
