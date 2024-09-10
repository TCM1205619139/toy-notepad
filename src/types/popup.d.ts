declare namespace ToyNote {
  export type ProfileDetail = {
    content: string
    id: string
    profile: Pick<Profile, 'id'>['id']
  }

  export type Profile = {
    title: string
    id: string,
    createTime: string
    gather: Pick<Gather, 'id'>['id']
  }

  export type Gather = {
    title: string
    id: string
    createTime: string
  }
}
