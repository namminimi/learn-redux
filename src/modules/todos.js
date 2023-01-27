//액션 타입 선언
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

//액션 생성 함수 - 객체리턴
let nextId = 1;
export const addTodo = (text) =>({
    type: ADD_TODO,
    todo: {
        id: nextId++, //새 항목 추가하고 nextId값을 1 더해줌
        text: text,
        done: false
    }
})
export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id: id
})
//초기상태 - 초기상태는 배열이어도 되고, 원시타입(숫자, 불리언, 문자열), 객체라도 됩니다.
const initialState = [
    /* {
    id: 1,
    text:"해야할 일",
    done: false
    } */
];
//리듀서
export default function todos(state = initialState, action ) {
    switch(action.type){
        case ADD_TODO:
            return[
                ...state,
                action.todo 
            ]
        case TOGGLE_TODO:
            return state.map(todo => todo.id === action.id ? {
                ...todo, done: !todo.done} : 
                todo
                )
        default:
            return state;            
    }
}
//아이디가 일치하면 done 값을 반전시킴 아니라면 그대로둠