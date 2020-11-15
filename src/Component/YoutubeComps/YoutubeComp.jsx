import React from 'react';
import './YoutubeComp.css'

const YoutubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://i.ytimg.com/vi/CZKcmzNs5Jw/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAuQScvapeMf16Z5uwj-b356t7dZw"></img>
                <p className="time"> {props.time} </p>
            </div>
    <p className="title">{props.title}</p>
    <p className="desc">{props.desc}</p>
        </div>

    )
}

YoutubeComp.defaultProps={
    time:"00:00",
    title: "No - Title",
    desc:"0x ditonton"
}

export default YoutubeComp;