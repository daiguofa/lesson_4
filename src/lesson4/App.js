import React from 'react'
import AddTodo from "./AddTodo"
import TodoList from './TodoList'
import { getAll, addToList, updateStatus } from "./services/todo"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: 'active',
            items: getAll()
        }
    }
    addNew(text) {
        let updatedList = addToList(this.state.items, { text, completed: false })
        this.setState({ items: updatedList })
    }

    changeFilter(filter) {
        this.setState({ filter })
    }
    changeStatus(itemId, completed) {
        const updatedList = updateStatus(this.state.items, itemId, completed)
        this.setState({ items: updatedList })
    }

    render() {
        const title = "My Todo App"
        return (
            <div className="container">
                <div className="row">
                    <TodoList
                        addNew={this.addNew.bind(this)}
                        changeFilter={this.changeFilter.bind(this)}
                        changeStatus={this.changeStatus.bind(this)}
                        {...this.state}
                    />
                </div>
            </div>
        )
    }
}


const MyApp = <App />
export default MyApp