import { database } from "../services/firebase";

type dadosProps = {
    assunto: string;
}

export function Articles() {

    const dados = database.ref(`articles`) as dadosProps

    console.log(dados)

    return (
        <>
            <header>
                <h1>Published Articles</h1>
            </header>

            

        </>
    );
}