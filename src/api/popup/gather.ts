import db from '@/composables/use-dexie'
import { deleteKeys } from '@/utils/object'
import { deleteProfilesDB } from '@/api/popup/index'

export const getGathersFromDB = (): Promise<ToyNote.Gather[]> => {
  return new Promise(resolve => {
    db.gathers.toArray().then(gathers => {
      if (!gathers || gathers.length === 0) {
        resolve(db.gathers.bulkAdd([
          {
            title: '3月工作日志',
            id: 'gather-1',
            createTime: '2024-03-21 09:11:23'
          },
          {
            title: '四月请假记录',
            id: 'gather-2',
            createTime: '2024-04-22 09:37:23'
          }
        ]))
      } else {
        resolve([])
      }
    })
  }).then(() => {
    return db.gathers.toArray()
  })
}

export const addGatherDB = (gather: NodeFor<ToyNote.Gather>) => {
  return db.gathers.add(deleteKeys(gather, ['isEdit', 'isLeaf', 'isOpen', 'children']))
}

export const updateGatherDB = (gather: NodeFor<ToyNote.Gather>) => {
  return db.gathers.update(
    gather.id,
    deleteKeys(gather, ['isEdit', 'isLeaf', 'isOpen', 'children'])
  )
}

export const deleteGatherDB = (gather: NodeFor<ToyNote.Gather>) => {
  return Promise.allSettled(
    [
      db.gathers.delete(gather.id),
      deleteProfilesDB(gather.children)
    ]
  )
}
