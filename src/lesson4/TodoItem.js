import React from 'react'
import CheckBox from './CheckBox'

class TodoItem extends React.Component {

    render() {
        const { data, changeStatus,deleteRow } = this.props
        const handleChange = (checked) => changeStatus(data.id, checked)
        const handleDelete = (e) => deleteRow(data.id,e)
        const className = "todo-item ui-state-default" + (data.completed ? 'completed' : 'pending')
        return <div className={className} style={{"display":"flex","justifyContent":"space-between"}}>
            <div className="checkbox">
                <label>
                    {
                        // <input type="checkbox" value="" /> {data.text}
                    }
                    <CheckBox checked={data.completed} onChange={handleChange} />
                    {data.text}
                </label>
            </div>
            <button type="button" onClick={handleDelete}>删除</button>
        </div>
    }
}

export default TodoItem