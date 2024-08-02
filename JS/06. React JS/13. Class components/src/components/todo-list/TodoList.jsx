import { Component } from 'react';
import TodoListItem from './TodoListItem';
import { DummyContext } from '../../contexts/DummyContext';

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: props.todos,
        }

        this.todoClickHandler = this.todoClickHandler.bind(this);
    }

    todoClickHandler(todoId) {
        console.log(todoId);

        this.setState({
            todos: this.state.todos.map(todo =>
                todo.id === todoId
                    ? { ...todo, done: !todo.done }
                    : todo
            )
        });
    }

    todoRemoveHandler(todoId) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== todoId),
        });
    }

    render() {
        return (
            <DummyContext.Provider value="Context Data String :)">
                <h1>Class Components Demo</h1>
                <h2>Some additional heading</h2>

                <ul>
                    {this.state.todos.map(todo =>
                        <TodoListItem
                            key={todo.id}
                            clickHandler={this.todoClickHandler}
                            removeHandler={this.todoRemoveHandler.bind(this, todo.id)}
                            {...todo}
                        />
                    )}
                </ul>
            </DummyContext.Provider>
        )
    };
}

export default TodoList;
