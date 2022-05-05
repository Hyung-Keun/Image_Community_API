//1. 미들웨어
//2. 서버통신
//3. createAction
//4. 리듀서
//5. 상태변화되고 컴포넌트에서 변한 상태를 보고있을 때 렌더링이 된다.

//import pakages
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

//import components
import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";
import instance from "../../services/instance";


//actions
const TOKEN_CHECK = "TOKEN_CHECK"
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SIGN_UP = "SIGN_UP";

//action creators -> create actions (payload 생성)
const logIn = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const signUp = createAction(SIGN_UP, (user) => ({ user }));
const tokenCheck = createAction(TOKEN_CHECK, (username) => ({ username }));

//middleware actions
const signupDB = (db) => {
  return function (dispatch, getState, {history}) {
      instance
          .post("/api/user/register", db) // 3번째 인자는 토큰?
          .then(function (response) {
            console.log(response)
            dispatch(signUp(db))
            alert("Signup, Success! We load to Login page automatically.")
            history.push('/login')
          })
          .catch(function (error) {
              console.log(error.response);
              alert("Fail! Please check again.")
          });
  };
};

const loginAction = (db) => {
  return function (dispatch, getState, {history}){
    console.log(history);
    instance
          .post("/api/user/login", db) 
          .then(function (response) {
            console.log(response)
            console.log(response.headers.authorization)
            const userToken = {...db, token: response.headers.authorization}
            dispatch(logIn(userToken))
            alert("Login, Success!")
            history.push('/')
          })
          .catch(function (error) {
              console.log(error.response);
              // alert("Fail! Please check again.")
          });
  }
}

const logoutAction = (db) => {
  return function (dispatch, getState, {history}){
    console.log(history);
    instance
          .post("/api/user/logout", db)
          .then(function (response) {
            console.log(response.headers.authorization)
            const userToken = {...db, token: response.headers.authorization}
            dispatch(logOut(userToken))
            deleteCookie("username")
            // alert("Signup, Success! We load to Login page automatically.")
            history.push('/login')
            
            
          })
          .catch(function (error) {
              console.log(error.response);
              // alert("Fail! Please check again.")
          });
  }
}

const tokenAction = () => {
  return function (dispatch, getState, {history}){
    console.log(history);

    const username = getCookie("username")
    dispatch(tokenCheck(username))
    history.push('/')
  }
}


//initialState
const initialState = {
    user: null,
    is_login: false,
  }; 

//Reducer with immer
export default handleActions(
    {
      [LOG_IN]: (state, action) =>
        produce(state, (draft) => {
          setCookie("token", action.payload.user.token);
          setCookie("username", action.payload.user.username);
          draft.user = action.payload.user;
          draft.is_login = true;
        }),
      [LOG_OUT]: (state, action) =>
        produce(state, (draft) => {
          deleteCookie("token");
          draft.user = null;
          draft.is_login = false;
        }),
      [GET_USER]: (state, action) => produce(state, (draft) => {}),

      [SIGN_UP]: (state, action) =>
        produce(state, (draft) => {
          setCookie("is_login", "success");
          draft.user = action.payload.user;
          draft.is_login = true;
        }),

      [TOKEN_CHECK]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.username
        console.log(action.payload.username);
        if(action.payload.username){
          draft.is_login = true;
        }
        
      }),
    },
    initialState
  );

  //action creators
  const actionCreators = {
    logIn,
    getUser,
    logOut,
    loginAction,
    signupDB,
    logoutAction,
    tokenAction
  };
  
  export { actionCreators, };