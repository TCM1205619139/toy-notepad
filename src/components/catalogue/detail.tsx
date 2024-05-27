import React, {
  ChangeEventHandler,
  HTMLAttributes,
  KeyboardEventHandler,
  MouseEventHandler,
  createRef,
  useState
} from 'react'
import { Icon, Button } from '@/components'
import './detail.scss'

type Props = HTMLAttributes<HTMLDivElement> & {
  detail: Omit<ToyComponent.CatalogueItem, 'children'>
  onDeleteDetail: (detail: ToyComponent.CatalogueItem) => void
}

const Detail: React.FC<Props> = ({
 detail: propsDetail,
 onDeleteDetail,
 ...props
}) => {
  const [detail, setDetail] = useState(propsDetail)
  const titleInputRef = createRef<HTMLInputElement>()

  const saveDetailTitle = (detail: ToyComponent.CatalogueItem) => {
    if (!detail.title.trim()) {
      onDeleteDetail(detail)
    }
    setDetailState({
      ...detail,
      isEdit: false
    })
  }

  const startEditDetailTitle: MouseEventHandler<HTMLButtonElement> = (evt) => {
    setDetailState({
      isEdit: true
    })
  }

  const onKeyUpSaveDetailTitle: KeyboardEventHandler<HTMLInputElement> = (evt) => {
    if (evt.keyCode !== 13) return
    setDetailState({
      title: (evt.target as HTMLInputElement).value,
      isEdit: false
    })
  }

  const setDetailState = (state: Partial<ToyComponent.CatalogueItem>) => {
    setDetail({
      ...detail,
      ...state
    })
  }

  const onDetailTitleChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    setDetailState({
      title: evt.target.value
    })
  }

  return (
    <section {...props} className="detail-container">
      <Icon name="gz-rz" size="mini"/>
      {
        detail.isEdit
          ? <input
            type="text"
            value={detail.title}
            ref={titleInputRef}
            onBlur={() => saveDetailTitle(detail)}
            onChange={onDetailTitleChange}
            onKeyUp={onKeyUpSaveDetailTitle}
          />
          : <span className="title">{detail.title}</span>
      }
      <div className="operators">
        {detail.isEdit}
        {
          !detail.isEdit
            ? <Button
              icon={<Icon name="edit" style={{fontSize: '15px', padding: 0}}/>}
              onClick={startEditDetailTitle}
            />
            : <Button
              icon={<Icon name="edit" style={{fontSize: '15px', padding: 0}}/>}
            />
        }
      </div>
    </section>
  )
}

export default Detail
