import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component {
    state = {
        posts : null
    }
    componentDidMount(){
        console.log(this.props);
        let id = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        .then( res  => {
            this.setState({
              //for only 10 posts data;
              posts : res.data
            })
            console.log(res.data)
        })
        
    }


  render() {
    const post = this.state.posts ? (
        <div className="post">
            <h4 className="center">{this.state.posts.title}</h4>
            <p>{this.state.posts.body}</p>
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

export default Post
