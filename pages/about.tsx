import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>About - SUNDAY MOURNERS</title>
        <meta name="description" content="About Sunday Mourners" />
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
          About
        </h1>
        <p style={{
          fontSize: '16px',
          lineHeight: '1.6',
          fontFamily: 'Times New Roman, serif'
        }}>
          Information about Sunday Mourners coming soon.
        </p>
      </div>
    </>
  )
}
