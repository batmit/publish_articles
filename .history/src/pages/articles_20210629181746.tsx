import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { database } from "../services/firebase";
import '../styles/articles.scss'

export function Articles() {

    const [Assuntos, setAssuntos] = useState<string[]>();

    const assuntos = database.ref(`articles`)

    const history = useHistory();

    useEffect(() => {

        assuntos.on('value', assunto => {

            const databaseAssuntos = assunto.val();

            Object.entries(databaseAssuntos).map(([key, value]) => {
                console.log(key)

            })

            const result = Object.keys(databaseAssuntos)

            setAssuntos(result)

        })

        
    }, []);

    function handleSeeArticle(nome: string) {
        history.push(`/articles/${nome}`)
    }


    return (
        <>
            <header>
                <h1>Published Articles</h1>
            </header>

            {Assuntos?.map(assunto => {
                return (
                    <button
                        key={assunto}
                        type='button'
                        onClick={() => handleSeeArticle(assunto)}
                        >{assunto}
                    </button>
                )
            })}
        </>
    );
}