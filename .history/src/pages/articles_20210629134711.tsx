import { useEffect, useState } from "react";
import { database } from "../services/firebase";

assuntosType = {
    id: string;
    
}

export function Articles() {

    const [Assunto, setAssunto] = useState<assuntosType[]>([]);

    const assuntos = database.ref(`articles`)

    console.log(assuntos)

    useEffect(() => {
        assuntos.on('value', assunto => {
            const databaseAssuntos = assunto.val();
            const firebaseAssuntos = databaseAssuntos.Assunto ?? {};

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