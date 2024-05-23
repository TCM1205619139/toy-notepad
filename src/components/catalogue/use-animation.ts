import React from 'react'

const useSpreadAnimation = (ref: React.RefObject<HTMLDivElement>) => {
  const onEnter = () => {
    const el = ref.current as HTMLDivElement

    el.dataset.maxHeight = el.clientHeight + 'px'
    el.dataset.overflow = el.style.overflow
    el.style.maxHeight = '0px'
    el.style.overflow = 'hidden'
    el.classList.add('collapse-transition')
  }
  const onEntering = () => {
    const el = ref.current as HTMLDivElement

    setTimeout(() => {
      el.style.maxHeight = el.dataset.maxHeight || ''
    })
  }
  const onEntered = () => {
    const el = ref.current as HTMLDivElement

    el.style.maxHeight = ''
    el.style.overflow = ''
    el.classList.remove('collapse-transition')
  }
  const onExit = () => {
    const el = ref.current as HTMLDivElement

    el.style.maxHeight = el.dataset.maxHeight || ''
    el.style.overflow = 'hidden'
    el.classList.add('collapse-transition')
  }
  const onExiting = () => {
    const el = ref.current as HTMLDivElement

    setTimeout(() => {
      el.style.maxHeight = '0px'
    })
  }
  const onExited = () => {
    const el = ref.current as HTMLDivElement

    el.style.maxHeight = '0px'
    el.style.overflow = ''
    el.classList.remove('collapse-transition')
  }

  return {
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited
  }
}

export {
  useSpreadAnimation
}
