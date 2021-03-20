import {
    REGISTER_USER,
    EMPLOY
  } from "./action";
  
  export default (state, action)=>  {
    switch (action.type) {
      case REGISTER_USER:
        return {
          ...state,
          ...action.payload,
          user: action.payload,
        };
        case EMPLOY:
            return {
              ...state,
              ...action.payload,
              employee: action.payload,
            };
     
      default:
        return {
          ...state,
        };
    }
  };
  