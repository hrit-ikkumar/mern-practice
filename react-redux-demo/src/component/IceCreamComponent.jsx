import React from 'react'
// import { buyCake } from './redux/cake/cakeActions';
import {buyIceCream} from '../redux';
import {connect} from 'react-redux';

function IceCreamComponent(props) {
    return (
        <div>
            <h2>Number of IceCream: {props.numOfIceCream}</h2>
            <button onClick={props.buyIceCream}>Buy IceCream</button>
        </div>
    )
}
const mapStateToProps = state => {
    return {
      numOfIceCream: state.iceCream.numOfIceCream
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        // buyCake will dispatch buyCake action
      buyIceCream: () => dispatch(buyIceCream())
    }
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(IceCreamComponent);
