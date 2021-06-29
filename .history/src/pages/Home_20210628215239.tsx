import { Link } from 'react-router-dom'
import '../styles/Home.scss'

export function Home() {
    return (
        <>
            <header>

                <h1>Articles Publisher</h1>
                <h3>creator: Daniel Matos</h3>

            </header>

            <main>

                <Link to='/articles'>Articles</Link>

            </main>
        </>


    );
}