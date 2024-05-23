import React, { HTMLAttributes, useState } from 'react'
import Gather from '@/components/catalogue/gather'
import './index.scss'

type Props = HTMLAttributes<HTMLDivElement> & {
  data: ToyComponent.CatalogueItem[]
}

const Catalogue: React.FC<Props> = ({data: catalogue, ...props}) => {

  return (<>
    <section className="catalogue">
      {
        catalogue.map(gather => {
          return <Gather key={gather.key} gather={gather}/>
        })
      }
    </section>
  </>)
}

export default Catalogue
