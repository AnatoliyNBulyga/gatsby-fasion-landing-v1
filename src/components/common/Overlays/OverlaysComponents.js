import styled from 'styled-components'


export const OverlayContainer = styled.div`
  &> div {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0%;
    z-index: 99;
  }
`

export const OverlayFirst = styled.div`
  background: #efde74;
`

export const OverlaySecond = styled.div`
  background: #efde74;
  left: 33.3%;
`

export const OverlayThird = styled .div`
  background: #efde74;
  left: 66.6%;
`