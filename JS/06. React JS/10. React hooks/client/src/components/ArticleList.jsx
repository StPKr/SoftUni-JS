import { useFetch } from '../hooks/useFetch';

import ArticleCard from './ArticleCard';
import styles from '../App.module.css';

import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/esm/Spinner';

export default function ArticleList() {
    const {
        data: articles,
        isFetching,
        refetch,
    } = useFetch('http://localhost:3030/jsonstore/advanced/articles/details', []);

    return (
        <>
            {
                isFetching
                    ? <Spinner />
                    : (
                        <div className={styles['article-list']}>
                            {Object.values(articles).map(article => <ArticleCard key={article._id} {...article} />)}
                        </div>
                    )
            }

            <Button variant="primary" onClick={refetch}>Refresh</Button>
        </>

    );
}
