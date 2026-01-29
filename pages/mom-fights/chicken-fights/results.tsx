import Head from "next/head";

export default function Results() {
    return (
        <>
            <Head>
                <title>Results - Mom Fights</title>
                <meta name="description" content="Results of the Mom Fights" />
                <link rel="icon" href="/icon.png" />
            </Head>
            <div style={{
                minHeight: '100vh',
                padding: '40px 20px',
                maxWidth: '800px',
                margin: '0 auto',
                fontFamily: 'Times New Roman, serif'
            }}>
               <img src="https://preview.redd.it/what-green-immortality-goo-was-lou-reed-drinking-and-can-we-v0-7urkojtxcyxd1.png?auto=webp&s=db15773f5cdff48871172b0c37d34be8879f6db0" alt="Results" />
            </div>
        </>
    )
}