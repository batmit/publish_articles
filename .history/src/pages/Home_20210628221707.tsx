import { Link, useHistory } from 'react-router-dom'
import '../styles/Home.scss';

export function Home() {

    const history = useHistory();

    function publishNewArticle() {
        history.push('/publish');
    };
    return (
        <>
            <header>

                <h1>Articles Publisher</h1>
                <h3>creator: Daniel Matos</h3>

            </header>

            <main>

                <button>
                    See All Published Articles
                </button>

                    <br />

                <button onClick={publishNewArticle}>
                    Publish New Article
                </button>

            </main>
        </>


    );
}