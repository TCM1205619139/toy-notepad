import { v4 as uuidv4 } from 'uuid'
import dayjs from 'dayjs'

export const createNode = <T extends { title: string, children?: any[] }>(data: T): ToyComponent.TreeNode<T> => {
  return {
    isOpen: false,
    key: uuidv4(),
    label: data.title,
    isEdit: true,
    parentKey: '',
    isLeaf: !data.children,
    data: data
  }
}

export const createGather = (exits: ToyNote.Gather[]): ToyNote.Gather => {
  return {
    title: `文件夹-${exits.length + 1}`,
    id: uuidv4(),
    createTime: dayjs().format('YYYY-MM-DD HH:mm:ss')
  }
}

export const createProfile = (parent: ToyNote.Gather, exits: ToyNote.Profile[]): ToyNote.Profile => {
  return {
    title: `文件-${exits.length + 1}`,
    id: uuidv4(),
    createTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    gather: parent.id
  }
}
