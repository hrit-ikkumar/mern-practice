import React from 'react'
import {useSelector, useDispatch} from 'react-redux'; 
import {buyCake} from '../redux';

function HooksCakeComponent() {
    const numOfCake = useSelector(state => state.cake.numOfCake);
    const dispatch = useDispatch();
    return (
        <div>   
            <h2>No of cakes: {numOfCake}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeComponent
