import React, {
  createRef, EventHandler,
  MouseEventHandler, UIEventHandler,
  useEffect,
  useMemo,
  useState
} from 'react'
import type { HTMLAttributes, ReactNode } from 'react'
import './index.scss'
import { Button } from 'antd'

type Props = {
  children: ReactNode
} & HTMLAttributes<HTMLDivElement>

const Scrollbar: React.FC<Props> = ({children, ...props}) => {
  const view = createRef<HTMLDivElement>()
  const wrapper = createRef<HTMLDivElement>()
  const [viewHeight, setViewHeight] = useState(0)
  const [wrapperScrollTop, setWrapperScrollTop] = useState(0)
  const [rightThumbStyle, setRightThumbStyle] = useState({})

  useEffect(() => {
    if (!view.current) return

    resizeObserver.observe(view.current)

    return () => {
      if (!view.current) return

      resizeObserver.unobserve(view.current)
    }
  }, [])

  useEffect(() => {
    if (!view.current || !wrapper.current) return
    const wrapperHeight = wrapper.current.offsetHeight
    if (viewHeight <= wrapperHeight) {
      setRightThumbStyle({
        display: 'none'
      })
      return
    }
    setRightThumbStyle({
      height: `${wrapperHeight / viewHeight * 100}%`,
      transform: `translateY(${wrapperScrollTop / viewHeight * 100}%)`
    })
  }, [viewHeight, wrapperScrollTop])

  const resizeObserveFn = (entries: ResizeObserverEntry[], observer: ResizeObserver) => {
    if (entries.length === 0) return
    const target = entries[0].target as HTMLDivElement

    setViewHeight(target.offsetHeight)
  }

  const resizeObserver = new ResizeObserver(resizeObserveFn)

  const onViewScroll = (evt: React.UIEvent<HTMLDivElement>) => {
    setWrapperScrollTop((evt.target as any).scrollTop)
  }

  return (
    <div className="toy-scrollbar-container" {...props}>
      <div className="toy-scrollbar-wrapper" ref={wrapper} onScroll={onViewScroll}>
        <div className="toy-scrollbar-view" ref={view}>
          {children}
        </div>
        <div className="toy-scrollbar__bar right">
          <div className="toy-scrollbar__thumb" style={rightThumbStyle}></div>
        </div>
        <div className="toy-scrollbar__bar bottom"></div>
      </div>
    </div>
  )
}

export default Scrollbar
