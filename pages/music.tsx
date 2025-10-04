import Link from 'next/link'
import { Container, Main, Title, Description } from '../components/sharedstyles'

export default function Music() {
    return (
        <Container>
            <Main>
                <Title>Music</Title>
                <Description>
                    <Link href="/">&larr; Go Back</Link>
                </Description>
            </Main>
        </Container>
    )
}
