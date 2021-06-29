import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { database } from "../services/firebase";

export function Publish_Articles() {

    const [title, setNewTitle] = useState('');

    const [article, setNewArticle] = useState('');

    const history = useHistory();

    async function handleSendArticle(event: FormEvent) {

        event.preventDefault();

        await database.ref(`articles/${title}`).push(article);

        setNewArticle('');

        setNewTitle('');

        history.push(`articles/${title}`)

    };

    return (
        <>
            <header>
                <h1>Publish New Article</h1>
            </header>

            <main>
                <form onSubmit={handleSendArticle}>
                        <textarea 
                            placeholder="Título"
                            onChange={event => setNewTitle(event.target.value)} 
                            value={title}
                        />


                        <textarea 
                            placeholder="Artigo"
                            onChange={event => setNewArticle(event.target.value)} 
                            value={article}
                        />

                        <div className="form-footer">
                            <button type='submit'>Send Article</button>
                        </div>
                        
                </form>
            </main>
        </>
    );
}