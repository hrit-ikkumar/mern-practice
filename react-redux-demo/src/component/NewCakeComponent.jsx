import React, {useState} from 'react'
// import { buyCake } from './redux/cake/cakeActions';
import {buyCake} from '../redux';
import {connect} from 'react-redux';

function NewCakeComponent(props) {
  const [number, setNumber] = useState(1);
    return (
        <div>
            <h2>Number of Cake: {props.numOfCake}</h2>
            <input type='text' value = {number} onChange={e => setNumber(e.target.value)} />
            <button onClick={() => props.buyCake(number)}>Buy Num of Cake</button>
        </div>
    )
}
const mapStateToProps = state => {
    return {
      numOfCake: state.cake.numOfCake
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        // buyCake will dispatch buyCake action
      buyCake: (number) => dispatch(buyCake(number))
    }
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(NewCakeComponent);
