import { useNavigate } from "react-router-dom";
import { useCreateBook } from "../../hooks/useBooks";
import { useForm } from "../../hooks/useForm";
import './CreateBook.css'

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

    const createHandler = async (values) => {
        try {
            const { _id: bookId } = await createBook(values);
            navigate(`/books/${bookId}`);
        } catch (err) {
            console.log(err.message);
        }
    }

    const {
        values,
        changeHandler,
        submitHandler
    } = useForm(initialValues, createHandler)

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={submitHandler}>
                <div className="container">

                    <h1>Create Book</h1>
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
                    <input className="btn submit" type="submit" value="Create Book" />
                </div>
            </form>
        </section>
    );
}