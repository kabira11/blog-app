import { createStore } from "redux";

const initstate = {
    todos : [],
    posts : []
}

//state is state of store.
function myreducer(state = initstate , action){

}

const store = createStore(myreducer)

const todosAction = {type : "ADD_TODO" , todo : "Buying Milk"}

//we need to dispatch the action
store.dispatch(todosAction);