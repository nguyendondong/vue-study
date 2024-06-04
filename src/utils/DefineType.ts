export type User = {
  id: string
  name: string
  email: string
  role: string
  status: string
}

export type Page = {
  currentPage: number
  nextPage: number
  prevPage: number
  lastPage: number
  total: number
  perPage: number
}