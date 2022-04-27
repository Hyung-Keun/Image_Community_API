//import Pakages
import React from "react";

//import components
import styled from "styled-components";

const Text = ({bold, color, size, margin, children}) => {
    const styles = { bold: bold, color: color, size: size, margin: margin };
    return(
        <P {...styles}>
            {children}
        </P>
    )
}
Text.defaultProps = {
    bold: false,
    color: "#222831",
    size: "14px",
    margin: false,
    children: null,
}

const P = styled.div`
    color: ${(props) => props.color};
    font-size: ${(props) => props.size};
    font-weight: ${(props) => (props.bold? "600" : "400")};
    ${(props) => (props.margin? `margin: ${props.margin};` : '')}
`; 

export default Text;
