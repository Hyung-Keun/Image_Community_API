//import Pakages
import React from "react";

//import components
import Header from "../organisms/Header";
import PostWrite from "../organisms/PostWrite";

const PostWriteTemp = (props) => {
    return(
        <React.Fragment>
            <Header></Header>
            <PostWrite></PostWrite>
        </React.Fragment>
    )
}
export default PostWriteTemp;