import { useEffect } from "react";
import { database } from "../services/firebase";



export function Articles() {

    const assuntos = database.ref(`articles`)

    console.log(assuntos)

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