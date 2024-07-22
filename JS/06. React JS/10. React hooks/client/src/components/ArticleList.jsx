import { useFetch } from "../hooks/useFetch";

import Button from 'react-bootstrap/Button';
import ArticleCard from './ArticleCard';
import Spiner from "./Spinner";
import styles from '../App.module.css'

export default function ArticleList() {
    const { data: articles,
        isFetching,
        refetch,
    } = useFetch('http://localhost:3030/jsonstore/advanced/articles/list', []);
    return (
        <>
            {
                isFetching
                    ? <Spiner />
                    : (<div className={styles['article-list']}>
                        {articles.map(article => <ArticleCard key={article._id} {...article} />)}
                    </div>)
            }
            <Button variant="primary" onClick={refetch}>Refresh</Button>
        </>
    );
}