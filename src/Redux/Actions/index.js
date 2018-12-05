const addNames = (names) => {
    console.log("Action names");
    return {type: "ADD_NAMES", names}
};
const setTitle = (title) => {
    console.log("Action title");
    return {type: "SET_TITLE", title}
};

export {
    addNames,
    setTitle
}
