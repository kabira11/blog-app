import React, { Component } from 'react'
// import axios from 'axios'
import { connect } from 'react-redux'

class Post extends Component {
    // state = {
    //     posts : null
    // }
    // componentDidMount(){
    //     console.log(this.props);
    //     let id = this.props.match.params.post_id;
    //     axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    //     .then( res  => {
    //         this.setState({
    //           //for only 10 posts data;
    //           posts : res.data
    //         })
    //         console.log(res.data)
    //     })
        
    // }

    handleClick = () => {
        console.log("here in click delete")
        this.props.deletePost(this.props.post.id)
        //after deleting post redirection on hone page
        this.props.history.push('/');
    }

  render() {
      console.log("here post");
      console.log(this.props)
    const post = this.props.post ? (
        <div className="post">
            <h4 className="center">{this.props.post.title}</h4>
            <p>{this.props.post.body}</p>
            <div className = "center">
                <button className = " btn grey" onClick={this.handleClick}>
                    Delete post
                </button>
            </div>
        </div>
    ) : (
        <div className = "center">Loading Posts....</div>
    )
    return (
        <div className="container">
            {post}
        </div>
    )
  }
}

const mapStateToProps = (state , ownProps) => {

console.log("HERE1")
console.log(state.posts)
console.log(ownProps.match.params.post_id)

    let id = ownProps.match.params.post_id;

    return {
      post : state.posts.find(post => post.id == id)
    }
  }


  const  mapDispatchToProps = (dispatch) => {
    console.log("in mapDispatchToPorops")
    return { 
      deletePost : (id) => { dispatch({type : 'DELETE_POST' , id : id }) }
    }
    
  };
  
  export default connect(mapStateToProps , mapDispatchToProps)(Post);

