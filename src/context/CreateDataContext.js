import React, { useReducer } from 'react';

export default (reducer, actions, initialState) => {
    //khởi tạo Context 
    const Context = React.createContext();

    /**
     * 1. Provider : Nơi cung cấp data,method cho component con (children) ĐƯỢC wrap bên trong Provider
     * 2. Consumer : Nơi nhận dữ liệu
     */

    const Provider = ({ children }) => {
        // Create useReducer with reducer and initialState injected outside
        const [state, dispatch] = useReducer(reducer, initialState);

        // Create a boundActiosn object
        const boundActions = {};

        // actions = {addBlogPost,edit}


        for (let key in actions) {
            // For key in trong actions
            //  boundActions : {addBlogPost,deletePost}
            // boundActions["addBlogPost"] = actions["blogPost"](dispatch)
            boundActions[key] = actions[key](dispatch);
            // High order function (HOC)
        }
        return (
            <Context.Provider value={{ state, ...boundActions }}>
                {children}
            </Context.Provider>
        )
    }
    return { Context, Provider }
}