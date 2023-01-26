//한트로젝트에 여러개의 리듀서가 있을 경우
//한 리듀서로 합쳐서 사용
//합쳐진 리듀서를 루트 리듀서
//combineReducers()====> 리듀서를 합쳐줌

import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

const rootReducer = combineReducers({
    counter: counter,
    todos: todos
})
export default rootReducer;