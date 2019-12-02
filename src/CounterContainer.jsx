import React, {Component} from 'react';
import { connect } from "react-redux";

class CounterContainer extends Component{
render() {
    const {click, dispatch} = this.props;

    return (
        <div>
    <p id="render-store">{click}</p>
    <button onClick={() => dispatch ({type:'ADD'})}>+</button>
    <button onClick={() => dispatch ({type:'REMOVE'})}>-</button>
    <button onClick={() => dispatch ({type:'ADD_10'})}>+10</button>
    <button onClick={() => dispatch ({type:'REMOVE_10'})}>-10</button>
    <button onClick={() => dispatch ({type:'DELETE'})}>Reset</button> 
        </div>
    )
}
}

const mapStateToProps = state => ({
  click: state
});


export default connect(mapStateToProps)(CounterContainer);
