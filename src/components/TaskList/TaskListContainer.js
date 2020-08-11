import React from 'react';
import '../../css/taskList.css';
import TaskListComponent from './TaskListComponent';


export default class TaskListContainer extends React.Component {
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
    }

    handleComplete = (id) => {
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

    handleChangeValue = (event) => {
        const { name, value } = event.target
        this.setState({ 
            [name]: value
        });
    }

    willEditTitle = () => {
        this.setState({
            editTitle: true,
        });
    }

    handleEditTitle = () => {
        this.setState(prevState => {
            return {
                title: prevState.titleValue,
                editTitle: false,
            }
        });
    }


    handleAddTask = (task) => {
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

    handleSubmit = (event) => {
        event.preventDefault();
    }

    displayNewTask = () => {
        this.setState(prevState => {
            return {
                addActive: !prevState.addActive,
            }
        })
    }

    render() {
        return (
            <TaskListComponent 
                handleComplete={this.handleComplete}
                handleChangeValue={this.handleChangeValue}
                willEditTitle={this.willEditTitle}
                handleEditTitle={this.handleEditTitle}
                handleAddTask={this.handleAddTask}
                handleSubmit={this.handleSubmit}
                displayNewTask={this.displayNewTask}
                data={this.state}
            />
        );
    }
}
