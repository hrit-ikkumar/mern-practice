import {BUY_CAKE} from './cakeActionType';

export const buyCake = (number) => {
    return {
        type: BUY_CAKE,
        payload: number
    }
}