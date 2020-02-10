const watchesCart = (state = [], action) => {
    switch (action.type){
        case "ADD_WATCH":
            return [...state, action.watch]
        case "REMOVE_WATCH":
            return state.filter((watch, index) => {
                return index !== action.index
            })
        default:
            return state
    }
}

export default watchesCart;