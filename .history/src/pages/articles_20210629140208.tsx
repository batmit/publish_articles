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
            const databaseAssuntos = assunto.val();

            const parsedAssuntos = Object.entries(databaseAssuntos).map(([key, value]) => {
                console.log(key)
                console.log(value)
            })


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