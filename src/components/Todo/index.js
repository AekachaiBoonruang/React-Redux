import React from 'react';

function Todo(props) {
    return (
        <div>
            <p> Todo list </p>
            <div>
                <form onSubmit={props.handleSubmit}>
                    <label>
                        Task :
                        <input type="text" name="name"  value={props.value} onChange={props.handleChange}/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}

export default Todo;
