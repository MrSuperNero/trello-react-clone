import React from 'react'

export default function TodoItem(props) {
    const completedItem = {
        textDecoration: "line-through",
        color: "#bbbbbb",
    }

    return (
        <div className="task">
            <input 
                type="checkbox" 
                checked={props.task.completed} 
                onChange={() => props.handleChange(props.task.id)}
            /> 
            <p style={props.task.completed ? completedItem : null}>{props.task.text}</p>
        </div>
    )
}

