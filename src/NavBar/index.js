import {NavContainer,NavImageContainer,NavLogo,NavText,NavScoreContainer,Score,TopScore} from './styled'

const NavBar=(props)=>{
      const {score,topScore,isGameProgress}=props
    return(
        <NavContainer>
            <NavImageContainer>
                <NavLogo src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png" alt="emoji logo"/>
                <NavText>Emoji Game</NavText>
            </NavImageContainer>
            <NavScoreContainer value={isGameProgress}>
                <Score>Score:{score}</Score>
                <TopScore>Top Score:{topScore}</TopScore>
            </NavScoreContainer>
        </NavContainer>
    )
}

export default NavBar