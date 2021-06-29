import { useEffect, useState } from "react";
import { database } from "../services/firebase";

type assuntosProps = {
    id: string,
    object: {
        id: string,
        content: string
    }
}

export function Articles() {

    const [Assunto, setAssunto] = useState<string>();

    const assuntos = database.ref(`articles`)

    useEffect(() => {

        assuntos.on('value', assunto => {

            const databaseAssuntos = assunto.val();

            Object.entries(databaseAssuntos).map(([key]) => {

                console.log(Assunto)
                setAssunto(Assunto + key)

            })
        
        })
        


    }, []);

    return (
        <>
            <header>
                <h1>Published Articles</h1>
            </header>
            <button>{Assunto}</button>
        </>
    );
}