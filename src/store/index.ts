import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import workSpace from '@/store/work-space'

const store = configureStore({
  reducer: {
    workSpace: workSpace
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelectors: TypedUseSelectorHook<RootState> = useSelector

export default store
