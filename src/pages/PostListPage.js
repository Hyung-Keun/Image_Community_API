//import pakages
import React from "react";
import {useDispatch} from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

//import components
import PostTemp from "../templates/PostTemp";
import { history } from "../redux/configureStore";
import Permit from "../shared/Permit";
import {Button} from "../elements"


const PostListPage = (props) => {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(postActions.setPostDB())
    }, [])

    return(
        <React.Fragment>
            <PostTemp/>
            <Permit>
                <Button text = "버튼" isFloat _onClick={() => {
                    history.push('/postwrite')
                }}></Button>
            </Permit>
        </React.Fragment>
    )
}
export default PostListPage;