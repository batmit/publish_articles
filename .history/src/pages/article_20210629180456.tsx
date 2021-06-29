import { useParams } from "react-router"

type articleParams = {
    id: string,
}

export function Article() {

    const params = useParams<articleParams>();

    return(

        <>

            <h1>Article</h1>

        </>

    )

}