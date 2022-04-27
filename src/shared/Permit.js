//import pakages
import React from "react";
import { useSelector } from "react-redux";

//import components
import {getCookie} from "./Cookie";

const Permit = ({children}) => {

    const is_login = getCookie("token")
    if(is_login){
        return(
            <React.Fragment>
                {children}
            </React.Fragment>
        )
    }
    
    return null
}

export default Permit;