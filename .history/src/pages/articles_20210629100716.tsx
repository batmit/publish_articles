import { useArticles } from "../hooks/useArticles";


export function Articles() {
    return (
        <>
            <header>
                <h1>Published Articles</h1>
            </header>

            <useArticles />
        </>
    );
}