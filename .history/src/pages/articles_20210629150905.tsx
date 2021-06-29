import { useEffect, useState } from "react";
import { database } from "../services/firebase";


export function Articles() {

    const [Assunto, setAssunto] = useState([]);

    const assuntos = database.ref(`articles`)

    const [valor, setNewValor] = useState('');

    useEffect(() => {
        assuntos.on('value', assunto => {
            const databaseAssuntos = assunto.val();

            Object.entries(databaseAssuntos).map(([key]) => {

                console.log(key)

                setAssunto([key])

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