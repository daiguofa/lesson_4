import React from 'react'
import TodoItem from "./TodoItem"
import Footer from './Footer'
import AddTodo from './AddTodo'

class TodoList extends React.Component {
    render() {
        const { title, items } = this.props
        return (
            <div className="todolist">
                <header>
                    <h1>{title}</h1>
                    <AddTodo />

                </header>
                <ul className="list-unstyled">
                    {items.map(item => <TodoItem key={item.id} data={item} />)}
                </ul>
                <Footer count={items.length} />
            </div>
        )
    }
}

export default TodoList