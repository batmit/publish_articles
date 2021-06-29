import { useContext, useEffect, useState } from "react";
import { database } from "../services/firebase";
import { Button } from './components/Button'

//type assuntosType = {
//    subject: string | unknown,
//}


export function Articles() {

    const [Assunto, setAssunto] = useState('');


    const assuntos = database.ref(`articles`)

    useEffect(() => {
        assuntos.on('value', assunto => {
            const databaseAssuntos = assunto.val();

            Object.entries(databaseAssuntos).map(([key, value]) => {
                console.log(key)
                setAssunto(key)
                console.log(value)
            })


        })
    }, []);

    return (
        <>
            <header>
                <h1>Published Articles</h1>
            </header>

            <Button lele={Assunto} />

        </>
    );
}