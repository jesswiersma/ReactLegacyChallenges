import React, {Component} from 'react';
import  {Input, Button}  from 'reactstrap';


class DisplayToDoList extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <div>
                  {this.props.tasks !== '' ? this.props.tasks.map((tasks)=>{
                    return <li>{tasks}</li>
                }): <li>No Tasks To Do</li>}
            </div>
        )
    }
}

class ToDoList extends Component {
    constructor (props) {
        super(props)
        this.state = {
            tasks: "", 
            newTasks: [] 
        }
    }

    setTask (event) {
        this.setState({newTasks: event.target.value})
    }

    addTask(event) {
        //event.preventDefault();
        this.setState({
            tasks: [...this.state.tasks, this.state.newTasks],
        });
    }

    deleteTask(event) {
        //event.preventDefault();
        this.setState({
            tasks: this.state.tasks.filter(tasks => tasks !== this.state.newTasks)
        })
    }
   
    render() {
        return (
            <div>
                {/* <form onSubmit ={this.addTask}> */}
                    <Input
                    placeholder = "To Do List"
                    type="text"
                    value = {this.state.newTasks}
                    onChange = {(event)=> this.setTask(event)} />
                
                <Button onClick = {(event) => this.addTask(event)}>Add Task</Button>
                <p>To add a task, type the task into the To Do List bar and click the "Add Task" btton</p>
                <Button onClick = {(event) => this.deleteTask(event)}>Delete Task</Button>
                <p>To delete a task, type the task you want to delete into the To Do List bar and click on the "Delete Task" button</p>
                {/* </form> */}
                <h3>To Do List:</h3>
                <DisplayToDoList tasks={this.state.tasks}/>
            </div>
        );
    }
}



// const Tasks = (props) => {
//     return(
//         <div>
//             <h2>{props.Tasks}</h2>
//         </div>
//     )
// }



export default ToDoList;