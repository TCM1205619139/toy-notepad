import { Dexie } from 'dexie'
// import { useLiveQuery } from 'dexie-react-hooks'

const db = new Dexie('toy-note')

db.version(1)