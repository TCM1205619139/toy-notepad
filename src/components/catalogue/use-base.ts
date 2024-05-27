import { v4 as uuidv4 } from 'uuid'

export const generateEmptyGather = (): ToyComponent.CatalogueItem => {
  return {
    title: '',
    key: uuidv4(),
    children: [],
    isEdit: true,
    open: false
  }
}

type CatalogueDetail = Omit<ToyComponent.CatalogueItem, 'children' | 'open'>
export const generateEmptyDetail = (): CatalogueDetail => {
  return {
    title: '',
    key: uuidv4(),
    isEdit: true
  }
}
