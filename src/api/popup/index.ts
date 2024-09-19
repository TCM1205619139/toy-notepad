import db from '@/composables/use-dexie'
import { deleteKeys } from '@/utils/object'

export const getGathersFromDB = (): Promise<ToyNote.Gather[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
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
      ])
    }, 1e3)
  })
}

export const getProfilesFromDB = (): Promise<ToyNote.Profile[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          title: '2024年3月11日工作日志',
          id: '0101010',
          createTime: '2024-03-21 09:12:23',
          gather: 'gather-1'
        },
        {
          title: '2024年3月12日工作日志',
          id: '0-0-0-1',
          createTime: '2024-03-21 09:23:23',
          gather: 'gather-1'
        },
        {
          title: '2024年3月13日工作日志',
          id: '0-0-0-2',
          createTime: '2024-03-21 09:32:23',
          gather: 'gather-1'
        },
        {
          title: '2024年3月14日工作日志',
          id: '0-0-0-3',
          createTime: '2024-03-21 09:34:23',
          gather: 'gather-1'
        },
        {
          title: '2024年4月15日请假',
          id: '0-0-0-4',
          createTime: '2024-04-21 09:37:23',
          gather: 'gather-2'
        }
      ])
    }, 1e3)
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

export const addProfileDB = (profile: NodeFor<ToyNote.Profile>) => {
  return db.profiles.add(
    deleteKeys(
      profile,
      ['isOpen', 'isEdit', 'isLeaf']
    )
  )
}

export const updateProfileDB = (profile: NodeFor<ToyNote.Profile>) => {
  return db.profiles.update(
    profile.id,
    deleteKeys(profile, ['isOpen', 'isEdit', 'isLeaf'])
  )
}

export const deleteProfilesDB = (profiles: NodeFor<ToyNote.Profile>[]) => {
  return db.profiles.bulkDelete(
    profiles.map(profile => profile.id)
  )
}


