import { useEffect, useState } from "react";
import { database } from "../services/firebase";


export function Articles() {

    const assuntos = database.ref(`articles`)

    useEffect(() => {

        assuntos.on('value', assunto => {

            const databaseAssuntos = assunto.val();

            Object.entries(databaseAssuntos).map(([key, value]) => {
                console.log(key)

            })

            const result = Object.keys(databaseAssuntos)
            console.log(result)

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