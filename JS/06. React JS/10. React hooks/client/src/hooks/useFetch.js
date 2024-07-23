import { useEffect, useState } from "react";

export function useFetch(url, initalData) {
    const [data, setData] = useState(initalData);
    const [isFetching, setIsFetching] = useState(true);
    const [toggleRefetch, setToggleRefetch] = useState(false);

    useEffect(() => {
        setIsFetching(true);
        const abortController = new AbortController();

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
    };

    return {
        data,
        isFetching,
        refetch,
    };
}
