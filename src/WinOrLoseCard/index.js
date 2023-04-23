import {WinLoseContainer,TextConatiner,Heading,Scored,SpanElement,PlayButton,EmojiWinLoseImage} from './styled'
const WinOrLoseCard=(props)=>{
            const {score,onPlay,isWon}= props
            const headText=isWon?'You Won':"You Lose"
            const compliment =isWon&& 'Best'
            const emojiImaged = isWon?'https://assets.ccbp.in/frontend/react-js/won-game-img.png':'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
    
  const onPlayAgain=()=>{
    onPlay()
  }
    return(
        <WinLoseContainer>
            <TextConatiner>
            <Heading>{headText}</Heading>
             <Scored>{compliment} Score <br/> <SpanElement>{score}/12</SpanElement></Scored>
            <PlayButton onClick={onPlayAgain}>Play Again</PlayButton>
            </TextConatiner>
            <EmojiWinLoseImage src={emojiImaged} alt="winOrLose"/>
        </WinLoseContainer>
    )

} 

export default WinOrLoseCard