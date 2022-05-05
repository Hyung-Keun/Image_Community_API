//import pakages
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {actionCreators as userActions} from "../redux/modules/user";

//import components
import {Button, Grid, Input, Text} from "../elements"



// {
//   "password": "string",
//   "passwordCheck": "string",
//   "nickname": "string",
//   "username": "string"
// }


const Signup = (props) => {
    // const [userID, setUserID] = useState("");

    
    const dispatch = useDispatch();

    const [userName, setUserName] = useState("");
    const [userPW, setUserPW] = useState("");
    const [userNN, setUserNN] = useState("");
    const [confirmPW, setConPW] = useState("");

    const [userPWError, setUserPWError] = useState(false);
    const [userNNError, setUserNNError] = useState(false);
    const [confirmPWError, setConPWError] = useState(false);


    console.log(userName, userNN, userPW, confirmPW)
    const userDetail = {
      "username": userName,
      "nickname": userNN,
      "password": userPW,
      "passwordCheck": confirmPW,
    }

    const onSubmit = () => {
      if(validation()){
        console.log("nice shot")
        dispatch(userActions.signupDB(userDetail));
        return;
      }else{
        console.log("Bullshit")
        alert("Please check again!")
      }
      //API CALL
      
    }

    const nickName = (e) => {
      const userNNRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,}$/;
      
      if ((!e.target.value || (userNNRegex.test(e.target.value)))){
        setUserNNError(false);
        setUserNN(e.target.value);
        console.log("no error")
      } 
      else{
        setUserNNError(true);
        // setUserNN(e.target.value);
        console.log("yes error")  
      }
    };

    const passWord = (e) => {
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/;
     
      if ((!e.target.value || (passwordRegex.test(e.target.value))) 
      && (((e.target.value).includes(userName))===false) && ((e.target.value) !== userNN)){
        setUserPWError(false);
        console.log("No error");
      }
      else{
        setUserPWError(true);
        console.log("Yes error")
      }

      setUserPW(e.target.value);
    };

    const confirm = (e) => {
      if (userPW === e.target.value){
        console.log("No error!!!!");
        setConPWError(false);
        setConPW(e.target.value);
      }
      else{
        console.log("Yes error");
        setConPWError(true)
        // setConPW(e.target.value);
      // setConPW(e.target.value)
      }
    }

    const validation = () => {
      if(!userName) setUserName(true);
      if(!userNN) setUserNN(true);
      if(!userPW) setUserPW(true);
      if(!confirmPW) setConPW(true);
      

      if(userName && userPW && confirmPW && userNN) return true;
      else return false;
      
  }
    

    return (
        <React.Fragment>
            <Grid padding="16px">
        <Text size="32px" bold>
          SIGNUP PAGE
        </Text>

        <Grid padding="16px 0px">
          <Input
            label="ID"
            placeholder="Please enter your desired ID."
            _onChange={(e) => {
              // console.log("!!");
              setUserName(e.target.value);
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="NICKNAME"
            placeholder="Please enter your desired NICKNAME."
            _onChange={
              // console.log("!!");
              nickName
              }
          />{userNNError && <Text color = "red" size = "20px" bold>NICKNAME must be at least 3 characters and contains letters and numbers.</Text>}
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="PW"
            placeholder="Please enter your desired PW."
            _onChange={
              // console.log("!!");
              passWord
            }
          />{userPWError && <Text color = "red" size = "20px" bold>PW must be at least 4 characters and contains letters and numbers. PW must not match the NICKNAME.</Text>}
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="Confirm PW"
            placeholder="Please re-enter your PW."
            _onChange={
              // console.log("!!");
              confirm
            }
          />{confirmPWError && <Text color = "red" size = "20px" bold>Those passwords didn't match.</Text>}
        </Grid>

        <Button text="SIGNUP" _onClick={onSubmit}></Button>
      </Grid>
        </React.Fragment>
    )
}
export default Signup;