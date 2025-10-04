import Link from 'next/link'
import { Container, Main, Title, Description } from '../components/sharedstyles'

export default function Blog() {
    return (
        <Container>
            <Main>
                <Title>Blog</Title>
                <Description>
                    <Link href="/">&larr; Go Back</Link>
                </Description>
            </Main>
        </Container>
    )
}
