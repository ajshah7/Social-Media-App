import { USER_FEEDS} from '../actions/Types';

export const feeds = (image,name, post) => (dispatch) => {
   

    const feedData = {
        image:image,
        name: name,
        post: post,
    }
    console.log(feedData);

    dispatch({ type: USER_FEEDS, payload: feedData });
}



