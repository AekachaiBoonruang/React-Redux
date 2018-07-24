import React, {Component} from 'react';
import Todo from '../Todo';
import Showlist from '../Showlist';

class Result extends Component {
    state = {
        value: '',
        task: [],
        done: false
    };

    handleChange = (event) => {
        this.setState({value: event.target.value})
    };

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            task: [...this.state.task, {
                id: new Date(),
                value: this.state.value
                }
            ],
            value: ''
        })
    };

    handleDone = (deleteId) => {
        this.setState({
            task: this.state.task.filter((item) => {
                 return item.id !== deleteId;
            })
        })

    };

    render() {
        const {value, task, done} = this.state;
        return (
            <div className="App">
                <Todo value={value} task={task} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                <Showlist task={task} value={value} done={done} handleDone={this.handleDone} />
            </div>
        );
    }
}

export default Result;
