import React from "react";
import {connect} from "react-redux"
import {INCaction} from './actions'
import {DECaction} from './actions'


const App = ({local_variable,INCaction,DECaction}) => {
  return (
    <div>
      <center>
        <h1>{local_variable}</h1>
        <button onClick={()=>INCaction(5)}>Increment</button>
        <button onClick={DECaction}> Decrement</button>
      </center>
    </div>
  );
};

const mapStateToProps=state=>({
local_variable:state
})
export default connect(mapStateToProps,{INCaction,DECaction}) (App);
