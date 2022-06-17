export interface ICard {
  img: string
  title?: string
  btnText?: string
  imgBtn?: any
  styleBack?: string | number
  backColor?: string
  id?: string
  minHeight?: string
  category?: string | undefined
  addHero?: Function
  findIndex?: Function
  deleteItem?: Function
}
