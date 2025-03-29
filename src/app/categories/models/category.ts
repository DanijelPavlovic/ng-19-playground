export interface Category {
  id: number
  name: string
  slug: string
  type: string // TODO: enum
  createdAt: Date
  updatedAt: Date
}
