import './App.css'
import TodoList from './components/todo-list/TodoList'

const todos = [
    { title: 'Clean', done: false, id: 1 },
    { title: 'Fitness', done: false, id: 2 },
    { title: 'Study', done: true, id: 3 },
];

function App() {
    return (
        <>
            <TodoList todos={todos} />
        </>
    )
}

export default App
