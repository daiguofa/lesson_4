import React, { useRef } from 'react'

export class CustomeTextput extends React.Component {
    constructor(props) {
        super(props)
        this.textInput = React.createRef()
        this.focusTextInput = this.focusTextInput.bind(this)
        this.state = { name: "ibm" }
    }

    focusTextInput() {
        this.textInput.current.focus()
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    ref={this.textInput}
                />
                <input
                    type="button"
                    value="Focus the text"
                    onClick={this.focusTextInput}
                />
            </div>

        )
    }
}

export class AutoFocusTextInput extends React.Component {
    constructor(props) {
        super(props)
        this.textInput = React.createRef()

    }
    componentDidMount() {
        console.log(this.textInput.current)
        this.textInput.current.focusTextInput()
    }

    render() {
        return (
            <CustomeTextput ref={this.textInput} />
        )
    }
}



function Comp() {
    return <div>自定义组件</div>
}

export class MyComponent extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
        this.show = this.show.bind(this)
    }
    show() {
        console.log(this.myRef.current)
    }
    render() {
        return null
    }
}


export function FuncTextInput(props) {
    const textInput = useRef(null)

    function handleClick() {
        textInput.current.focus()
    }

    return (
        <div>
            <input
                type="text"
                ref={textInput}
            />
            <input
                type="button"
                value="Focus the text"
                onClick={handleClick}
            />
        </div>
    )
}