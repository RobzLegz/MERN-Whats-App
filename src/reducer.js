export const initialState = {
    user: null,
    roomId: null,
    roomName: null,
    roomIcon:null,
};

export const reducer = (state, action) => {
    switch(action.type){
        case "SET_USER":
            return{
                ...state,
                user: action.user,
            };
        case "ENTER_GROUP":
            return{
                ...state,
                roomId: action.roomId,
                roomName: action.roomName,
                roomIcon: action.roomIcon, 
            };
        default:
            return{
                ...state,
            };
    }
};

export default reducer;