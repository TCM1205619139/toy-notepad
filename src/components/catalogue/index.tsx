import React, { useMemo, useEffect, useRef } from 'react'
import { Button, ConfigProvider, Tree, Input } from 'antd'
import type { GetProps, TreeDataNode, InputRef } from 'antd'
import { EditOutlined, PlusOutlined, SaveOutlined } from '@ant-design/icons'
import type { NodeFor } from '@/store/work-space'

import "./index.scss"

type DirectoryTreeProps = GetProps<typeof Tree.DirectoryTree>

const { DirectoryTree } = Tree

type Props = {
  data: NodeFor<ToyNote.Gather>[]
  onSave: (node: NodeFor<ToyNote.Gather | ToyNote.Profile>) => void
  onAdd: (node: NodeFor<ToyNote.Gather | ToyNote.Profile>) => void
}

const Catalogue: React.FC<Props> = ({ data, onSave, onAdd }) => {
  const treeData = useMemo(() => {
    return data.map(gather => {
      return {
        ...gather,
        title: gather.title,
        key: gather.id,
        children: gather.children.map(profile => {
          return {
            ...profile,
            title: profile.title,
            key: profile.id
          }
        })
      }
    })
  }, [data])
  useEffect(() => {
    /**
     * TODO
     * Bug1：Effect 中无法立刻获取到 Input 组件，需要延时获取，应该是可以避免这个问题的
     * Bug2：快速点击【创建文件夹】按钮，会导致多个 Input 框进入编辑状态
     */
    const focus = data.find(gather => {
      return gather.isEdit || gather.children.find(profile => {
        return (profile as NodeFor<ToyNote.Profile>).isEdit
      })
    })

    editInput.current && editInput.current.blur()
    if (!focus) {
      return
    }

    const timer = setTimeout(() => {
      editInput.current && editInput.current.focus()
    }, 1e2)

    return () => {
      timer && clearTimeout(timer)
    }
  }, [data])
  const editInput = useRef<InputRef>(null)

  const onSelect: DirectoryTreeProps['onSelect'] = (keys, info) => {
    console.log('Trigger Select', keys, info);
  };

  const onExpand: DirectoryTreeProps['onExpand'] = (keys, info) => {
    console.log('Trigger Expand', keys, info);
  };

  const RenderContent = (node: any) => {
    return <div className="custom-title">
      {
        node.isEdit
          ? <Input
            size="small"
            ref={editInput}
            id={node.id}
            defaultValue={node.title}
            onBlur={() => onSave(node)}
          />
          : <span className="title">{ node.title }</span>
      }
      <div className="actions">
        {
          node.isEdit
            ? (
              <ConfigProvider wave={{ disabled: true }}>
                <Button
                  size="small"
                  icon={<SaveOutlined/>}
                  style={{ border: 0, backgroundColor: 'transparent' }}
                />
              </ConfigProvider>
            )
            : (
              <ConfigProvider wave={{ disabled: true }}>
                {
                  !node.isLeaf && <Button
                    size="small"
                    icon={<PlusOutlined/>}
                    style={{ border: 0, backgroundColor: 'transparent' }}
                    onClick={() => onAdd(node)}
                  />
                }
                <Button
                  size="small"
                  icon={<EditOutlined/>}
                  style={{ border: 0, backgroundColor: 'transparent' }}
                />
              </ConfigProvider>
            )
        }
      </div>
    </div>
  }

  return (
    <Tree
      className="ant-tree-class-wrapper"
      blockNode
      multiple
      defaultExpandAll
      onSelect={onSelect}
      onExpand={onExpand}
      treeData={treeData}
      titleRender={RenderContent}
    />
  );
}

export default Catalogue
