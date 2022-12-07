
export  let defaultState = {
    isErrorDisplayed: false,
    errorDiscription: "Limit Reached !"
};



export const reducer = (state, action) => {
    if(action.type == "limit"){
        return {...state, errorDiscription:"Limit Reached !", isErrorDisplayed:true};
    }
    else if (action.type == "reset"){
        return {...state, isErrorDisplayed:false};
    }
    return state
}