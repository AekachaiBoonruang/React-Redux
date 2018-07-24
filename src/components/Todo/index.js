import React from 'react';

function Todo({value, handleSubmit, handleChange}) {
    return (
        <div>
            <p> Todo list </p>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        Task :
                        <input type="text" name="name"  value={value} onChange={handleChange}/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}

export default Todo;
