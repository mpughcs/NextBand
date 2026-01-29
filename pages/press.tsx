import Head from 'next/head'

interface ArticleData {
    title: string;
    publication: string;
    date: string;
    link: string;
    description: string;
}


function Video({ title, videoId, isFirst = false }: { title: string, videoId: string, isFirst?: boolean }) {
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
function ArticleCard({ article }: { article: ArticleData }) {
    return (
        <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                display: 'block',
                marginBottom: '25px',
                textDecoration: 'none',
                color: 'inherit'
            }}
        >
            <div style={{
                fontFamily: 'Courier New, monospace',
                fontSize: '12px',
                color: '#666',
                marginBottom: '4px'
            }}>
                {article.publication} · {article.date}
            </div>
            <h3 style={{
                fontFamily: 'Times New Roman, serif',
                fontSize: '18px',
                fontWeight: 'normal',
                marginBottom: '6px',
                color: '#0066CC'
            }}>
                {article.title}
            </h3>
            <p style={{
                fontFamily: 'Times New Roman, serif',
                fontSize: '14px',
                lineHeight: '1.5',
                color: '#333',
                fontStyle: 'italic'
            }}>
                {article.description}
            </p>
        </a>
    )
}

const articles: ArticleData[] = [
    {
        title: "Sunday Mourners, \"A-Rhythm Absolute\"",
        publication: "Bandcamp Daily",
        date: "January 20, 2026",
        link: "https://daily.bandcamp.com/album-of-the-day/sunday-mourners-a-rhythm-absolute-review",
        description: "\"It's a great time to be an indie band making anything that sounds post-punk.\""
    },
    {
        title: "Albums Of The Week: Sunday Mourners | A-Rhythm Absolute",
        publication: "Tinnitist",
        date: "January 15, 2026",
        link: "https://tinnitist.com/2026/01/15/albums-of-the-week-sunday-mourners-a-rhythm-absolute/",
        description: "\"Sunday Mourners are here and it is OK. It is OK to feel good about indie music again.\""
    },
    {
        title: "Sunday Mourners' debut album establishes fresh voice in indie rock",
        publication: "The Tulane Hullabaloo",
        date: "January 25, 2026",
        link: "https://tulanehullabaloo.com/72670/arcade/sunday-mourners-debut-album-establishes-fresh-voice-in-indie-rock/",
        description: "\"A new Los Angeles band has joined this wave, carving out their own path.\""
    },
    {
        title: "Sunday Mourners – A-Rhythm Absolute",
        publication: "Add To Wantlist",
        date: "January 21, 2026",
        link: "https://addtowantlist.com/index.php/2026/01/21/album-review-sunday-mourners-a-rhythm-absolute/",
        description: "\"We shouldn't be surprised after 2024's successful Boyfriend/Girlfriend EP, but it's wonderful to see L.A.'s Sunday Mourners arrive fully formed on their first full-length.\""
    },
    {
        title: "Sunday Mourners – A-Rhythm Absolute Review",
        publication: "Raven Sings The Blues",
        date: "January 2026",
        link: "https://www.ravensingstheblues.com/sunday-mourners/",
        description: "\"The site's littered with records from West Coast favorites Curation, but the latest record from the label shies away from the usual comfort corners of Power Pop and Cosmic Americana.\""
    },
    {
        title: "Sunday Mourners – A-Rhythm Absolute",
        publication: "Pirate Pirate",
        date: "January 14, 2026",
        link: "https://piratepirate.com/sunday-mourners/",
        description: "\"Sunday Mourners are here and it is ok. It is ok to feel good about indie music again.\""
    },
    {
        title: "Sunday Mourners deliver angular single 'When Dreams Come True'",
        publication: "KLOF Magazine",
        date: "October 9, 2025",
        link: "https://klofmag.com/2025/10/sunday-mourners-when-creams-come-true-a-rhythym-absolute/",
        description: "\"Say hello to Sunday Mourners, the new four-piece on Beachwood Sparks' Curation Records, who are dropping their debut album.\""
    }
];

const videos = [
    {
        title: "Sunday Mourners - A-Rhythm Absolute ALBUM REVIEW",
        videoId: 'PVBfLjJbzg4'
    },
]
export default function Press() {
    return (
        <>
            <Head>
                <title>Press - SUNDAY MOURNERS</title>
                <meta name="description" content="Sunday Mourners Press Coverage" />
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
                    Press
                </h1>

                <div>
                    {videos.map((video) => (
                        <Video key={video.videoId} title={video.title} videoId={video.videoId} />
                    ))}
                    {articles.map((article) => (
                        <ArticleCard key={article.link} article={article} />
                    ))}
                </div>
            </div>
        </>
    )
}
