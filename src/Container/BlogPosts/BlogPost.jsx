import React, { Fragment } from 'react'
import { Component } from 'react';
import Post from '../../Component/Posts/Post';
import './BlogPost.css';
import axios from 'axios';
class BlogPost extends Component {
    state={
        post:[]
    }
    getPostAPI=()=>{
        axios.get('http://localhost:3004/posts')
        .then((res)=>{
          this.setState({
              post:res.data
          })
        })
    }
    handleRemove=(data)=>{
       
        axios.delete('http://localhost:3004/posts/'+data)
        .then(this.getPostAPI())
    }
    componentDidMount(){
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(json => {
        //     this.setState({
        //         post:json
        //     })
        // })
        // axios.get('http://localhost:3004/posts')
        // .then((res)=>{
        //   this.setState({
        //       post:res.data
        //   })
        // })
        this.getPostAPI();
    }
    render() {
        return (
            <Fragment>
                <p className="section-title">Blog post</p>
                {
                    this.state.post.map(post=>{
                        return <Post key={post.id} data={post} remove={(valId)=>this.handleRemove(valId)} />
                    })

                }
               
            </Fragment>

        )
    }


}

export default BlogPost;