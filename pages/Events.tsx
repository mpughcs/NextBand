import Link from 'next/link'
import Head from 'next/head'
import useSWR from 'swr'
import styled from 'styled-components'
import { Container, Main, Title, Description } from '../components/sharedstyles'

const fetcher = (url) => fetch(url).then((res) => res.json())

const Events = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  z-index: 2;
  
  
  a{
    font-size: 3vw;
    color: black;
    background:none;
    @media screen and (max-width: 1020px) {
    font-size: 25px;
  }
  }
  a:hover{
    color: #f6fc59;
    transition:.2s ease-in-out;
  }
  .event:hover{
    transition:.2s ease-in-out;

    transform: scale(1.1);

  }
  .event{
    display: flex;
    text-align: center;
  }
  
  h2{
    font-size: 3vw;
    @media screen and (max-width: 720px) {
    font-size: 10vw;
  }
  }
  .eventList{
    display: flex;
    flex-direction: column;
    align-items:center;
    gap:50px;
    @media screen and (max-width: 720px) {
      font-size: 10vw;
    }
  }
  
  margin-bottom: 100px;
`

export default function EventsPage() {
    const { data: events, error } = useSWR('/api', fetcher)

    return (
        <Container>
            <Head>
                <title>Events - SUNDAY MOURNERS</title>
                <meta name="Sunday Mourners Events" content="Upcoming shows and events" />
                <link rel="icon" href="/icon.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Codystar&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap" rel="stylesheet" />
            </Head>
            <Main>
                <Title>Events</Title>
                <Description>
                    <Link href="/">&larr; Go Back</Link>
                </Description>

                <Events>
                    <h2>Events</h2>
                    <div>
                        {Array.isArray(events) ? (
                            <div className='eventList'>
                                {events
                                    .sort((a, b) => new Date(b.datetime).getTime() - new Date(a.datetime).getTime()) // Sort events by date
                                    .map((event) => (
                                        <div key={event.id}>
                                            <div>
                                                <a className='event' href={event.url}>
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
