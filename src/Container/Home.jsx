import React, { Component } from 'react'
import BlogPost from './BlogPosts/BlogPost';
// import YoutubeComp from '../Component/YoutubeComps/YoutubeComp';
// import Product from '../Container/Products/product'
//import LifeCycleComp from './LifeCycleComp/LifeCycleComp';
class Home extends Component {
    render() {
        return (
            <div>
                {/* <p>Youtube Components</p>
                <hr></hr>
                <YoutubeComp time="7.12" title="Tutorial React JS - Bagian 1" desc="1x ditonton" />
                <YoutubeComp time="8.12" title="Tutorial React JS - Bagian 2" />
                <YoutubeComp desc="5x ditonton"/> */}

                {/* <p>Counter</p>
                <hr></hr>
                <Product/> */}
                {/* <p>Lifecycle Component</p>
                <hr></hr>
                <LifeCycleComp/> */}
            {/* <p>Blog Post</p>
            <hr></hr> */}
            <BlogPost />
            </div>
          

        )
    }
}

export default Home;