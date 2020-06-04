function manageEvents(state = {
    events: []
}, action) {
    switch (action.type) {
        case 'RENDER_EVENTS':
            return {...state,
            events: action.eventData
        }
        default:
            return state;
    }
}

export default manageEvents