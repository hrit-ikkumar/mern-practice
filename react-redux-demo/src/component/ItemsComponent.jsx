import React from 'react'
import {connect} from 'react-redux';
import { buyCake, buyIceCream } from '../redux';

function ItemsComponent(props) {
    return (
        <div>
            <h3>Items: {props.item}</h3>
            <button onClick={props.buyItem}> Buy Item</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => 
{
    const itemState = ownProps.cake
    ? state.cake.numOfCake
    : state.iceCream.numOfIceCream;
    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const itemState = ownProps.cake
    ? () => dispatch(buyCake(1))
    : () => dispatch(buyIceCream());
    return {
        buyItem : itemState
    }
}

// It will not subscribe to the store
// export default connect(null,mapDispatchToProps)(ItemsComponent);
export default connect(mapStateToProps,mapDispatchToProps)(ItemsComponent);
