import { useNavigate } from "react-router-dom";
import { useCreateBook } from "../../hooks/useBooks";
import { useForm } from "../../hooks/useForm";
import './CreateBook.css'
import { createBookValidator } from "../../util/validators";
import { useState } from "react";
import Spinner from "../spinner/Spinner";
import BookSubmitForm from "../common/BookSubmitForm";

const initialValues = {
    title: '',
    author: '',
    genre: '',
    year: '',
    cover: '',
    ISBN: '',
    summary: '',
    likes: 0,
    dislikes: 0,
    comments: [],
    // test: [] - add any custom values not included in the form6
}

export default function CreateBook() {
    const navigate = useNavigate();
    const createBook = useCreateBook();
    const [isLoading, setIsLoading] = useState(false);


    const createHandler = async (values) => {
        setIsLoading(true);
        try {
            const { _id: bookId } = await createBook(values);
            navigate(`/books/${bookId}`);
        } catch (err) {
            setErrors(errors => [...errors, err.message])
        } finally {
            setIsLoading(false);
        }
    }

    const {
        values,
        changeHandler,
        submitHandler,
        errors,
        setErrors
    } = useForm(initialValues, createHandler, createBookValidator)

    return (
        <>
            {isLoading
                ? <Spinner />
                : <BookSubmitForm values={values} changeHandler={changeHandler} submitHandler={submitHandler} errors={errors} header={'Create Book'} buttonText={"Create Book"}/>
            }
        </>
    );
}