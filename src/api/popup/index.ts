import { cloneDeep } from 'lodash'
import db from '@/composables/use-dexie'
import type { NodeFor } from '@/store/work-space'

export const getGathersFromDB = (): Promise<NodeFor<ToyNote.Gather>[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          title: '3月工作日志',
          id: 'gather-1',
          createTime: '2024-03-21 09:11:23',
          isEdit: false,
          isOpen: false,
          isLeaf: false,
          children: []
        },
        {
          title: '四月请假记录',
          id: 'gather-2',
          createTime: '2024-04-22 09:37:23',
          isEdit: false,
          isOpen: false,
          isLeaf: false,
          children: []
        }
      ])
    }, 1e3)
  })
}

export const getProfilesFromDB = (): Promise<NodeFor<ToyNote.Profile>[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          title: '2024年3月11日工作日志',
          id: '0101010',
          createTime: '2024-03-21 09:12:23',
          gather: 'gather-1',
          isEdit: false,
          isOpen: false,
          isLeaf: true
        },
        {
          title: '2024年3月12日工作日志',
          id: '0-0-0-1',
          createTime: '2024-03-21 09:23:23',
          gather: 'gather-1',
          isEdit: false,
          isOpen: false,
          isLeaf: true
        },
        {
          title: '2024年3月13日工作日志',
          id: '0-0-0-2',
          createTime: '2024-03-21 09:32:23',
          gather: 'gather-1',
          isEdit: false,
          isOpen: false,
          isLeaf: true
        },
        {
          title: '2024年3月14日工作日志',
          id: '0-0-0-3',
          createTime: '2024-03-21 09:34:23',
          gather: 'gather-1',
          isEdit: false,
          isOpen: false,
          isLeaf: true
        },
        {
          title: '2024年4月15日请假',
          id: '0-0-0-4',
          createTime: '2024-04-21 09:37:23',
          gather: 'gather-2',
          isEdit: false,
          isOpen: false,
          isLeaf: true
        }
      ])
    }, 1e3)
  })
}

export const addGatherDB = (gather: ToyNote.Gather) => {
  return db.gathers.add(gather)
}

export const updateGatherDB = (gather: ToyNote.Gather) => {
  return db.gathers.update(gather.id, gather)
}

export const deleteGatherDB = (gather: ToyNote.Gather) => {
  return db.gathers.delete(gather.id)
}


