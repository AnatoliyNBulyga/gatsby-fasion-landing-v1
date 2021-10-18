import styled from 'styled-components'


export const ContentContainer = styled.div`
  position: absolute;
  top: 200px;
  left: 100px;
  transform: rotate(-90deg);
`

export const ContentH1 = styled.h1`
  font-size: 120px;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: -10px;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
  height: 150px;
  width: 600px;
`

export const ContentH2 = styled.h2`
  position: absolute;
  top: 40px;
  left: -80px;
  color: #EFDE74;
  z-index: -1;
  font-size: 150px;
  font-weight: 600;
  letter-spacing: 8px;
  text-transform: uppercase;
`

export const ContentH3 = styled.h3`
  font-size: 40px;
  text-transform: uppercase;
  font-weight: 600;
  line-height: 1;
  position: relative;
  overflow: hidden;
  height: 80px;
`

export const ContentText = styled.p`
  width: 200px;
  font-size: 12px;
  margin-top: 30px;
  font-weight: 500;
  position: relative;
  overflow: hidden;
  height: 110px;
`

export const HideText = styled.span`
  position: absolute;
`