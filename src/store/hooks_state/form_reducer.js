
export const initialState = {
    input_change:'nothing',
    input_submit:'nothing'
}

export const InputReducer = (state = initialState, { type, input }) => {
    switch (type) {

        case "INPUT_CHANGE":
            return {
                ...state,
                input_change: input,
                flag:'algo'
            }
        case "INPUT_SUBMIT":
            return {
                ...state,
                input_submit: input
            }
        default:
            return state
    }
}
