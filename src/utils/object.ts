import { cloneDeep } from 'lodash'

export const deleteKeys = <T, K extends keyof T>(object: T, keys: K[]) => {
  const payload = cloneDeep(object)

  keys.forEach(key => {
    delete payload[key]
  })

  return payload
}
