import { Dexie } from 'dexie'
import type { EntityTable } from 'dexie'

const db = new Dexie('toy-note') as Dexie & {
  gathers: EntityTable<ToyNote.Gather, 'id'>,
  profiles: EntityTable<ToyNote.Profile, 'id'>
}

db.version(1).stores({
  gathers: 'id, title, createTime',
  profiles: 'id, title, createTime, gather'
})

export default db
