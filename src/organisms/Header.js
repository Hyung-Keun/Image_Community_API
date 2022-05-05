//import pakages
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
//import components
import {Button, Grid, Text} from "../elements/";


const Header = (props) => {

    // const [is_login, setIsLogin] = React.useState(false);
    const is_login = useSelector((state) => state.user.is_login)
    const  dispatch = useDispatch();

    if(is_login){
        return (
            <React.Fragment>
                <Grid is_flex padding="4px 16px">
                    <Grid>
                        <Text margin="0px" size="24px" bold>KEUN'S MAGAZINE</Text>
                    </Grid>
                    <Grid is_flex>
                        <Button margin = "10px" text="LOGOUT" _onClick={() => {
                            console.log("clear")
                            // deleteCookie('is_login')
                            dispatch(userActions.logoutAction({}))

                        }}></Button>
                        <Button margin = "10px" text="MY INFO"></Button>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <Grid is_flex padding="4px 16px">
                <Grid>
                    <Text margin="0px" size="24px" bold>KEUN'S MAGAZINE</Text>
                </Grid>
                <Grid is_flex>
                    <Button margin = "10px" text="Need to LOGIN" ></Button>
                    <Button margin = "10px" text="SIGNUP"></Button>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
Header.defaultProps = {}

export default Header;