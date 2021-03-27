import React from 'react'

class NameForm extends React.Component {
    constructor(props) {
        super(props)
        this.input = React.createRef()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        alert('A name was submitted' + this.input.current.value)
        e.preventDefault()
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                     <input type="text" ref={this.input} />
                </label>
                <input type="submit" value="submit" />
            </form>
        )
    }
}


export default NameForm