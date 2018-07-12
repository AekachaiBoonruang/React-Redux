import React from 'react';
import TodoComponent from '../../components/Todo'

    function Todo(props) {

            return (
                <div>
                    <TodoComponent value={props.value} task={props.task}
                                   handleChange={props.handleChange}
                                   handleSubmit={props.handleSubmit}/>
                </div>
            );
        }

export default Todo;
