function manageEvents(state = {
    events: []
}, action) {
    switch (action.type) {
        case 'RENDER_EVENTS':
            return {...state,
            events: [action.res]
        }
        default:
            return state;
    }
}

export default manageEvents