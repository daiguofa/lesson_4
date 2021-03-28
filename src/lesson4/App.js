import React from 'react'
import AddTodo from "./AddTodo"
import TodoList from './TodoList'
import { getAll, addToList, updateStatus } from "./services/todo"
import { FILTER_ACTIVE } from "./services/filter"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: FILTER_ACTIVE,
            items: getAll()
        }

    }
    changeStatus(itemId, completed) {
        // let items = [...this.state.items]
        // let index = items.findIndex(item => item.id === itemId)
        // items[index].completed = completed
        const updatedList = updateStatus(this.state.items, itemId, completed)
        this.setState({ items: updatedList })
    }
    changeFilter(filter) {
        this.setState({ filter })
    }
    addNew(text) {
        let updateList = addToList(this.state.items, { text, completed: false })
        this.setState({ items: updateList })
    }
    render() {
        const data = this.state.items
        let title = "My Todo React App"
        return (
            <div className="container">
                <div className="row">
                    <TodoList title={title}
                        changeFilter={this.changeFilter.bind(this)}
                        addNew={this.addNew.bind(this)}
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