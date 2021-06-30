import { useEffect, useState } from "react";
import { database } from "../services/firebase";

type assuntosProps = {
    id: string,
    object: [
        id: string,
        content: string
    ]
}

export function Articles() {

    const [Assunto, setAssunto] = useState<assuntosProps>();

    const assuntos = database.ref(`articles`)

    useEffect(() => {
        assuntos.on('value', assunto => {
            const databaseAssuntos = assunto.val();

            Object.entries(databaseAssuntos).map(([key]) => {

                //console.log(key)

            })

            setAssunto(databaseAssuntos)

            console.log(Assunto)

        
        })

        


    }, []);

    return (
        <>
            <header>
                <h1>Published Articles</h1>
            </header>


        </>
    );
}