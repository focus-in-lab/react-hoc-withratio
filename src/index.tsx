import React, { useEffect, useRef } from 'react'

import { useRatio } from '@focusinlab/react-hook-useratio'

interface IWithRatioProps {
  ratio?: string
  // All other props
  [x: string]: any
}

export const withRatio = (
  WrappedComponent:
    | React.ForwardRefRenderFunction<any, any>
    | React.ForwardRefExoticComponent<any>
) => ({ ratio = '1x1', ...rest }: IWithRatioProps) => {
  const ratioValue = ratio.split('x')
  const ratioWidth = parseInt(ratioValue[0], 10)
  const ratioHeight = parseInt(ratioValue[1], 10)

  const ref = useRef<HTMLElement>(null)
  const { height } = useRatio(ratioWidth, ratioHeight, ref)
  useEffect(() => {
    if (ref.current) {
      ref.current.style.height = `${height}px`
    }
  }, [height, ref])

  return <WrappedComponent ref={ref} {...rest} />
}
