//import pakages
import React from "react";
import { useSelector } from "react-redux";
//import components
import Header from "../organisms/Header";
import Post from "../organisms/Post";

const PostTemp = () => {
    const postList = useSelector((state) => (state.post.list))
    console.log(postList?.data)
    console.log(postList)
    
    return(
        <React.Fragment>
            <Header></Header>
            
            {postList && postList.map((p, idx) => {
                return <Post key={p.postId} {...p}/>
            })}
           
            <Post></Post>
        </React.Fragment>

    )
}

export default PostTemp;