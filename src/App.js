import React from 'react';
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Header from './components/Header';
import TaskList from './components/TaskList';
import * as Lists from './data/todoListData';

export default function App() {

    const taskLists = []; // array of components

    // create list of components of data from each list in todoListData
    for (const key in Lists) {
        taskLists.push(<TaskList 
                            key={key} 
                            numTasks={Lists[key].numTasks} 
                            data={Lists[key].data} 
                            title={Lists[key].name} />);
    }

    return (
        <div>
            <Header />
            <div className="bkgrnd">
                <div className="task-view">
                    {taskLists}
                </div>
            </div>
        </div>
    )
}