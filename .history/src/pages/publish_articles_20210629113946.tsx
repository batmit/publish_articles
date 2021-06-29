export function publish_articles() {
    return (
        <>
            <header>
                <h1>Publish New Article</h1>
            </header>

            <main>
                <form>
                        <textarea 
                            placeholder="Artigo"
                            //onChange={event => setNewQuestion(event.target.value)} 
                            // value={newQuestion}
                        />

                        <div className="form-footer">


                            <button type='submit'>Enviar Artigo</button>
                        </div>
                        
                </form>
            </main>
        </>
    );
}