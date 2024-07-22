import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function ArticleCard({
    title,
    _id
}) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Generic-person.svg/1024px-Generic-person.svg.png" />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                {/* <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text> */}
                <Button as={Link} to={`/articles/details/${_id}`} variant="primary">Details</Button>
            </Card.Body>
        </Card>
    );
}

export default ArticleCard;