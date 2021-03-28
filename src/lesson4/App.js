import React from 'react'
import AddTodo from "./AddTodo"
import TodoList from './TodoList'

class App extends React.Component {
    render() {
        const data = [
            { text: "test", id: "1", completed: false },
            { text: "test", id: "1", completed: false },
            { text: "test", id: "1", completed: false }
        ]
        let title = "My Todo React App"
        return (
            <div className="container">
                <div className="row">
                    <TodoList title={title} items={data} />
                </div>
            </div>
        )
    }
}


const MyApp = <App />
export default MyApp