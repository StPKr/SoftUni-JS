import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetOneGames } from "../../hooks/useGames";
import { useForm } from "../../hooks/useForm";
import { useCreateComment, useGetAllComments } from "../../hooks/useComments";
import { useAuthContext } from "../../contexts/AuthContext";
import { gamesAPI } from "../../api/games-api";

const initialValues = {
    comment: ''
}

export default function GameDetails() {
    const navigate = useNavigate();
    const { gameId } = useParams();
    const [comments, dispatch] = useGetAllComments(gameId);
    const createComment = useCreateComment();
    const [game] = useGetOneGames(gameId);
    const { isAuthenticated, email, userId } = useAuthContext();

    const {
        changeHandler,
        submitHandler,
        values
    } = useForm(initialValues, async ({ comment }) => {
        try {
            const newComment = await createComment(gameId, comment);

            // setComments(oldComments => [...oldComments, newComment]);
            dispatch({ type: 'ADD_COMMENT', payload: { ...newComment, author: { email } } });
        } catch (err) {
            console.log(err.message);
        }
    });

    const gameDeleteHandler = async () => {
        const isConfirmed = confirm(`Are you sure you want  to delete ${game.title} game?`);

        if (!isConfirmed) {
            return;
        }

        try {
            await gamesAPI.remove(gameId);

            navigate('/');
        } catch (err) {
            console.log(err.message);
        }
    }

    const isOwner = userId === game._ownerId;

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: ${game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">
                    {game.summary}
                </p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {comments.map(comment => (
                            <li key={comment._id} className="comment">
                                <p>{comment.author.email}: {comment.text}</p>
                            </li>
                        ))
                        }
                        {comments.length === 0 && <p className="no-comment">No comments.</p>}


                    </ul>

                </div>

                {isOwner && (<div className="buttons">
                    <Link to={`/games/${gameId}/edit`} className="button">Edit</Link>
                    <Link to="#" onClick={gameDeleteHandler} className="button">Delete</Link>
                </div>)}
            </div>

            {isAuthenticated && (<article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={submitHandler}>

                    <textarea
                        name="comment"
                        placeholder="Comment......"
                        onChange={changeHandler}
                        value={values.comment}
                    ></textarea>

                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>)}

        </section>
    );
}