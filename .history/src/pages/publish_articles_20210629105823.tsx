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
                            onChange={event => setNewQuestion(event.target.value)} //sempre que eu mudar vai mandar
                            // o resultado final vou mandar também
                        />
                        <div className="form-footer">
                            { user ? ( //se o usuário tiver qualquer coisa faaz isso 
                                <div className="user-info">
                                    <img src={user.avatar} alt={user.name} />
                                    <span>{user.name}</span>
                                </div>
                            ) : ( // senão faz isso
                                <span>Para enviar uma pergunta, <button>faça seu login.</button> </span>
                            ) } 
                        
                            <Button type="submit" disabled={!user}>Enviar pergunta</Button> 
                        
                        </div>
                </form>
            </main>
        </>
    );
}