import React, { HTMLAttributes } from 'react'
import { Icon, Button } from '@/components'
import './detail.scss'

type Props = HTMLAttributes<HTMLDivElement> & {
  detail: ToyComponent.CatalogueItem
}

const Gather: React.FC<Props> = ({ detail, ...props}) => {

  return (
    <section { ...props } className="detail-container">
      <Icon name="gz-rz" />
      {
        detail.isEdit
          ? <input type="text" value={detail.title} />
          : <span className="title">{ detail.title }</span>
      }
      <div className="operators">
        { detail.isEdit }
        {
          !detail.isEdit
            ? <Button
              icon={<Icon name="edit" style={{ fontSize: '15px', padding: 0 }}/>}
            />
            : ''
        }
      </div>
    </section>
  )
}

export default Gather
