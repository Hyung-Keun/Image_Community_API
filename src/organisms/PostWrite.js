//import pakages
import React, { useState } from "react";
import {Grid, Text, Button, Input, Image} from "../elements";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

//import components
import { getCookie } from "../shared/Cookie";
import Layout from "./Layout";



const PostWrite = (props) => {
    
    const dispatch = useDispatch()
    const [contents, setContents] = React.useState('');
    const [layoutOption, setlayoutOption] = useState("one");
    const [imagePath, setImagepath] = React.useState('http://img.danawa.com/prod_img/500000/100/778/img/12778100_1.jpg?shrink=330:330&_v=20201126171610');
    


    const fileInput = React.useRef();
  
    const selectFile = (e) => {
      // e.target은 input이죠!
      // input이 가진 files 객체를 살펴봅시다.
      console.log(e.target.files);
      // 선택한 파일이 어떻게 저장되어 있나 봅시다.
      console.log(e.target.files[0]);

      // ref로도 확인해봅시다. :)
      console.log(fileInput.current.files[0]);

      const reader = new FileReader();
      const file = fileInput.current.files[0];

      reader.readAsDataURL(file)
      reader.onloadend = () => {
        setImagepath(reader.result)
        console.log(reader.result)
      }
    };

    const token = getCookie("token")
    const addPost = () => {
        dispatch(postActions.addPostDB({contents: contents,
                                        layout: layoutOption,
                                        imagePath: imagePath}, token))
    }
     
    const onLayoutOne = () => {
        setlayoutOption("one")
    }
    const onLayoutTwo = () => {
        setlayoutOption("two")
    }
    const onLayoutThree = () => {
        setlayoutOption("three")
    }
    console.log(layoutOption)
    return (
      <React.Fragment>
        <Grid padding="16px">
          <Text margin="0px" size="36px" bold>
            게시글 작성
          </Text>
        </Grid>
        <Grid>
            <Button margin="0px 0px 10px 0px" text= "Option One." _onClick={onLayoutOne}></Button>
            <Button margin="0px 0px 10px 0px" text= "Option Two." _onClick={onLayoutTwo}></Button>
            <Button margin="0px 0px 10px 0px" text= "Option Three." _onClick={onLayoutThree}></Button>
            <input type="file" ref={fileInput} onChange={selectFile} />
        </Grid>
        <Layout layoutOption = {layoutOption} imagePath = {imagePath}></Layout>

        <Grid padding="16px">
          <Input value={contents} label="게시글 내용" placeholder="게시글 작성" multiLine _onChange={(e) => {
            setContents(e.target.value)
          }}/>
        </Grid>

        <Grid padding="16px">
          <Button text="게시글 작성" _onClick={addPost}></Button>
        </Grid>
      </React.Fragment>
    );
}
PostWrite.defaultProps = {


}

export default PostWrite;