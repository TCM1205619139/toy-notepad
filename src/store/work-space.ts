import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { deleteKeys } from '@/utils/object'
import {
  getGathersFromDB,
  getProfilesFromDB,
  addGatherDB,
  updateGatherDB, deleteGatherDB
} from '@/api/popup'

// export type NodeFor<T> = {
//   isLeaf: boolean
//   isEdit: boolean
//   isOpen: boolean,
//   children?:
// } & T
export type NodeFor<T> = T extends ToyNote.Profile
  ? {
  isLeaf: boolean
  isOpen: boolean
  isEdit: boolean
} & T
  : {
  isLeaf: boolean
  isOpen: boolean
  isEdit: boolean
  children: NodeFor<ToyNote.Profile>[]
} & T

interface WorkSpaceState {
  gathers: NodeFor<ToyNote.Gather>[]
  profiles: NodeFor<ToyNote.Profile>[]
}

const initialState: WorkSpaceState = {
  gathers: [],
  profiles: []
}

const slice = createSlice({
  name: 'work-space',
  initialState,
  reducerPath: undefined,
  reducers: {
    deleteGather(state, action: PayloadAction<NodeFor<ToyNote.Gather>>) {
      const index = state.gathers.findIndex(gather => gather.id === action.payload.id)

      state.gathers.splice(index, 1)
      deleteGatherDB(action.payload)
    },
    setGather(state, action: PayloadAction<NodeFor<ToyNote.Gather>>) {
      const index = state.gathers.findIndex(gather => gather.id === action.payload.id)

      if (index === -1) {
        state.gathers.unshift(action.payload)
        addGatherDB(action.payload)
      } else {
        state.gathers.splice(index, 1, action.payload)
        updateGatherDB(action.payload)
      }
    },
    setGathers(state, action: PayloadAction<NodeFor<ToyNote.Gather>[]>) {
      return {
        ...state,
        gathers: action.payload
      }
    },
    deleteProfile(state, action: PayloadAction<NodeFor<ToyNote.Profile>>) {
      const index = state.profiles.findIndex(profile => profile.id === action.payload.id)
      state.profiles.splice(index, 1)
    },
    setProfile(state, action: PayloadAction<NodeFor<ToyNote.Profile>>) {
      const index = state.profiles.findIndex(profile => profile.id === action.payload.id)

      if (index === -1) {
        state.profiles.unshift(action.payload)
      } else {
        state.profiles.splice(index, 1, action.payload)
      }
    },
    setProfiles(state, action: PayloadAction<NodeFor<ToyNote.Profile>[]>) {
      return {
        ...state,
        profiles: action.payload
      }
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

const {
  setGathers,
  setProfiles
} = slice.actions

export const {
  deleteGather,
  setGather,
  deleteProfile,
  setProfile
} = slice.actions

export const loadGathers = () => {
  return (dispatch: any) => {
    getGathersFromDB().then(gathers => {
      dispatch(setGathers(gathers))
    })
  }
}

export const loadProfiles = () => {
  return (dispatch: any) => {
    getProfilesFromDB().then(profiles => {
      dispatch(setProfiles(profiles))
    })
  }
}

export default slice.reducer
