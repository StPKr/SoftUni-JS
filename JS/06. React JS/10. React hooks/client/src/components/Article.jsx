import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export default function Article() {
    const { articleId } = useParams();
    const { data: article, isFetching } = useFetch(`http://localhost:3030/jsonstore/advanced/articles/details/${articleId}`, {});

    return (
        <article>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
        </article>
    );
}
