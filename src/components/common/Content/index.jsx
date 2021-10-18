import React from "react"
import {
  ContentH2,
  ContentText,
  ContentH3,
  ContentH1,
  ContentContainer,
  HideText
} from './ContenComponents'

const Content = () => {
  return (
    <ContentContainer className='content'>
      <ContentH1>
        <HideText className='hidetext'>toni&guy</HideText>
      </ContentH1>
      <ContentH2>duality</ContentH2>
      <ContentH3>
        <HideText className='hidetext'>October’s <br/>Hottest Fashion Drops</HideText>
      </ContentH3>
      <ContentText>
        <HideText className='hidetext'>
          October means fall is officially here—and.
          Read on for this month’s hottest drops, launches, and collaborations
        </HideText>
      </ContentText>
    </ContentContainer>
  )
}

export default Content