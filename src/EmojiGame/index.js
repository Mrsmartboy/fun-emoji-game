import {useState} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import {EmojiGameContainer,EmojisListContainer} from './styled'
import WinOrLoseCard from '../WinOrLoseCard'


const EmojiGame=(props)=>{
    const [clickEmojisList,setClickEmojisList]= useState([])
    const [topScore,setTopScore]=useState(0)
    const [isGameProgress,setGameProgress]=useState(true)
    const {emojisList} = props 

    const renderTopScore=(newScore)=>{
       let newTopScore = topScore
        if (newScore>topScore){
            newTopScore=newScore
        }
        setTopScore(newTopScore)
        setGameProgress(false)
    }

  const onEmoji =(id)=>{
    const isEmojiPresent = clickEmojisList.includes(id)
     if (isEmojiPresent){
         renderTopScore(clickEmojisList.length)
     }else{
        if (emojisList.length-1===clickEmojisList.length){
           renderTopScore(emojisList.length)

        }
        setClickEmojisList(prevState=>([...prevState,id]))

     }
   
  }

 const onPlay=()=>{
    setGameProgress(prevState=>!prevState.isGameProgress)
    setClickEmojisList([])
 }
   
const renderScoreCard=()=>{
    return <WinOrLoseCard score={clickEmojisList.length} onPlay={onPlay} isWon={clickEmojisList.length===emojisList.length}/>
}

   
  const  getShuffledEmojisList=()=>{
       return emojisList.sort(()=>Math.random()-0.5)
    }

  
  const shuffledEmojisList= getShuffledEmojisList()

  return(
    <>
     <NavBar score={clickEmojisList.length} topScore={topScore} isGameProgress={isGameProgress}/>
     <EmojiGameContainer>
        {isGameProgress ?
        <EmojisListContainer>
        {shuffledEmojisList.map(eachEmoji=>(
            <EmojiCard eachEmoji={eachEmoji} key={eachEmoji.id} onEmoji={onEmoji}/>
        ))}

        </EmojisListContainer>:renderScoreCard()}
     </EmojiGameContainer>
    </>
  )

}

export default EmojiGame