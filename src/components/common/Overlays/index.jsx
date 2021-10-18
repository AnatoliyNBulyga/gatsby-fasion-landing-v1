import React from 'react'
import {
  OverlaySecond,
  OverlayThird,
  OverlayFirst,
  OverlayContainer
} from './OverlaysComponents'

const Overlays = () => {
  return (
    <OverlayContainer>
      <OverlayFirst className='first'></OverlayFirst>
      <OverlaySecond className='second'></OverlaySecond>
      <OverlayThird className='third'></OverlayThird>
    </OverlayContainer>
  )
}

export default Overlays