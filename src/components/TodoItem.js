import React from 'react'
import {useSpring, animated} from 'react-spring'

export default function TodoItem(props) {
    const completedItem = {
        textDecoration: "line-through",
        color: "#bbbbbb",
    }

    const enter = useSpring({opacity: 1, from: {opacity: 0}})

    return (
        <animated.div style={enter} className="task">
            <input 
                type="checkbox" 
                checked={props.task.completed} 
                onChange={() => props.handleChange(props.task.id)}
            /> 
            <p style={props.task.completed ? completedItem : null}>{props.task.text}</p>
        </animated.div>
    )
}

