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
        <HideText className='hidetext'>collection 2017 <br/> duality</HideText>
      </ContentH3>
      <ContentText>
        <HideText className='hidetext'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde quis, delectus facere
          neque sunt commodi quae
          culpa dolores doloribus magnam?
        </HideText>
      </ContentText>
    </ContentContainer>
  )
}

export default Content