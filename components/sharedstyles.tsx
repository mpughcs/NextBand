import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styled, { keyframes } from 'styled-components'

const Container = styled.div`
  /* padding: 0 0.5rem; */
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */
  min-height: 100vh;
  img{
    display: block;
    max-width: 100%;
    height: auto;
  
    margin:0;
    padding: 0;
    z-index: -2;
  }
  background-color:black;

`
const Main = styled.main`
  /* padding: 5rem 0; */
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Staatliches', cursive;
  svg{
    fill:white;
  }
  a{

    text-decoration: none;
    /* background-color: white; */
    /* color: black; */
    border-radius: 5px;
    padding: 10px;
    transition: transform 0.5s;
    margin: 0;
}
  a:hover{
      /* background-color: black; */
      /* color: white; */
      transform: scale(1.1);
      transform: font-size(2rem); 
  }
`

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  text-decoration: none;

  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    &:hover,
    :focus,
    :active {
      text-decoration: underline;
    }
  }
`

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
`
const CodeTag = styled.code`
  background: #fafafa;
  border-radius: 5px;
  margin: 0 0.75rem;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`
const Images= styled.div`
  flex-direction: column;
  align-items: center;
  object-fit: cover;
  gap:0;
  width: 100%;
`
// can you add a parameter to this to make it go faster or slower?
const Scroll = (direction) => keyframes`
  from {
    transform: translateX(${direction === 'right' ? '160%' : '-160%'});
  }
  
  to {
    transform: translateX(${direction === 'right' ? '-160%' : '160%'});
  }
`;

const glowAnimation = keyframes`
  from {
    text-shadow: 0 0 10px #fff, 0 0 10px #fff, 0 0 10px #f6fc59, 0 0 10px #f6fc59, 0 0 13px #f6fc59, 0 0 20px #f6fc59, 0 0 10px #f6fc59;
  }
  
  to {
    text-shadow: 0 0 5px #fff, 0 0 5px #f6fc59, 0 0 0px #f6fc59, 0 0 10px #f6fc59, 0 0 10px #f6fc59, 0 0 10px #f6fc59, 0 0 10px #f6fc59;
  }
`;
interface TopMarqueeProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  direction?: string;
}

const Marquee = styled.div.attrs<TopMarqueeProps>(({ direction }) => ({
  direction: direction || 'left',
}))<TopMarqueeProps>`
--scrollSpeed: 10s;
--glowSpeed: 3s;

/* add styles for if the className=top */
  font-size: 6vw;
  z-index: 1;
  position:fixed;

  /* width: 100vw; */
  width: fit-content;

  /* color:white; */
  /* animation: marquee 30s linear infinite; */
  animation: ${({ direction }) => Scroll(direction)} var(--scrollSpeed) linear infinite;
  h1{
    display: inline-block;
    font-size: 6vw;
    font-family: 'Codystar';
    margin: 0;
    padding: 0;
    &.glow {
      color: #fff;
      text-align: center;
      animation: ${glowAnimation} var(--glowSpeed) ease-in-out infinite;
      @media screen and (max-width: 720px) {
      }

    } 

  }
  
  
  
  

`
export { Container, Main, Title, Description, CodeTag, Images, Marquee}
