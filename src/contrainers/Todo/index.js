import React from 'react';
import TodoComponent from '../../components/Todo'

    function Todo({value, task, handleChange, handleSubmit}) {

            return (
                <div>
                    <TodoComponent value={value} task={task}
                                   handleChange={handleChange}
                                   handleSubmit={handleSubmit}/>
                </div>
            );
        }

export default Todo;
