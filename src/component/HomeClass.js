import React, { Component } from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom'
//import image
import Pokeball from '../pokeball.png'
import { connect } from 'react-redux'


class HomeClass extends Component {

    // state = {
    //   posts : []
    // }
    //here we are going to grab a data.for this import axios
    // componentDidMount(){
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then( res  => {
    //             console.log(res.data)
    //             this.setState({
    //               //for only 10 posts data;
    //               posts : res.data.slice(0,10)
    //             })
    //         })

    // }
  render() {
    
    // const posts = this.state.posts;
    //destructuring posts
    console.log(this.props.posts);
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map(post => {
        return(
            <div className = "post card" key = {post.id}>
              <img src = { Pokeball }  alt = "A pokeball"/>
               <div className = "card-content">
                <Link to = {'/' + post.id}>
                  <span className = "card-title">{post.title}</span>
                </Link>
                  <p>{post.body}</p>
               </div>
            </div>
        )
      })
    ) : (
      <div className = "center">No posts Yet....</div>
    )
    return (
        <div className = "container">
          <h4 className = "center">Home</h4>
          {postList}
        </div>
        
      )
  }
}


const mapStateToProps = (state) => {

  return {
    posts : state.posts
  }
}

// const  mapDispatchToProps = (dispatch) => {

//   return { 
//     deletePost : (id) => { dispatch({type : 'DELETE_POST' , id : id }) }
//   }
  
// };

export default connect(mapStateToProps)(HomeClass)
