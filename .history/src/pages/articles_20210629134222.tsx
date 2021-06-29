import { useEffect } from "react";
import { database } from "../services/firebase";

type dadosProps = {
    assunto: string;
}

export function Articles() {

    const dados = database.ref(`articles`)

    console.log(dados)

    useEffect(() => {
        dados.on('value', dado => {
            
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