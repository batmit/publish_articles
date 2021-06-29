import { useEffect, useState } from "react";
import { database } from "../services/firebase";


export function Articles() {

    const [Assunto, setAssunto] = useState<string[]>();

    const assuntos = database.ref(`articles`)

    useEffect(() => {
        assuntos.on('value', assunto => {
            const databaseAssuntos = assunto.val();

            console.log(databaseAssuntos)

            Object.entries(databaseAssuntos).map(([key]) => {

                console.log(key)

            })

            setAssunto(databaseAssuntos)
        
        })

        


    }, []);

    return (
        <>
            <header>
                <h1>Published Articles</h1>
            </header>

            {Assunto ? Assunto.map(assunto => {
                return (
                    <button>{assunto}</button>
                )
                }) : ()
            }

        </>
    );
}