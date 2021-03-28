import React from 'react'
import AddTodo from "./AddTodo"
import TodoList from './TodoList'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                { text: "test", id: "1", completed: false },
                { text: "test", id: "1", completed: false },
                { text: "test", id: "1", completed: false }
            ]
        }

    }
    addNew(text) {
        let nextId = this.state.items.length + 1
        let item = {
            id: nextId,
            text: text
        }
        this.setState({ items: [...this.state.items, item] })
    }
    render() {
        const data = this.state.items
        let title = "My Todo React App"
        return (
            <div className="container">
                <div className="row">
                    <TodoList title={title} items={data} addNew={this.addNew.bind(this)} />
                </div>
            </div>
        )
    }
}


const MyApp = <App />
export default MyApp