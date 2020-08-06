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
        }

        this.setState({
            lists: taskLists,
        });
    }

    // // figure out way to add new tasklist if empty one at end is filled up

    // componentWillUnmount() {

    //     if (!this.state.emptyPresent) {
    //         this.setState(prevState => {
    //             const addedEmpty = prevState.lists.concat({
    //                 name: "Empty List",
    //                 numTasks: 0,
    //                 data: [],
    //             });

    //             return ({
    //                 emptyPresent: true,
    //                 lists: addedEmpty,
    //             })
    //         })
    //     }

    //     if (this.state.lists[this.state.lists.length - 1].data !== []) {
    //         this.setState({emptyPresent: false});
    //     }
    // }


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