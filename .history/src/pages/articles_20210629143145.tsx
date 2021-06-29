import { useContext, useEffect, useState } from "react";
import { database } from "../services/firebase";


export function Articles() {

    const [Assunto, setAssunto] = useState('');


    const assuntos = database.ref(`articles`)

    useEffect(() => {
        assuntos.on('value', assunto => {
            const databaseAssuntos = assunto.val();

            function print() {
                Object.entries(databaseAssuntos).map(([key, value]) => {

                    console.log(key)

                    setAssunto(key + Assunto)

                    return (
                        <button>{key}</button>
                    )
                })
            }


        })
    }, []);

    return (
        <>
            <header>
                <h1>Published Articles</h1>
            </header>

            <button onClick={print}>Clique</button>

        </>
    );
}