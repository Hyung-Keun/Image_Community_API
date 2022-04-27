//import pakages
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {ConnectedRouter} from "connected-react-router";
import {history } from "../redux/configureStore";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

//import components
import Grid from "../elements/Grid";
import PostPage from "../pages/PostListPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import PostWritePage from "../pages/PostWritePage";
import PostDetailPage from "../pages/PostDetailPage";

// import Header from "../organisms/Header";


function App() {
  const dispatch = useDispatch()
  dispatch(userActions.tokenAction());
  return (
    <React.Fragment>
      <Grid>
        <ConnectedRouter history={history}>
          <Route path = "/" exact component = {PostPage}/>
          <Route path = "/login" exact component = {LoginPage}/>
          <Route path = "/signup" exact component = {SignupPage}/>
          <Route path = "/postwrite" exact component = {PostWritePage}/>
          <Route path = "/postdetail" exact component = {PostDetailPage}/>
        </ConnectedRouter>
      </Grid>
    </React.Fragment>
  );
}

export default App;
