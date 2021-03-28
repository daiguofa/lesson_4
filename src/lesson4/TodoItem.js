import React from 'react'

class TodoItem extends React.Component {
    render() {
        const data = this.props.data
        return <div className="ui-state-default">
            <div className="checkbox">
                <label>
                    <input type="checkbox" value="" /> {data.text}
                </label>
            </div>
        </div>
    }
}

export default TodoItem