import {EmojiItem,EmojiImage,EmojiButton} from './styled'

const EmojiCard=(props)=>{
      const {eachEmoji,onEmoji}=props
       const {emojiName,emojiUrl,id}= eachEmoji 
       const onClickEmoji=()=>{
           onEmoji(id)
       }
       return(
        <EmojiItem >
            <EmojiButton type="button" onClick={onClickEmoji}>
              <EmojiImage src={emojiUrl} alt={emojiName}/>
              </EmojiButton>
        </EmojiItem>
       )
}

export default EmojiCard