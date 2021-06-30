import { Link } from 'react-router-dom'
import '../styles/Home.scss'

export function Home() {

    function publishNewArticle() {
        history.push('/p')
    }
    return (
        <>
            <header>

                <h1>Articles Publisher</h1>
                <h3>creator: Daniel Matos</h3>

            </header>

            <main>

                <Link to='/articles'>See All Published Articles</Link>

                    <br />

                <button onClick={publishNewArticle}>
                    Publish New Article
                </button>

            </main>
        </>


    );
}