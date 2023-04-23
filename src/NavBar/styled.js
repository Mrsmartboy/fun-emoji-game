
import styled from 'styled-components'

export const NavContainer= styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-height: 50px;
    background-color: #9796f0;
    padding-left: 30px;
    padding-right: 30px;
    opacity: 0.8;
`

export const NavImageContainer= styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const NavLogo= styled.img`
  width: 52px;
  height: 52px;
`

export const NavText = styled.p`
  color: #ffffff;
  font-size: 30px;
  font-weight: bold;
  @media screen and (max-width:576px){
    font-size: 20px;
  }
`
export const NavScoreContainer= styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
display: ${props=>!props.value&&'none'};
`
export const Score= styled.p`
 color: #ffffff;
 font-size: 20px;
 font-weight: bold;
 margin-right: 20px;
 @media screen and (max-width:576px){
    font-size: 15px;
  }
`
export const TopScore= styled.p`
 color: #ffffff;
 font-size: 20px;
 font-weight: bolder;
 @media screen and (max-width:576px){
    font-size: 15px;
  }

`