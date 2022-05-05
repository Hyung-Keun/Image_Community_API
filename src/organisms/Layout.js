//import pakages
import React from "react";

//import components
import {Grid, Image, Text} from "../elements";



const Layout = (props) => {
    
    const {layoutOption}= props;
   
    if(layoutOption === "one"){
        return (
            <React.Fragment>
            <Grid padding='80px'>
              <Text>{props.contents}</Text>
            </Grid>
            
            <Grid isFlex padding='80px'> 
              <Text bold>좋아요 {props.likeCount}개</Text>
            </Grid>
            <Grid>
              <Image shape='rectangle' src={props.imagePath} />
            </Grid>
          </React.Fragment>
        )
    }
    if(layoutOption === "two"){
        return (
            <React.Fragment>
            <Grid isFlex>
              <Grid>
                <Image shape='rectangle' src={props.imagePath}/>
              </Grid>
              <Grid padding='80px'>
                <Text>{props.contents}</Text>
              </Grid>
            </Grid>
            <Grid isFlex padding='80px'>
              <Text bold>좋아요 {props.likeCount}개</Text>
            </Grid>
          </React.Fragment>
        )
    }
    if(layoutOption === "three"){
        return (
            <React.Fragment>
            <Grid isFlex>
              <Grid padding='80px'>
                <Text>{props.contents}</Text>
              </Grid>
              <Grid>
                <Image shape='rectangle' src={props.imagePath}/>
              </Grid>
            </Grid>
            <Grid isFlex padding='80px'>
              <Text bold>좋아요 {props.likeCount}개</Text>
            </Grid>
          </React.Fragment>
        )
    }

  
}
export default Layout;