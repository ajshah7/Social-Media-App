import { USER_FEEDS } from "../actions/Types";
import { v4 as uuidv4 } from "uuid";
export const feeds = (uuid, image, name, post, time) => (dispatch) => {
  const feedData = {
    uuid: uuid,
    postID: uuidv4(),
    image: image,
    name: name,
    post: post,
    time: time,
  };
  console.log(feedData);

  dispatch({ type: USER_FEEDS, payload: feedData });
};
