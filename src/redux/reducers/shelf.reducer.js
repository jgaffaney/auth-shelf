const shelfReducer = ( state = [], action ) => {
    switch (action.type) {
        case 'SET_SHELF':
            return action.payload;
        case 'ADD_ITEM':
            return action.payload;
        default:
            return state; 
    }
}

export default shelfReducer;