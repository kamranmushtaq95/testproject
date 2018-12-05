const Title = (state = '', action) => {
    console.log("Title reducer", action);

    switch (action.type) {
        case "SET_TITLE":
            return action.title;
            break;
        default:
            return state;
    }
}

export default Title;

