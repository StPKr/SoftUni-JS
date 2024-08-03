import { booksAPI } from "../api/books-api"

export function useCreateBook() {
    const bookCreateHandler = (bookData) => booksAPI.create(bookData)
    return bookCreateHandler
} // this is necessary to ensure that this is not fired on initial load or in case we need validation