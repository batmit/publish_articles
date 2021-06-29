import { FormEvent, useState } from "react";
import { database } from "../services/firebase";

export function Publish_Articles() {

    const [assunto, setNewAssunto] = useState('');

    const [article, setNewArticle] = useState('');

    async function handleSendArticle(event: FormEvent) {

        event.preventDefault();

        await database.ref(`articles/${assunto}`).push(article);

        

    };

    return (
        <>
            <header>
                <h1>Publish New Article</h1>
            </header>

            <main>
                <form onSubmit={handleSendArticle}>
                        <textarea 
                            placeholder='Assunto'
                            onChange={event => setNewAssunto(event.target.value)}
                            value={assunto}
                        />

                        <textarea 
                            placeholder="Artigo"
                            onChange={event => setNewArticle(event.target.value)} 
                            value={article}
                        />

                        <div className="form-footer">


                            <button type='submit'>Enviar Artigo</button>
                        </div>
                        
                </form>
            </main>
        </>
    );
}