//1. 미들웨어
//2. 서버통신
//3. createAction
//4. 리듀서
//5. 상태변화되고 컴포넌트에서 변한 상태를 보고있을 때 렌더링이 된다.

//import pakages
import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";
//import components
import instance from "../../services/instance";

//actions
const SET_POST = "SET_POST"; //목록을 가져와 넣어주는 것.
const ADD_POST = "ADD_POST"; 




//action creators -> create actions (payload making)
const setPost = createAction(SET_POST, (post) => ({post}));
const addPost = createAction(ADD_POST, (post) => ({post}));


//initialstate
const initialState = {
    list: [],
}

//middlewares
const setPostDB = () => {
    return function (dispatch, getState, {history}) {
        instance
            .get("/api/post") // 3번째 인자는 토큰?
            .then(function (response) {
              console.log(response)
              dispatch(setPost(response.data))
            })
            .catch(function (error) {
                console.log(error.response);
            });
    };
  };

  const addPostDB = (post, token) => {
    return function (dispatch, getState, {history}) {
        // try{
        //     const response = await instance.post("/api/post", post, {
        //         headers: {
        //           Authorization: token
        //         },
        //       })
        //       console.log(response)


        // }catch(error){
        //     console.log(error.response)
        // }
        instance
            .post("/api/post", post, {
                headers: {
                  Authorization: token
                },
              }) // 3번째 인자는 토큰?
            .then(function (response) {
              console.log(response) 
              history.push('/')
            })
            .catch(function (error) {
                console.log(error.response);
            });
    };
  };

//Reducers
export default handleActions(
    {
        [SET_POST]: (state, action) => 
            produce(state, (draft) => {
                draft.list = action.payload.post
        }),

      
    },
    initialState
);

//action creators
const actionCreators = {
    setPost,
    addPost,
    setPostDB,
    addPostDB,

}
//export action creators
export {actionCreators}