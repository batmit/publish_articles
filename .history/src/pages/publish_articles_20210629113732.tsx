export function publish_articles() {
    return (
        <>
            <header>
                <h1>Publish New Article</h1>
            </header>

            <main>
                <form>
                        <textarea 
                            placeholder="O que você quer perguntar?"
                            //onChange={event => setNewQuestion(event.target.value)} //sempre que eu mudar vai mandar
                            // o resultado final vou mandar também
                        />

                        <div className="form-footer">


                            <button type='submit'></button>
                        </div>
                        
                </form>
            </main>
        </>
    );
}