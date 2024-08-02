import { Component } from "react";
import { withDummyContext } from "../../hoc/withDummyContext";

class TodoListItem extends Component {
    constructor(props) {
        super(props);

        console.log('Build component');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        const {
            id,
            title,
            done,
            clickHandler,
            removeHandler,
            dummy,
        } = this.props;

        console.log(dummy);

        return (
            <li
                style={done
                    ? { textDecoration: 'line-through' }
                    : { cursor: 'pointer' }
                }
            >
                <span onClick={() => clickHandler(id)}>{title}</span>
                <button onClick={removeHandler}>x</button>
            </li>
        );
    }
}

export default withDummyContext(TodoListItem);
