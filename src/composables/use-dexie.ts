import { Dexie } from 'dexie'
import type { EntityTable } from 'dexie'
// import { useLiveQuery } from 'dexie-react-hooks'

const db = new Dexie('toy-note') as Dexie & {
  gathers: EntityTable<ToyNote.Gather, 'id'>
}

db.version(1).stores({
  gathers: 'id, title, createTime'
})

export default db
