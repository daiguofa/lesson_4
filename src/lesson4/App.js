import React from 'react'
import AddTodo from "./AddTodo"
import TodoList from './TodoList'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: 'active',
            items: [
                { text: "test", id: "1", completed: true },
                { text: "arya", id: "2", completed: false },
                { text: "ibm", id: "3", completed: false }
            ]
        }

    }
    changeStatus(itemId, completed) {
        // let items = [...this.state.items]
        // let index = items.findIndex(item => item.id === itemId)
        // items[index].completed = completed
        // this.setState({ items })
    }
    changeFilter(filter) {
        this.setState({ filter })
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