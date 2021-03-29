import React from 'react'
import * as KeyCode from "keycode-js"

class AddTodo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: props.value || ''
        }
    }

    handleChange(e) {
        this.setState({ value: e.target.value })
    }
    clear() {
        this.setState({ value: "" })
    }
    handleKeyUp(e) {
        const { addNew } = this.props
        const text = this.state.value.trim()
        if (e.keyCode === KeyCode.KEY_RETURN && text) {
            addNew(text)
            this.clear()
        }
    }

    render() {
        return (
            <input type="text"
                placeholder="添加"
                className="form-control add-todo"
                value={this.state.value}
                onChange={e => this.handleChange(e)}
                onKeyUp={e => this.handleKeyUp(e)}
            />
        )
    }
}

export default AddTodo