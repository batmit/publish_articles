import { useEffect, useState } from "react";
import { database } from "../services/firebase";


export function Articles() {

    const [Assunto, setAssunto] = useState('');

    const assuntos = database.ref(`articles`)

    useEffect(() => {

        assuntos.on('value', assunto => {

            const databaseAssuntos = assunto.val();

            Object.entries(databaseAssuntos).map(([key, value]) => {
                console.log(key)

            })

            const result = Object.values(databaseAssuntos)

            return {result}
        })

        return {result}
        
    }, []);



    return (
        <>
            <header>
                <h1>Published Articles</h1>
            </header>

            <button>{result}</button>

        </>
    );
}