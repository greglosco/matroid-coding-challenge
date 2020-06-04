import data from '../event_data.js'

export function fetchEvents() {
    return dispatch => {
            const eventData = data.mockResponse.events
            dispatch({type: 'RENDER_EVENTS', eventData})
        }
    }
