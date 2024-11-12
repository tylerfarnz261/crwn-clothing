import { createContext, useEffect, useReducer  } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
import { createAction } from "../utils/reducer/reducer.utils";

//  Actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

const userActionTypes = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer = (state, action) => {
    const { type, payload } = action;


    switch (type){
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: payload
            }
        default:
            throw new Error('Invalid action type');
    }
}

export const UserProvider = ({children}) =>{
    const [{ currentUser }, dispatch] = useReducer(userReducer, {
        currentUser: null
    });

    const setCurrentUser = (user) => {
        dispatch(createAction(userActionTypes.SET_CURRENT_USER, user));
    }
    const value = {
        currentUser, setCurrentUser
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if(user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });

        return unsubscribe;
    }, [])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}