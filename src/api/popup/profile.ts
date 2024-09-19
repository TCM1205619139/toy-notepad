import db from '@/composables/use-dexie'
import { deleteKeys } from '@/utils/object'

export const getProfilesFromDB = (): Promise<ToyNote.Profile[]> => {
  return new Promise(resolve => {
    db.profiles.toArray().then(gathers => {
      if (!gathers || gathers.length === 0) {
        resolve(db.profiles.bulkAdd([
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
        ]))
      } else {
        resolve([])
      }
    })
  }).then(() => {
    return db.profiles.toArray()
  })
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


