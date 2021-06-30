import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { database } from "../services/firebase";

type articleParams = {
    id: string,
}

export function Article() {

    const params = useParams<articleParams>();
    const articleId = params.id; //nome do texto
    const assuntos = database.ref(`articles`);
    const [conteúdo, setConteúdo] = useState('');

    useEffect(() => {

        assuntos.on('value', assunto => {

            const databaseAssuntos = assunto.val();

            Object.entries(databaseAssuntos).map(([key, value]) => {
                console.log(key)

            })

            const result = Object.values(databaseAssuntos)
            console.log(result)

            setConteúdo(Object.values(result))


        })

        
    }, []);


    return(

        <>

            <h1>Article</h1>

        </>

    )

}