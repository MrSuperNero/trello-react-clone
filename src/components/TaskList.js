import React from 'react';
import TodoItem from './TodoItem';
import FontAwesome from 'react-fontawesome';
import {Spring} from 'react-spring/renderprops'
import '../css/taskList.css'


export default class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskValue: '',
            title: this.props.title,
            titleValue: this.props.title,
            editTitle: this.props.editTitle,
            numTasks: this.props.numTasks,
            todos: this.props.data,
            addActive: false,
        }; 
        this.handleComplete = this.handleComplete.bind(this);
        this.handleAddTask = this.handleAddTask.bind(this);
        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.willEditTitle = this.willEditTitle.bind(this);
        this.handleEditTitle = this.handleEditTitle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.displayNewTask = this.displayNewTask.bind(this);
    }

    handleComplete(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }

                return todo;
            });

            return {
                todos: updatedTodos,
            };
        });
    }

    handleChangeValue(event) {
        const { name, value } = event.target
        this.setState({ 
            [name]: value
        });
    }

    willEditTitle() {
        this.setState({
            editTitle: true,
        });
    }

    handleEditTitle() {
        this.setState(prevState => {
            return {
                title: prevState.titleValue,
                editTitle: false,
            }
        });
    }


    handleAddTask(task) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.concat({
                id: prevState.numTasks + 1,
                text: prevState.taskValue,
                completed: false,
            });

            return {
                taskValue: '',
                title: prevState.title,
                numTasks: prevState.numTasks + 1,
                todos: updatedTodos,
                addActive: prevState.addActive,
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    displayNewTask() {
        this.setState(prevState => {
            return {
                addActive: !prevState.addActive,
            }
        })
    }

    render() {
        const todoList = this.state.todos.map(task => 
            <TodoItem 
                key={task.id} 
                task={task} 
                handleChange={this.handleComplete} 
            />);

        return (
            <Spring
                from={{
                    opacity: 0,
                }}
                to={{
                    opacity: 1,
                }}>
                {enter => 
                <div style={enter} className="task-list">

                    <div className="title">
                        {this.state.editTitle ? 
                            <form 
                                id="list-title"
                                name="task"
                                className="input-form" 
                                onSubmit={this.handleSubmit} >
                                <input 
                                    type="text" 
                                    placeholder="Enter new title..." 
                                    name="titleValue" 
                                    maxLength="15"
                                    onChange={this.handleChangeValue}  
                                    value={this.state.titleValue} />
                                <button 
                                    type="submit" 
                                    value="Submit" 
                                    onClick={this.handleEditTitle}>
                                    <FontAwesome
                                        name="check"
                                    />
                                </button>
                            </form>
                            :
                            <h3>{this.state.title}</h3>
                        }
                        <button onClick={this.willEditTitle}>
                            <FontAwesome name="edit" id="editIcon" />
                        </button>
                    </div>

                    {todoList}
                    
                    {this.state.addActive ? 
                        <form 
                            id="task-form"
                            name="task"
                            className="input-form" 
                            onSubmit={this.handleSubmit} >
                            <input 
                                type="text" 
                                placeholder="Enter new task..." 
                                name="taskValue" 
                                onChange={this.handleChangeValue}  
                                value={this.state.taskValue} />
                            <button 
                                type="submit" 
                                value="Submit" 
                                onClick={() => {
                                    this.handleAddTask();
                                    this.displayNewTask();}}>
                                <FontAwesome
                                    name="check"
                                />
                            </button>
                        </form>
                        :
                        null
                    }
                    <button className="add-task" onClick={this.displayNewTask}>+ New Task</button>
                </div>
                }
                </Spring>
        );
    }
}
