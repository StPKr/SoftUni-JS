import { useEffect, useState } from "react"
import { useParams, useLocation, useNavigate } from "react-router-dom";

export default function ArticleDetails() {
    const [article, setArticle] = useState({});
    const location = useLocation();
    const navigate = useNavigate();
    const { articleId } = useParams();

    console.log(location);

    useEffect(() => {
        const neshtoSi = async () => {
            const response = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${articleId}`);
            if (response.statusText == 'No Content') { // or (response.status == 204)
                //redirect to 404
                navigate('/*') // or return <Navigate to='/not-found'/>
                return;
            }

            const result = await response.json();

            setArticle(result);
        }
        neshtoSi(); // instead of using IIFE like in Articles but you need to pick a decent name, or use anynymouse function tiwht Promise.then() syntax
    }, []);

    return (
        <div className="p-20 lg:max-w-lg">
            <p className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{article.title}</h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">
                {article.content}
            </p>
        </div>
    )
}
