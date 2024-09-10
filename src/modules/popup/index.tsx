import React, { useEffect, useMemo } from 'react'
import ReactDom from 'react-dom/client'
import { Provider as StoreProvider } from 'react-redux'
import { cloneDeep } from 'lodash'

import { addGatherDB, updateGatherDB } from '@/api/popup'
import store, { useAppDispatch, useAppSelectors } from '@/store'
import {
  NodeFor,
  setGather,
  setProfile,
  deleteGather,
  deleteProfile,
  loadGathers,
  loadProfiles
} from '@/store/work-space'

import { createGather, createProfile } from '@/components/tree/create-node'
import { Divider as ToyDivider, Button as ToyButton, Tree as ToyTree, Catalogue as ToyCatalogue } from '@/components'
import ToyEditor from '@/components/toy-editor'

import './index.scss'


const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const gathers = useAppSelectors(state => state.workSpace.gathers)
  const profiles = useAppSelectors(state => state.workSpace.profiles)
  const catalogue = useMemo(() => {
    return gathers.map(gather => {
      return {
        ...gather,
        children: profiles.filter(profile => profile.gather === gather.id)
      }
    })
  }, [gathers, profiles])

  useEffect(() => {
    dispatch(loadGathers())
    dispatch(loadProfiles())
  }, [])

  const onAddGather = () => {
    dispatch(setGather({
      ...createGather(gathers),
      children: [],
      isLeaf: false,
      isOpen: false,
      isEdit: true
    }))
  }

  const onAddProfile = (gather: NodeFor<ToyNote.Gather>) => {
    dispatch(setProfile({
      ...createProfile(gather, gather.children),
      isEdit: true,
      isOpen: false,
      isLeaf: true
    }))
  }

  const onAddCatalogue = (node: NodeFor<ToyNote.Gather | ToyNote.Profile>) => {
    onAddProfile(node as NodeFor<ToyNote.Gather>)
  }
  const onSaveCatalogue = (node: NodeFor<ToyNote.Gather | ToyNote.Profile>) => {
    if (node.isLeaf) {
      if (!node.title) return dispatch(deleteProfile(node as NodeFor<ToyNote.Profile>))
      dispatch(setProfile(node as NodeFor<ToyNote.Profile>))
    } else {
      if (!node.title) return dispatch(deleteGather(node as NodeFor<ToyNote.Gather>))
      dispatch(setGather(node as NodeFor<ToyNote.Gather>))
    }
  }

  return (
    <div className="app">
      <div className="content">
        <section className="catalogue-wrapper">
          <div className="actions-group">
            <ToyButton size="mini" type="default" onClick={onAddGather}>增加文件夹</ToyButton>
          </div>
          <ToyDivider style={{ margin: '8px 0' }} direction="horizontal" />
          <ToyCatalogue data={catalogue} onSave={onSaveCatalogue} onAdd={onAddCatalogue}></ToyCatalogue>
        </section>
        <ToyDivider direction="vertical" style={{ margin: '0 6px' }} />
        <ToyEditor/>
      </div>
    </div>
  )
}

ReactDom.createRoot(
  document.getElementById('app') as HTMLDivElement
).render(
  <StoreProvider store={store}>
    <App/>
  </StoreProvider>
)
