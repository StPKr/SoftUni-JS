import { useEffect, useState } from "react";
import { booksAPI } from "../api/books-api"


export function useGetOneBook(bookId) {
    const [book, setBook] = useState({
        author: '',
        genre: '',
        year: '',
        cover: '',
        ISBN: '',
        summary: '',
        title: ''
    });

    useEffect(() => {
        (async () => {
            const result = await booksAPI.getOne(bookId);
            setBook(result);
        })();
    }, [bookId]);

    return [
        book,
        setBook
    ]
}

export function useCreateBook() {
    const bookCreateHandler = (bookData) => booksAPI.create(bookData)
    return bookCreateHandler
} // this is necessary to ensure that this is not fired on initial load or in case we need validation