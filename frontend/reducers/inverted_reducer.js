export default (state=true, action) => {
    Object.freeze(state);

    switch(action.type) {
        default:
            return state;
    }
}