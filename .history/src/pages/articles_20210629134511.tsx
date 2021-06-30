import { useEffect, useState } from "react";
import { database } from "../services/firebase";



export function Articles() {

    const [questions, setQuestions] = useState<QuestionType[]>([]);

    const assuntos = database.ref(`articles`)

    console.log(assuntos)

    useEffect(() => {
        assuntos.on('value', assunto => {
            const databaseAssuntos = assunto.val();
            const firebaseAssuntos = databaseAssuntos.assunto ?? {};

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