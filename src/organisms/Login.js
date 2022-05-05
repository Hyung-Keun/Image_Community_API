//import pakages
import React from "react";
import {useDispatch} from "react-redux"
import { actionCreators as userActions } from "../redux/modules/user";
//import components
import { Button, Grid, Input, Text } from "../elements";

const Login = (props) => {

  const [id, setId] = React.useState('');
  const [pwd, setPwd] = React.useState('');
  const dispatch = useDispatch();
  
  const changeId = (e) => {
      setId(e.target.value);
  }

  const changePwd = (e) => {
      setPwd(e.target.value);
  }

  const login = () => {
      dispatch(userActions.loginAction({username: id, password: pwd }))
  }
  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="40px" bold>
          LOGIN
        </Text>
        <Grid padding="16px 0px">
          <Input
            value={id}
            label="LOGIN"
            placeholder="Please enter your ID"
            _onChange={(e) => {
              console.log("아이디 입력했어!");
              changeId(e);
              console.log(id)
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            value = {pwd}
            label="PASSWORD"
            placeholder="Please enter your PW"
            _onChange={(e) => {
              console.log("패스워드 입력했어!");
              changePwd(e);
            }}
          />
        </Grid>

        <Button
          text="LOGIN"
          _onClick={() => {
            console.log("로그인 했어!");
            login();
          }}
        ></Button>
      </Grid>
    </React.Fragment>
  );
};
Login.defaultProps = {};

export default Login;
