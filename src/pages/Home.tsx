import { useHistory } from 'react-router-dom'

export function Home() {

    const history = useHistory();

    function publishNewArticle() {
        history.push('/publish');
    };

    function seeAllPublishedArticles() {
        history.push('/articles')
    };

    return (
        <>
            <header>

                <h1>Articles Publisher</h1>
                <h3>creator: Daniel Matos</h3>

            </header>

            <main>

                <button onClick={seeAllPublishedArticles}>
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