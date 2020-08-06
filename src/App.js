import React from 'react';
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Header from './components/Header';
import TaskList from './components/TaskList';
import * as Lists from './data/todoListData';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: [],
        }
    }

    componentWillMount() {
        const taskLists = [];

        for (const key in Lists) {
            taskLists.push(Lists[key]);
            console.log(Lists[key]);
        }

        this.setState({
            lists: taskLists,
        });
        
    }


    render() {
        const outputLists = this
                            .state
                            .lists
                            .map
                            (list => 
                                <TaskList 
                                    key={list.name} 
                                    numTasks={list.numTasks} 
                                    data={list.data} 
                                    title={list.name} />); // array of components


        return (
            <div>
                <Header />
                <div className="bkgrnd">
                    <div className="task-view">
                        {outputLists}
                    </div>
                </div>
            </div>
        )
    }
}