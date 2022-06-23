export interface Hero {
  id: any
  item: string
}

export interface HeroList {
  items: Hero[]
  backColor: string
  item: string
  status: 'loading' | 'success' | 'error'
  initialData: string[]
  data: string[]
  pageID: string | undefined
}
