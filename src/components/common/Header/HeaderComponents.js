import styled from "styled-components"


export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 80px;
  align-items: center;
  
  & > div {
    padding: 0 30px;
    font-size: 20px;
  }
`

export const HeaderMenu= styled.div`
  margin-right: auto;
`

export const HeaderLang = styled.div`
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
`

export const HeaderSearch = styled.div`
  display: flex;
`