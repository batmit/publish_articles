import { useState } from "react";

export function Publish_Articles() {

    const [assunto, serNewAssunto] = useState('');

    const [article, setNewArticle] = useState('');

    

    return (
        <>
            <header>
                <h1>Publish New Article</h1>
            </header>

            <main>
                <form>
                        <textarea 
                            placeholder='Assunto'
                            onChange={event => setNewAssunto(event.target.value)}
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