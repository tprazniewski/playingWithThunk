import jsonPlaceholder from "../apis/jsonPlaceholder"

//because of using async await the code below doesnt return js plain object. so oour acttion creator is not working as expected
export const fetchPost = () => async dispatch => {

  //thunk func
    //in this innner func we dontt need to return any action, if we are returning a function
    // then if we only want to dispatch an action we will insttead cann the dispatch function 
    // manually with the action we would like to dispatch
    const result = await jsonPlaceholder.get('/posts')
    //its optional to return sth from the inner funnction
    dispatch ({
      type: 'FETCH_POSTS',
      payload: result
    })
  
}

export const selectPost = () => {
  return {
    type: 'SELECT_POST'
  }
}
// make sure we wire this up with the component and call it any time our componnent is rendered on the screen
// if we export exactly the functtion loike above we need to desctuctre it in a different componnent