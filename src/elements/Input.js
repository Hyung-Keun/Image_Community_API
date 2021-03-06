//import pakages
import React from "react";
//import components
import styled from "styled-components";
import Grid from "./Grid";
import Text from "./Text";

const Input = ({label, placeholder, _onChange}) => {   
    return (
        <React.Fragment>
          <Grid>
            <Text margin="0px">{label}</Text>
            <ElInput placeholder={placeholder} onChange={_onChange} />
          </Grid>
        </React.Fragment>
      );
}

Input.defaultProps = {
    label: '텍스트',
    placeholder: '텍스트를 입력해주세요.',
    _onChange: () => {}
}

const ElInput = styled.input`
    border: 1px solid #212121;
    width: 100%;
    padding: 12px 4px;
    box-sizing: border-box;
`
export default Input;