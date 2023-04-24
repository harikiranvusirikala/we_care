// import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case "CoachLogin":
      console.log(action);
      return {
        ...state,
        coachDetails: action.coachDetails,
        isAuthed: action.isAuthed
      }
    default:
      return state;
  }
}

// const login = createReducer(initialState = {}, (builder) =>{
//   builder
//     .addMatcher(
//       (action) => action.type.equals('CoachLogin'),
//       (state, action) => {
//         state[]
//       }
//     )
// })

var rootReducer = combineReducers({
  loginReducer
})

export default rootReducer;