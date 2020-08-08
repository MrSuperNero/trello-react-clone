import React from 'react';
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Header from './components/Header';
import TaskList from './components/TaskList';
// import * as Lists from './data/todoListData';    // fake data
// import FontAwesome from 'react-fontawesome';
import './css/app.css'


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: [],
            addList: false,
        }
        this.willAddList = this.willAddList.bind(this);
        this.handleAddList = this.handleAddList.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // // load fake data
    // UNSAFE_componentWillMount() {
    //     const taskLists = [];

    //     for (const key in Lists) {
    //         taskLists.push(Lists[key]);
    //     }

    //     this.setState({
    //         lists: taskLists,
    //     });
    // }

    willAddList() {
        this.setState({
            addList: true,
        })
    }

    handleAddList() {
        this.setState(prevState => {
            const addedEmpty = prevState.lists.concat({
                name: prevState.value,
                numTasks: 0,
                data: [],
                editTitle: true,
            });

            return ({
                value: '',
                lists: addedEmpty,
                addList: true,
            })
        });
    }

    handleSubmit(event) {
        event.preventDefault();
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
                                    title={list.name}
                                    editTitle={list.editTitle} />); 


        return (
            <div>
                <Header handleAdd={this.handleAddList}/>

                <div className="bkgrnd">
                    <div className="task-view">
                        {outputLists}
                    </div>
                </div>
            </div>
        )
    }
}