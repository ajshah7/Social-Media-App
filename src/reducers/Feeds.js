import {USER_FEEDS} from '../actions/Types';
import data from "../data";


const initialState =  {

    posts :data.feeds,

};

export default function (state = initialState, action){

    const {
        type, payload
    } = action;

    switch(type) {

        case USER_FEEDS : 
 
            return { ...state, posts: [payload,...state.posts] };
        default :
            return state;
    }
} 