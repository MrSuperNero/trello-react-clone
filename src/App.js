import React from 'react';
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Header from './components/Header';
import TaskList from './components/TaskList';
import * as Lists from './data/todoListData';    // fake data
// import FontAwesome from 'react-fontawesome';
import './css/app.css'


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            lists: [],
            addList: false,
        }
        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.willAddList = this.willAddList.bind(this);
        this.handleAddList = this.handleAddList.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // load fake data
    UNSAFE_componentWillMount() {
        const taskLists = [];

        for (const key in Lists) {
            taskLists.push(Lists[key]);
        }

        this.setState({
            lists: taskLists,
        });
    }

    handleChangeValue(event) {
        this.setState({ value: event.target.value });
    }

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
            });

            return ({
                value: '',
                // lists: (prevState.value !== '' ? addedEmpty : prevState.lists),
                lists: addedEmpty,
                addList: false,
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
                                    title={list.name} />); 


        return (
            <div>
                <Header handleAdd={this.handleAddList}/>
            
                {/* {this.state.addList ? 
                    <form className="new-list" onSubmit={this.handleSubmit}>
                        <input 
                            type="text" 
                            name="list" 
                            maxLength="15" 
                            placeholder="Enter name of new list (15 chars)" 
                            onChange={this.handleChangeValue}/>

                        <button 
                            type="submit" 
                            value="Submit" 
                            onClick={this.handleAddList}>

                            <FontAwesome
                            name="check"/>

                        </button>
                    </form> 
                    :
                    null
                } */}

                <div className="bkgrnd">
                    <div className="task-view">
                        {outputLists}
                    </div>
                </div>
            </div>
        )
    }
}