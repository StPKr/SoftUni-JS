import { useEffect, useReducer } from "react";
import { commentsAPI } from "../api/comments-api";

export function useCreateComment() {
    const createHandler = (gameId, comment) => commentsAPI.createComment(gameId, comment);

    return createHandler;
}

function commentsReducer(state, action) {
    switch (action.type) {
        case 'GET_ALL':
            return action.payload.slice(); //slice() is not needed, using it just to create a shallow copy in case someone changes the result below
        case 'ADD_COMMENT':
            return [...state, action.payload];
        default:
            return state;
    }
}

export function useGetAllComments(gameId) {
    const [comments, dispatch] = useReducer(commentsReducer, [],);

    useEffect(() => {
        (async () => {
            const result = await commentsAPI.getAllComments(gameId);

            dispatch({ type: 'GET_ALL', payload: result });
        })();
    }, [gameId]);

    return [comments, dispatch];
}