import React, { createRef, useEffect, useMemo, useState } from 'react'
import type { HTMLAttributes, ReactNode } from 'react'
import './index.scss'

type Props = {
  children: ReactNode
} & HTMLAttributes<HTMLDivElement>

const Scrollbar: React.FC<Props> = ({children, ...props}) => {
  const view = createRef<HTMLDivElement>()
  const wrapper = createRef<HTMLDivElement>()
  const [viewHeight, setViewHeight] = useState(0)
  const [wrapperScrollTop, setWrapperScrollTop] = useState(0)

  useEffect(() => {
    if (!view.current) return

    resizeObserver.observe(view.current)
    intersectionObserver.observe(view.current)

    return () => {
      if (!view.current) return

      resizeObserver.unobserve(view.current)
      intersectionObserver.unobserve(view.current)
    }
  }, [])

  const resizeObserveFn = (entries: ResizeObserverEntry[], observer: ResizeObserver) => {
    if (entries.length === 0) return
    const { target } = entries[0]
    debugger

    setViewHeight(target.clientHeight)
    wrapper.current && setWrapperScrollTop(wrapper.current.scrollTop)
    console.log(viewHeight, wrapperScrollTop)
  }
  const intersectionObserverFn = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {

  }

  const resizeObserver = new ResizeObserver(resizeObserveFn)
  const intersectionObserver = new IntersectionObserver(intersectionObserverFn)

  const rightThumbStyle = useMemo(() => {
    if (!view.current || !wrapper.current) return {}
    const wrapperHeight = wrapper.current.clientHeight
    if (viewHeight <= wrapperHeight) return {
      display: 'none'
    }
    return {
      height: `${wrapperHeight / viewHeight * 100}%`,
      transform: `translateY(${wrapperScrollTop / wrapperHeight * 100})`
    }
  }, [viewHeight, wrapperScrollTop])

  return (
    <div className="toy-scrollbar-container" {...props}>
      <div className="toy-scrollbar-wrapper" ref={wrapper}>
        <div className="toy-scrollbar-view" ref={view}>
          {children}
        </div>
        <div className="toy-scrollbar__bar right" style={rightThumbStyle}>
          <div className="toy-scrollbar__thumb"></div>
        </div>
        <div className="toy-scrollbar__bar bottom"></div>
      </div>
    </div>
  )
}

export default Scrollbar
