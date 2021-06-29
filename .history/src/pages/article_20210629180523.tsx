import { useParams } from "react-router"

type articleParams = {
    id: string,
}

export function Article() {

    const params = useParams<articleParams>();
    const articleId = params.id;
    

    return(

        <>

            <h1>Article</h1>

        </>

    )

}