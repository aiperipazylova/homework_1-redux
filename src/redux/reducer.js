const initialState = {
    title: 'old title',
    aboutTitle: '',
    contactTitle: '',
    counterValue: 0
}

export default function reducer(state = initialState, action) {
    if (action.type === 'INCREMENT') {
        return {...state, counterValue: action.payload}
    }
    else if (action.type === 'DECREMENT' && state.counterValue > 0) {
        return {...state, counterValue: action.payload}
    }
    else if (action.type === 'PLUS_TEN') {
        return {...state, counterValue: action.payload}
    }
    else if (action.type === 'RESET') {
        return {...state, counterValue: action.payload}
    }
    
        return state
}










//     if (action.type === 'CHANGE_TITLE') {
//         return {...state, title: 'new title'}
//     }
//     else if (action.type === 'CHANGE_ABOUT_TITLE') {
//         return {...state, aboutTitle: 'Hello Geeks'}
//     }
//     else if (action.type === 'WITH_PARAMS') {
//         return {...state, contactTitle: action.payload}
//     }
//     else if (action.type === 'FROM_INPUT') {
//         return {...state, contactTitle: action.payload}
//     }
//         return state
// }


    