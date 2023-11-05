

const initState = () => ({
    value: 0,
})

export const calculatorReducer = (state = initState(), action) => {
    switch (action.type) {
        case 'ADD':
            return { value: state.value + 1 }
        case 'SUBTRACT':
            return { value: state.value - 1 }
        default:
            return state
    }
}