import React from 'react'
import {
  MediaListItem,
  MediaList,
  MediaContainer
} from './MediaComponents'

const Media = () => {
  return (
    <MediaContainer className='media'>
      <MediaList>
        <MediaListItem>facebook</MediaListItem>
        <MediaListItem>instagram</MediaListItem>
        <MediaListItem>twitter</MediaListItem>
      </MediaList>
    </MediaContainer>
  )
}

export default Media