import jsonPlaceholder from "../api/jsonPlaceholder";
import _ from 'lodash'
export const fetchPostAndUSer=()=>async (dispatch,getState) =>{
    //to dispatch each function called within a action creator
    await dispatch(fetchPosts());
    const uniqueUserIds=_.uniq(_.map(getState().posts,'userId'))
        uniqueUserIds.forEach((id)=>dispatch(fetchUser(id)))
}
export const fetchPosts = () => async dispatch =>{
        //dispatch is used to send manually a function to redux thunk to manage async task
        const res =  await jsonPlaceholder.get('/posts')
        dispatch({type:'FETCH_POSTS',payload:res.data});

}
 const fetchUser = id =>async dispatch=>{
        const response = await jsonPlaceholder.get(`/users/${id}`)
        dispatch({type:'FETCH_USER',payload:response.data});
    } 

