import { database } from "../services/firebase";

type dadosProps = {
    assunto: string;
}

export function Articles() {

    const dados: dadosProps = database.ref(`articles`)

    return (
        <>
            <header>
                <h1>Published Articles</h1>
            </header>

            

        </>
    );
}