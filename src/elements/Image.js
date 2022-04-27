//import pakages
import React from "react";
import styled from "styled-components";

//import components
import Grid from "./Grid";

const Image = ({shape, src, size}) => {
    const styles = {
        src: src,
        size: size, 
    }
    
    if(shape === "circle"){
        return (
            <ImageCircle {...styles}></ImageCircle>
        )
    }
    if(shape === "rectangle"){
        return (
            <AspectOutter>
                <AspectInner {...styles}></AspectInner>
            </AspectOutter>
        );
    }
    
    return(
        <React.Fragment>
            
         </React.Fragment>
    );
}


Image.defaultProps = {
    shape: "circle",
    src: "http://img.danawa.com/prod_img/500000/100/778/img/12778100_1.jpg?shrink=330:330&_v=20201126171610",
    size: 36,
  };
  
  const AspectOutter = styled.div`
      width: 100%;
      min-width: 250px;
  `;
  
  const AspectInner = styled.div`
      position: relative;
      padding-top: 75%;
      overflow: hidden;
      background-image: url("${(props) => props.src}");
      background-size: cover;
  `;
  
  const ImageCircle = styled.div`
      --size: ${(props) => props.size}px;
      width: var(--size);
      height: var(--size);
      border-radius: var(--size);
  
      background-image: url("${(props) => props.src}");
      background-size: cover;
      margin: 4px;
  `;

export default Image;