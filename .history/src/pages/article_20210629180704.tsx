import { useParams } from "react-router"

type articleParams = {
    id: string,
}

export function Article() {

    const params = useParams<articleParams>();
    const articleId = params.id; //nome do texto

    useEffect(() => {

        assuntos.on('value', assunto => {

            const databaseAssuntos = assunto.val();

            Object.entries(databaseAssuntos).map(([key, value]) => {
                console.log(key)

            })

            const result = Object.keys(databaseAssuntos)


        })

        
    }, []);


    return(

        <>

            <h1>Article</h1>

        </>

    )

}