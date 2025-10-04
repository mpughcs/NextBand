import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styled, { keyframes } from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  min-height: 100vh;

  

  background-color: white;

`
const Main = styled.main`
 
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
    text-shadow:
      0 0 10px #fff,
      0 0 10px #f6fc59,
      0 0 20px #f6fc59,
      0 0 30px #f6fc59,
      0 0 40px #f6fc59,
      0 0 50px #f6fc59,
      0 0 60px #f6fc59;
  }

  to {
    text-shadow:
      0 0 5px #fff,
      0 0 10px #f6fc59,
      0 0 20px #f6fc59,
      0 0 30px #f6fc59,
      0 0 40px #f6fc59,
      0 0 50px #f6fc59,
      0 0 60px #f6fc59;
  }
`;
interface TopMarqueeProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  direction?: string;
}

const Marquee = styled.div.attrs<TopMarqueeProps>(({ direction }) => ({
  direction: direction || 'left',
}))<TopMarqueeProps>`
--scrollSpeed: 16s;
--glowSpeed: .4s;

/* add styles for if the className=top */
  font-size: 6vw;
  z-index: 1;
  position:fixed;
  

  /* width: 100vw; */
  width: fit-content;

  /* animation: marquee 30s linear infinite; */
  animation: ${({ direction }) => Scroll(direction)} var(--scrollSpeed) linear infinite;
  h1{
    display: inline-block;
    font-size: 5vw;
    font-family: 'Codystar';
    margin: 0;
    padding: 0;
    @media screen and (max-width: 720px) {
      font-size: 10vw;
      width:max-content;
    
  }
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
