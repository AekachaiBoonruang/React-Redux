import React from 'react'
import { increment, decrement } from  '../../reducers/action'
import { connect } from 'react-redux'

const App = ({message, counter, increment, decrement}) => (
    <div className="container">
        <div className="columns column is-12">
            <h1>Counter : {counter}</h1>
        </div>

        <div className="buttons">
            <button onClick={() => increment(1)} className="button is-primary">
                +1
            </button>
            <button onClick={() => increment(2)} className="button is-link">
                +2
            </button>
            <button onClick={() => increment(3)} className="button is-info">
                +3
            </button>
        </div>

        <div className="buttons">
            <button onClick={() => decrement(1)} className="button is-primary">
                -1
            </button>
            <button onClick={() => decrement(2)} className="button is-link">
                -2
            </button>
            <button onClick={() => decrement(3)} className="button is-info">
                -3
            </button>
        </div>
    </div>
)

const mapStateToProps = function(state) {
    return {
        counter: state.counters || 0
    }
}

const mapDispatchToProps = {
        decrement: decrement,
        increment: increment
}

const AppWithConnect = connect(mapStateToProps, mapDispatchToProps)(App)
export default AppWithConnect