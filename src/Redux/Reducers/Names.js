const Names = (state = [], action) => {
    console.log("Names reducer", action);

    console.log(state, action);
    switch (action.type) {
        case "ADD_NAMES":
            return action.names;
            break;
        default:
            return state;
    }
}

export default Names;

