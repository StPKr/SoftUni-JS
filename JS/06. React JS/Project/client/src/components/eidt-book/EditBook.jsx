import { useNavigate, useParams } from "react-router-dom";
import { useGetOneBook } from "../../hooks/useBooks";
import { booksAPI } from "../../api/books-api";
import { useForm } from "../../hooks/useForm";
import { createBookValidator } from "../../util/validators";


export default function EditBook() {
    const { bookId } = useParams();
    const navigate = useNavigate();
    const [book] = useGetOneBook(bookId);

    const {
        changeHandler,
        submitHandler,
        values,
        errors,
    } = useForm(book, async (values) => {
        await booksAPI.update(bookId, values);

        navigate(`/books/${bookId}`);
    }, createBookValidator);

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={submitHandler}>
                <div className="container">

                    <h1>Edit Book</h1>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={values.title}
                        onChange={changeHandler}
                        placeholder="Enter book title..."
                    />

                    <label htmlFor="author">Author:</label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={values.author}
                        onChange={changeHandler}
                        placeholder="Enter book author..."
                    />

                    <label htmlFor="genre">Genre:</label>
                    <input
                        type="text"
                        id="genre"
                        name="genre"
                        value={values.genre}
                        onChange={changeHandler}
                        placeholder="Enter book genre..."
                    />

                    <label htmlFor="year">Year:</label>
                    <input
                        type="number"
                        id="year"
                        name="year"
                        value={values.year}
                        onChange={changeHandler}
                        placeholder="Enter publicashion year..."
                    />

                    <label htmlFor="cover-img">Cover:</label>
                    <input
                        type="text"
                        id="cover"
                        name="cover"
                        value={values.cover}
                        onChange={changeHandler}
                        placeholder="Upload a cover image..."
                    />

                    <label htmlFor="ISBN">ISBN:</label>
                    <input
                        type="number"
                        id="ISBN"
                        name="ISBN"
                        value={values.ISBN}
                        onChange={changeHandler}
                        placeholder="************"
                    />

                    <label htmlFor="summary">Summary:</label>
                    <textarea
                        name="summary"
                        value={values.summary}
                        onChange={changeHandler}
                        id="summary"
                    ></textarea>
                    <input className="btn submit" type="submit" value="Save" />
                </div>
            </form>
        </section>
    );

}