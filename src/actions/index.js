import jsonPlaceholder from "../apis/jsonPlaceholder"

//because of using async await the code below doesnt return js plain object. so oour acttion creator is not working as expected
export const fetchPost = async() => {
  //bad approach || bad code
   const result = await jsonPlaceholder.get('/posts')
  return {
    type: 'FETCH_POSTS',
    payload: result
  }
}

// make sure we wire this up with the component and call it any time our componnent is rendered on the screen
// if we export exactly the functtion loike above we need to desctuctre it in a different componnent