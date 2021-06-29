import { Link } from 'react-router-dom'
import '../styles/Home.scss'
import { publish_articles } from './publish_articles';

export function Home() {
    return (
        <>
            <header>

                <h1>Articles Publisher</h1>
                <h3>creator: Daniel Matos</h3>

            </header>

            <main>

                <Link to='/articles'>See All Published Articles</Link>

                    <br />

                <button onClick={publish_articles}>
                    Publish New Article
                </button>

            </main>
        </>


    );
}