import React from 'react'
import {
  SponsorContainer,
  SponsorText,
  SponsorImage
} from './SponsorComponents'
import sponsorLogo from '../../../assets/images/sponsor-logo.png'

const Sponsor = () => {
  return (
    <SponsorContainer className='sponsor'>
      <SponsorImage
        src={sponsorLogo}
        alt='sponsor logo'
      />
      <SponsorText>
        official sponsor
      </SponsorText>
    </SponsorContainer>
  )
}

export default Sponsor