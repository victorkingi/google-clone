export const initialState = {
    term: null,
    data: null
};

export const actionTypes = {
    SET_SEARCH_TERM: "SET_SEARCH_TERM",
    SET_IMAGES: "SET_IMAGES"
}

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case actionTypes.SET_SEARCH_TERM:
            return {
                ...state,
                term: action.term,
            }
        case actionTypes.SET_IMAGES:
            return {
                ...state,
                data: action.data,
            }
        default:
            return state;
    }

}

export default reducer;