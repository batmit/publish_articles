import { useEffect, useState } from "react";
import { database } from "../services/firebase";

type assuntosType = {
    subject: string | unknown,
}

type firebaseAssuntosProps = Record<string, string>

export function Articles() {

    const [Assunto, setAssunto] = useState<assuntosType[]>([]);

    const assuntos = database.ref(`articles`)

    console.log(assuntos)

    useEffect(() => {
        assuntos.on('value', assunto => {
            console.log(assunto)

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