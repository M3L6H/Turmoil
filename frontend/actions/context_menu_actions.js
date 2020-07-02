export const RECEIVE_CONTEXT = "RECEIVE_CONTEXT";

export const receiveContext = (context, name) => ({
    type: RECEIVE_CONTEXT,
    context,
    name
});
