import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit'

export type NodeFor<T> = {
  isLeaf: boolean
  isEdit: boolean
  isOpen: boolean
} & T

interface WorkSpaceState {
  gathers: NodeFor<ToyNote.Gather>[]
  profiles: NodeFor<ToyNote.Profile>[]
}

const initialState: WorkSpaceState = {
  gathers: [
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
  ],
  profiles: [
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
  ]
}

const slice = createSlice({
  name: 'work-space',
  initialState,
  reducerPath: undefined,
  reducers: {
    addGather (state, action: PayloadAction<NodeFor<ToyNote.Gather>>) {
      state.gathers.unshift(action.payload)
    },
    deleteGather (state, action: PayloadAction<ToyNote.Gather>) {
      const index = state.gathers.findIndex(gather => gather.id === action.payload.id)

      state.gathers.splice(index, 1)
    },
    setGathers (state, action: PayloadAction<NodeFor<ToyNote.Gather>[]>) {
      state.gathers = action.payload
    },
    addProfile (state, action: PayloadAction<NodeFor<ToyNote.Profile>>) {
      state.profiles.unshift(action.payload)
    },
    deleteProfile (state, action: PayloadAction<NodeFor<ToyNote.Profile>>) {
      const index = state.profiles.findIndex(profile => profile.id === action.payload.id)
      state.profiles.splice(index, 1)
    },
    setProfiles (state, action: PayloadAction<NodeFor<ToyNote.Profile>[]>) {
      state.profiles = action.payload
    }
  },
  selectors: {
    generateWorkTree: (state) => {
      return state.gathers.map(gather => {
        return {
          ...gather,
          children: state.profiles.filter(profile => profile.gather === gather.id)
        }
      })
    }
  }
})

export const {
  addGather,
  deleteGather,
  setGathers,
  addProfile,
  deleteProfile,
  setProfiles
} = slice.actions

export default slice.reducer
