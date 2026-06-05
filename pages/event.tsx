import Head from 'next/head'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function EventsPage() {
    const { data: events, error } = useSWR('/api', fetcher)

    return (
        <>
            <Head>
                <title>Events - SUNDAY MOURNERS</title>
                <meta name="Sunday Mourners Events" content="Upcoming shows and events" />
                <link rel="icon" href="/icon.png" />
            </Head>
            <div style={{
                minHeight: '100vh',
                padding: '40px 20px',
                maxWidth: '800px',
                margin: '0 auto',
                fontFamily: 'Times New Roman, serif'
            }}>
                <h1 style={{
                    fontSize: '32px',
                    fontWeight: 'bold',
                    marginBottom: '30px',
                    fontFamily: 'Times New Roman, serif'
                }}>
                    Events
                </h1>

                <div style={{
                    fontFamily: 'Courier New, monospace',
                    fontSize: '14px'
                }}>
                    {Array.isArray(events) ? (
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px'
                        }}>
                            {events
                                .sort((a, b) => new Date(b.datetime).getTime() - new Date(a.datetime).getTime())
                                .map((event) => (
                                    <div key={event.id} style={{ marginBottom: '15px' }}>
                                        <a
                                            href={event.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                color: '#0066CC',
                                                textDecoration: 'none',
                                                fontSize: '14px',
                                                fontFamily: 'Courier New, monospace'
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                                            onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
                                        >
                                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, overflow: 'hidden' }}>
                                                <li>{event.venue.name} - {event.datetime.split('T')[0]}</li>
                                                <li style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
                                                  {event.lineup ? event.lineup.filter((artist) => artist !== 'Sunday Mourners').slice(0, 3).map((artist) =>   <><span>w/ </span> <li>{artist}</li></>) : null}
                                                </li>


                                                <li style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
                                                    {event.venue.city && <li>{event.venue.city},</li>}
                                                    {event.venue.region && <li>{event.venue.region},</li>}
                                                    {event.venue.country && <li>{event.venue.country}</li>}
                                                </li>


                                            </ul>
                                        </a>
                                    </div>
                                ))}
                        </div>
                    ) : (
                        <p>Loading events...</p>
                    )}
                </div>
            </div>
        </>
    )
}
