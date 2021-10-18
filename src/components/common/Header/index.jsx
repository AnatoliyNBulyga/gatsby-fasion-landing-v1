import React from 'react'
import {BiMenuAltLeft} from '@react-icons/all-files/bi/BiMenuAltLeft'
import {BiSearch} from '@react-icons/all-files/bi/BiSearch'
import {
  HeaderMenu,
  HeaderLang,
  HeaderContainer,
  HeaderSearch
} from './HeaderComponents'

const Header = () => {

  return (
    <HeaderContainer className='navbar'>
      <HeaderMenu>
        <BiMenuAltLeft/>
      </HeaderMenu>
      <HeaderLang>eng</HeaderLang>
      <HeaderSearch>
        <BiSearch/>
      </HeaderSearch>
    </HeaderContainer>
  )
}

export default Header