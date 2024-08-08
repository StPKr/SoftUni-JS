import { useNavigate, useParams } from "react-router-dom";
import { useGetOneBook } from "../../hooks/useBooks";
import { booksAPI } from "../../api/books-api";
import { useForm } from "../../hooks/useForm";
import { createBookValidator } from "../../util/validators";
import Spinner from "../spinner/Spinner";
import { useState } from "react";
import BookSubmitForm from "../common/BookSubmitForm";


export default function EditBook() {
    const { bookId } = useParams();
    const navigate = useNavigate();
    const [book] = useGetOneBook(bookId);
    const [isLoading, setIsLoading] = useState(false);

    const {
        changeHandler,
        submitHandler,
        values,
        errors,
        setErrors
    } = useForm(book, async (values) => {
        setIsLoading(true);
        try {
            await booksAPI.update(bookId, values);

            navigate(`/books/${bookId}`);
        } catch (err) {
            setErrors(errors => [...errors, err.message])
        } finally {
            setIsLoading(false);
        }

    }, createBookValidator);

    return (
        <>
            {isLoading
                ? <Spinner />
                :<BookSubmitForm values={values} changeHandler={changeHandler} submitHandler={submitHandler} errors={errors} header={'Edit Book'} buttonText={'Save'}/>
            }
        </>
    );

}