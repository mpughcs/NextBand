import Head from 'next/head'
import NewRecordAvailable from '../components/NewRecordAvailable'
const videos = [
    {
        title: "When Your Dreams Come True",
        videoId: 'vaISCaIjG8U'
    },
    {
        title: "There's A Garden In You",
        videoId: 'xpG2Hc8_jKk'
    },
    {
        title: "Careers in Acting",
        videoId: 'pe01nFKoPKk'
    },

]

function MusicVideo({ title, videoId, isFirst = false }: { title: string, videoId: string, isFirst?: boolean }) {
    const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`;

    return (
        <div style={{ marginBottom: '24px' }}>
            <iframe
                src={embedUrl}
                title={title}
                className="w-full music-video"
                height="450"
                style={{ border: 'none' }}
                loading={isFirst ? "eager" : "lazy"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    )
}
export default function Music() {
    return (
        <>
            <Head>
                <title>Music - SUNDAY MOURNERS</title>
                <meta name="description" content="Sunday Mourners Music" />
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
                    marginBottom: '20px',
                    fontFamily: 'Times New Roman, serif'
                }}>
                    Music
                </h1>
                {/* videos */}
                {videos.map((video, index) => (
                    <MusicVideo key={video.title} title={video.title} videoId={video.videoId} isFirst={index === 0} />
                ))}
                <div>
                    <iframe data-testid="embed-iframe" className="border-radius:12px" src="https://open.spotify.com/embed/artist/7zlE048Rl8GTsbWAP1MZeQ?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
                <NewRecordAvailable />
            </div>
        </>
    )
}
