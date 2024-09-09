import { v4 as uuidv4 } from 'uuid'

export default class UserIndexedDB {
  private request?: IDBRequest | IDBOpenDBRequest
  private opened = false
  private readonly name: string
  private db?: IDBDatabase

  constructor(name: string) {
    if (!name) throw new Error('no name')
    if (!indexedDB) throw new Error('unusable indexeddb')
    this.name = name
  }

  public version (version: number) {
    this.request = indexedDB.open(this.name, version)

    this.request.onsuccess = () => {
      this.opened = true
    }

    this.request.onerror = () => {
      this.opened = false
    }

    if (this.opened) {
      (this.request as IDBOpenDBRequest).onupgradeneeded = (evt: any) => {
        this.db = evt.target.result as IDBDatabase
      }
    }

    return this
  }

  stores (args: { [key: string]: string }) {
    Object.keys(args).forEach(key => {
      // @ts-ignore
      this[key] = new UserIndexedDBStorage()
    })
  }
}

class UserIndexedDBIndex {
  constructor() {
  }
}

class UserIndexedDBStorage {
  data: any
  constructor(data: {[key: string]: any}) {
    this.data = data
  }

  add (args: {[key: string]: any}) {
    return new Promise((resolve, reject) => {

    })
  }

  where () {

  }

  below () {

  }

  toArray () {

  }
}
