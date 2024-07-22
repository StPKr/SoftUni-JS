import { useEffect, useState } from "react";

export function useFetch(url, initialData) {
    const [data, setData] = useState(initialData);
    const [isFetching, setIsFetching] = useState(true);
    const [toggleRefetch, setToggleRefetch] = useState(false);

    useEffect(() => {
        const abortController = new AbortController();
        setIsFetching(true);

        (async () => {
            const response = await fetch(url, { signal: abortController.signal });
            const result = await response.json();

            setData(result);
            setIsFetching(false);
        })();

        return () => abortController.abort();
    }, [url, toggleRefetch]);

    const refetch = () => {
        setToggleRefetch(state => !state);
    }

    return {
        data,
        isFetching,
        refetch
    };
}