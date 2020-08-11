import React from 'react';
import TodoItem from '../TodoItem';
import FontAwesome from 'react-fontawesome';
import {Spring} from 'react-spring/renderprops';

export default function TaskListComponent(props) {
    const todoList = props.data.todos.map(task => 
        <TodoItem 
            key={task.id} 
            task={task} 
            handleChange={props.handleComplete} 
        />);

    return (
        <Spring
            from={{ opacity: 0, }}
            to={{ opacity: 1, }}>
            {enter => 
                <div style={enter} className="task-list">

                    <div className="title">
                        {props.data.editTitle ? 
                            <form 
                                id="list-title"
                                name="task"
                                className="input-form" 
                                onSubmit={props.handleSubmit} >
                                <input 
                                    type="text" 
                                    placeholder="Enter new title..." 
                                    name="titleValue" 
                                    maxLength="15"
                                    onChange={props.handleChangeValue}  
                                    value={props.data.titleValue} />
                                <button 
                                    type="submit" 
                                    value="Submit" 
                                    onClick={props.handleEditTitle}>
                                    <FontAwesome
                                        name="check"
                                    />
                                </button>
                            </form>
                            :
                            <h3>{props.data.title}</h3>
                        }
                        <button onClick={props.willEditTitle}>
                            <FontAwesome name="edit" id="editIcon" />
                        </button>
                    </div>

                    {todoList}
                    
                    {props.data.addActive ? 
                        <form 
                            id="task-form"
                            name="task"
                            className="input-form" 
                            onSubmit={props.handleSubmit} >
                            <input 
                                type="text" 
                                placeholder="Enter new task..." 
                                name="taskValue" 
                                onChange={props.handleChangeValue}  
                                value={props.data.taskValue} />
                            <button 
                                type="submit" 
                                value="Submit" 
                                onClick={() => {
                                    props.handleAddTask();
                                    props.displayNewTask();}}>
                                <FontAwesome
                                    name="check"
                                />
                            </button>
                        </form>
                        :
                        null
                    }
                    <button className="add-task" onClick={props.displayNewTask}>+ New Task</button>
                </div>
            }
        </Spring>
    );
}