//impport pakages
import React from "react";
//import componenets
import styled from "styled-components"

const Button = ({text, margin, _onClick, isFloat}) => {
    if(isFloat){
        return(
            <React.Fragment>
                <FloatButton onClick = {_onClick}>{text}</FloatButton>
            </React.Fragment>
        )
    }  
    const styles = {
        margin: margin
    }
    return (
        <React.Fragment>
            <ElButton {...styles} onClick={_onClick}>{text}</ElButton>
        </React.Fragment>
    )
}

Button.defaultProps = {
    text: "텍스트",
    _onClick: () => {}
}

const ElButton = styled.button`
    width: 100%;
    background-color: #212121;
    color: #ffffff;
    padding: 12px 0px;
    margin: ${(props) => props.margin};
    box-sizing: border-box;
    border: none;
    isFloat: false;
`;

const FloatButton = styled.button`
    width: 100px;
    height: 100px;
    background-color: #212121;
    color: white;
    box-sizing: border-box;
    font-size: 30px;
    font-weight: 800;
    position: fixed;
    bottom: 5%;
    right: 5%;
    border: none;
    text-align: center;
    border-radius: 30px;
    cursor: pointer;
`;
export default Button;