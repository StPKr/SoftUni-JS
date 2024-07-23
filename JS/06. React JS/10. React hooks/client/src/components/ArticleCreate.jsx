import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { useForm } from '../hooks/useForm';
import UserContext from '../contexts/UserContext';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const initialFormValues = {
    title: '',
    content: '',
};

export default function ArticleCreate() {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    const formSubmitHanlder = async (values) => {
        const response = await fetch('http://localhost:3030/jsonstore/advanced/articles/details', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...values, author: user.username }),
        });

        const result = await response.json();

        navigate(`/articles/${result._id}/details`);
    };

    const { values, changeHandler, submitHandler } = useForm(initialFormValues, formSubmitHanlder);

    return (
        <div>
            <Form style={{ width: '500px', margin: '50px auto' }} onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        placeholder="Article name"
                        value={values.title}
                        onChange={changeHandler}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="content"
                        value={values.content}
                        onChange={changeHandler}
                        rows={3}
                        placeholder='Once upon a time...'
                    />
                </Form.Group>
                <Form.Group>
                    <Button type="submit" variant="success">Create</Button>
                </Form.Group>
            </Form>
        </div>
    );
}
