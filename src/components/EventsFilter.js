import React, { Component } from 'react';

class EventsFilter extends Component {

    render() {
        return (
            <div>
                <label>Filter By:</label>
                <input type="text" placeholder="prediction label" />
                <input type="text" placeholder="prediction score" />
                <input type="text" placeholder="videostream" />
                <input type="text" placeholder="timestamp" />
            </div>
        )
    }

}

export default EventsFilter