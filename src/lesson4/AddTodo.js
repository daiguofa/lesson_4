import React from 'react'

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.textInput = React.createRef();
    }    
    handleSubmit(event) {
        // Explicitly focus the text input using the raw DOM API
        // Note: we're accessing "current" to get the DOM node        
        event.preventDefault();
        let text=this.textInput.current.value;
        alert('A name was submitted: ' + this.textInput.current.value);
        if (!text.trim()) {
            alert("Input can't be null")
            return
        }

        let id = "id_"+text;
        this.props.AddTodoItem({ id, text, complete: false });        
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div>
                    <input type="text" placeholder="TODO" ref={this.textInput} />
                </div>
                <button type="submit" >添加</button>
            </form>
        )
    }
}

export default AddTodo