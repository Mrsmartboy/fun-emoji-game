import styled from "styled-components";

export const WinLoseContainer= styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #ffffff33;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #ffffff33;
`
export const TextConatiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Heading= styled.h1`
  color: #ffffff;
  font-size: 30px;
  font-weight: bold;
`
export const Scored= styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  
`
export const SpanElement = styled.p`
  color: #6a59ff;
`
export const PlayButton= styled.button`
  color: #3d3d3d;
  font-size: 15px;
  background-color: #ffce27;
  border: none;
  outline: none;
  border-radius: 10px;
  padding: 10px;
  font-weight: bold;
  cursor: pointer;
`

export const EmojiWinLoseImage= styled.img`
  width: 50%;
`