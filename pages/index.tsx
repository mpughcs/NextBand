import Head from 'next/head'
import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components'
import useSWR,{SWRConfig} from 'swr'

import {
  Container,
  Main,
  Title,
  Description,
  CodeTag,
  Images,
  Marquee
} from '../components/sharedstyles'



const fetcher = (url) => fetch(url).then((res) => res.json())

  

export default function Home() {
  const { data: events, error } = useSWR('/api', fetcher);
  if(events){
    // const eventNames = events.map((event) => event.venue.name);
    // console.log(eventNames)
  }
  if(error) return <div>failed to load</div>
  console.log(events)
  return (
    
    <Container>
      <Head>
        <title>SUNDAY MOURNERS</title>
        <meta name="Sunday Mourners Website" content="Generated by create next app" />
        <link rel="icon" href="/icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link href="https://fonts.googleapis.com/css2?family=Codystar&display=swap" rel="stylesheet"/>
        <script src="https://kit.fontawesome.com/b52fd21c14.js" crossOrigin="anonymous"></script>

        <link href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap" rel="stylesheet"/>


      </Head>
      <Main>
        <Images>
          <img src="/images/splash.jpeg" alt="Max and quinn" />
          <img src="/images/wh.JPG" alt="Max and quinn" />
          <img src="/images/mq2.JPG" alt="Max and quinn" />
          <img src="/images/mq.JPG" alt="Max and quinn" />
        </Images>
        <TopMarquee direction="right"><h1 className='glow'>Sunda Mourners</h1></TopMarquee>
        <BottomMarquee direction="left" className=""><h1 className='glow'>Sunday Mourners</h1></BottomMarquee>
        <InfoContainer>
                <div className="listen">
                    <h2>Listen</h2>
                    <iframe id="spotify" src="https://open.spotify.com/embed/artist/7zlE048Rl8GTsbWAP1MZeQ?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
                <div className="contact">
                    <h2>Contact</h2>
                    <ul className="socials">
                        <li><a title="instagram "href="https://www.instagram.com/sundaymourners/">
                            <i className="fa-brands fa-instagram"></i>
                        </a></li> 
                        <li><a title="spotify" href="https://open.spotify.com/artist/7zlE048Rl8GTsbWAP1MZeQ">
                            <i className="fa-brands fa-spotify"></i>
                        </a></li>
                        <li><a title="linktree" href="https://linktr.ee/sundaymourners">
                            <i className="fa-solid fa-link"></i>
                        </a></li>
                    </ul>
                  
                    <a href = "mailto:sundaymourner@gmail.com?subject = Booking?Message=">
                        Booking
                    </a>
                </div>
            </InfoContainer>
            <Events>
              <h2>Events</h2>
              <div>
                {events ? (
                  <div className='eventList'>
                    {events
                      .sort((a, b) => new Date(b.datetime).getTime() - new Date(a.datetime).getTime()) // Sort events by date
                      .map((event) => (
                        <div key={event.id}>
                          <div className='event'>
                            <a href={event.url}>
                              {event.venue.name} - {event.datetime.split('T')[0]}
                            </a>
                          </div>
                        </div>
                      ))}
                  </div>
                ) : (
                  <p>Loading events...</p>
                )}
              </div>
            </Events>
      
      </Main>
    </Container>
  )
}






const glowAnimation = keyframes`
  from {
    text-shadow: 0 0 10px #fff, 0 0 10px #fff, 0 0 10px #f6fc59, 0 0 10px #f6fc59, 0 0 13px #f6fc59, 0 0 20px #f6fc59, 0 0 10px #f6fc59;
  }
  
  to {
    text-shadow: 0 0 5px #fff, 0 0 5px #f6fc59, 0 0 0px #f6fc59, 0 0 10px #f6fc59, 0 0 10px #f6fc59, 0 0 10px #f6fc59, 0 0 10px #f6fc59;
  }
`;


const TopMarquee=styled(Marquee)`
  
  top:0;
`
const BottomMarquee=styled(Marquee)`
  bottom:0;

`
const InfoContainer = styled.div`
  display: flex;
  padding-inline: 55px;

  justify-content: space-between;
  width: 100%;
  .contact{
    display: flex;
    flex-direction: column;
    align-items:flex-end;
    justify-content: start;
    flex:1;
    font-size: 3vw;
    z-index: 2;
}
.listen{
    display: flex;
    flex-direction: column;
    width: 80%;
    flex:1;
    font-size: 3vw;
    z-index: 2;
    
}
li{
    display:inline;
}
li a{
  margin:10px;
  padding:0;
  color: white;
  background:none;
  font-size: 3;

}
i:hover{
    /* color: #f6fc59; */
    transition:.2s ease-in-out;
    transform: scale(1.1);
    transform: font-size(2rem); 
}




`

const Events = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  z-index: 2;
  a{
    font-size: 2vw;
    color: white;
    background:none;
  }
  a:hover{
    color: #f6fc59;
    transition:.2s ease-in-out;
  }
  .event:hover{
    transition:.2s ease-in-out;

    transform: scale(1.1);

  }
  
  h2{
    font-size: 3vw;
  }
  .eventList{
    display: flex;
    flex-direction: column;
    align-items:center;
    gap:50px;
  }
  padding-bottom: 50px;
`