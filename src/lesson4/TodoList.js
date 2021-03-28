import React from 'react'
import TodoItem from "./TodoItem"

class TodoList extends React.Component {
    render() {
        const { title, items } = this.props
        return (
            <div className="todolist">
                <h1>{title}</h1>
                <ul className="list-unstyled">
                    {items.map(item => <TodoItem key={item.id} data={item} />)}
                </ul>
            </div>
        )
    }
}

export default TodoList