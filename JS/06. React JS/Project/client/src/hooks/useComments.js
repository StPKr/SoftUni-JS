import { useEffect, useState } from "react";
import { commentsAPI } from "../api/comments-api";

export function useCreateComment() {
    const createHandler = (bookId, comment) => commentsAPI.createComment(bookId, comment);

    return createHandler;
}

export function useGetAllComments(bookId) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await commentsAPI.getAllComments(bookId);

            setComments(result);
        })();
    }, [bookId]);

    return [comments, setComments];
}