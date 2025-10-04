import styled, { keyframes } from 'styled-components'
import { Marquee } from './sharedstyles'

// Animations
export const glowAnimation = keyframes`
  from {
    text-shadow: 0 0 10px #fff, 0 0 10px #fff, 0 0 10px #f6fc59, 0 0 10px #f6fc59, 0 0 13px #f6fc59, 0 0 20px #f6fc59, 0 0 10px #f6fc59;
  }
  
  to {
    text-shadow: 0 0 5px #fff, 0 0 5px #f6fc59, 0 0 0px #f6fc59, 0 0 10px #f6fc59, 0 0 10px #f6fc59, 0 0 10px #f6fc59, 0 0 10px #f6fc59;
  }
`

// Marquee Components
export const TopMarquee = styled(Marquee)`
  top: 0;
`

export const BottomMarquee = styled(Marquee)`
  bottom: 0;
`

// Info Container
export const InfoContainer = styled.div`
  margin: 0;
  
  h2 {
    margin-block-start: 0.25em;
    margin-block-end: 0.25em;
  }

  display: flex;
  padding-inline: 55px;
  justify-content: space-between;
  width: 100%;
  
  @media screen and (max-width: 720px) {
    flex-direction: column;
    padding-bottom: 10px;
    padding-inline: 0px;
    align-items: center;
    justify-content: center;
  }
  
  .contact {
    #book {
      background-color: white;
      color: black;
    }
    
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: start;
    flex: 1;
    font-size: 3vw;
    z-index: 2;

    ul {
      svg {
        width: 5vw;
      }
      
      svg:hover {
        transition: 0.3s ease-in-out;
        transform: scale(1.1);
        fill: #f6fc59;
      }
      
      display: inline;
    }

    @media screen and (max-width: 720px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-items: center;
      flex: 1;
      
      ul.socials {
        align-self: center;
        justify-self: center;
        margin: 0;
        padding: 0;
        padding-top: 10px;
        padding-bottom: 10px;
      }
    }
  }
  
  .listen {
    display: flex;
    flex-direction: column;
    width: 80%;
    flex: 1;
    font-size: 3vw;
    z-index: 2;
  }
  
  li {
    display: inline;
  }
  
  li a {
    margin: 10px;
    padding: 0;
    color: white;
    background: none;
    font-size: 3;
  }
  
  i:hover {
    transition: 0.2s ease-in-out;
    transform: scale(1.1);
    transform: font-size(2rem);
  }
`

// Events Section
export const Events = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  
  a {
    font-size: 3vw;
    color: black;
    background: none;
    
    @media screen and (max-width: 1020px) {
      font-size: 25px;
    }
  }
  
  a:hover {
    color: #f6fc59;
    transition: 0.2s ease-in-out;
  }
  
  .event:hover {
    transition: 0.2s ease-in-out;
    transform: scale(1.1);
  }
  
  .event {
    display: flex;
    text-align: center;
  }
  
  h2 {
    font-size: 3vw;
    
    @media screen and (max-width: 720px) {
      font-size: 10vw;
    }
  }
  
  .eventList {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    
    @media screen and (max-width: 720px) {
      font-size: 10vw;
    }
  }
  
  margin-bottom: 100px;
`

// Read More Section
export const ReadMore = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  justify-content: center;
  
  .toggle {
    width: fit-content;
  }
  
  @media screen and (max-width: 720px) {
    margin: 0px;
    padding: 50px;
  }
  
  .toggle:hover {
    cursor: pointer;
    color: #f6fc59;
  }
  
  .quote {
    font-style: italic;
    color: #f6fc59;
    text-align: center;
  }
  
  p {
    font-size: 1.8vw;
    
    @media screen and (max-width: 850px) {
      font-size: 4vw;
    }
  }
`
