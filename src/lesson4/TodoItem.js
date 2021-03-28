import React from 'react'
import CheckBox from './CheckBox'

class TodoItem extends React.Component {

    render() {
        const { data, changeStatus } = this.props
        const handleChange = (checked) => changeStatus(data.id, checked)
        return <div className="ui-state-default">
            <div className="checkbox">
                <label>
                    {
                        // <input type="checkbox" value="" /> {data.text}
                    }
                    <CheckBox checked={data.completed} onChange={handleChange} />
                    {data.text}
                </label>
            </div>
        </div>
    }
}

export default TodoItem