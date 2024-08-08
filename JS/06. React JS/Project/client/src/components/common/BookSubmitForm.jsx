export default function BookSubmitForm({
    values,
    changeHandler,
    submitHandler,
    errors,
    header,
    buttonText
}) {
    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={submitHandler}>
                <div className="container">
                    <img src="/home-logo2.png" alt="Home" className='brand-logo' />

                    <h1>{header}</h1>
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

                    {errors.map((error, index) => (
                        <p key={index} className="error">{error}</p>
                    ))}

                    <input className="btn submit" type="submit" value={buttonText} />
                </div>
            </form>
        </section>
    );
}