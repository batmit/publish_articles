import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { database } from "../services/firebase";
import 'C:/Users/sheyl/Documents/publish_articles/src/styles/article.scss'

type articleParams = {
    id: string,
}

export function Article() {

    const params = useParams<articleParams>();
    const articleId = params.id; //nome do texto
    const assuntos = database.ref(`articles/${articleId}`);
    const [conteúdo, setConteúdo] = useState<unknown[]>();

    useEffect(() => {

        assuntos.on('value', assunto => {

            const databaseAssuntos = assunto.val();

            Object.entries(databaseAssuntos).map(([key]) => {

                console.log(key)

            })

            const result = Object.values(databaseAssuntos)

            console.log(result)

            setConteúdo(result)


        })

        
    }, []);


    return(

        <>
            <body>
                <h1>{`${articleId}`}</h1>

                <h3>{conteúdo}</h3>
            </body>
            

        </>

    )

}