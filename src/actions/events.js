export function fetchEvents() {
    return dispatch => {
        fetch('.../public/event_data.js')
        .then(res => res.json)
        .then(res => {
            dispatch({type: 'RENDER_EVENTS', res})
        })
    }
}