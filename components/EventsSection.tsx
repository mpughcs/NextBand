import useSWR from 'swr'
import { Events } from './HomeStyles'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

interface Event {
    id: string
    url: string
    venue: {
        name: string
    }
    datetime: string
}

export default function EventsSection() {
    const { data: events, error } = useSWR<Event[]>('/api', fetcher)

    return (
        <Events>
            <h2>Events</h2>
            <div>
                {Array.isArray(events) ? (
                    <div className="eventList">
                        {events
                            .sort((a, b) => new Date(b.datetime).getTime() - new Date(a.datetime).getTime())
                            .map((event) => (
                                <div key={event.id}>
                                    <div>
                                        <a className="event" href={event.url}>
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
    )
}
