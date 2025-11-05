import { createStore } from "redux"
const initialState = {
    balance: 0,
    fullName: "",
    mobile: null,
};

//5 + "5" 55
//5 + +"5" 10 to convert any value to number we use this method
function accountReducer(state = initialState, action) {

    switch (action.type) {

        case "deposit":

            return { ...state, balance: state.balance + +action.payload }

        case "withdrawal":

            return { ...state, balance: state.balance - +action.payload }
        case "mobileUpdate":

            return { ...state, mobile: action.payload }
        case "nameUpdate":

            return { ...state, fullName: action.payload }
        case "reset":

            return initialState
        default:
            return state

    }


}


const store = createStore(accountReducer);


// store.dispatch({ type: "deposit", payload: 1000 })
// console.log(store.getState())

export default store

