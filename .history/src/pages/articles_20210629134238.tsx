import { useEffect } from "react";
import { database } from "../services/firebase";

type dadosProps = {
    assunto: string;
}

export function Articles() {

    const assuntos = database.ref(`articles`)

    console.log(dados)

    useEffect(() => {
        assuntos.on('value', assunto => {
            
        })
    }, []) 

    return (
        <>
            <header>
                <h1>Published Articles</h1>
            </header>

            

        </>
    );
}