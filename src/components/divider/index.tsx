import React from 'react'
import './index.scss'

enum Direction {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal'
}

enum Orientation {
  START = 'start',
  MIDDLE = 'middle',
  END = 'end'
}

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
  direction: `${Direction}`,
  orientation?: `${Orientation}`
}

const Divider: React.FC<Props> = (props: Props = {
  direction: Direction.VERTICAL,
  orientation: Orientation.MIDDLE
}) => {
  return (
    <div
      className={`toy-divider ${props.direction} ${props.orientation}`}
      { ...props }
    >
      { !!props.children && <span className="divider-content">{ props.children }</span> }
    </div>
  )
}

export default Divider
