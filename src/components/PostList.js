import React from 'react'
//to wire our action componnent up to the screen we need too import comnnection
import {connect} from 'react-redux'
import {fetchPost} from '../actions'
class PostList extends React.Component {
  componentDidMount(){
    this.props.fetchPost();
  }
  render() {
    return <div>Post List</div>
  }
}

export default connect(null, {fetchPost: fetchPost} )(PostList);
//first argument of connect map state props, secont argumentt action creator