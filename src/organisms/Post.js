//impport pakages
import React from "react";
//import componenets
import {Grid, Image, Text} from "../elements";


const Post = (props) => {
    return (
        <React.Fragment>
        <Grid>

          <Grid is_flex padding="16px">

            <Grid is_flex width="auto">
              <Image shape="circle" src={props.imagePath} />
              <Text bold>{props.nickname}</Text>
            </Grid>

            <Grid is_flex width="auto">
              <Text bold>{props.modifiedAt}</Text>
            </Grid>

          </Grid>

          <Grid padding="16px">
            <Text>{props.contents}</Text>
          </Grid>

          <Grid>
            <Image shape="rectangle" src={props.imagePath} />
          </Grid>

          <Grid padding="16px">
            <Text bold>좋아요 {props.likeCount}개</Text>
          </Grid>
          
        </Grid>
        
      </React.Fragment>
    );
}
Post.defaultProps = {
    user_info: {
        user_name: "hyungkeun",
        user_profile: "http://img.danawa.com/prod_img/500000/100/778/img/12778100_1.jpg?shrink=330:330&_v=20201126171610",
      },
      image_url: "http://img.danawa.com/prod_img/500000/100/778/img/12778100_1.jpg?shrink=330:330&_v=20201126171610",
      contents: "!!!!!!!!!!",
      comment_cnt: 10,
      insert_dt: "2021-02-27 10:00:00",
}

export default Post;

