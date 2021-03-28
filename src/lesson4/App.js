import React from 'react'
import AddTodo from "./AddTodo"
import Todos from './Todos'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            choosevalue: 1,
            data: this.props.data,
            filteredData:[]
        }   
        this.OnFilterTodoItem=this.OnFilterTodoItem.bind(this);           
    }     
    componentWillMount(){
        this.OnFilterTodoItem("");
    }
    async OnAddTodoItem(newItem) {
        let isExist=this.state.data.some(item => item.id===newItem.id);
        if(isExist){
            alert("已包含该todo item");
            return;
        }
        let newdata = this.state.data.concat(newItem);
        // console.log("newdata",newdata);
        await this.setState({ data: newdata });        
        console.log("after await data",this.state.data);
        this.OnFilterTodoItem("")
        // this.setState({ data: newdata },this.OnFilterTodoItem(""));
        // console.log("data",this.state.data);
        // console.log("filteredData",this.state.data,this.state.filteredData);
    }  
    OnFilterTodoItem(type){
        let filteredData=null;
        if(type===""){
            filteredData=this.state.data;
        }else{
            filteredData=this.state.data.filter(item => item.completed===type);
        }
        this.setState({ filteredData: filteredData });
    }  
    render() {
        // const data = [
        //     { text: "test", id: "1", completed: false },
        //     { text: "test", id: "1", completed: false },
        //     { text: "test", id: "1", completed: false }
        // ]
        let { data,filteredData } = this.state;
        return (
            <div>
                <h1>My Todo React App</h1>
                <br />
                <AddTodo AddTodoItem={this.OnAddTodoItem.bind(this)} />
                {/* <Todos data={data} /> */}
                <Todos data={filteredData} />
            </div>
        )
    }
}

const data = [
    { text: "test", id: "1", completed: false },
    { text: "test", id: "1", completed: false },
    { text: "test", id: "1", completed: false }
]

const MyApp = <App data={data}/>
export default MyApp