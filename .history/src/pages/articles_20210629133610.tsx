import { database } from "../services/firebase";

type dados = {
    assunto: string;
}

export function Articles() {

    const dados = database.ref(`articles`)

    return (
        <>
            <header>
                <h1>Published Articles</h1>
            </header>

            

        </>
    );
}